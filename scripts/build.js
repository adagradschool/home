import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const rootDir = process.cwd();
const contentDir = path.join(rootDir, "content", "posts");
const distDir = path.join(rootDir, "dist");
const assetsDir = path.join(distDir, "assets");
const templatesDir = path.join(rootDir, "templates");
const srcDir = path.join(rootDir, "src");

const baseTemplate = fs.readFileSync(path.join(templatesDir, "base.html"), "utf8");
const indexTemplate = fs.readFileSync(path.join(templatesDir, "index.html"), "utf8");
const postTemplate = fs.readFileSync(path.join(templatesDir, "post.html"), "utf8");
const postsTemplate = fs.readFileSync(path.join(templatesDir, "posts.html"), "utf8");
const projectsTemplate = fs.readFileSync(path.join(templatesDir, "projects.html"), "utf8");

const formatDate = (value) => {
  if (!value) return "";
  const date = typeof value === "string" ? new Date(value) : value;
  if (Number.isNaN(date.getTime())) return "";
  return date.toISOString().slice(0, 10);
};

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const ensureDir = (dir) => {
  fs.mkdirSync(dir, { recursive: true });
};

const stripMarkdown = (value) =>
  value
    .replace(/`{1,3}[^`]*`{1,3}/g, "")
    .replace(/\[(.*?)\]\([^)]*\)/g, "$1")
    .replace(/[#>*_~>-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const readPosts = () => {
  if (!fs.existsSync(contentDir)) return [];
  const files = fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".md"));

  return files.map((file) => {
    const filePath = path.join(contentDir, file);
    const raw = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(raw);
    const slug = data.slug ? slugify(String(data.slug)) : slugify(file.replace(/\.md$/, ""));
    const titleMatch = content.match(/^#\s+(.*)/m);
    const title = data.title || (titleMatch ? titleMatch[1].trim() : slug);
    const date = formatDate(data.date || fs.statSync(filePath).mtime);
    const description = data.description || stripMarkdown(content).slice(0, 160);

    return {
      slug,
      title,
      date,
      description,
      content,
      file,
    };
  });
};

const renderTemplate = (template, data) =>
  template.replace(/\{\{(\w+)\}\}/g, (_, key) => (key in data ? data[key] : ""));

const build = () => {
  const posts = readPosts().sort((a, b) => (a.date < b.date ? 1 : -1));

  fs.rmSync(distDir, { recursive: true, force: true });
  ensureDir(assetsDir);

  fs.copyFileSync(path.join(srcDir, "styles.css"), path.join(assetsDir, "styles.css"));
  fs.copyFileSync(path.join(srcDir, "app.js"), path.join(assetsDir, "app.js"));

  const postsJson = JSON.stringify(
    posts.map(({ slug, title, date, description }) => ({
      slug,
      title,
      date,
      description,
    }))
  );

  const postsList = posts
    .map(
      (post) =>
        `<li><a href="/posts/${post.slug}/">${post.title}</a><span class="post-meta">${post.date}</span></li>`
    )
    .join("\n");

  const indexContent = renderTemplate(indexTemplate, {});

  const indexHtml = renderTemplate(baseTemplate, {
    title: "Ada // future-retro",
    description: "A future-retro home terminal for apps, posts, and experiments.",
    pageClass: "page-home",
    content: indexContent,
    postsJson,
  });

  ensureDir(distDir);
  fs.writeFileSync(path.join(distDir, "index.html"), indexHtml);

  const postsContent = renderTemplate(postsTemplate, {
    postsList,
  });

  const postsHtml = renderTemplate(baseTemplate, {
    title: "Posts // Ada",
    description: "Blog posts and logs.",
    pageClass: "page-posts",
    content: postsContent,
    postsJson,
  });

  const postsDir = path.join(distDir, "posts");
  ensureDir(postsDir);
  fs.writeFileSync(path.join(postsDir, "index.html"), postsHtml);

  const projectsContent = renderTemplate(projectsTemplate, {});

  const projectsHtml = renderTemplate(baseTemplate, {
    title: "Projects // Ada",
    description: "Apps and experiments.",
    pageClass: "page-projects",
    content: projectsContent,
    postsJson,
  });

  const projectsDir = path.join(distDir, "projects");
  ensureDir(projectsDir);
  fs.writeFileSync(path.join(projectsDir, "index.html"), projectsHtml);

  posts.forEach((post) => {
    const postHtml = marked.parse(post.content);
    const postContent = renderTemplate(postTemplate, {
      postTitle: post.title,
      postDate: post.date,
      postBody: postHtml,
      postDescription: post.description,
    });

    const pageHtml = renderTemplate(baseTemplate, {
      title: `${post.title} // Ada`,
      description: post.description,
      pageClass: "page-post",
      content: postContent,
      postsJson,
    });

    const postDir = path.join(distDir, "posts", post.slug);
    ensureDir(postDir);
    fs.writeFileSync(path.join(postDir, "index.html"), pageHtml);
  });

  const notFound = renderTemplate(baseTemplate, {
    title: "404 // Ada",
    description: "Not found.",
    pageClass: "page-404",
    content: `<section class="panel"><h1>Signal lost.</h1><p>The node you requested does not exist.</p><a class="link" href="/">Return to base</a></section>`,
    postsJson,
  });

  fs.writeFileSync(path.join(distDir, "404.html"), notFound);
};

build();

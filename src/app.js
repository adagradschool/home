const posts = Array.isArray(window.__POSTS__) ? window.__POSTS__ : [];

const form = document.querySelector("#terminal-form");
const input = document.querySelector("#terminal-input");
const log = document.querySelector("#terminal-log");

const printLine = (text, className = "") => {
  if (!log) return;
  const line = document.createElement("div");
  line.className = `terminal-line ${className}`.trim();
  line.textContent = text;
  log.appendChild(line);
  log.scrollTop = log.scrollHeight;
};

const listPosts = (items) => {
  if (!items.length) {
    printLine("No posts available.");
    return;
  }
  items.forEach((post) => {
    printLine(`${post.slug} :: ${post.title}`);
  });
};

const runCommand = (raw) => {
  const command = raw.trim();
  if (!command) return;

  printLine(`$ ${command}`, "accent");

  const [base, ...rest] = command.split(" ");
  const arg = rest.join(" ").trim();

  switch (base.toLowerCase()) {
    case "help":
      printLine("help | ada <query> | ls | open <slug> | search <term> | syntax | about | clear");
      break;
    case "ada": {
      if (!arg) {
        printLine("Ada online. Ask me about posts, projects, or ideas.");
        break;
      }
      const term = arg.toLowerCase();
      const matches = posts.filter((post) =>
        `${post.title} ${post.description}`.toLowerCase().includes(term)
      );
      if (!matches.length) {
        printLine("No related posts yet. Try another query.");
      } else {
        printLine("Relevant posts:");
        listPosts(matches);
      }
      break;
    }
    case "syntax":
      printLine("Syntax mode: pseudo-shell. Try ls, open <slug>, search <term>.");
      break;
    case "ls":
    case "posts":
      listPosts(posts);
      break;
    case "open":
    case "read": {
      const match = posts.find((post) => post.slug === arg);
      if (!match) {
        printLine(`Unknown slug: ${arg || "(none)"}`);
      } else {
        window.location.href = `/posts/${match.slug}/`;
      }
      break;
    }
    case "search": {
      if (!arg) {
        printLine("Provide a term to search.");
        break;
      }
      const term = arg.toLowerCase();
      const results = posts.filter((post) =>
        `${post.title} ${post.description}`.toLowerCase().includes(term)
      );
      if (!results.length) {
        printLine("No matches.");
      } else {
        listPosts(results);
      }
      break;
    }
    case "about":
      printLine("Minimal, markdown-first, future-retro.");
      break;
    case "clear":
      if (log) log.innerHTML = "";
      break;
    default:
      printLine(`Command not found: ${base}. Type help.`);
  }
};

if (form && input) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    runCommand(input.value);
    input.value = "";
  });

  input.focus();
}

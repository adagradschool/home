import http from "http";
import fs from "fs";
import path from "path";
import url from "url";
import { execSync } from "child_process";
import chokidar from "chokidar";

const rootDir = process.cwd();
const distDir = path.join(rootDir, "dist");

const build = () => {
  execSync("node scripts/build.js", { stdio: "inherit" });
};

const contentTypes = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
};

build();

const clients = new Set();

const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url).pathname || "/";
  if (reqUrl === "/__reload") {
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    });
    res.write("retry: 500\n\n");
    clients.add(res);
    req.on("close", () => clients.delete(res));
    return;
  }
  let filePath = path.join(distDir, reqUrl);

  if (reqUrl.endsWith("/")) {
    filePath = path.join(filePath, "index.html");
  }

  if (!fs.existsSync(filePath)) {
    const notFound = path.join(distDir, "404.html");
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(fs.readFileSync(notFound));
    return;
  }

  const ext = path.extname(filePath);
  res.writeHead(200, { "Content-Type": contentTypes[ext] || "application/octet-stream" });
  res.end(fs.readFileSync(filePath));
});

const port = 5173;
server.listen(port, () => {
  console.log(`Dev server running on http://localhost:${port}`);
});

const triggerReload = () => {
  for (const client of clients) {
    client.write("data: reload\n\n");
  }
};

const watcher = chokidar.watch(
  ["content", "templates", "src", "scripts/build.js"],
  { ignoreInitial: true }
);

watcher.on("all", () => {
  try {
    build();
    triggerReload();
  } catch (error) {
    console.error(error);
  }
});

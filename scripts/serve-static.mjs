import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, resolve, sep } from "node:path";
import process from "node:process";

const outputRoot = resolve(process.cwd(), "out");
const port = Number(process.env.PORT ?? 3000);
const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webmanifest": "application/manifest+json",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".xml": "application/xml; charset=utf-8",
};

const server = createServer(async (request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" });
    response.end();
    return;
  }

  let pathname;
  try {
    pathname = decodeURIComponent(
      new URL(request.url ?? "/", "http://127.0.0.1").pathname,
    );
  } catch {
    response.writeHead(400);
    response.end("Bad request");
    return;
  }

  let filePath = resolve(outputRoot, `.${pathname}`);
  if (filePath !== outputRoot && !filePath.startsWith(`${outputRoot}${sep}`)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  let statusCode = 200;
  try {
    let fileInfo = await stat(filePath);
    if (fileInfo.isDirectory()) {
      if (!pathname.endsWith("/")) {
        response.writeHead(308, {
          Location: `${pathname}/${new URL(request.url ?? "/", "http://127.0.0.1").search}`,
        });
        response.end();
        return;
      }
      filePath = join(filePath, "index.html");
      fileInfo = await stat(filePath);
    }
    if (!fileInfo.isFile()) throw new Error("Not a file");
  } catch {
    filePath = join(outputRoot, "404.html");
    statusCode = 404;
    try {
      await stat(filePath);
    } catch {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Not found");
      return;
    }
  }

  response.writeHead(statusCode, {
    "Cache-Control": "no-store",
    "Content-Type": contentTypes[extname(filePath)] ?? "application/octet-stream",
    "X-Content-Type-Options": "nosniff",
  });

  if (request.method === "HEAD") {
    response.end();
    return;
  }

  createReadStream(filePath).pipe(response);
});

server.listen(port, "127.0.0.1");

const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require("path");

http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname;
    let ext = path.extname(pathname);
    let data = null;
    let targetPath = null;
    switch (ext) {
        case '.js':
            res.setHeader('Content-Type', 'application/javascript;charset=utf-8');
            break;
        case '.css':
            res.setHeader('Content-Type', 'text/css;charset=utf-8');
            break;
        case '.html':
            res.setHeader('Content-Type', 'text/html;charset=utf-8');
        default:
            break;
    }
    // 重置默认路径
    if (pathname === '/') {
        pathname = '/index.html'
    }
    targetPath = `.${pathname}`;
    if (fs.existsSync(targetPath)) {
        data = fs.readFileSync(targetPath);
        res.statusCode = 200;
        res.end(data);
    }
}).listen(3000);
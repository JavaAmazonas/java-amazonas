const express = require("express");
const fs = require("fs");
const http = require("http");
//const https = require('https');
const path = require("path");

///////////

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + "/dist/java-amazonas/browser/"));

app.get("/*", (req, res) => res.sendFile(path.join(__dirname)));

const server = http.createServer(app);
//const server = https.createServer({
//                    key: fs.readFileSync('/etc/letsencrypt/live/sisweb.trocados.com.br/privkey.pem'),
//                  cert: fs.readFileSync('/etc/letsencrypt/live/sisweb.trocados.com.br/fullchain.pem')
//                }, app).listen(port);

server.listen(port, () => console.log("Funcionando"));

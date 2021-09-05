// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require("fs");
const path = require("path");

export default function handler(req, res) {
    const root = "./";
    const logFuncPath = "scriptTemplates/logger.js";
    const strPath = path.join(root, logFuncPath);
    let functionLog = fs.readFileSync(path.resolve(strPath), "utf-8");

    res.status(200).json({ ok: true, result: functionLog });
}

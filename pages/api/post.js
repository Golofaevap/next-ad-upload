// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require("fs");
export default function handler(req, res) {
    let functionLog = fs.readFileSync("./scriptTemplates/logger.js", "utf-8");

    res.status(200).json({ ok: true, result: functionLog });
}

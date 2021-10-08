// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// const fs = require("fs");

// const path = require("path");
const { log_ } = require("../../scriptTemplates/service.js");
import { createSearchCampaign } from "../../scriptTemplates/campaigns.js";
import { getOpts_777 } from "../../scriptTemplates/opts.js";

const offersList = [{ id: 777, name: "test" }];

export default function handler(req, res) {
    const { accountId, offerId } = req.body;
    console.log(accountId, offerId);
    // if (!accountId) return res.redirect("/");
    // if (offerId) return res.status(200).json({ ok: true, result: log_.toString() + "\nlog_('test function 777');" });
    // const offer = offersList.find((a) => a.id == offerId);
    // if (!offer) return res.status(200).json({ ok: true, result: log_.toString() + "\nlog_('test function 778');" });


    let result = "\n";
    result += getOpts_777.toString();
    result += "\n" + "var opts = getOpts_777(accountId)" + "\n";
    result += createSearchCampaign.toString();
    result += "\n" + "createSearchCampaign(opts.campaigns)";

    res.status(200).json({ ok: true, result: result });
}

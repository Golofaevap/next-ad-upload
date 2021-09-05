export function createSearchCampaign(campaigns) {
    // *******************************************************************************************
    // *******************************************************************************************
    // function _createSearchCampaigns(cOpts) {
    try {
        var columns = [
            "Campaign",
            "Budget",
            /*"Networks",*/ "Language",
            "Bid Strategy type",
            "Campaign type",
            "Campaign Status",
        ];

        var upload = AdWordsApp.bulkUploads().newCsvUpload(columns, {
            moneyInMicros: false,
        });
        var shouldApply = false;
        for (var i = 0; i < campaigns.length; i++) {
            var cOpts = campaigns[i];
            if (cOpts.type !== "Search") continue;
            var campaignIterator = AdsApp.campaigns()
                .withCondition('Name = "' + cOpts.name + '"')
                .get();
            if (campaignIterator.hasNext())
                return { ok: false, message: "createSearchCampaign | This name is already taken | " + cOpts.name };
            upload.append({
                Campaign: cOpts.name || "Search-1.",
                Budget: cOpts.budget,
                "Budget type": "Daily",
                //Networks: cOpts.network,
                Language: cOpts.lang,
                "Campaign type": cOpts.type,
                "Ad rotation": "Optimize for clicks",
                "Bid Strategy type": cOpts.strategy,
                "Campaign Status": cOpts.status,
            });
            shouldApply = true;
        }

        // Use upload.apply() to make changes without previewing.
        if (shouldApply) upload.apply();
        return { ok: true };
    } catch (e) {
        log_(e);
        return { ok: false };
    }
}

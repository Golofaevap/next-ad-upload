export function getOpts_777(accountId) {
    var opts = {
        campaigns: [
            { status: "Enabled", name: "Search-1", budget: 10, lang: "", type: "Search", strategy: "Maximize clicks" },
            {
                name: "Display-1",
                budget: 50,
                lang: "ru",
                type: "Display",
                strategy: "Manual CPC",
                status: "Enabled",
            },
        ],

        gOpts: {
            name: "AdGroup-1",
            cpc: 0.9,
            keywords: [
                // { word: keys[0], cpc: 1 },
                // { word: keys[1], cpc: 1 },
                // { word: keys[2], cpc: 1 },
                // { word: keys[3], cpc: 1 },
            ],
        },
        aOpts: {
            // h1: h1,
            // h2: h2,
            // h3: h3,
            // d1: d1,
            // d2: d2,
            // url: inputParameters.url__,
        },
        lSearchOpt: {
            // inc: lSearchOpt,
            exc: [],
        },
        lGDNOpt: {
            // inc: lGDNOpt,
            exc: [],
        },
        tracking: {
            enabled: true,
            template:
                "https://clickserve.dartsearch.net/link/click?{_dssagcrid}&{_dssftfiid}&ds_e_adid={creative}&ds_e_matchtype={ifsearch:search}{ifcontent:content}&ds_url_v=2&ds_dest_url={_uurl}/?url={lpurl}",
            // uurl: inputParameters.trackingUrl__,
        },
        // schedule: getSchedule(inputParameters.samaraId, time.delay, time.duration, time.range),
    };
    return opts;
}

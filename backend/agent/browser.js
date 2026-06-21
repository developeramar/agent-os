const { chromium } = require("playwright");

async function searchGoogle() {

    const browser = await chromium.launch({
        headless: false
    });

    try {

        const page = await browser.newPage();

        // Internshala Jobs Page
        await page.goto("https://internshala.com/jobs");

        await page.waitForTimeout(5000);

        // JSON-LD se jobs nikaalo
        const jobs = await page.evaluate(() => {

            const scripts = document.querySelectorAll(
                'script[type="application/ld+json"]'
            );

            for (const script of scripts) {

                try {

                    const data = JSON.parse(script.innerText);

                    if (
                        data["@type"] === "ItemList" &&
                        data.itemListElement
                    ) {

                        return data.itemListElement.map(job => ({
                            title: job.name,
                            url: job.url
                        }));

                    }

                } catch (err) {}

            }

            return [];

        });

        console.log("========== JOBS ==========");
        console.log(jobs);

        if (jobs.length === 0) {
            return [];
        }

        // First Job Open Karo
        const firstJobUrl = jobs[0].url;

        console.log("Opening Job:");
        console.log(firstJobUrl);

        await page.goto(firstJobUrl);

        await page.waitForTimeout(5000);

        // Job Page Ka Text Read Karo
        const jobText = await page.locator("body").innerText();

        console.log("========== JOB DETAILS ==========");
        console.log(jobText.substring(0, 3000));

        return {
            firstJob: jobs[0],
            preview: jobText.substring(0, 3000)
        };

    } finally {

        await browser.close();

    }
}

module.exports = {
    searchGoogle
};
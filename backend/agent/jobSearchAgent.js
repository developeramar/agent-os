const { chromium } = require("playwright");

async function searchJobs(searchQuery) {

    const browser = await chromium.launch({
        headless: false
    });

    try {

        const page = await browser.newPage();

        await page.goto(
            `https://internshala.com/jobs/keywords-${encodeURIComponent(searchQuery)}`
        );

        await page.waitForTimeout(5000);

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

                } catch (error) {}

            }

            return [];

        });

        return jobs;

    } finally {

        await browser.close();

    }
}

module.exports = {
    searchJobs
};
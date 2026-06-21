const { chromium } = require("playwright");

async function getJobDetails(jobUrl) {

    const browser = await chromium.launch({
        headless: true
    });

    try {

        const page = await browser.newPage();

        await page.goto(jobUrl, {
            waitUntil: "networkidle"
        });

        await page.waitForTimeout(3000);

        const jobText =
        await page.locator("body").innerText();

        return {
            url: jobUrl,
            description:
                jobText.substring(0, 5000)
        };

    } finally {

        await browser.close();

    }

}

module.exports = {
    getJobDetails
};
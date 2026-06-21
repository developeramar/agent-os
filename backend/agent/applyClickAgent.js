const { chromium } = require("playwright");

async function clickApplyButton(jobUrl) {

    const browser = await chromium.launch({
        headless: false
    });

    try {

        const page = await browser.newPage();

        await page.goto(jobUrl);

        await page.waitForTimeout(5000);

        const applyButton = page.locator(
            "text=Apply now"
        ).first();

        await applyButton.click();

        await page.waitForTimeout(5000);

        const currentUrl = page.url();

        const pageText =
        await page.locator("body")
        .innerText();

        return {
            currentUrl,
            preview:
            pageText.substring(0, 1000)
        };

    } finally {

        // Browser open rakhenge
        // abhi close nahi karenge

    }

}

module.exports = {
    clickApplyButton
};
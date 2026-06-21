const { chromium } = require("playwright");

async function inspectLoginPage(url) {

    const browser = await chromium.launch({
        headless: false
    });

    try {

        const page = await browser.newPage();

        await page.goto(url);

        await page.waitForTimeout(5000);

        const inputs = await page.evaluate(() => {

            return Array.from(
                document.querySelectorAll("input")
            ).map(input => ({
                type: input.type,
                name: input.name,
                id: input.id,
                placeholder:
                    input.placeholder
            }));

        });

        return {
            currentUrl: page.url(),
            inputs
        };

    } finally {

        await browser.close();

    }

}

module.exports = {
    inspectLoginPage
};
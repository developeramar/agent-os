const { chromium } = require("playwright");

async function detectApplyButton(jobUrl) {

    const browser = await chromium.launch({
        headless: false
    });

    try {

        const page = await browser.newPage();

        await page.goto(
            jobUrl,
            {
                waitUntil: "domcontentloaded",
                timeout: 60000
            }
        );

        await page.waitForTimeout(5000);

        const buttons =
            await page
                .locator("button")
                .allTextContents();

        const links =
            await page
                .locator("a")
                .allTextContents();

        const allTexts = [
            ...buttons,
            ...links
        ];

        const applyButton =
            allTexts.find(
                text =>
                    text
                        .toLowerCase()
                        .includes("apply")
            );

        return {

            applyFound:
                !!applyButton,

            buttonText:
                applyButton || null

        };

    } finally {

        //await browser.close();

    }

}

async function applyToJob(jobUrl) {

    const browser = await chromium.launch({
        headless: false
    });

    try {

        const page =
            await browser.newPage();

        await page.goto(
            jobUrl,
            {
                waitUntil: "domcontentloaded",
                timeout: 60000
            }
        );

        await page.waitForTimeout(
            5000
        );

        const applyButtons =
            page.getByRole(
                "button",
                {
                    name: /apply now/i
                }
            );

        console.log(
            "Apply Buttons Found:",
            await applyButtons.count()
        );

        const applyButton =
            applyButtons.first();

        const count =
            await applyButton.count();

        if (count === 0) {

            return {
                success: false,
                message:
                    "Apply button not found"
            };

        }

        console.log(
            "Apply Button Found"
        );

        await applyButton.click();

        await page.waitForTimeout(
            5000
        );

        console.log(
            "URL After Click:",
            page.url()
        );

        console.log(
            "Apply Button Clicked"
        );

        console.log(
            "Redirected URL:",
            page.url()
        );

        console.log(
            "Page Title:",
            await page.title()
        );

        await page.waitForTimeout(
            5000
        );

        console.log(
            "Current URL:",
            page.url()
        );

        console.log(
            "Page Title:",
            await page.title()
        );

        await page.screenshot({
            path: "after-click.png"
        });

        return {
            success: true,
            message:
                "Apply button clicked",
            currentUrl:
                page.url(),
            title: await page.title()
        };

    } finally {

        // test ke liye open rakho
        // await browser.close();

    }

}

module.exports = {
    detectApplyButton,
    applyToJob
};
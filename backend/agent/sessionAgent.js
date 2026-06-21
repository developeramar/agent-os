const { chromium } = require("playwright");

async function openLoginPage() {

    const browser =
        await chromium.launch({
            headless: false
        });

    const page =
        await browser.newPage();

    await page.goto(
        "https://internshala.com/registration/student"
    );

    await page.waitForTimeout(
        3000
    );

    const loginLink =
        page.locator(
            "#login-link-container span"
        );

    await loginLink.click();

    await page.waitForTimeout(
        5000
    );

    return {
        currentUrl:
            page.url(),
        title:
            await page.title()
    };

}

async function detectLoginForm() {

    const browser =
        await chromium.launch({
            headless: false
        });

    try {

        const page =
            await browser.newPage();

        await page.goto(
            "https://internshala.com/registration/student"
        );

        await page.waitForTimeout(
            3000
        );

        const loginLink =
            page.locator(
                "#login-link-container span"
            );

        await loginLink.click();

        await page.waitForTimeout(
            3000
        );

        const emailCount =
            await page
                .locator(
                    'input[type="email"]'
                )
                .count();

        const passwordCount =
            await page
                .locator(
                    'input[type="password"]'
                )
                .count();

        const loginButtonCount =
            await page
                .getByRole(
                    "button",
                    {
                        name: /login/i
                    }
                )
                .count();

        console.log(
            "Email Fields:",
            emailCount
        );

        console.log(
            "Password Fields:",
            passwordCount
        );

        console.log(
            "Login Buttons:",
            loginButtonCount
        );

        return {

            emailFound:
                emailCount > 0,

            passwordFound:
                passwordCount > 0,

            loginButtonFound:
                loginButtonCount > 0,

            currentUrl:
                page.url()

        };

    } finally {

        // test ke liye open rakh sakte ho
        // await browser.close();

    }

}

module.exports = {
    openLoginPage,
    detectLoginForm
};
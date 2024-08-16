const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    // Go to the Didimoon video page
    await page.goto('https://www.didimoon.com/c/lV6L3Yye');

    // Start playing the video
    const playButton = await page.$('button[aria-label="Play"]');
    if (playButton) {
        await playButton.click();
    }

    // Wait for the video to finish or a specific duration
    await page.waitForTimeout(60000); // Adjust to the length of the video in milliseconds

    // Optionally, check if the gift was awarded

    // Close the browser
    await browser.close();
})();

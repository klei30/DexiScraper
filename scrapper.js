const puppeteers = require('puppeteer'); // starting by Importing the Puppeteer library (by choise)
(async () => { // After that we invoke a function to use async/await 
  const browser = await puppeteers.launch();   // Then we go by launching a new browser instance
  const page = await browser.newPage(); // we open a new page 
  await page.setViewport({ width: 1920, height: 1080 });   // and Set  the viewport width and height mentioned in the task
  await page.setUserAgent('dexi-engineering');// after that,  the user agent string should be setted
  await page.goto('https://data-qa.dexi.io/js-challenge', { waitUntil: 'networkidle0' });  // with this line , i go to the URL and wait until  network requests are completed
  await page.waitForSelector('.secret-code');  // we should Wait for the element with class '.secret-code' to be rendered 
  await page.screenshot({ path: 'screenshot.png' });// the screenshot is taken and saved inside our project
  console.log("Secret code is: " + await page.$eval('.secret-code', el => el.innerHTML)); // we extract and print the inner HTML of the element
  await browser.close(); // close the brwser after  we print the secret code
})().catch(console.error); //catch any kind of error

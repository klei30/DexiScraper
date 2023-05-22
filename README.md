# DexiScraper
---

# Web Scraping with Puppeteer

This project uses the Puppeteer library to automate web scraping tasks. It is set up to extract a secret code from a webpage, provided certain conditions are met. Specifically, it sets the browser viewport to a specified height and width, and sets the User-Agent to a particular value.

## Installation

Before you begin, make sure you have Node.js installed on your system. If you don't have Node.js installed, you can download it from the [official website](https://nodejs.org/en/download/).

Then, clone the repository and install the dependencies:

```bash
git clone git@github.com:klei30/DexiScraper.git
cd web-scraping-with-puppeteer
npm install
```

## Usage

To run the script, use the following command:

```bash
node scraper.js
```

This will launch a new browser instance, open a new page, set the viewport and user-agent, navigate to the webpage, wait for the secret code to appear, take a screenshot, log the secret code, and close the browser.

## Results

The script will output the secret code to the console and save a screenshot of the page as `screenshot.png`.

---


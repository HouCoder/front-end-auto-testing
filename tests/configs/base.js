// Fundamental Configurations, find the full list at - http://webdriver.io/guide/testrunner/configurationfile.html.
const path = require('path');
const chai = require('chai');
const chromeLocation = require('chrome-location');

// Tips for debug - http://webdriver.io/guide/testrunner/debugging.html.
const isDebug = process.env.DEBUG;
const isHeadless = process.env.HEADLESS;

const chromeArgs = [
    // Use iPhone 6, 6s, 7, 8 's resolution as default.
    // https://www.paintcodeapp.com/news/ultimate-guide-to-iphone-resolutions
    '--window-size=375,667',
];

if (isHeadless) {
    chromeArgs.push('--headless', '--disable-gpu');
}

const base = {
    specs: [
        './tests/pages/*.js',
    ],
    capabilities: [{
        browserName: 'chrome',
        chromeOptions: {
            args: chromeArgs,
            binary: chromeLocation,
        }
    }],
    maxInstances: isDebug ? 1 : 10,
    logLevel: 'command',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: 'http://127.0.0.1:8099',
    waitforTimeout: 10000,
    connectionRetryTimeout: 10000,
    services: ['selenium-standalone'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: isDebug ? 99999999 : 30000,
    },
    before() {
        // Inject chai to global - http://webdriver.io/guide/testrunner/frameworks.html#Using-Mocha
        global.expect = chai.expect;
        chai.Should();
    },
};

module.exports.config = base;

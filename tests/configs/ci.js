const base = require('./base');
const chromeLocation = require('chrome-location');

const ci = Object.assign({}, base, {
    // Put your custom settings in here.
    capabilities: [{
        browserName: 'chrome',
        chromeOptions: {
            args: [
                '--headless',
                '--disable-gpu',
                '--window-size=1280,720',
            ],
            binary: chromeLocation,
        },
    }],
});

exports.config = ci;

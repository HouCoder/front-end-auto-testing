const pageObjects = {
    url: '/',
    selectors: {
        heading: '.qa-heading',
        viewStoryBtn: '.qa-view-story',
        story: '.qa-story',
    }
};

describe('Index page', () => {
    before(() => {
        browser.url(pageObjects.url);
    });

    it('Heading should be visible', () => {
        expect($(pageObjects.selectors.heading).isVisible()).to.be.true;
    });

    it(`Heading should be 'Hello World!'`, () => {
        expect($(pageObjects.selectors.heading).getText()).to.equal('Hello World!');
    });

    it('Should display the story', () => {
        $(pageObjects.selectors.viewStoryBtn).click();

        expect($(pageObjects.selectors.story).isVisible()).to.be.true;
    });
});

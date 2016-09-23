import { NgLogoPage } from './app.po';

describe('ng-logo App', function() {
  let page: NgLogoPage;

  beforeEach(() => {
    page = new NgLogoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

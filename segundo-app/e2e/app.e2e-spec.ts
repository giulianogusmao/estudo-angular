import { SegundoAppPage } from './app.po';

describe('segundo-app App', () => {
  let page: SegundoAppPage;

  beforeEach(() => {
    page = new SegundoAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

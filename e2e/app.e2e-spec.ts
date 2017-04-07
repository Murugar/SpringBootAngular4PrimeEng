import { SpringprimenengPage } from './app.po';

describe('springprimeneng App', () => {
  let page: SpringprimenengPage;

  beforeEach(() => {
    page = new SpringprimenengPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

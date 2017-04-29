import { ASVirtualizadorPage } from './app.po';

describe('asvirtualizador App', () => {
  let page: ASVirtualizadorPage;

  beforeEach(() => {
    page = new ASVirtualizadorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

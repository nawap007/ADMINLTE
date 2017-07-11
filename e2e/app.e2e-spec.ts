import { ADMINLTEPage } from './app.po';

describe('adminlte App', () => {
  let page: ADMINLTEPage;

  beforeEach(() => {
    page = new ADMINLTEPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

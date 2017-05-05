import { VoluntariosPage } from './app.po';

describe('voluntarios App', () => {
  let page: VoluntariosPage;

  beforeEach(() => {
    page = new VoluntariosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { SnmpTesterPage } from './app.po';

describe('snmp-tester App', () => {
  let page: SnmpTesterPage;

  beforeEach(() => {
    page = new SnmpTesterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

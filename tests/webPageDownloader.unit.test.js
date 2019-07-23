const webPage = require('../js/src/webPageDownloader');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');


chai.use(sinonChai);

beforeEach(() => {
  sinon.spy(console, 'log');
});

afterEach(() => {
  console.log.restore();
});

describe('console log testing', () => {
  it('should log hello world', () => {
    webPage.print();
    expect(console.log).to.have.been.calledWith('Hello World');
  });
});

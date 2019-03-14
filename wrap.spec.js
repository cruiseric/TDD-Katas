const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', function() {
  it('returns empty string if empty string was provided', () => {
    expect (wrap("", 10)).to.equal("");
  });

  it('returns a string if a string is provided', () => {
    expect (wrap("Cat in the hat")).to.equal("Cat in the hat");
  });

  it('returns an unbroken string if maxLen is 0 or undefined', () => {
    expect (wrap("oogabooga", 0)).to.equal("oogabooga");
    expect (wrap("oogabooga")).to.equal("oogabooga");
  });

  it('returns a string with a line break after the number of characters provided in second param', () => {
    expect (wrap("A quick brown fox", 14)).to.equal("A quick brown \nfox")
    expect (wrap("A quick brown fox", 11)).to.equal("A quick bro\nwn fox")
  })

  xit('does not break in the middle of a word', ()=> {
    expect (wrap("A quick brown fox", 11 )).to.equal("A quick brown \nfox")
  })

  it('it will not exceed the column limit')
});


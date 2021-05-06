import validate from './zipCodeValidator';

describe('ZipCodeValidator', () => {
  it('returns true if valid zip code input', () => {
    expect(validate('60607')).toBe(true);   
  });

  it('returns false if input length is > 5', () => {
    expect(validate('606070')).toBe(false);   
  });

  it('returns false if input length is < 5', () => {
    expect(validate('6060')).toBe(false);   
  });
});

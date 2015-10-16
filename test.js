import { expect } from 'chai';
import format from './index';

describe('Money formatting utility', function () {
  it('formats numbers like US currency', () => {
    expect(format(9.25)).to.equal('$9.25');
    expect(format(102.23)).to.equal('$102.23');
  });

  it('always rounds down', () => {
    expect(format(234.345)).to.equal('$234.34');
    expect(format(43.2445)).to.equal('$43.24');
  });

  it('handles negative amounts', () => {
    expect(format(-102.456789)).to.equal('-$102.45');
  });

  it('includes cents even for even dollar amounts', () => {
    expect(format(0)).to.equal('$0.00');
    expect(format(452)).to.equal('$452.00');
  });

  it('includes a comma where appropriate', () => {
    expect(format(1234.344)).to.equal('$1,234.34');
    expect(format(3452123.56789)).to.equal('$3,452,123.56');
  });
});

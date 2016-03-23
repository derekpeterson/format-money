const DECIMAL_RE = /^0\./;

export default function (num, includeCents=true) {
  let isNeg = num < 0;
  let val = Math.abs(num);
  let cents = '00';

  if (val > 0) {
    cents = val - Math.floor(val);
    val = Math.floor(val);
    cents = ('' + cents).replace(DECIMAL_RE, '');
    cents = cents.length < 2 ? cents + '00' : cents;
    cents = cents.slice(0, 2);
  }

  // To add commas, split the dollar-number into an array of numbers, reverse
  // the array, add a comma after every third digit, reverse it back, and
  // re-join the digits
  val = ('' + val)
  .split('').reverse()
  .map(function (c, i) {
    return c + (i > 0 && i % 3 === 0 ? ',' : '');
  })
  .reverse().join('');

  if(includeCents) return `${isNeg ? '-' : ''}$${val}.${cents}`;
  else return `${isNeg ? '-' : ''}$${val}`;
};

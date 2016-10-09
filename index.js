export default function money(num, includeCents=true) {
  num = parseFloat(num);
  let isNeg = num < 0;
  let val = Math.abs(num);

  let [dollars, cents] = (val+'').split('.');
  if(!dollars) {
    dollars = '0';
  }
  if(!cents) {
    cents = '00';
  }
  
  cents += '000';
  let third = cents.slice(2,3);
  if(parseInt(third) >= 5) {
    cents = (parseInt(cents.slice(0,2))+1)+''; 
  }
  cents = cents.slice(0, 2);
  

  // To add commas, split the dollar-number into an array of numbers, reverse
  // the array, add a comma after every third digit, reverse it back, and
  // re-join the digits
  dollars = ('' + dollars)
  .split('').reverse()
  .map(function (c, i) {
    return c + (i > 0 && i % 3 === 0 ? ',' : '');
  })
  .reverse().join('');

  if(includeCents) return `${isNeg ? '-' : ''}$${dollars}.${cents}`;
  else return `${isNeg ? '-' : ''}$${dollars}`;
};
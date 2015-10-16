# `format-money`

Just a little package to format a number as (USD) currency.

```javascript
format(15.2345); // $15.23
format(2670987.6423); // $2,670,987.64
```

Right now, it always rounds down when faced with decimals beyond the hundredths.

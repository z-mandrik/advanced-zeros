module.exports = function getZerosCount(number, base) {
  let i = 2, _base = base, n = 1, count = 0;
  let primes = []; uniq_primes = [], counts = [], counts_elems = [],
      elems_min = [];

  while (i < base) {
    if (_base % i == 0) {
      primes.push(i);
      _base = _base / i;
    } else {
      i++;
    }   
  }

  if (primes.length == 0) {
    primes.push(base);
  }

  primes.forEach( (el) => {
      if (uniq_primes.indexOf(el) == -1) {
        uniq_primes.push(el);
      }
  });

  uniq_primes.forEach( (el) => {
      while (Math.pow(el, n) < number) {
          count += Math.floor(number / Math.pow(el, n));
          n++;
        }
      counts.push(count);
      n = 1;
      count = 0;
  });

  uniq_primes.forEach( (i) => {
    primes.forEach ( (el) => {
          if (i == el) {
              count++
          }
      });
      counts_elems.push(count);
      count = 0;
  })

  for (let i = 0; i < counts.length; i++) {
      elems_min.push(counts[i] / counts_elems[i]);
  }

  let index = elems_min.indexOf(Math.min.apply(null, elems_min));
  let prime = uniq_primes[index];
  let elem = counts[index];
  primes.forEach( (el) => {
    if (prime == el) {
        count++;
    }
  });
  return Math.floor(elem / count);
}
function makeCounter(accum = 0) {
  const statisctics = {
    increase: 0,
    decrease: 0,
    value: 0,
    getStatistic: 0,
  };
  return {
    increase(num) {
      statisctics.increase++;
      return (accum += num);
    },
    decrease(num) {
      statisctics.decrease++;
      return (accum -= num);
    },
    value() {
      statisctics.value++;
      return accum;
    },
    getStatistics() {
      statisctics.getStatistic++;
      return statisctics;
    },
    clearCounter() {
      return (accum = 0);
    },
    clearStatistics() {
      for (const key in statisctics) {
        statisctics[key] = 0;
      }
      return statisctics;
    },
    clearAll() {
      this.clearCounter();
      this.clearStatistic();
      return { accum, statisctics };
    },
  };
}

let result = makeCounter();

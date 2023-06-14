export const uniqBy = (arr: Array<any>, key: string) => {
  return Object.values(
    [...arr].reverse().reduce((m, i) => {
      m[key.split('.').reduce((a, p) => a?.[p], i)] = i;
      return m;
    }, {})
  );
};

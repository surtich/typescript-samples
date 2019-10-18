export const promiseMap = <T, R>(
  f: (x: T) => Promise<R>,
  xs: T[]
): Promise<R[]> =>
  xs.reduce(
    (pys, x) => f(x).then(y => pys.then(ys => [...ys, y])),
    Promise.resolve([] as R[])
  );

export const promiseInc = (x: number) => Promise.resolve(x + 1);

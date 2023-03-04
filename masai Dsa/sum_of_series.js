// let sum = 0;
// let sum = (N = 1 + (N - 1) + x * x);
// console.log(sum);
// let N = 3
// let X=2
const sum_of_series = (N, X) => {
  let sum = 0;

  if (N <= 0 || X <= 0) {
    console.log(-1);
  } else {
    for (let i = 0; i < N; i++) {
      sum += i ** X;
    }
  }
  console.log(sum);
};
sum_of_series(3,2);

//
// 2 test cases
// 5 7
// 1 2 3 4 5  if (arr1  of sum = k then print possible else print impossible )
// 5 12
// 1 2 3 4 5
// let arr = [1, 2, 3, 4, 5];
// gcd ,graf,
// const vacine_of_corona = (arr, N, K) => {

// const vacine_of_corona = (Arr, N, K) => {
//   let left = 0;
//   let right = N - 1;
//   let flag = false;

// };
// let arr = [1, 2, 3, 4, 5];
const Mix_Two_Componant = (arr, K) => {
  let left = 0;
  let right = arr.length - 1;
  let flag = false;
  while (left < right) {
    if (arr[left] + arr[right] == K) {
      flag = true;
      break;
    } else if (arr[left] + arr[right] > K) {
      left--
    } else {
      left++
    }
  }
  if (flag) {
    console.log("Possible");
  } else {
    console.log("impossible");
    
  }
};
Mix_Two_Componant([1,2,3,4,5,6,7],11)
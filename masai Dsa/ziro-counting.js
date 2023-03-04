// let arr = ; // have to count ziro  => how many 1s is there and 2s

// console.log(arr.length);
let count_digit = (arr) => {
  let ziro = 0;
  let one = 0;
  let bag = 0;
  let two = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === 0) {
      ziro++;
    } else if (arr[i] === 1) {
      one++;
    } else if (arr[i] === 2) {
      two++;
    } else {
      bag = 0;
    }
  }

  console.log(ziro, one, two);
}
count_digit([1,1,1,1,1,1,1,1,1,0,0,0,2,22])
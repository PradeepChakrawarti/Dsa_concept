const vacine_of_corona = (arr, K) => {
  let left = 0;                        // Initialize left pointer to the first element of the array
  let right = arr.length - 1;          // Initialize right pointer to the last element of the array

  // let K = 0;
  let flag = false;
  while (left < right) {
    if (arr[left] + arr[right] == K) {
      flag = true;
    //Exit to the loop when my condition is true
     
    } else if (arr[left] + arr[right] > K) {
        right--;
        // If my K value is greater then given value that is K then right boy will to the left side to find the value
    } else {
      left++;
    }   // When all condition is falls then only run else condition that is increament form
  }
  if (flag) {
    console.log("possible");
  } else {
    console.log("Impossible");
  }
};
vacine_of_corona([1, 2, 3, 4, 5, 6, 6], 30);



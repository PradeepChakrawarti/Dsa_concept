for (let i = 0; i < 5; i++) {
  let bag = ""
  for (let j = 0; j < 5; j++){
    if (i === 2 || j === 0) {
      bag+=" "
    } else if (i === j || j == 3) {
      bag+=" *"
    }
    
  }
  console.log(bag)
}
// for (let i = 0; i < 5; i++) {
//   let row = "";
//   for (let j = 0; j < 5; j++) {
//     if (j === 0 || j === 4) {
//       row += "*";
//     } else if (i === j) {
//       row += "*";
//     } else if (i === 0 && j === 1 - i) {
//       row += "*";
//     } else if (i === 4 && j === 4 - i) {
//       row += "*";
//     } else {
//       row += " ";
//     }
//   }
//   console.log(row);
// }
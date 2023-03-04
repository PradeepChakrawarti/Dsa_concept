let str="madam"
let reverse = (str) => {
    let bag = ""
    for (let i = str.length - 1; i >= 0; i--){
        bag+=str[i]
    }
    return bag
}
let bag2 = reverse(str);

if (str == bag2) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
    
}
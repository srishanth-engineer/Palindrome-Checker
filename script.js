let btn = document.querySelector("#check-btn");

const modifyInput = (str) => {
  return str.replace(/[^a-zA-Z0-9]/g, "");
};


const reverseInput = (str) => {
  return str.split("").reverse().join("");
};


btn.onclick = () => {
  let input = document.querySelector("#text-input").value;
  let inputLength = input.length;
  let result = document.querySelector("#result");
  if (inputLength === 0) {
    alert("Please input a value");
  } else if (inputLength === 1) {
    result.innerText = input + " is a palindrome";
  } else {
    let inp = modifyInput(input).toLowerCase();
    // console.log(input);
    // console.log(inp);
    let reversedInp = reverseInput(inp);
    // console.log(reversedInp);
    if (inp === reversedInp) {
      result.innerText = input + " is a palindrome";
    } else {
      result.innerText = input + " is not a palindrome";
    }
  }
};

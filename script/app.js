let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

let userForm = document.getElementsByTagName("form")[0]; // invalid variable name. userForm not userform (camelCase)

// const intrednumber = document.getElementsByName('number')[0] this line should be deleted. you don't need to select input

userForm.addEventListener("submit", (e) => {
  let userNumber = e.target.number.value; // instead of varibale's name, as i said you most write input name.
  switch (true) {
    case userNumber == randomNumber:
      alert("you win");
      break;

    default:
      break;
  }
  e.preventDefault();
});

// up to here, some bugs fixed. do it by yourself

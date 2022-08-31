var password = document.getElementById('user_password');
var username = document.getElementById('name');
var email = document.getElementById('user_email');


var lowerCaseLetters = /[a-z]/g;
var upperCaseLetters = /[A-Z]/g;
var numbers = /[0-9]/g;

let memberData = JSON.parse(localStorage.getItem("member-data")) || [];


var listOfUsers = {
    username:  username.value,
    email : email.value,
    password : password.value
 }


function store(){
    
    if (password.value.length <= 6 && password.value.match(numbers)) {
        alert("Please make sure that you password has more than 8 values and one number")
    }else if((!password.value.match(upperCaseLetters)) && (!password.value.match(lowerCaseLetters))){
        alert('please add 1 uppercase letter and 1 lovercase letter');
    }else{
        
       
         memberData.push(listOfUsers);
         localStorage.setItem("member-data", JSON.stringify(memberData));

        //  localStorage.setItem('listOfUsers', JSON.stringify(listOfUsers));
         alert('Your account has been created');

    }


}

function check(){
   
    var u_email = document.getElementById('users_email');
   var u_pass  = document.getElementById('users_password');

   console.assert("memberData.listOfUsers.email", true);
   if(memberData.listOfUsers.email === u_email.value && memberData.listOfUsers.password === u_pass.value)
        alert("You are logged in, Congrats!!!");

    else
        alert("Error logged in");
}

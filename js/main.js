var signInEmail = document.querySelector(".signinemail ")
var signInPassword = document.querySelector(".signinpassword ")

var signUpName = document.querySelector(".signupname ")
var signupEmail= document.querySelector(".signupemail ")
var signupPassword= document.querySelector(".signuppassword ")


var SignInButton=document.querySelector(".signinbtn ")
var SignUPButton=document.querySelector(".signupbtn ")
var LogOutButton=document.querySelector(".logoutbtn ")














var users = []; 

if (localStorage.getItem("Allusers") != null) {

   users= JSON.parse(localStorage.getItem("Allusers"))
    
  }
  
//sign up first 
  function isEmpty (){
    if(signUpName.value=="" || signupEmail.value == "" || signupPassword.value ==""){
       return false
      }
  else{
      return true
  }
  }
  
function isEmailExsist(){
    
    for (var i=0;i<users.length;i++ ){



if(users[i].email.toLowerCase()==signupEmail.value.toLowerCase())
        return false
    else{
        return true
    }
}





}
function nameValidation( ){
    var nameRegax= /^[a-z]{3,12}$/ig
   return  nameRegax.test(signUpName.value)

}




function signup(){
    if(isEmpty()== false ){
        document.querySelector(".avaliable").innerHTML= "all inputs are required"
        document.querySelector(".avaliable").classList.add("fw-bold")
        document.querySelector(".avaliable").style.color="red"
        return false
    }
    
    var usersData= {
        name: signUpName.value,
        email:signupEmail.value,
        password:signupPassword.value
    }
    if (users.length == 0) {
        users.push(usersData)
        localStorage.setItem('Allusers', JSON.stringify(users))
        document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
        return true}

    if (isEmailExsist()== false){

        document.querySelector(".avaliable").innerHTML= "This email is already reserved"
    document.querySelector(".avaliable").innerHTML= "This email is already reserved"
       document.querySelector(".avaliable").style.color="red"
       return false
    }
  
   else{
    
    if (nameValidation()==false){
       
        alert("Enter a vaild name from 3-12 characters")
        return false
    }
    
    else{
    users.push(usersData)
    document.querySelector(".avaliable").innerHTML= "success"
    localStorage.setItem("Allusers",JSON.stringify(users))
    if ( document.querySelector(".avaliable").innerHTML= "success"){
        document.querySelector(".avaliable").style.color="green"
        document.querySelector(".avaliable").classList.add("fw-bold")
    
    }
}
}

}





// sign in second 


function isSignInEmpty(){

    if(signInEmail.value=="" || signInPassword.value==""){
        return false
    }
    else{
        return true
    }
}


function logingIn(){


if(isSignInEmpty() == false ){
    
    document.querySelector(".incorrect").innerHTML= "all inputs are requird"
    document.querySelector(".incorrect").classList.add("fw-bold")
    document.querySelector(".incorrect").style.color="red"
    return false
}




for (var i =0 ;i<users.length;i++){
    var password =signInPassword.value
    var email =signInEmail.value
    
    if(users[i].email.toLowerCase()==email.toLowerCase() && users[i].password.toLowerCase()==password.toLowerCase()){
        localStorage.setItem("sessionusername",users[i].name)
        location.href = "../Home.html"
        document.querySelector(".incorrect").classList.add("d-none")
        

    }
    else{
        document.querySelector(".incorrect").classList.add("d-block")

        document.querySelector(".incorrect").innerHTML="incorrect email or password"
    document.querySelector(".incorrect").classList.add("fw-bold")

    }



}




}











// Say welcome in home page 








 var username=localStorage.getItem("sessionusername")

 if (username){

    document.querySelector(".userwelcome").innerHTML = " welcome " + username
 }
















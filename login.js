function createUser(){

let u=document.getElementById("newUser").value
let p=document.getElementById("newPass").value
let r=document.getElementById("role").value

let users=JSON.parse(localStorage.getItem("users"))

users[u]={

password:p,
role:r,
coins:0,
xp:0,
level:1,
notes:""

}

localStorage.setItem("users",JSON.stringify(users))

alert("User created")

}

function addNote(){

let u=document.getElementById("noteUser").value
let n=document.getElementById("noteText").value

let users=JSON.parse(localStorage.getItem("users"))

if(users[u]){

users[u].notes=n

localStorage.setItem("users",JSON.stringify(users))

alert("Note added")

}

}
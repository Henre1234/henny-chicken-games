let users = JSON.parse(localStorage.getItem("users"))

if(!users){

users = {

henry:{
password:"hill10",
role:"admin",
coins:1000,
xp:0,
level:1,
notes:"Main Admin"
}

}

localStorage.setItem("users",JSON.stringify(users))

}

function login(){

let u=document.getElementById("user").value
let p=document.getElementById("pass").value

let users=JSON.parse(localStorage.getItem("users"))

if(users[u] && users[u].password==p){

localStorage.setItem("currentUser",u)

if(users[u].role=="admin"){
window.location="admin.html"
}else{
window.location="dashboard.html"
}

}else{

alert("Login failed")

}

}
let current=localStorage.getItem("currentUser")

let users=JSON.parse(localStorage.getItem("users"))

let u=users[current]

document.getElementById("profile").innerHTML=`

Username: ${current}<br>
Coins: ${u.coins}<br>
XP: ${u.xp}<br>
Level: ${u.level}<br>
Notes: ${u.notes}

`
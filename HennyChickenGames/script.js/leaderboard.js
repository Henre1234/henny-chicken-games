let users=JSON.parse(localStorage.getItem("users"))

let list=Object.keys(users)

list.sort((a,b)=>users[b].xp-users[a].xp)

let div=document.getElementById("board")

list.forEach(u=>{

let p=document.createElement("p")

p.innerText=u+" - XP: "+users[u].xp

div.appendChild(p)

})
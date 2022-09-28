container=document.querySelector("#container")
cart =JSON.parse(sessionStorage.getItem("mode"))
let {photo}=cart
let div=document.createElement("div")
let image=document.createElement("img")
image.setAttribute("src",photo)
 div.append(image)
container.append(div)

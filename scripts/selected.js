container=document.querySelector("#container")
cart1 =JSON.parse(sessionStorage.getItem("bank"))
let {pic}=cart1
let div=document.createElement("div")
let image=document.createElement("img")
image.setAttribute("src",pic)
image.style="width:100%;"
 div.append(image)
container.append(div)
let data = JSON.parse(localStorage.getItem("cart")) || [];
document.querySelector("#proceed").addEventListener("click",()=>{
let nam=document.querySelector("#name").value;
let account=document.querySelector("#acount_num").value;
let date=document.querySelector("#date").value;
let signature=document.querySelector("#signature").value;
    if(nam&&account.length==11&&date&&signature){ 
        alert("payment sucessfull !")
        window.location.href="index.html"
    }else if(account.length!=11){
        alert("please enter_valid account_number")     
    }else{
        alert("please fill all feilds !")  
    }
})

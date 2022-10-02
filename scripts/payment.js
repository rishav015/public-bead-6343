container=document.querySelector("#container")
cart =JSON.parse(sessionStorage.getItem("mode"))
let {photo}=cart
let div=document.createElement("div")
let image=document.createElement("img")
image.setAttribute("src",photo)
image.style="width:100%;"
 div.append(image)
container.append(div)
document.querySelector("#proceed").addEventListener("click",()=>{
let cardnum=document.querySelector("#card").value;
let mon =document.querySelector("#month").value;
let Year=document.querySelector("#year").value;
let hold=document.querySelector("#holder").value;
let CVV=document.querySelector("#cvv").value;
    if(cardnum.length==16&&mon&&Year&&hold&&CVV){
        alert("payment sucessfull !")
        window.location.href="index.html"
    }else if(cardnum.length!=16){
        alert("please enter_valid card number !")
    }else{
        alert("please fill all feilds !")
    }
})

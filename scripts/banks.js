let container=document.querySelector("#banks")
let obj1;
bank_image=[
    {
        img:"https://static.zara.net/static/images/payment/payment/banks/axis-bank.svg",
        name:"AXIS BANK",
    },
    {
        img:"https://static.zara.net/static/images/payment/payment/banks/boi.svg",
        name:"BANK OF INDIA"
    },
    {
        img:"https://static.zara.net/static/images/payment/payment/banks/bank-of-maharashtra.svg",
        name:"BANK OF MAHARASHTRA"
    },
    {
        img:"https://static.zara.net/static/images/payment/payment/banks/catholic-syrian-bank.svg",
        name:"CATHOLIC SYRIAN BANK"
    },
    {
        img:"https://static.zara.net/static/images/payment/payment/banks/central-bank-of-india.svg",
        name:"CENTERAL BANK OF INDIA"
    },
    {
        img:"https://static.zara.net/static/images/payment/payment/banks/city-bank.svg",
        name:"CITY UNION BANK",
    },
    {
        img:"https://static.zara.net/static/images/payment/payment/banks/dcb-bank.svg",
        name:"DCB BANK (DEVELOPMENT CREDIT BANK)",
    },
    {
        img:"https://static.zara.net/static/images/payment/payment/banks/federal_bank.svg",
        name:"FEDERAL BANK"
    },
    {
        img:"https://static.zara.net/static/images/payment/payment/banks/hdfc-bank-logo.svg",
        name:"HDFC BANK",
    },
   {
      img:"https://static.zara.net/static/images/payment/payment/banks/icici-bank.svg",
      name:"ICIC BANK",
   },
   {
      img:"https://static.zara.net/static/images/payment/payment/banks/idbi-bank.svg",
      name:"IDBI BANK",
   },
   {
      img:"https://static.zara.net/static/images/payment/payment/banks/indian-bank-logo.svg",
      name:"INDIAN BANK",
   },
   {
    img:"https://static.zara.net/static/images/payment/payment/banks/indian-overseas-bank.svg",
    name:"INDIAN OVERSEAS BANK",
   },
   {
    img:"https://static.zara.net/static/images/payment/payment/banks/jammu-jashmir-bank.svg",
    name:"JAMMU AND KASHMIR BANK",
   },
   {
    img:"https://static.zara.net/static/images/payment/payment/banks/karnataka-bank.svg",
    name:"KARNATAKA BANK",
   },
   {
    img:"https://static.zara.net/static/images/payment/payment/banks/karur-vysya-bank-01.svg",
    name:"KARUR VYSIA BANK",
   },
   {
    img:"https://static.zara.net/static/images/payment/payment/banks/kotak-bank.svg",
    name:"KOTAK BANK",
   },
   {
     img:"https://static.zara.net/static/images/payment/payment/banks/punjab-sind-bank.svg",
     name:"PUNJAB AND SIND BANK",
   },
   {
    img:"https://static.zara.net/static/images/payment/payment/banks/sbi.svg",
    name:"SBI BANK",
   },
   {
    img:"https://static.zara.net/static/images/payment/payment/banks/south-indian-bank.svg",
    name:"SOUTH INDIAN BANK"
   },
   {
    img:"https://static.zara.net/static/images/payment/payment/banks/tmb.svg",
    name:"TAMILNAD MERCANTILE BANK"
   },
   {
    img:"https://static.zara.net/static/images/payment/payment/banks/icbc-out.svg",
    name:"UCO BANK"
   },
   {
    img:"https://static.zara.net/static/images/payment/payment/banks/yes.svg",
    name:"YES BANK"
   }
   
]
bank_image.forEach(({img,name})=>{
let div=document.createElement("div")
div.setAttribute("class","aling")
let image =document.createElement("img")
image.setAttribute("src",img)
div.addEventListener("click",()=>{
    div.style.border="2px solid black"
    obj1={
       pic:img
    }
    sessionStorage.setItem("bank",JSON.stringify(obj1))
})
let h5=document.createElement("h5")
h5.innerText=name;
div.append(image,h5)
container.append(div)
})
document.querySelector("#change").addEventListener("click",()=>{
 if(obj1==undefined){
    alert("please select the bank")
 }  else{
    window.location.href="selected.html"
 } 
})
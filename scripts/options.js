payment=document.querySelector("#payment")
var arr;
image=[{img:"https://static.zara.net/static/images/payment/payment/icon-payment-visa.svg",
        name:"VISA",
       },
       {img:"https://static.zara.net/static/images/payment/payment/icon-payment-mastercard.svg",
       name:"MASTER CARD"
    },
       {img:"https://static.zara.net/static/images/payment/payment/icon-payment-amex_2.svg",
       name:"AMERICAN EXPRESS"
     },

       {img:"https://static.zara.net/static/images/payment/payment/ru-pay.svg",
       name:"RUPAY"
    },

       {img:"https://static.zara.net/static/images/payment/payment/net-banking.svg",
        name:"NETBANKING"
    },
       {img:"https://static.zara.net/static/images/payment/payment/upi.svg",
        name:"UNDEFINED PAYMENT INTERFACE"
    },

   ];
image.forEach(({img,name})=>{
 let div=document.createElement("div")
  let pic=document.createElement("img")
  pic.setAttribute("src",img)
  nam=document.createElement("p")
  nam.setAttribute("class","adjust")
  nam.innerText=name;
  div.addEventListener("click",()=>{
    div.style.border="2px solid black";
    arr={
        photo:img,
    }
    sessionStorage.setItem("mode",JSON.stringify(arr))
});
  div.append(pic,nam)
  payment.append(div)
})
gift=[
    {
    img:"https://static.zara.net/static/images/payment/payment/IcoBank-GiftCard.svg",
     name:"GIFT CARD"
  },
  {
    img:"https://static.zara.net/static/images/payment/payment/co-djpen.svg",
   name:"CASH ON DELIVERY"
  },
 {
    img:"https://static.zara.net/static/images/payment/payment/in.svg",
    name:"IN CARD",
 }
];
let card=document.querySelector("#cards")
gift.forEach(({img,name})=>{
 let div=document.createElement("div")
 let photo=document.createElement("img")
 photo.setAttribute("src",img)
 let peru =document.createElement("h6")
 peru.innerText=name;
 div.setAttribute("class","items")
 div.append(photo,peru)
 card.append(div)
})

let but=document.querySelector("#change")
but.addEventListener("click",()=>{
   if(arr==undefined){
     alert("select the payment method")
   }else{
      window.location.href="payment.html";
   }
   
})
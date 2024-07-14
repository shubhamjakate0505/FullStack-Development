const colors=["green","red","Pink","DodgerBlue","Violet","MediumSeaGreen"];
const btn=document.getElementById("btn")
const color=document.querySelector(".color")
btn.addEventListener("click",function(){
    const randnumber=Math.floor(Math.random()*5);
    document.body.style.backgroundColor=colors[randnumber];
    color.textContent=colors[randnumber];
});

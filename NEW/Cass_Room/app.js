let div=document.querySelector("div");
let ul=document.querySelector("ul");
let lis=document.querySelectorAll("li");

div.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("div Was Clicked")
})

ul.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("ul Was Clicked")
})
for(li of lis){
    li.addEventListener("click",function(event){
        event.stopPropagation();
        console.log("li Was Clicked")
    })
}
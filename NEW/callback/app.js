/* function savebd(data,sucess,failer){
    let interspeed=Math.floor(Math.random()*10)+1
    if(interspeed>4){
        
        // console.log("Data Was save",interspeed)
        sucess();
    }
    else{
        // console.log("Data Was Not Save",interspeed)
        failer();
    }
    
}
savebd("shubham",
()=>{
    console.log("sucess: Data Was save");
    savebd("varsha",()=>{
        console.log("Sucess 2 : Data was Save")
    },()=>{
        console.log("Failer2:  Data was Not Save")
    })
},
()=>{
    console.log("Failer : Data Was Not Save");
}); */
// ------------------------------------Start Here Promices------------------------
function savebd(data){
    return new Promise((resolve, reject) => {
        let interspeed=Math.floor(Math.random()*10)+1;
        if(interspeed>4){
            resolve("Sucess:Data was Saved");
            // console.log("")

        }
        else{
            reject("data Not Saved");
            // console.log("")
        }
    });
    
}
// savebd("shubham")
/* ()=>{
    console.log("sucess: Data Was save");
    savebd("varsha",()=>{
        console.log("Sucess 2 : Data was Save")
    },()=>{
        console.log("Failer2:  Data was Not Save")
    })
},
()=>{
    console.log("Failer : Data Was Not Save");
}); */
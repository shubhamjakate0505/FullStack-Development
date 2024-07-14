let url='https://api.thecatapi.com/v1/breeds'
fetch(url)
.then((res)=>{
    console.log(res);
    return res.json();
})
.then((data)=>{
    console.log(data)
})

.catch((err)=>{
    console.log(err)
});

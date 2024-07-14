
function handlersubmit(event){
    event.preventDefault();
    console.log("form was submitted")
}


export default function form(){
    return (
        <div><form action="">
            <input type="text" placeholder="Write Something Here" />
            <button onClick={handlersubmit}>Submit</button>
            </form></div>
        
    );
}
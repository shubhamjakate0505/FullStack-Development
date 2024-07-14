
function hello(){
    console.log("Hellow World")
}
function printbey(){
    console.log("ok by")
}

export default function Button(){
    return (
    <div>
        <button onClick={hello}>Click Me!</button>
        <p onMouseOver={printbey}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, neque? Rem laudantium, a voluptates molestiae ab officiis quod! Ipsam.</p>
    </div>)
}
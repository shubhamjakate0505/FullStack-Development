class mamal{
    constructor(name){
        this.name=name;
        this.type="kahi tri"
    }
    eat(){
        console.log("i'm eating")
    }
}

class dog extends mamal{
    constructor(name){
        super(name)
    }
    bark(){
        console.log("barking")
    }
}
class cat extends mamal{
    constructor(name){
        super(name);
    }
    talk(){
        console.log("sound:cow.. ")
    }
}
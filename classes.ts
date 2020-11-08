interface UserInterface{
    name: string;
    email: string;
    age: number;
    register();    
}


class User implements UserInterface {
    name: string;
    email: string;
    age: number;

    constructor(name:string, email:string, age:number){
        this.name = name;
        this.email = email;
        this.age = age;

        console.log('User created: ' + this.name);
    }    
    register(){
        console.log(this.email + ' is now registered');
    }
}

class Member extends User{
    id:number;
    constructor(id:number, name:string, email:string, age:number){
        super(name, email, age);
        this.id = id;
    }
    register(){
        super.register();
        console.log("Its id is now " + this.id);
    }
}

let John:User = new Member(32,'John Doe','john@gmail.com',34);

console.log(John.name);
John.register();


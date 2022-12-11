class User {
    firstName:string;
    lastName:string;

    constructor(firstName:string, lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullname ():string {
        return this.firstName + " " + this.lastName;
    }
}
const gokUser = {
    name : {
        "merve":"merve",
        "ogz":"oguz"
    },
    num : "0531",
}
export{gokUser}
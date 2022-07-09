export class UserModel{
    username : string;
    firstName : string;
    lastName : string;
    email : string;
    password : string;
    contactNum : string;

    constructor(username, firstName, lastName, email, password, contactNum){
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email =  email;
        this.password = password;
        this.contactNum = contactNum;
    }
}
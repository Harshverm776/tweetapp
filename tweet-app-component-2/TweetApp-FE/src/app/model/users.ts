export class Users{
firstName!: string;
lastName!: string;
email !:string;
userId !: string;
password !: string;
contactNumber !: string;

constructor(firstName: string,lastName: string,email: string,userId: string,password: string,contactNumber: string)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.userId = userId;
    this.password = password;
    this.contactNumber = contactNumber;
    
}
}
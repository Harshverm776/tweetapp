export class DisplayUserPojo
{
    firstName!: string;
    lastName!: string;
    email !:string;
	userId !: string;
    contactNumber !: string;
    
    constructor(firstName: string,lastName: string,email: string,userId: string,contactNumber: string)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.userId = userId;
    this.contactNumber = contactNumber;
    
}
}
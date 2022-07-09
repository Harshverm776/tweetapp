export class Login
{
    userId!: string;
    password!: string;

    constructor(userId: string,password: string)
    {
        this.userId = userId;
        this.password = password;
    }
}
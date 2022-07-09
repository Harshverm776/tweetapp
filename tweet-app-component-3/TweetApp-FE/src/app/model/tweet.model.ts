import { Comment } from "./comment.model";

export class Tweet{
    tweetId : number;
    username : string;
    tweetText : string;
    firstName : string;
    lastName : string;
    tweetDate : Date
    comments  : Array<Comment>
    likes : Array<string>

    //posting the tweet
    constructor(username, tweetText , firstName , lastName , tweetDate ){
        this.username =  username;
        this.tweetText = tweetText;
        this.firstName = firstName;
        this.lastName = lastName;
        this.tweetDate = tweetDate;
    }
    
    }
    
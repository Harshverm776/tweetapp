import { Like } from "./like";

export class UserTweet{
    tweetId!: string;
    userId!: string;
    time!: string;
    tweetText!: string;
    tags!: string;

    constructor(tweetId: string,userId:string,time:string,tweetText: string,tags: string)
    {
        this.tweetId = tweetId;
        this.userId = userId;
        this.time = time;
        this.tweetText = tweetText;
        this.tags = tags;
    }

    



}
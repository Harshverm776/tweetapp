export class TweetReply{
    tweetId!: string;
    userID!: string;
    replyTime!: string;
    replyText!: string;
    tags!: string;

    constructor(tweetId:string,userID:string,replyTime:string,replyText:string,tags:string)
    {
        this.tweetId = tweetId;
        this.userID = userID;
        this.replyTime = replyTime;
        this.replyText = replyText;
        this.tags = tags;
    }
}
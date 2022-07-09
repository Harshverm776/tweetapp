export class TweetUpdate{
    tweetId : string;
    tweetText : string;
    constructor(tweetId , tweetText){
        this.tweetId = tweetId;
        this.tweetText = tweetText;
    }
}
import { Comment } from "./comment.model";

export class TweetResponse{
    tweetId : string;
    username : string;
    tweetText : string;
    firstName : string;
    lastName : string;
    likesCount : number;
    commentsCount : number;
    likeStatus : boolean;
    comments : Array<Comment>;
}
    
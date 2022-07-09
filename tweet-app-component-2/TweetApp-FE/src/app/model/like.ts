export class Like{
 tweetId!: string;
 likedBy!: string;
 constructor(tweetId: string,likedBy: string)
 {
     this.tweetId = tweetId;
     this.likedBy = likedBy;

 }
}
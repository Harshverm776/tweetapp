package com.tweetapp.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.tweetapp.entity.TweetReply;

public interface ReplyTweetRepo extends MongoRepository<TweetReply, String> {

	@SuppressWarnings("unchecked")
	TweetReply save(TweetReply tweetReply);

	List<TweetReply> findByTweetId(String tweetId);
}

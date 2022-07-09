package com.tweetapp.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.tweetapp.entity.UserTweet;

public interface TweetRepo extends MongoRepository<UserTweet,String>{

	UserTweet findByTweetId(String tweetId);

	List<UserTweet> findByUserId(String userId);

	void deleteByTweetId(String tweetId);

}

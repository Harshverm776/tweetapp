package com.tweetapp.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;


import com.tweetapp.entity.Like;

public interface LikeRepo extends MongoRepository<Like,Integer> {

	@SuppressWarnings("unchecked")
	Like save(Like like);
	List<Like> findByTweetId(String tweetId);

}

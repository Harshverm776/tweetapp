package com.tweetapp.repositories;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import com.tweetapp.entities.Tweet;

@Repository
public class TweetRepository {
	@Autowired
	private DynamoDBMapper mapper;

	public List<Tweet> findAll() {
		return mapper.scan(Tweet.class, new DynamoDBScanExpression());
	}

	public List<Tweet> findByUsername(String username) {
		List<Tweet> results = mapper.scan(Tweet.class, new DynamoDBScanExpression());
		List<Tweet> returnedList = new ArrayList<Tweet>();
		for (int i = 0; i < results.size(); i++) {
			if (results.get(i).getUsername().equals(username)) {
				returnedList.add(results.get(i));
			}
		}
		return returnedList;
	}

	public Tweet insert(Tweet newTweet) {
		mapper.save(newTweet);
		return newTweet;
	}

	public Optional<Tweet> findById(String tweetId) {
		Optional<Tweet> tweet = Optional.of(mapper.load(Tweet.class, tweetId));
		return tweet;
	}

	public Tweet save(Tweet tweet) {
		mapper.save(tweet);
		return tweet;
	}

	public boolean existsById(String tweetId) {
		Tweet checkTweet = mapper.load(Tweet.class, tweetId);
		if (checkTweet != null)
			return true;
		else
			return false;
	}

	public void deleteById(String tweetId) {
		Tweet deleteTweet = mapper.load(Tweet.class, tweetId);
		mapper.delete(deleteTweet);

	}

	public Tweet FindTweetById(String id) {
		List<Tweet> results = mapper.scan(Tweet.class, new DynamoDBScanExpression());
		for (int i = 0; i < results.size(); i++) {
			if (results.get(i).getTweetId().equals(id)) {
				return results.get(i);
			}
		}
		return null;
	}

}

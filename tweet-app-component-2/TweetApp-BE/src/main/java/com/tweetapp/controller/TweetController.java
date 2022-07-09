package com.tweetapp.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.tweetapp.entity.Like;
import com.tweetapp.entity.Login;
import com.tweetapp.entity.TweetReply;
import com.tweetapp.entity.UserTweet;
import com.tweetapp.service.TweetService;

import lombok.extern.slf4j.Slf4j;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@Slf4j
public class TweetController {

	@Autowired
	TweetService tweetService;

	@PostMapping(value = "/api/v1.0/tweets/add")
	public void postTweetReply(@Valid @RequestBody UserTweet userTweet) {
		tweetService.postUserTweet(userTweet);
	}

	@PostMapping("/api/v1.0/tweets/myTweet")
	public List<UserTweet> getUserTweet(@RequestBody Login login) {
		return tweetService.getUserTweet(login.getUserId());
	}

	@GetMapping("/api/v1.0/tweets/all")
	public List<UserTweet> getAllTweets() {
		log.info("message");

		return tweetService.getAllTweet();
	}

	@PostMapping("/api/v1.0/tweets/update")
	public void updateTweet(@RequestBody UserTweet userTweet) {
		tweetService.updateTweet(userTweet);

	}

	@DeleteMapping("/api/v1.0/tweets/delete/{tweetId}")
	public String deleteTweet(@PathVariable String tweetId) {
		tweetService.deleteTweet(tweetId);
		return "Deleted";
	}

	@PostMapping(value = "/api/v1.0/tweets/reply")
	public String postTweetReply(@RequestBody TweetReply tweetReply) {
		String response;
		TweetReply result = tweetService.postTweetReply(tweetReply);
		if (result != null) {
			response = "Details registered successfully";
		} else {
			response = "Details not registered successfully";
		}

		return response;
	}

	@PostMapping("/api/v1.0/tweets/getReply")
	public List<TweetReply> getAllReply(@RequestBody UserTweet usertweet) {
		return tweetService.getAllReply(usertweet.getTweetId());
	}

	@PostMapping(value = "/api/v1.0/tweets/addLike")
	public Like getLikeDetails(@RequestBody Like like) {
		return tweetService.postLike(like);
	}

	@GetMapping("/api/v1.0/tweets/getLikes")
	public List<Like> getAllLikes() {
		return tweetService.getAllLikes();
	}
}

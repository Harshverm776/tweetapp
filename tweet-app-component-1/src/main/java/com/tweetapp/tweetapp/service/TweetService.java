package com.tweetapp.tweetapp.service;

import java.sql.ResultSet;

import com.tweetapp.tweetapp.dao.TweetDao;
import com.tweetapp.tweetapp.model.Tweet;

public class TweetService {
	
	TweetDao tweetDao = new TweetDao();
	
	public boolean createTweet(Tweet tweet) {
		java.sql.Date date = new java.sql.Date(System.currentTimeMillis());
		tweet.setCreated(date);
		tweetDao.createTweet(tweet);
		return true;
	}
	
	public boolean getAllTweets(){
		
		ResultSet rs = tweetDao.getAllTweets();
		try {
			if(rs.next()) {
				
				System.out.println(rs.getDate("created")+" "+rs.getString("tweet"));
			}else {
				System.out.println("No tweets found..");
			}
			while(rs.next()) {
				System.out.println(rs.getDate("created")+" "+rs.getString("tweet"));
			}
		}catch(Exception e) {
			System.out.println("Something went wrong. Please try again ");
		}
		return true;
	}
	
	public boolean getTweetsByUserId(int userId){
		
		ResultSet rs = tweetDao.getTweetsByUserId(userId);
		try {
			if(rs.next()) {
				System.out.println(rs.getDate("created")+" "+rs.getString("tweet"));
			}else {
				System.out.println("No tweets found..");
			}
			while(rs.next()) {
				System.out.println(rs.getDate("created")+" "+rs.getString("tweet"));
			}
		}catch(Exception e) {
			System.out.println("Something went wrong. Please try again");
		}
		return true;
	}
}

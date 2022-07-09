package com.tweetapp.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.tweetapp.entity.DisplayUserPojo;
import com.tweetapp.entity.Users;

public interface UsersDisplayRepo extends MongoRepository<Users,String>{

	DisplayUserPojo findByUserId(String userId);
}

package com.tweetapp.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.tweetapp.entity.Users;

public interface UsersRepo extends MongoRepository<Users,String> {

	Users findByUserId(String userId);
}

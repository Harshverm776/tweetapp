package com.tweetapp.repositories;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import com.tweetapp.entities.UserModel;

@Repository
public class UserRepository {

	@Autowired
	private DynamoDBMapper mapper;

	public UserModel findByUsername(String username) {
		return mapper.load(UserModel.class, username);
	}

	public UserModel save(UserModel user) {
		mapper.save(user);
		return user;
	}

	public List<UserModel> findAll() {
		return mapper.scan(UserModel.class, new DynamoDBScanExpression());
	}

	public List<UserModel> searchByUsername(String username) {
		List<UserModel> results = mapper.scan(UserModel.class, new DynamoDBScanExpression());
		List<UserModel> returnedList = new ArrayList<UserModel>();
		for (int i = 0; i < results.size(); i++) {
			if (results.get(i).getUsername().contains(username)) {
				returnedList.add(results.get(i));
			}
		}
		return returnedList;
	}

}

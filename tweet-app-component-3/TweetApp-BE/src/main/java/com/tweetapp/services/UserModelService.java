package com.tweetapp.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tweetapp.entities.UserModel;
import com.tweetapp.exception.UsernameAlreadyExists;
import com.tweetapp.repositories.UserRepository;

@Service
public class UserModelService {

	@Autowired
	private UserRepository userRepository;

	// find user by username
	public UserModel findByUsername(String username) {
		UserModel userModel = userRepository.findByUsername(username);
		UserModel newUserModel = new UserModel(userModel.getUsername(), userModel.getFirstName(),
				userModel.getLastName(), userModel.getEmail(), userModel.getPassword(), userModel.getContactNum());
		return newUserModel;
	}

	// create new user
	public UserModel createUser(UserModel user) throws UsernameAlreadyExists {
		UserModel foundedUser = userRepository.findByUsername(user.getUsername());
		if (foundedUser != null) {
			throw new UsernameAlreadyExists("username already exists");
		}
		return userRepository.save(user);
	}

	// Method to return a list of all users
	public List<UserModel> getAllUsers() {
		List<UserModel> userModels = (List<UserModel>) userRepository.findAll();
		List<UserModel> newUserModel = userModels.stream().map(user -> {
			return new UserModel(user.getUsername(), user.getFirstName(), user.getLastName(), user.getEmail(), "null",
					"null");
		}).collect(Collectors.toList());
		return newUserModel;
	}

	// Method to change a user's password
	public UserModel changePassword(String username, String newPassword, String contact) throws Exception {
		UserModel userDetails = userRepository.findByUsername(username);
		if (userDetails.getContactNum().equalsIgnoreCase(contact)
				&& userDetails.getUsername().equalsIgnoreCase(username)) {
			userDetails.setPassword(newPassword);
			return userRepository.save(userDetails);
		} else {
			throw new Exception("Unable to change password");
		}
	}

	// Method to search for like users by username
	public List<UserModel> getUsersByUsername(String username) {
		return userRepository.searchByUsername(username);
	}
}

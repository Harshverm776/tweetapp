package com.tweetapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.tweetapp.entity.DisplayUserPojo;
import com.tweetapp.entity.Login;
import com.tweetapp.entity.Users;
import com.tweetapp.exception.UserNotFoundException;
import com.tweetapp.service.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {

	@Autowired
	UserService userService;

	@PostMapping("/api/v1.0/tweets/register")
	public void registerUser(@RequestBody Users user) {
		userService.registerUser(user);
	}

	@GetMapping("/api/v1.0/tweets/users/all")
	public List<DisplayUserPojo> getUsersDetails() {
		return userService.getUserDetails();
	}

	@PostMapping("/api/v1.0/tweets/users/search")
	public DisplayUserPojo getUser(@RequestBody Login login) {
		return userService.getUserDetail(login.getUserId());
	}

	@PutMapping("/updateUser")
	public String updateUser(@RequestBody Users user) {
		userService.updateUser(user);
		return "Done";
	}

	@PostMapping("/api/v1.0/tweets/login")
	public Login loginUser(@RequestBody Login login) {
		Boolean status = userService.checkCredentials(login);
		if (status == true) {
			login.setPassword(null);
		} else {
			login = null;
		}
		return login;
	}

	@PostMapping("api/v1.0/tweets/users/changepassword")
	public Login forgotPassword(@RequestBody Login login) throws UserNotFoundException {
		Users user = userService.findUserById(login.getUserId());
		if (user != null) {
			userService.updateUserPassword(login);
			return login;
		} else {
			login.setPassword(null);
			login.setUserId(null);
			return login;
		}
	}
}

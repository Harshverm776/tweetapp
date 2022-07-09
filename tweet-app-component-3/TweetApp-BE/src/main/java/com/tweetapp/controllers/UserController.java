package com.tweetapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.tweetapp.dto.AuthenticationResponse;
import com.tweetapp.dto.NewPassword;
import com.tweetapp.services.UserModelService;

@CrossOrigin(origins = "*")
@RestController
public class UserController {

	@Autowired
	private UserModelService userModelService;

	// method to update user password
	@PutMapping(value = "/tweets/{username}/forgot")
	public ResponseEntity<?> changePassword(@PathVariable("username") String username,
			@RequestBody NewPassword newPassword) {
		try {
			return new ResponseEntity<>(
					userModelService.changePassword(username, newPassword.getNewPassword(), newPassword.getContact()),
					HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(new AuthenticationResponse("Unable to change password"),
					HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// Method to retrieve all users list
	@GetMapping(value = "/tweets/users/all")
	public ResponseEntity<?> getAllUsers() {
		return new ResponseEntity<>(userModelService.getAllUsers(), HttpStatus.OK);

	}

	// method to search for like users by username
	@GetMapping(value = "/tweets/user/search/{username}")
	public ResponseEntity<?> searchForUsers(@PathVariable String username) {
		return new ResponseEntity<>(userModelService.getUsersByUsername(username), HttpStatus.OK);
	}
}

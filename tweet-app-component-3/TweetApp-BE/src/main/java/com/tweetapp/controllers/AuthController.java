package com.tweetapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.tweetapp.dto.AuthenticationRequest;
import com.tweetapp.dto.AuthenticationResponse;
import com.tweetapp.entities.UserModel;
import com.tweetapp.exception.UsernameAlreadyExists;
import com.tweetapp.repositories.UserRepository;
import com.tweetapp.services.UserModelService;

import io.swagger.annotations.Api;

@CrossOrigin(origins = "*")
@RestController
public class AuthController {

	@Autowired
	private UserModelService userModelService;

	@Autowired
	private UserRepository userRepository;

	@PostMapping("/tweets/register")
	public ResponseEntity<?> subscribeClient(@RequestBody UserModel userModel) {
		try {
			UserModel savedUser = userModelService.createUser(userModel);
			return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
		} catch (UsernameAlreadyExists e) {
			return new ResponseEntity<>(new AuthenticationResponse("Given userId/email already exists"),
					HttpStatus.CONFLICT);
		} catch (Exception e) {
			return new ResponseEntity<>(new AuthenticationResponse("Application has faced an issue"),
					HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@PostMapping("/tweets/login")
	public ResponseEntity<?> authenticateClient(@RequestBody AuthenticationRequest authenticationRequest) {
		String username = authenticationRequest.getUsername();
		String password = authenticationRequest.getPassword();
		UserModel checkUser = userRepository.findByUsername(username);
		if (checkUser.getPassword().equals(password))
			return new ResponseEntity<>(userModelService.findByUsername(username), HttpStatus.OK);
		else
			return new ResponseEntity<>(new AuthenticationResponse("Bad Credentials " + username),
					HttpStatus.UNAUTHORIZED);

	}
}

package com.tweetapp.tweetapp.util;

import java.util.Map;
import java.util.Scanner;

import com.tweetapp.tweetapp.model.Tweet;
import com.tweetapp.tweetapp.model.User;
import com.tweetapp.tweetapp.service.TweetService;
import com.tweetapp.tweetapp.service.UserService;

public class RegisterUtil {

	public String firstName;
	public String lastName;
	public String gender;
	public String dob;
	public String email;
	public String password;
	public int userId;
	public int tweetId;
	public String tweet;

	Scanner scanner = new Scanner(System.in);
	UserService userService = new UserService();
	TweetService tweetService = new TweetService();

	// Create user
	public Boolean registerUser() {
		User user = new User();
		while (true) {
			System.out.println("Enter your first name : ");
			firstName = scanner.nextLine();
			if (firstName.length() >= 3) {
				user.setFirstName(firstName);
				break;
			}
			System.out.println("Firstname must have a length of 3 characters or more");
		}
		while (true) {
			System.out.println("Enter your last name : ");
			lastName = scanner.nextLine();
			if (lastName.length() >= 3) {
				user.setLastName(lastName);
				break;
			}
			System.out.println("Lastname must have a length of 3 characters or more");
		}
		while (true) {
			System.out.println("Enter your gender (male/female): ");
			gender = scanner.nextLine();
			if (gender.equals("male") || gender.equals("female")) {
				user.setGender(gender);
				break;
			}
			System.out.println("Please enter \'male\' or \'female\'");
		}
		while (true) {
			System.out.println("Enter your dob (YYYY-MM-DD): ");
			dob = scanner.nextLine();
			if (dob.matches("^\\d{4}\\-(0[1-9]|1[012])\\-(0[1-9]|[12][0-9]|3[01])$")) {
				user.setDob(dob);
				break;
			}
			System.out.println("Please enter valid date in yyyy-mm-dd format");
		}

		while (true) {
			System.out.println("Enter your email : ");
			email = scanner.nextLine();
			if (email.matches("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")) {
				user.setEmail(email);
				break;
			}
			System.out.println("Please enter a valid email address");
		}

		while (true) {
			System.out.println("Enter your password: ");
			password = scanner.nextLine();
			if (password.length() >= 6) {
				user.setPassword(password);
				break;
			}
			System.out.println("Password must be of minimum 6 characters");
		}

		userService.registerUser(user);

		return true;
	}

	// Login
	public Map<String, Integer> login() {
		while (true) {
			System.out.println("Enter your E-mail:");
			email = scanner.nextLine();
			if (email.matches("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")) {
				break;
			}
			System.out.println("Please enter valid E-mail address");
		}

		while (true) {
			System.out.println("Enter your password:");
			password = scanner.nextLine();
			if (password.length() >= 6) {
				break;
			}
			System.out.println("Password must be a length of 6 to 10");
		}

		return userService.login(email, password);

	}

	// Reset password
	public Boolean updateUser(int userId) {
		String newPassword, oldPassword;
		while (true) {
			System.out.println("Enter your password : ");
			oldPassword = scanner.nextLine();
			if (oldPassword.length() >= 6) {
				break;
			}
			System.out.println("Password must be a length of 6 to 10");
		}
		while (true) {
			System.out.println("Enter your new password : ");
			newPassword = scanner.nextLine();
			if (newPassword.length() >= 6) {
				break;
			}
			System.out.println("password must be a length of 6 to 10");
		}
		userService.updatePassword(userId, oldPassword, newPassword);
		return true;
	}

	// Post a tweet
	public Boolean createTweet(int userId) {
		Tweet tweetObj = new Tweet();
		while (true) {
			System.out.println("Please type your tweet : ");
			tweet = scanner.nextLine();
			if (tweet.length() > 0) {
				break;
			}
			System.out.println("tweet should not be empty");
		}
		tweetObj.setUserId(userId);
		tweetObj.setTweet(tweet);
		tweetService.createTweet(tweetObj);
		return true;
	}

	// get my tweets
	public boolean getMyTweets(int userId) {
		return tweetService.getTweetsByUserId(userId);
	}

	// get all tweets
	public boolean getAllTweets() {
		return tweetService.getAllTweets();
	}

	// logout
	public boolean logout(int userId) {
		return userService.logout(userId);
	}

	// forgot password
	public boolean forgotPassword() {
		String newPassword;
		while (true) {
			System.out.println("enter your email : ");
			email = scanner.nextLine();
			if (email.matches("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")) {
				break;
			}
			System.out.println("please enter valid email address");
		}

		while (true) {
			System.out.println("enter your password : ");
			newPassword = scanner.nextLine();
			if (newPassword.length() >= 6) {
				break;
			}
			System.out.println("password must be a length of 6 to 10");
		}
		userService.forgot(email, newPassword);
		return true;
	}

	// get all users
	public boolean getAllUsers() {
		userService.getAllUsers();
		return true;
	}
}

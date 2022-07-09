package com.tweetapp.tweetapp;

import java.util.Map;
import java.util.Scanner;

import com.tweetapp.tweetapp.util.RegisterUtil;

public class TweetApp {
	public static boolean loggedStatus = false;
	public static int userId;
	static Scanner scanner = new Scanner(System.in);

	public static void main(String[] args) {
		RegisterUtil userUtil = new RegisterUtil();

		if (!loggedStatus) {
			System.out.println("\n Welcome to the TweetApp- \n 1.Register \n 2.Login \n 3.Forgot password");

			int option = scanner.nextInt();
			
			switch (option) {
			case 1:
				userUtil.registerUser();
				System.out.println("Logged in successfully...");
				main(args);

				break;
				
			case 2:
				Map<String, Integer> result = userUtil.login();
				
				if (result.get("status") == 1) {
					loggedStatus = true;
					userId = result.get("userId");
				} else {
					System.out.println("Invalid E-mail or Password...");
				}
				main(args);
				break;

			case 3:
				userUtil.forgotPassword();
				main(args);
				break;
				
			default:
				System.out.println("Invalid Option. Please try again...");
				main(args);
			}
		} else {
			System.out.println("\nPlease choose from the options below:\n1.Post a tweet\n2.View my tweets\n3.View all tweets\n4.View all users\n5.Reset password\n6.Logout");

			int option = scanner.nextInt();
			switch (option) {
			case 1:
				userUtil.createTweet(userId);
				main(args);
				break;
			case 2:
				userUtil.getMyTweets(userId);
				main(args);
				break;
			case 3:
				userUtil.getAllTweets();
				main(args);
				break;
			case 4:
				userUtil.getAllUsers();
				main(args);
				break;
			case 5:
				userUtil.updateUser(userId);
				main(args);
				break;
			case 6:
				if (userUtil.logout(userId)) {
					loggedStatus = false;
				}
				main(args);
				break;
			default:
				System.out.println("Invalid option... Please try again.");
				main(args);

			}
		}
	}
}

package com.tweetapp.tweetapp.service;

import java.sql.ResultSet;
import java.util.Map;

import com.tweetapp.tweetapp.dao.UserDao;
import com.tweetapp.tweetapp.model.User;

public class UserService {
	

	UserDao userDao = new UserDao();
	
	public Boolean registerUser(User user) {
		boolean regStatus = userDao.registerUser(user);
		if(regStatus == true) {
			return regStatus;
		}
		return false;
	}
	
	//login
	public Map<String,Integer> login(String email, String password){
		return userDao.login(email, password);
	}
	
	//logout
	public boolean logout(int userId) {
		return userDao.logout(userId);
	}
	
	//forgot password
	public void forgot(String email,String newPassword) {
		userDao.forgotPassword(email, newPassword);
	}
	
	//reset password
	public Boolean updatePassword(int userId, String oldPassword, String newPassword) {
		return userDao.updatePassword(userId, oldPassword, newPassword);
	}
	
	//get All users
	public boolean getAllUsers(){
		ResultSet rs = userDao.getAllUsers();
		try {
			while(rs.next()) {
				if(rs.getString("firstname")==null && rs.getString("lastname")==null) {
					System.out.println("No users found..");
					return true;
				}
				System.out.println(rs.getString("firstname")+" "+rs.getString("lastname"));
			}
		}catch(Exception e) {
			System.out.println("Something went wrong. Please try again...");
		}
		return true;
	}
}

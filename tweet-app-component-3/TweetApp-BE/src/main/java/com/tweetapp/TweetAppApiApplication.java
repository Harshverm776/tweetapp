package com.tweetapp;

import java.util.Collections;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableSwagger2
@SpringBootApplication
public class TweetAppApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(TweetAppApiApplication.class, args);
	}

	@Bean
	public Docket swaggerConfiguration() {
		return new Docket(DocumentationType.SWAGGER_2).select().paths(PathSelectors.any())
				.apis(RequestHandlerSelectors.basePackage("com.tweetapp")).build().apiInfo(apiInfo());
	}

	@Bean
	public WebMvcConfigurer configure() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/*").allowedOrigins("*");
			}
		};
	}

	private ApiInfo apiInfo() {
		return new ApiInfo("Tweet APP Api",
				"An application where user can post, like and comment a tweet, at the same time search users and their tweets.",
				"1.0", "Free to use", new springfox.documentation.service.Contact("Harsh Verma", "https://github.com/harshverm776",
						"harshverm776@gmail.com"),
				"MIT license", "https://github.com", Collections.emptyList());
	}

}

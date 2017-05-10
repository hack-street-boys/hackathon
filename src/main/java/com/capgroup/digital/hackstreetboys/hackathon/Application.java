package com.capgroup.digital.hackstreetboys.hackathon;


import java.net.Proxy;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.http.converter.BufferedImageHttpMessageConverter;
import org.springframework.http.converter.ByteArrayHttpMessageConverter;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@EnableCaching
@Configuration
public class Application extends SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(Application.class);
	}

	public static void main(String[] args) throws Exception {
		SpringApplication.run(Application.class, args);
	}
	
	@Bean
	public RestTemplate restTemplate(List<HttpMessageConverter<?>> messageConverters) {
		SimpleClientHttpRequestFactory requestFactory = new SimpleClientHttpRequestFactory();

	    requestFactory.setProxy(Proxy.NO_PROXY);
	    RestTemplate restTemplate =  new RestTemplate(requestFactory);
	    restTemplate.setMessageConverters(messageConverters);
	    return restTemplate;
	}

	@Bean
	public BufferedImageHttpMessageConverter bufferedImageHttpMessageConverter() {
	    return new BufferedImageHttpMessageConverter();
	}

}
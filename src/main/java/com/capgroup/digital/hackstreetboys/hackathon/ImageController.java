package com.capgroup.digital.hackstreetboys.hackathon;

import java.awt.image.BufferedImage;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Base64;
import java.util.Map;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;




@RestController
public class ImageController {

	@Autowired
	RestTemplate restTemplate;
	
	
	
	@RequestMapping(value = "/base64", method = RequestMethod.POST)
	public ImageResponse getImageInBase64(@RequestParam("imageUrl") String imageUrl) throws IOException {
		
		String base64EncodedImage = null;
		
		URL url = new URL(imageUrl);
		InputStream is = null;
		try {
			
		  is = url.openStream ();
		  byte[] imageBytes = IOUtils.toByteArray(is);
		   base64EncodedImage = encodeImage(imageBytes);
		}
		catch (IOException e) {
		  System.err.printf ("Failed while reading bytes from %s: %s", url.toExternalForm(), e.getMessage());
		  e.printStackTrace ();
		  // Perform any other exception handling that's appropriate.
		}
		finally {
		  if (is != null) { is.close(); }
		}
		//BufferedImage bi =  restTemplate.getForObject(imageUrl, BufferedImage.class);
		
		
		return new ImageResponse(base64EncodedImage);
	
	}
	
	public static String encodeImage(byte[] imageByteArray) {
	    return Base64.getEncoder().encodeToString(imageByteArray);
	}
}

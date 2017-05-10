package com.capgroup.digital.hackstreetboys.hackathon;

public class ImageResponse {

	private String value;

	public ImageResponse(String base64EncodedImage) {
		this.value = base64EncodedImage;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}
	
	
}

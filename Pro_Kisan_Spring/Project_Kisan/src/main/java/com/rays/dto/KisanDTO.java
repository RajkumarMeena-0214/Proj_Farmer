package com.rays.dto;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.rays.common.BaseDTO;

@Entity
@Table(name = "ST_KISAN")
public class KisanDTO extends BaseDTO {

	@Column(name = "FARMER_NAME", length = 50)
	private String farmerName;
	
	@Column(name = "IMAGE_ID")
	private Long imageId;

	@Column(name = "CROP")
	private String crop;

	@Column(name = "QUANTITY")
	private String quantity;

	@Column(name = "PURCHASE_DATE")
	private String purchaseDate;

	@Column(name = "MSP")
	private String msp;

	public String getFarmerName() {
		return farmerName;
	}

	public void setFarmerName(String farmerName) {
		this.farmerName = farmerName;
	}

	public Long getImageId() {
		return imageId;
	}

	public void setImageId(Long imageId) {
		this.imageId = imageId;
	}

	public String getCrop() {
		return crop;
	}

	public void setCrop(String crop) {
		this.crop = crop;
	}

	public String getQuantity() {
		return quantity;
	}

	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}

	public String getPurchaseDate() {
		return purchaseDate;
	}

	public void setPurchaseDate(String purchaseDate) {
		this.purchaseDate = purchaseDate;
	}

	public String getMsp() {
		return msp;
	}

	public void setMsp(String msp) {
		this.msp = msp;
	}

	@Override
	public String getValue() {
		// TODO Auto-generated method stub
		return farmerName;
	}

}

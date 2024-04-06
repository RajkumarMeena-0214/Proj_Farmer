package com.rays.form;

import java.util.Date;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import org.springframework.lang.NonNull;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.KisanDTO;

public class KisanForm extends BaseForm {

	@NotEmpty(message = "FarmerName is required")
	private String farmerName;

	@NotEmpty(message = "Crop is required")
	private String crop;

	@NotEmpty(message = "Quantity is required")
	private String quantity;

	@NotEmpty(message = "Msp is required")
	private String msp;

	@NotEmpty(message = "PurchaseDate is required")
	private String purchaseDate;

	public String getFarmerName() {
		return farmerName;
	}

	public void setFarmerName(String farmerName) {
		this.farmerName = farmerName;
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

	public String getMsp() {
		return msp;
	}

	public void setMsp(String msp) {
		this.msp = msp;
	}

	public String getPurchaseDate() {
		return purchaseDate;
	}

	public void setPurchaseDate(String purchaseDate) {
		this.purchaseDate = purchaseDate;
	}

	@Override
	public BaseDTO getDto() {
		KisanDTO dto = initDTO(new KisanDTO());
		dto.setFarmerName(farmerName);
		dto.setCrop(crop);
		dto.setQuantity(quantity);
		dto.setMsp(msp);
		dto.setPurchaseDate(purchaseDate);
		return dto;
	}

}
package com.rays.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.stereotype.Repository;

import com.rays.common.BaseDAOImpl;
import com.rays.dto.KisanDTO;

@Repository
public class KisanDAOImp extends BaseDAOImpl<KisanDTO> implements KisanDAOInt {

	public Class<KisanDTO> getDTOClass() {
		return KisanDTO.class;

	}

	@Override
	public List<Predicate> getWhereClause(CriteriaBuilder builder, Root qRoot, KisanDTO dto) {

		List<Predicate> whereConditon = new ArrayList<Predicate>();

		if (dto.getCrop() != null && dto.getCrop().length() > 0) {
			whereConditon.add(builder.like(qRoot.get("company"), dto.getCrop()));
		}
		if (dto.getFarmerName() != null && dto.getFarmerName().length() > 0) {
			whereConditon.add(builder.like(qRoot.get("ownerName"), dto.getFarmerName()));
		}
		if (dto.getId() != null && dto.getId() > 0) {
			whereConditon.add(builder.equal(qRoot.get("id"), dto.getId()));
		}

		return whereConditon;
	}

}

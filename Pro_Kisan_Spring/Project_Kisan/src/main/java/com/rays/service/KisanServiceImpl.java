package com.rays.service;



import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rays.common.BaseServiceImp;
import com.rays.dao.KisanDAOInt;
import com.rays.dto.KisanDTO;

@Service
@Transactional
public class KisanServiceImpl extends BaseServiceImp<KisanDTO, KisanDAOInt> implements KisanServiceInt {
	
	
}
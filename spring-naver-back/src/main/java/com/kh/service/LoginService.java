package com.kh.service;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;

import com.kh.dto.NaverUser;

@Service
public interface LoginService {
	NaverUser login( String id, String password);
}

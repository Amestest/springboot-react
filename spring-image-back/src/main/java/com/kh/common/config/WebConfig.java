package com.kh.common.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// React : 3000 포트 SpringBoot : 백엔드포트가
// 온전히 제대로 연결해줄 수 있도록 설정
// WebSocket 프로트와 백엔드가 서로 상호작용을 주기적으로 진행할 때
// 좀 더 안전하게 연결을 계속 진행하겠다. 설정

@Configuration//설정
public class WebConfig implements WebMvcConfigurer{
	
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")
				.allowedOrigins("http://loacalhost:3000")
				// .allowedOrigins("*")
				.allowedMethods("GET", "POST","PUT", "DELETE", "OPTIONS")
				.allowedHeaders("*");
	}
	/* allowedOrigins("http://loacalhost:3000") 이 주소로
	 * addMapping("/**") 3000번 뒤에 오는 모든 url api 주소를 모두 허용
	 * allowedMethods("GET", "POST","PUT", "DELETE", "OPTIONS")
	 * 				   http://loacalhost:3000/** 들어오는 모든 허용 요청
	 * allowedMethods("보기", "넣기","수정", "삭제", "기타등등")
	 * allowedHeaders("*") <html> <head> 정보에 들어갈 모든 요청 ok!
	 */
}
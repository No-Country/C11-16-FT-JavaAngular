package com.nocountry.javaangular.security;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwtGenerator {
	
	public String generateToken(Authentication authentication, String clientId) {
		String email = authentication.getName();
		Date currentTime = new Date();
		Date tokenExpiration = new Date(currentTime.getTime() + ConstantsSecurity.JWT_EXPIRATION_TOKEN);

		Map<String, Object> claims = new HashMap<>();
		claims.put("id", clientId);
		
		String token = Jwts.builder()
				.setSubject(email)
				.addClaims(claims)
				.setIssuedAt(new Date())
				.setExpiration(tokenExpiration)
				.signWith(SignatureAlgorithm.HS512, ConstantsSecurity.JWT_FIRMA)
				.compact();
		return token;
	}
	
	public String getEmailJwt(String token) {
		Claims claims = Jwts.parser()
				.setSigningKey(ConstantsSecurity.JWT_FIRMA)
				.parseClaimsJws(token)
				.getBody();
		return claims.getSubject();
	}
	
	public Boolean validateToken(String token) {
		try {
			Jwts.parser().setSigningKey(ConstantsSecurity.JWT_FIRMA).parseClaimsJws(token);
			return true;
		} catch (Exception e) {
			throw new AuthenticationCredentialsNotFoundException("JWT has expired or is incorrect.");
		}
	}
}

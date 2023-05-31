package com.nocountry.javaangular.security;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.nocountry.domain.Rol;
import com.nocountry.domain.Users;
import com.nocountry.repository.UsersRepository;

@Service
public class CustomUsersDetailsService implements UserDetailsService{
	
	private UsersRepository usersRepository;
	
	@Autowired
	public CustomUsersDetailsService(UsersRepository usersRepository) {
		this.usersRepository = usersRepository;
	}
	
	public Collection<GrantedAuthority>mapToAuthorities(List<Rol>roles){
		return roles.stream().map(role -> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		Users email = usersRepository.findByEmail(username).orElseThrow(() -> new UsernameNotFoundException("Email no encontrado"));
		return new User(email.getEmail(), email.getPassword(), mapToAuthorities(email.getRoles()));
		
	}

}

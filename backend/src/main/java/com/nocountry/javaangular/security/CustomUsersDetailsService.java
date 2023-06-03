package com.nocountry.javaangular.security;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import com.nocountry.javaangular.domain.Client;
import com.nocountry.javaangular.domain.Rol;
import com.nocountry.javaangular.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
public class CustomUsersDetailsService implements UserDetailsService{
	
	private ClientRepository clientRepository;
	
	@Autowired
	public CustomUsersDetailsService(ClientRepository clientRepository) {
		this.clientRepository = clientRepository;
	}
	
	public Collection<GrantedAuthority>mapToAuthorities(List<Rol>roles){
		return roles.stream().map(role -> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		Client email = clientRepository.findByEmail(username).orElseThrow(() -> new UsernameNotFoundException("Email no encontrado"));
		return new User(email.getEmail(), email.getPassword(), mapToAuthorities(email.getRoles()));
		
	}

}

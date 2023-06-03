package com.nocountry.javaangular.controller;
import com.nocountry.javaangular.domain.Client;
import com.nocountry.javaangular.domain.Rol;
import com.nocountry.javaangular.dto.DtoAuthResponse;
import com.nocountry.javaangular.dto.DtoLogin;
import com.nocountry.javaangular.dto.DtoRegister;
import com.nocountry.javaangular.repository.ClientRepository;
import com.nocountry.javaangular.repository.RolRepository;
import com.nocountry.javaangular.security.JwtGenerator;
import com.nocountry.javaangular.service.interfaces.ClientService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.HashMap;

@RestController
@RequestMapping("/client")
@CrossOrigin("*")
public class ClientController {
	
	private ClientService clientService;
	private AuthenticationManager authenticationManager;
	private PasswordEncoder passwordEncoder;
	private RolRepository rolRepository;
	private ClientRepository clientRepository;
	private JwtGenerator jwtGenerator;

	@Autowired
	public ClientController(ClientService clientService, AuthenticationManager authenticationManager, PasswordEncoder passwordEncoder, RolRepository rolRepository, ClientRepository clientRepository, JwtGenerator jwtGenerator) {
		this.clientService = clientService;
		this.authenticationManager = authenticationManager;
		this.passwordEncoder = passwordEncoder;
		this.rolRepository = rolRepository;
		this.clientRepository = clientRepository;
		this.jwtGenerator = jwtGenerator;
	}

	@GetMapping(value = "/searchId/{id}", headers = "Accept=application/json")
    public ResponseEntity<?> searchxId(@PathVariable Long id){
		Client clientDB = clientService.searchById(id);
		if (clientDB != null) {
			return new ResponseEntity<>(clientDB, HttpStatus.OK);
		}
		return new ResponseEntity<>("Client does not exist", HttpStatus.NOT_FOUND);
    }
	
    /*@PostMapping(value = "/registerClient", headers = "Accept=application/json")
    public ResponseEntity<?> registerClient(@RequestBody Client client){
    	HashMap<String, Object> json = new HashMap<>();
    	json.put("mensaje", "Client created successfully");
    	clientService.createClient(client);
    	return new ResponseEntity<>(json, HttpStatus.OK);
    }*/

	@PostMapping(value = "/registerClient", headers = "Accept=application/json")
	public ResponseEntity<String> registerUser(@RequestBody DtoRegister dtoRegister){
		if (clientRepository.existsByEmail(dtoRegister.getEmail())){
			return new ResponseEntity<>("El email ya existe, intenta con otro", HttpStatus.BAD_REQUEST);
		}
		Client client = new Client();
		client.setEmail(dtoRegister.getEmail());
		client.setPassword(passwordEncoder.encode(dtoRegister.getPassword()));
		client.setName(dtoRegister.getName());
		client.setLastname(dtoRegister.getLastname());
		client.setDni(dtoRegister.getDni());
		client.setCountry(dtoRegister.getCountry());
		client.setBirth_date(dtoRegister.getBirth_date());
		client.setProfile_picture(dtoRegister.getProfile_picture());
		Rol roles = rolRepository.findByName("USER").get();
		client.setRoles(Collections.singletonList(roles));
		clientRepository.save(client);
		return new ResponseEntity<>("Registro de usuario exitoso", HttpStatus.OK);
	}

	@PostMapping(value = "/login", headers = "Accept=application/json")
	public ResponseEntity<DtoAuthResponse> login(@RequestBody DtoLogin dtoLogin){
		Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
				dtoLogin.getEmail(), dtoLogin.getPassword()));
		SecurityContextHolder.getContext().setAuthentication(authentication);
		String token = jwtGenerator.generateToken(authentication);
		return new ResponseEntity<>(new DtoAuthResponse(token), HttpStatus.OK);
	}
    
	@PutMapping(value = "/modifyClient/{id}", headers = "Accept=application/json")
	public ResponseEntity<?> modifyClient(@RequestBody DtoRegister dtoRegister, @PathVariable Long id){
		Client clientDB = clientService.searchById(id);
		HashMap<String, Object> json = new HashMap<>();
		
		if (clientDB != null) {
			clientDB.setEmail(dtoRegister.getEmail());
			clientDB.setPassword(passwordEncoder.encode(dtoRegister.getPassword()));
			clientDB.setName(dtoRegister.getName());
			clientDB.setLastname(dtoRegister.getLastname());
			clientDB.setDni(dtoRegister.getDni());
			clientDB.setCountry(dtoRegister.getCountry());
			clientDB.setBirth_date(dtoRegister.getBirth_date());
			clientDB.setProfile_picture(dtoRegister.getProfile_picture());
			
			clientService.updateClient(clientDB);
			json.put("mensaje", "Client successfully updated");
			return new ResponseEntity<>(json, HttpStatus.OK);		
		}
		json.put("mensaje", "Client does not exist");
		return new ResponseEntity<>(json, HttpStatus.NOT_FOUND);
    }
}

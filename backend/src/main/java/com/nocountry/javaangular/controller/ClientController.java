package com.nocountry.javaangular.controller;
import com.nocountry.javaangular.domain.Client;
import com.nocountry.javaangular.service.interfaces.ClientService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@RequestMapping("/client")
public class ClientController {
	
	private ClientService clientService;
	
	@Autowired
    public ClientController(ClientService clientService) {
		this.clientService = clientService;
	}
	
	@GetMapping(value = "/searchId/{id}", headers = "Accept=application/json")
    public ResponseEntity<?> searchxId(@PathVariable Long id){
		Client clientDB = clientService.searchById(id);
		if (clientDB != null) {
			return new ResponseEntity<>(clientDB, HttpStatus.OK);
		}
		return new ResponseEntity<>("Client does not exist", HttpStatus.NOT_FOUND);
    }
	
    @PostMapping(value = "/registerClient", headers = "Accept=application/json")
    public ResponseEntity<?> registerClient(@RequestBody Client client){
    	HashMap<String, Object> json = new HashMap<>();
    	json.put("mensaje", "Client created successfully");
    	clientService.createClient(client);
    	return new ResponseEntity<>(json, HttpStatus.OK);
    }
    
	@PutMapping(value = "/modifyClient/{id}", headers = "Accept=application/json")
	public ResponseEntity<?> modifyClient(@RequestBody Client newClient, @PathVariable Long id){
		Client clientDB = clientService.searchById(id);
		HashMap<String, Object> json = new HashMap<>();
		
		if (clientDB != null) {
			clientDB.setEmail(newClient.getEmail());
			clientDB.setPassword(newClient.getPassword());
			clientDB.setName(newClient.getName());
			clientDB.setLastname(newClient.getLastname());
			clientDB.setDni(newClient.getDni());
			clientDB.setCountry(newClient.getCountry());
			clientDB.setBirth_date(newClient.getBirth_date());
			clientDB.setProfile_picture(newClient.getProfile_picture());
			clientDB.setIs_admin(newClient.getIs_admin());
			clientDB.setCompany(newClient.getCompany());
			
			clientService.updateClient(clientDB);
			json.put("mensaje", "Client successfully updated");
			return new ResponseEntity<>(json, HttpStatus.OK);		
		}
		json.put("mensaje", "Client does not exist");
		return new ResponseEntity<>(json, HttpStatus.NOT_FOUND);
    }
}

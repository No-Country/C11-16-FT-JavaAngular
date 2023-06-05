package com.nocountry.javaangular.service.implementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nocountry.javaangular.domain.Client;
import com.nocountry.javaangular.repository.ClientRepository;
import com.nocountry.javaangular.service.interfaces.ClientService;

@Service
public class ClientServiceImpl implements ClientService{
	
	private ClientRepository clientRepository;
	
	@Autowired
	public ClientServiceImpl(ClientRepository clientRepository) {
		this.clientRepository = clientRepository;
	}

	@Override
	public void createClient(Client client) {
		clientRepository.save(client);
	}

	@Override
	public Client searchById(Long id) {
		return clientRepository.findById(id).orElse(null);
	}

	@Override
	public void updateClient(Client client) {
		clientRepository.saveAndFlush(client);
	}

	@Override
	public Client getClientByEmail(String clientId) {
		return clientRepository.getClientByEmail(clientId);
	};

}

package com.nocountry.javaangular.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nocountry.javaangular.domain.Client;

import java.util.Optional;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long>{
    Optional<Client>findByEmail(String email);
    Boolean existsByEmail(String email);

    Client getClientByEmail(String clientId);
}

package com.nocountry.javaangular.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nocountry.javaangular.domain.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long>{

}

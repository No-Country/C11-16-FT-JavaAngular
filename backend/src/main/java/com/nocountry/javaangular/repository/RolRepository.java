package com.nocountry.javaangular.repository;

import com.nocountry.javaangular.domain.Rol;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RolRepository extends JpaRepository<Rol,Long > {
    Optional<Rol> findByName(String name);
}

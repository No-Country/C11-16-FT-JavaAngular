package com.nocountry.javaangular.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nocountry.javaangular.domain.Company;
@Repository
public interface CompanyRepository extends JpaRepository<Company,Long> {
}

package com.nocountry.javaangular.service.interfaces;

import java.util.List;

import com.nocountry.javaangular.domain.Company;

public interface CompanyService {

	void createCompany(Company company);
	void updateCompany(Company company);
	void deleteCompany(Long id);
	List<Company> listCompany();
	Company searchIdCompany(Long id);
	
}

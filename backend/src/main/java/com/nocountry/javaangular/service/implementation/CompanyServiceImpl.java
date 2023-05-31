package com.nocountry.javaangular.service.implementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nocountry.javaangular.domain.Company;
import com.nocountry.javaangular.repository.CompanyRepository;
import com.nocountry.javaangular.service.interfaces.CompanyService;

@Service
public class CompanyServiceImpl implements CompanyService{
	
	private CompanyRepository companyRepository;
	
	@Autowired
	public CompanyServiceImpl(CompanyRepository companyRepository) {
		this.companyRepository = companyRepository;
	}

	@Override
	public void createCompany(Company company) {
		// TODO Auto-generated method stub
		companyRepository.save(company);
	}

	@Override
	public void updateCompany(Company company) {
		// TODO Auto-generated method stub
		companyRepository.saveAndFlush(company);
	}

	@Override
	public void deleteCompany(Long id) {
		// TODO Auto-generated method stub
		companyRepository.deleteById(id);
	}

	@Override
	public List<Company> listCompany() {
		// TODO Auto-generated method stub
		return companyRepository.findAll();
	}

	@Override
	public Company searchIdCompany(Long id) {
		// TODO Auto-generated method stub
		return companyRepository.findById(id).orElse(null);
	}

}

package com.nocountry.javaangular.service.implementation;

import com.nocountry.javaangular.domain.Company;
import com.nocountry.javaangular.domain.Review;
import com.nocountry.javaangular.repository.CompanyRepository;
import com.nocountry.javaangular.service.interfaces.CompanyService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CompanyServiceImp implements CompanyService {
    @Autowired
    private CompanyRepository companyRepository;

    @Override
    public Optional<Company> getCompanyById(Long id) {
        return companyRepository.findById(id);
    };
    @Override
    public void editCompany(Company company, Long id) {
        Company companyOld = companyRepository.getById(id);
        if (!companyOld.getAdmins().equals(company.getAdmins())) {
            companyOld.setAdmins(company.getAdmins());
        }
        if (!companyOld.getName().equals(company.getName())) {
            companyOld.setName(company.getName());
        }
        if(!companyOld.getReviews().equals(company.getReviews())){
            companyOld.setReviews(company.getReviews());
        }
        if (!companyOld.getContact_links().equals(company.getContact_links())){
            companyOld.setContact_links(company.getContact_links());
        }
        if (!companyOld.getContact_number().equals(company.getContact_number())){
            companyOld.setContact_number(company.getContact_number());
        }
        companyRepository.save(companyOld);
//        companyRepository.updateCompany(company, id);
    }
    @Override
    public void addCompany(Company newCompany) {
        companyRepository.save(newCompany);
    }
    @Override
    public void deleteCompany(Long id) {
        companyRepository.deleteById(id);
    }
    @Override
    public List<Company> getAllCompanies() {
        return companyRepository.findAll();
    }
    @Override
    public List<Review> getAllReviews(Long id) {
        Company company = companyRepository.getById(id);
        return company.getReviews();
    }
}

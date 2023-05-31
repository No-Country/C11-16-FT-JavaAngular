package com.nocountry.javaangular.controller;
import com.nocountry.javaangular.domain.Company;

import com.nocountry.javaangular.domain.Review;
import com.nocountry.javaangular.service.implementation.CompanyServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/company")
public class CompanyController {

    @Autowired
    private CompanyServiceImp companyServiceImp;
    @GetMapping("/")
    public List<Company> getAllCompanies(){
        return companyServiceImp.getAllCompanies();
    }

    // ------------ should ignore this endpoint
    @GetMapping("/reviews/{id}")
    public List<Review> getAllReviews(@PathVariable Long id){
        return companyServiceImp.getAllReviews(id);
    }
    // ------------

    @GetMapping("/{id}")
    public Optional<Company> getById(@PathVariable Long id){
        return companyServiceImp.getCompanyById(id);
    }
    @PutMapping("/{id}")
    void modifyCompany(@RequestBody Company company, @PathVariable Long id){
        companyServiceImp.editCompany(company, id);
    }
    @PostMapping("/")
    public void registerNewCompany(@RequestBody Company newCompany){
        companyServiceImp.addCompany(newCompany);
    }
    @DeleteMapping("/{id}")
    public void deleteCompany(@PathVariable Long id){
        companyServiceImp.deleteCompany(id);
    }
}

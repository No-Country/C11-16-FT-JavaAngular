package com.nocountry.javaangular.service.interfaces;

import com.nocountry.javaangular.domain.Company;
import com.nocountry.javaangular.domain.Review;

import java.util.List;
import java.util.Optional;

public interface CompanyService {
    Optional<Company> getCompanyById(Long id);

    void editCompany(Company company, Long id);

    void addCompany(Company newCompany);

    void deleteCompany(Long id);

    List<Company> getAllCompanies();

    List<Review> getAllReviews(Long id);
}

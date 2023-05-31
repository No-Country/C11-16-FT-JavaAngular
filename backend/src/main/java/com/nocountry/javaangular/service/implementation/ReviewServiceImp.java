package com.nocountry.javaangular.service.implementation;

import com.nocountry.javaangular.domain.Company;
import com.nocountry.javaangular.domain.Review;
import com.nocountry.javaangular.repository.CompanyRepository;
import com.nocountry.javaangular.repository.ReviewRepository;
import com.nocountry.javaangular.service.interfaces.ReviewService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ReviewServiceImp implements ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    private CompanyRepository companyRepository;

    @Override
    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }

    @Override
    public Optional<List<Review>> getNineReviews(Long companyId) {
        Company company = companyRepository.getById(companyId);
        return reviewRepository.getNineReviews(company.getId());
    }

    @Override
    public void createReview(Long companyId, Review review) {
        Company company = companyRepository.getById(companyId);
        review.setCompany(company);
        review.setCreatedDateTime(Date.valueOf(LocalDate.now()));
        reviewRepository.save(review);
    }
}

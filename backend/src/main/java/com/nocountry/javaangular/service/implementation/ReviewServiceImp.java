package com.nocountry.javaangular.service.implementation;

import com.nocountry.javaangular.domain.Company;
import com.nocountry.javaangular.domain.Review;
import com.nocountry.javaangular.repository.CompanyRepository;
import com.nocountry.javaangular.repository.ReviewRepository;
import com.nocountry.javaangular.service.interfaces.ReviewService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
    public void createReview(Long companyId, Review review) {
        try {
            Company company = companyRepository.getById(companyId);
            if (!company.getName().isEmpty()) {
                List<Review> reviews = company.getReviews();
                reviews.add(review);
                company.setReviews(reviews);
                companyRepository.save(company);
                System.out.println(review.toString());
            }
        } catch (Exception e) {
            throw new Error("ERROR");
        }
    }
}

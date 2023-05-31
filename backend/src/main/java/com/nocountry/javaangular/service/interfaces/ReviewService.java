package com.nocountry.javaangular.service.interfaces;

import com.nocountry.javaangular.domain.Review;

import java.util.List;
import java.util.Optional;

public interface ReviewService {
    List<Review> getAllReviews();
    Optional<List<Review>> getNineReviews(Long companyId);
    void createReview(Long companyId, Review review);
}

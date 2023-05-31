package com.nocountry.javaangular.service.interfaces;

import com.nocountry.javaangular.domain.Review;

import java.util.List;

public interface ReviewService {
    List<Review> getAllReviews();

    void createReview(Long companyId, Review review);
}

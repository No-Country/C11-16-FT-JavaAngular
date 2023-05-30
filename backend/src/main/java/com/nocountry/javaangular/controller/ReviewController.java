package com.nocountry.javaangular.controller;

import com.nocountry.javaangular.domain.Review;
import com.nocountry.javaangular.service.implementation.ReviewServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/review")
public class ReviewController {

    @Autowired
    private ReviewServiceImp reviewServiceImp;

    @GetMapping("/all")
    public List<Review> getAll(){
        return reviewServiceImp.getAllReviews();
    }

    @GetMapping("/nine")
    public List<Review> getNine(){
        return null;
    }

    @PostMapping("/{company_id}")
    public void createReview(@PathVariable Long company_id, @RequestBody Review review) {
        reviewServiceImp.createReview(company_id, review);
    }
}

package com.nocountry.javaangular.controller;

import com.nocountry.javaangular.domain.Review;
import com.nocountry.javaangular.service.implementation.ReviewServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/review")
public class ReviewController {

    @Autowired
    private ReviewServiceImp reviewServiceImp;

    @GetMapping("/all")
    public ResponseEntity<List<Review>> getAll(){
        return new ResponseEntity<>(reviewServiceImp.getAllReviews(), HttpStatus.OK);
    }

    @GetMapping("/nine/{company_id}")
    public ResponseEntity<List<Review>> getNineReviews(@PathVariable("company_id") Long companyId){
        return reviewServiceImp.getNineReviews(companyId)
                .map(reviews -> new ResponseEntity<>(reviews, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/{company_id}")
    public void createReview(@PathVariable("company_id") Long company_id, @RequestBody Review review) {
        reviewServiceImp.createReview(company_id, review);
    }
}

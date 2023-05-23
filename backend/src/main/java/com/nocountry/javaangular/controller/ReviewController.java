package com.nocountry.javaangular.controller;

import com.nocountry.javaangular.domain.Trip;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/reviews")
public class ReviewController {
    @GetMapping("/all")
    public List<Trip> getAll(){
        return null;
    }
    @GetMapping("/nine")
    public List<Trip> getNine(){
        return null;
    }
}

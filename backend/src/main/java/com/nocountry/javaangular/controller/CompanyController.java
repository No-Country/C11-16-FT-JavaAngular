package com.nocountry.javaangular.controller;
import com.nocountry.javaangular.domain.Company;
import com.nocountry.javaangular.domain.Order;
import com.nocountry.javaangular.domain.Trip;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/company")
public class CompanyController {
    @GetMapping("/{id}")
    public Company getById(@PathVariable Long id){
        return null;
    }
    @PutMapping("/{id}")
    public void modifyCompany(@PathVariable Long id){
    }
    @PostMapping("/")
    public void registerNewCompany(@RequestBody Company newCompany){
    }
    @DeleteMapping("/{id}")
    public void deleteCompany(@PathVariable Long id){
    }
}

package com.nocountry.javaangular.controller;
import com.nocountry.javaangular.domain.Order;
import com.nocountry.javaangular.domain.Trip;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/order")
public class OrderController {
    @GetMapping("/{id}")
    public List<Trip> getById(@PathVariable Long id){
        return null;
    }
    @PutMapping("/{id}")
    public List<Trip> modifyOrder(@PathVariable Long id){
        return null;
    }
    @PostMapping("/")
    public List<Trip> registerNewOrder(@RequestBody Order newOrder){
        return null;
    }
}

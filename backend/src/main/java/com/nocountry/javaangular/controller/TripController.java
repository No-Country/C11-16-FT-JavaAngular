package com.nocountry.javaangular.controller;
import com.nocountry.javaangular.domain.Trip;
import com.nocountry.javaangular.domain.Client;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/trip")
public class TripController {
    @GetMapping("/all")
    public List<Trip> getAll(){
        return null;
    }
    @GetMapping("/{id}")
    public Trip getById(@PathVariable Long id){
        return null;
    }
    @GetMapping("/{keyword}")
    public List<Trip> getByDestination(@PathVariable String keyword){
        return null;
    }
    @PutMapping("/{id}")
    public void modifyTrip(@RequestBody Client newUser){
    }
    @PostMapping("/")
    public void registerNewTrip(@RequestBody Client newUser){
    }
    @DeleteMapping("/{id}")
    public void deleteTrip(@PathVariable Long id){
    }
}

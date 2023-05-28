package com.nocountry.javaangular.controller;
import com.nocountry.javaangular.domain.Trip;
import com.nocountry.javaangular.domain.Client;
import com.nocountry.javaangular.service.implementation.TripServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/trip")
@AllArgsConstructor
public class TripController {
    private final TripServiceImpl service;
    @GetMapping("/all")
    public List<Trip> getAll(){
        return service.getAll();
    }
    @GetMapping("/id/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id){
        return service.getById(id);
    }
    @GetMapping("/{keyword}")
    public List<Trip> getByDestination(@PathVariable String keyword){
        return service.getByDestination(keyword);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Trip> modifyTrip(@RequestBody Trip tripupdate,@PathVariable Long id){
        return service.modifyTrip(tripupdate,id);
    }
    @PostMapping("/")
    public ResponseEntity<Trip> registerNewTrip(@RequestBody Trip newtrip){
        return service.registerNewTrip(newtrip);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Trip> deleteTrip(@PathVariable Long id){
        return service.deleteTrip(id);
    }
}

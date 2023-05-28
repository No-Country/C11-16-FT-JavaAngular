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
    private final TripServiceImpl tripServiceImpl;
    @GetMapping("/all")
    public List<Trip> getAll(){
        return tripServiceImpl.getAll();
    }
    @GetMapping("/id/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id){
        return tripServiceImpl.getById(id);
    }
    @GetMapping("/{keyword}")
    public List<Trip> getByDestination(@PathVariable String destination){
        return tripServiceImpl.getByDestination(destination);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Trip> modifyTrip(@RequestBody Trip tripupdate,@PathVariable Long id){
        return tripServiceImpl.modifyTrip(tripupdate,id);
    }
    @PostMapping("/")
    public ResponseEntity<Trip> registerNewTrip(@RequestBody Trip newtrip){
        return tripServiceImpl.registerNewTrip(newtrip);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Trip> deleteTrip(@PathVariable Long id){
        return tripServiceImpl.deleteTrip(id);
    }
}

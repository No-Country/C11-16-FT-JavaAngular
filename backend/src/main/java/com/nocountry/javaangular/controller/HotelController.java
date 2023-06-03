package com.nocountry.javaangular.controller;
import com.nocountry.javaangular.domain.Hotel;
import com.nocountry.javaangular.domain.Trip;
import com.nocountry.javaangular.service.interfaces.ClientService;
import com.nocountry.javaangular.service.interfaces.HotelService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/hotel")
@CrossOrigin("*")
@AllArgsConstructor
public class HotelController {

    private HotelService hotelservice;

    @GetMapping("/id/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id){
        return hotelservice.getById(id);
    }
    @PostMapping("/registerHotel")
    public ResponseEntity<?> registerHotel(@RequestBody Hotel newhotel){
        return hotelservice.registerHotel(newhotel);
    }
}

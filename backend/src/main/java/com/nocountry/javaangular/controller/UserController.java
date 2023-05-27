package com.nocountry.javaangular.controller;
import com.nocountry.javaangular.domain.Trip;
import com.nocountry.javaangular.domain.Client;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    @GetMapping("/{id}")
    public List<Trip> getById(@PathVariable Long id){
        return null;
    }
//    @GetMapping("/{id}")
//    public void modifyUser(@PathVariable Long id){
//    }
    @GetMapping("/")
    public void registerUser(@RequestBody Client newUser){
    }
}

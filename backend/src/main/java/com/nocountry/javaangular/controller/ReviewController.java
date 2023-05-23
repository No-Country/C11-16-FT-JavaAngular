package com.nocountry.javaangular.controller;

import com.nocountry.javaangular.domain.Viaje;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/reviews")
public class ReviewController {
    @GetMapping("/todos")
    public List<Viaje> ObtenerTodos(){
        return null;
    }
    @GetMapping("/nueve")
    public List<Viaje> ObtenerNueve(){
        return null;
    }
}

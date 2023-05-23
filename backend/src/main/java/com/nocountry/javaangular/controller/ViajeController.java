package com.nocountry.javaangular.controller;
import com.nocountry.javaangular.domain.Viaje;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/viaje")
public class ViajeController {
    @GetMapping("/todos")
    public List<Viaje> ObtenerTodos(){
        return null;
    }
    @GetMapping("/{id}")
    public Viaje ObtenerPorId(@PathVariable Long id){
        return null;
    }
    @GetMapping("/{keyword}")
    public List<Viaje> ObtenerPorDestino(@PathVariable String keyword){
        return null;
    }
}

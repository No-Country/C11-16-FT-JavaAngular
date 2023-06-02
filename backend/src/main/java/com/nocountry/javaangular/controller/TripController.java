package com.nocountry.javaangular.controller;
import com.nocountry.javaangular.domain.Trip;
import com.nocountry.javaangular.service.implementation.TripServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.sql.Date;
import java.util.List;

@RestController
@RequestMapping("/trip")
@AllArgsConstructor
public class TripController {
    private final TripServiceImpl tripServiceImpl;
    @GetMapping("/id/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id){
        return tripServiceImpl.getById(id);
    }
    @GetMapping("/")
    public List<Trip> getFiltered(@RequestParam(required = false) String type,
                                  @RequestParam(required = false) String origin,
                                  @RequestParam(required = false) String destination,
                                  @RequestParam(required = false) Date departure,
                                  @RequestParam(required = false) Double from,
                                  @RequestParam(required = false) Double to,
                                  @RequestParam(required = false) Integer children,
                                  @RequestParam(required = false) Integer adults){
        return tripServiceImpl.getFiltered(type,origin,destination,departure,from,to,children,adults);
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

package com.nocountry.javaangular.service.interfaces;

import com.nocountry.javaangular.domain.Trip;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public interface TripService {
    List<Trip> getAll();
    ResponseEntity<?> getById(Long id);
    List<Trip> getByDestination(String destination);
    ResponseEntity<Trip> modifyTrip(Trip tripupdate, Long id);
    ResponseEntity<Trip> registerNewTrip(Trip newtrip);
    ResponseEntity<Trip> deleteTrip(Long id);
}

package com.nocountry.javaangular.service.interfaces;
import com.nocountry.javaangular.domain.Trip;
import org.springframework.http.ResponseEntity;
import java.sql.Date;
import java.util.List;

public interface TripService {
    ResponseEntity<?> getById(Long id);
    List<Trip> getFiltered(String type,String origin, String destination, Date departure, Double from, Double to,Integer children,Integer adults);
    ResponseEntity<Trip> modifyTrip(Trip tripupdate, Long id);
    ResponseEntity<Trip> registerNewTrip(Trip newtrip);
    ResponseEntity<Trip> deleteTrip(Long id);
}

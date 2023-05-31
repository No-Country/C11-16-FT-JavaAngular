package com.nocountry.javaangular.service.implementation;
import com.nocountry.javaangular.domain.Trip;
import com.nocountry.javaangular.repository.TripRepository;
import com.nocountry.javaangular.service.interfaces.TripService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class TripServiceImpl  implements TripService {

    private final TripRepository repository;

    @Override
    public List<Trip> getAll() {
        List<Trip> results = repository.findAll();
        if(results.isEmpty()){
            return null;
        }
        return results;
    }
    @Override
    public ResponseEntity<?> getById(Long id) {
        Optional<Trip> result = repository.findById(id);
        if(result.isEmpty()){
            return ResponseEntity.badRequest().body("No existe un viaje con ese id");
        }
        return ResponseEntity.ok(result);
    }
    @Override
    public List<Trip> getByDestination(String destination) {
        List<Trip> results = repository.getByDestination(destination);
        if(results.isEmpty()){
            return null;
        }
        return results;
    }

    @Override
    public List<Trip> getFiltered(String origin, String destination,LocalDate departure,Double from, Double to) {
        return repository.getFiltered(origin,destination,departure,from,to);
    }

    @Override
    public ResponseEntity<Trip> modifyTrip(Trip tripupdate, Long id) {
        Optional<Trip> result = repository.findById(id);
        if(result.isEmpty()){
            return ResponseEntity.badRequest().body(null);
        }
        if(!tripupdate.getType().equals(result.get().getType())){
            result.get().setType(tripupdate.getType());
        }
        if(!tripupdate.getStatus().equals(result.get().getStatus())){
            result.get().setStatus(tripupdate.getStatus());
        }
        if(!tripupdate.getOrigin().equals(result.get().getOrigin())){
            result.get().setOrigin(tripupdate.getOrigin());
        }
        if(!tripupdate.getDestination().equals(result.get().getDestination())){
            result.get().setDestination(tripupdate.getDestination());
        }
        if(!tripupdate.getPrice().equals(result.get().getPrice())){
            result.get().setPrice(tripupdate.getPrice());
        }
        if(!tripupdate.getStops().equals(result.get().getStops())){
            result.get().setStops(tripupdate.getStops());
        }
        if(!tripupdate.getAllows_changes().equals(result.get().getAllows_changes())){
            result.get().setAllows_changes(tripupdate.getAllows_changes());
        }
        if(!tripupdate.getAllows_cancel().equals(result.get().getAllows_cancel())){
            result.get().setAllows_cancel(tripupdate.getAllows_cancel());
        }
        if(!tripupdate.getImage().equals(result.get().getImage())){
            result.get().setImage(tripupdate.getImage());
        }
        if(!tripupdate.getAvailable_seats().equals(result.get().getAvailable_seats())){
            result.get().setAvailable_seats(tripupdate.getAvailable_seats());
        }
        if(!tripupdate.getDeparture().equals(result.get().getDeparture())){
            result.get().setDeparture(tripupdate.getDeparture());
        }
        if(!tripupdate.getArrival().equals(result.get().getArrival())){
            result.get().setArrival(tripupdate.getArrival());
        }

        return ResponseEntity.ok(repository.save(result.get()));
    }
    @Override
    public ResponseEntity<Trip> registerNewTrip(Trip newtrip) {
        return ResponseEntity.ok(repository.save(newtrip));
    }
    @Override
    public ResponseEntity<Trip> deleteTrip(Long id) {
        if(repository.findById(id).isEmpty()){
            return ResponseEntity.badRequest().body(null);
        }
        repository.deleteById(id);
        return ResponseEntity.ok().body(null);
    }
}

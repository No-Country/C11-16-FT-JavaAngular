package com.nocountry.javaangular.service.implementation;
import com.nocountry.javaangular.domain.Trip;
import com.nocountry.javaangular.repository.TripRepository;
import com.nocountry.javaangular.service.interfaces.TripService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
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
    public List<Trip> getByDestination(String keyword) {
        List<Trip> results = repository.getByDestination(keyword);
        if(results.isEmpty()){
            return null;
        }
        return results;
    }
    @Override
    public ResponseEntity<Trip> modifyTrip(Trip tripupdate, Long id) {
        Optional<Trip> result = repository.findById(id);
        if(result.isEmpty()){
            return ResponseEntity.badRequest().body(null);
        }
        //check which attributes need to be updated

        return ResponseEntity.ok(repository.save(tripupdate));
    }
    @Override
    public ResponseEntity<Trip> registerNewTrip(Trip newtrip) {
        //must be registered with: type, origin,destination,departure, arrival,image and company
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

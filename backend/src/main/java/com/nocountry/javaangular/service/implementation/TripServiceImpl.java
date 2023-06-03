package com.nocountry.javaangular.service.implementation;
import com.nocountry.javaangular.domain.Company;
import com.nocountry.javaangular.domain.Hotel;
import com.nocountry.javaangular.domain.Trip;
import com.nocountry.javaangular.repository.CompanyRepository;
import com.nocountry.javaangular.repository.HotelRepository;
import com.nocountry.javaangular.repository.TripRepository;
import com.nocountry.javaangular.service.interfaces.TripService;
import lombok.AllArgsConstructor;
import lombok.extern.java.Log;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.sql.Date;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class TripServiceImpl  implements TripService {

    private final TripRepository repository;
    private final HotelRepository repositoryHotel;
    private final CompanyRepository repositoryCompany;
    @Override
    public ResponseEntity<?> getById(Long id) {
        Optional<Trip> result = repository.findById(id);
        if(result.isEmpty()){
            return ResponseEntity.badRequest().body("No existe un viaje con ese id");
        }
        return ResponseEntity.ok(result);
    }
    @Override
    public List<Trip> getFiltered(String type,String origin, String destination, Date departure, Double from, Double to,Integer children,Integer adults,Boolean  allowspets) {
        return repository.getFiltered(type,origin,destination,departure,from,to,children,adults,allowspets);
    }
    @Override
    public ResponseEntity<Trip> modifyTrip(Trip tripupdate, Long id) {
        Optional<Trip> result = repository.findById(id);
        if(result.isEmpty()){
            return ResponseEntity.badRequest().body(null);
        }
        if(!tripupdate.getType().isEmpty() && !tripupdate.getType().equals(result.get().getType())){
            result.get().setType(tripupdate.getType());
        }
        if(!tripupdate.getStatus().isEmpty() && !tripupdate.getStatus().equals(result.get().getStatus())){
            result.get().setStatus(tripupdate.getStatus());
        }
        if(!tripupdate.getOrigin().isEmpty() &&!tripupdate.getOrigin().equals(result.get().getOrigin())){
            result.get().setOrigin(tripupdate.getOrigin());
        }
        if(!tripupdate.getDestination().isEmpty() &&!tripupdate.getDestination().equals(result.get().getDestination())){
            result.get().setDestination(tripupdate.getDestination());
        }
        if(tripupdate.getPrice() != null && !tripupdate.getPrice().equals(result.get().getPrice())){
            result.get().setPrice(tripupdate.getPrice());
        }
        if(tripupdate.getStops()!=null && !tripupdate.getStops().equals(result.get().getStops())){
            result.get().setStops(tripupdate.getStops());
        }
        if(tripupdate.getAllows_changes()!=null && !tripupdate.getAllows_changes().equals(result.get().getAllows_changes())){
            result.get().setAllows_changes(tripupdate.getAllows_changes());
        }
        if(tripupdate.getAllows_cancel()!=null && !tripupdate.getAllows_cancel().equals(result.get().getAllows_cancel())){
            result.get().setAllows_cancel(tripupdate.getAllows_cancel());
        }
        if(!tripupdate.getImage().isEmpty() && !tripupdate.getImage().equals(result.get().getImage())){
            result.get().setImage(tripupdate.getImage());
        }
        if(tripupdate.getAvailable_seats()!=null && !tripupdate.getAvailable_seats().equals(result.get().getAvailable_seats())){
            result.get().setAvailable_seats(tripupdate.getAvailable_seats());
        }
        if(tripupdate.getDeparture()!=null && !tripupdate.getDeparture().equals(result.get().getDeparture())){
            result.get().setDeparture(tripupdate.getDeparture());
        }
        if(tripupdate.getArrival()!=null && !tripupdate.getArrival().equals(result.get().getArrival())){
            result.get().setArrival(tripupdate.getArrival());
        }

        return ResponseEntity.ok(repository.save(result.get()));
    }
    @Override
    public ResponseEntity<?> registerNewTrip(Trip newtrip) {
        if(newtrip.getHotel()!=null){
            Optional<Hotel> result = repositoryHotel.findById(newtrip.getHotel().getId());
            if(result.isPresent()){
                List<Trip> newlist = result.get().getTrips();
                newlist.add(newtrip);
                result.get().setTrips(newlist);
                repositoryHotel.save(result.get());
                newtrip.setHotel(result.get());
            }
        }

    if(newtrip.getCompany()!=null){
        Optional<Company> company = repositoryCompany.findById(newtrip.getCompany().getId());
        if(company.isPresent()){
            List<Trip> newlist = company.get().getTrips();
            newlist.add(newtrip);
            company.get().setTrips(newlist);
            repositoryCompany.save(company.get());
            newtrip.setCompany(company.get());
        }
    }
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

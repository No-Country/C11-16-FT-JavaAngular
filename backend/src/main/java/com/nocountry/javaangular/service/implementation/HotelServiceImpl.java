package com.nocountry.javaangular.service.implementation;
import com.nocountry.javaangular.domain.Hotel;
import com.nocountry.javaangular.repository.HotelRepository;
import com.nocountry.javaangular.service.interfaces.HotelService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Optional;

@Service
@AllArgsConstructor
public class HotelServiceImpl implements HotelService {
    private final HotelRepository repository;
    @Override
    public ResponseEntity<?> getById(Long id) {
        Optional<Hotel> result = repository.findById(id);
        if(result.isPresent()){
            return ResponseEntity.ok(result.get());
        }
        return ResponseEntity.badRequest().body("No existe un hotel registrado con ese id");
    }

    @Override
    public ResponseEntity<?> registerHotel(Hotel newhotel) {
        return ResponseEntity.ok(repository.save(newhotel));
    }
}

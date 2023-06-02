package com.nocountry.javaangular.service.interfaces;
import com.nocountry.javaangular.domain.Hotel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;

public interface HotelService {
    ResponseEntity<?> getById(Long id);
    ResponseEntity<?> registerHotel(Hotel newhotel);
}

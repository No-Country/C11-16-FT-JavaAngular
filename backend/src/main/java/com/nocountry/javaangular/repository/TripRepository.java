package com.nocountry.javaangular.repository;
import com.nocountry.javaangular.domain.Client;
import com.nocountry.javaangular.domain.Trip;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import java.util.List;

@Repository
public interface TripRepository extends JpaRepository<Trip,Long> {
    @Query("SELECT c FROM Trip c WHERE c.destination LIKE CONCAT('%',?1,'%')")
    List<Trip> getByDestination(@PathVariable String destination);
}

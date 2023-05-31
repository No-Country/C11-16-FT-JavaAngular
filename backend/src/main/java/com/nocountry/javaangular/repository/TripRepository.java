package com.nocountry.javaangular.repository;
import com.nocountry.javaangular.domain.Trip;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.time.LocalDate;
import java.util.List;

@Repository
public interface TripRepository extends JpaRepository<Trip,Long> {
    @Query("SELECT c FROM Trip c WHERE c.destination LIKE CONCAT('%',?1,'%')")
    List<Trip> getByDestination(String destination);
    @Query("SELECT c FROM Trip c WHERE (:from IS NULL OR c.price >= :from) AND (:to IS NULL OR c.price <= :to) " +
            "AND (:origin IS NULL OR c.origin LIKE CONCAT('%',:origin,'%')) AND (:destination IS NULL OR c.destination LIKE CONCAT('%',:destination,'%')" +
            "AND (:departure IS NULL OR c.departure = :departure))")
    List<Trip> getFiltered(String origin, String destination,LocalDate departure,Double from, Double to);
}

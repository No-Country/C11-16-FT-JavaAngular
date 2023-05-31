package com.nocountry.javaangular.repository;
import com.nocountry.javaangular.domain.Trip;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.sql.Date;
import java.util.List;

@Repository
public interface TripRepository extends JpaRepository<Trip,Long> {
    @Query("SELECT c FROM Trip c WHERE (:type IS NULL OR c.type = :type)" +
            "AND (:from IS NULL OR c.price >= :from) AND (:to IS NULL OR c.price <= :to) " +
            "AND (:origin IS NULL OR c.origin LIKE CONCAT('%',:origin,'%')) AND (:destination IS NULL OR c.destination LIKE CONCAT('%',:destination,'%'))" +
            "AND (:departure IS NULL OR  c.departure = :departure)" +
            "AND (:children IS NULL OR  c.children >= :children) AND (:adults IS NULL OR  c.adults >= :adults)")
    List<Trip> getFiltered(String type,String origin, String destination, Date departure, Double from, Double to,Integer children,Integer adults);
}

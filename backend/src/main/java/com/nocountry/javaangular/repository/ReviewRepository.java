package com.nocountry.javaangular.repository;

import com.nocountry.javaangular.domain.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
//    @Query(nativeQuery=true, value="SELECT *  FROM review ORDER BY random() LIMIT 10");
//    List<Review> getNine();
}

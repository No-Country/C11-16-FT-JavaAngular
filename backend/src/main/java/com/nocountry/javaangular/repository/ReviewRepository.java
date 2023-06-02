package com.nocountry.javaangular.repository;

import com.nocountry.javaangular.domain.Review;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

@Repository
public interface ReviewRepository extends CrudRepository<Review, Long> {
    @Query("SELECT r FROM Review r WHERE r.company.id = :companyId ORDER BY RAND() LIMIT 9")
    Optional<List<Review>> getNineReviews(@PathVariable Long companyId);
    List<Review> findAll();
}

package com.nocountry.javaangular.dto;

import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@Data
public class DtoRegister {

    private String email;
    private String password;
    private String name;
    private String lastname;
    private String dni;
    private String country;
    private LocalDate birth_date;
    private String profile_picture;
}

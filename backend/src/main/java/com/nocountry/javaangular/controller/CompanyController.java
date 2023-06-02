package com.nocountry.javaangular.controller;
import com.nocountry.javaangular.domain.Company;
import com.nocountry.javaangular.service.interfaces.CompanyService;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/company")
@CrossOrigin("*")
public class CompanyController {
	
	private CompanyService companyService;

	@Autowired
	public CompanyController(CompanyService companyService) {
		this.companyService = companyService;
	}

	@PostMapping(value = "/createCompany", headers = "Accept=application/json")
	public ResponseEntity<?> createCompany(@RequestBody Company company){
		HashMap<String, Object> json = new HashMap<>();
		json.put("mensaje", "Company successfully created");
		companyService.createCompany(company);
		return new ResponseEntity<>(json, HttpStatus.OK);
	}

	@GetMapping(value = "/listCompanies" , headers = "Accept=application/json")
	public ResponseEntity<List<Company>> listCompanies(){
		List<Company> list = companyService.listCompany();
		return new ResponseEntity<List<Company>>(list, HttpStatus.OK);
	}

	@GetMapping(value = "/searchCompanyId/{id}" , headers = "Accept=application/json")
	public ResponseEntity<?> searchId(@PathVariable Long id){
		Company companyDB = companyService.searchIdCompany(id);
		if (companyDB != null) {
			return new ResponseEntity<Company>(companyDB, HttpStatus.OK);
		}
		return new ResponseEntity<>("Company does not exist", HttpStatus.NOT_FOUND);
	}

	@PutMapping(value = "/updatedCompany/{id}", headers = "Accept=application/json")
	public ResponseEntity<?>updated(@RequestBody Company companyNew, @PathVariable Long id){
		Company companyDB = companyService.searchIdCompany(id);
		HashMap<String, Object> json = new HashMap<>();
		if (companyDB != null) {
			companyDB.setName(companyNew.getName());
			companyDB.setContact_number(companyNew.getContact_number());
//			companyDB.setContact_links(companyNew.getContact_links());
			companyService.updateCompany(companyDB);
			json.put("mensaje", "Company updated");
			return new ResponseEntity<>(json, HttpStatus.OK);
		}
		json.put("mensaje", "Company does not exist");
		return new ResponseEntity<>(json, HttpStatus.NOT_FOUND);
	}

	@DeleteMapping(value = "/eliminarCompania/{id}", headers = "Accept=application/json")
	public ResponseEntity<?>deleteCompany(@PathVariable Long id){
		Company companyDB = companyService.searchIdCompany(id);
		HashMap<String, Object> json = new HashMap<>();

		if (companyDB != null) {
			companyService.deleteCompany(id);
			json.put("mensaje", "Company successfully eliminated");
			return new ResponseEntity<>(json, HttpStatus.OK);
		}
		json.put("mensaje", "Company does not exist");
		return new ResponseEntity<>(json, HttpStatus.NOT_FOUND);
	}
}

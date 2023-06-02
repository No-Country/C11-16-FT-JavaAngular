package com.nocountry.javaangular.controller;
import com.nocountry.javaangular.domain.Order;
import com.nocountry.javaangular.domain.Trip;
import com.nocountry.javaangular.service.interfaces.OrderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/order")
@CrossOrigin("*")
public class OrderController {
	
	private OrderService orderService;
	
	@Autowired
    public OrderController(OrderService orderService) {
		this.orderService = orderService;
	}

	@GetMapping(value = "/searchOrderId/{id}", headers = "Accept=application/json")
    public ResponseEntity<?> searchxId(@PathVariable Long id){
		Order orderDB = orderService.searchById(id);
		if (orderDB != null) {
			return new ResponseEntity<>(orderDB, HttpStatus.OK);
		}
        return new ResponseEntity<>("Order does not exist", HttpStatus.OK);
    }
	
	@PostMapping(value = "/registerOrder", headers = "Accept=application/json")
	public ResponseEntity<?> registerOrder(@RequestBody Order order){
		HashMap<String, Object> json = new HashMap<>();
		json.put("mensaje", "Order created successfully");
		orderService.createOrder(order);
		return new ResponseEntity<>(json, HttpStatus.OK);
    }
    
	@PutMapping(value = "/modifyOrder/{id}", headers = "Accept=application/json")
	public ResponseEntity<?> modifyOrder(@RequestBody Order newOrder,@PathVariable Long id){
		Order orderDB = orderService.searchById(id);
		HashMap<String, Object> json = new HashMap<>();
		if (orderDB != null) {
			orderDB.setStatus(newOrder.getStatus());
			orderDB.setSeat(newOrder.getSeat());
			orderDB.setPayment_status(newOrder.getPayment_status());
			orderDB.setPayment_method(newOrder.getPayment_method());
			orderDB.setTaxes(newOrder.getTaxes());
			orderDB.setFinal_price(newOrder.getFinal_price());
			
			orderService.updateOrder(orderDB);
			json.put("mensaje", "Successfully updated order");
			return new ResponseEntity<>(json, HttpStatus.OK);	
		}
		json.put("mensaje", "Order does not exist");
		return new ResponseEntity<>(json, HttpStatus.NOT_FOUND);
    }
}

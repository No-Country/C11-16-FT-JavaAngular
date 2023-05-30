package com.nocountry.javaangular.service.interfaces;

import com.nocountry.javaangular.domain.Order;

public interface OrderService {
	
	void createOrder(Order order);
	Order searchById(Long id);
	void updateOrder(Order order);

}

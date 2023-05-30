package com.nocountry.javaangular.service.implementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nocountry.javaangular.domain.Order;
import com.nocountry.javaangular.repository.OrderRepository;
import com.nocountry.javaangular.service.interfaces.OrderService;

@Service
public class OrderServiceImpl implements OrderService {

	private OrderRepository orderRepository;
	
	@Autowired
	public OrderServiceImpl(OrderRepository orderRepository) {
		this.orderRepository = orderRepository;
	}

	@Override
	public void createOrder(Order order) {
		orderRepository.save(order);
	}

	@Override
	public Order searchById(Long id) {
		return orderRepository.findById(id).orElse(null);
	}

	@Override
	public void updateOrder(Order order) {
		orderRepository.saveAndFlush(order);
	}

}

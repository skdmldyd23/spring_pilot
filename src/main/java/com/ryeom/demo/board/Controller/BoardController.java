package com.ryeom.demo.board.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class BoardController {

	@RequestMapping("/tryWrite")
	public String login(Model model) {
		
		//추후에 내용을 확인하는 곳으로 가야함.
		//추후에 내용을 확인하는 곳으로 가야함.
		//추후에 내용을 확인하는 곳으로 가야함.
		//index 말고!!!
		return "index";
	}
	
	
}
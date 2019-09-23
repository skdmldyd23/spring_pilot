package com.ryeom.demo.board.Service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import com.ryeom.demo.board.DAO.BoardDAO;
import com.ryeom.demo.board.DTO.Boards;


@Service
public class BoardService_Impl implements BoardService {

	@Inject
	private BoardDAO boardDAO;
	
	@Override
	public List<Boards> boardTest() {
		// TODO Auto-generated method stub
		return boardDAO.boardTest();
	}
}

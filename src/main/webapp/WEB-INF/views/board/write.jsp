<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page session="false"%>
<html>
<head>
<title>write.jsp</title>
</head>
<body>
	<a href="/">홈</a>
	<h1>WRITE</h1>
	<form name="writeFrom" action="/tryWrite" method="post"
		onsubmit="return secWrite()">
		<P>
			title <input type="text" name="board_Contents" id="board_Title">
		</P>
		<br />
		<textarea rows="30" cols="160" name="board_Contents"
			id="board_Contents"></textarea>
		<br /> 
		<input type="submit" value="작성" /> 
		<input type="button"
			value="취소" id="submitt" />

		<script src="./javascript/writejs.js"></script>
	</form>
</body>
</html>

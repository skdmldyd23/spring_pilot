
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<html>
<head>
<title>index.jsp</title>
</head>
<body>
	<a href="/">홈</a>
	<h1>INDEX</h1>

	<P>안녕!</P>
	<c:if test="${signedId == null}">
		<a href="login">로구잉</a>
		<a href="write">롸잇</a>
		<a href="join">회원가입</a>
	</c:if>
	<c:if test="${signedId != null}">
		<P>${signedId}</P>
		<P>${signedName}</P>
		<a href="myInfo?user_Number=${signedNumber}">내정보</a>
		<a href="myPosts?board_Writer=${signedNumber}" >내글</a>
		<a href="write">롸잇</a>
		<a href="logout">로그아웃</a>
	</c:if>

	<%-- <c:forEach var="t" items="${test}">
 <p>${t.user_Number} ${t.user_ID} 
 ${t.user_PW} ${t.user_Name} 
 ${t.user_Email} ${t.user_postcode}
 ${t.user_roadAddress} ${t.user_jibunAddress}</p>
</c:forEach> --%>

	<c:forEach var="t" items="${boardtest}">
		<p>${t.board_Number}<a href="details"> ${t.board_Title} </a>
			${t.board_Contents} ${t.board_Date} ${t.user_Name}
		</p>
	</c:forEach>
</body>
</html>

console.log('loaded');
const log = console.log;

document.getElementById('submitt').addEventListener('click',()=>{
	history.back(-1)
} );

function sendIt(form) {

	var email = document.f.EMAIL.value;
	var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
	var msg, ss, cc;
	// 정규표현식
	log("이멩", email)
	log("ㅑㅇ야야야", document.f.ID.value)
	

	
	// 아이디 입력여부 검사
	if (document.f.ID.value == "") {
		alert("아이디를 입력하지 않았습니다.")
		f.ID.focus();
		return false;
	}

	// 아이디 유효성 검사 (영문소문자, 숫자만 허용)
	for (var i = 0; i < document.f.ID.value.length; i++) {
		ch = document.f.ID.value.charAt(i)
		if (!(ch >= '0' && ch <= '9') && !(ch >= 'a' && ch <= 'z')
				&& !(ch >= 'A' && ch <= 'Z')) {
			alert("아이디는 영문 대소문자, 숫자만 입력가능합니다.")
			document.f.ID.focus();
			document.f.ID.select();
			return false;
		}
	}

	// 아이디에 공백 사용하지 않기
	if (document.f.ID.value.indexOf(" ") >= 0) {
		alert("아이디에 공백을 사용할 수 없습니다.")
		document.f.ID.focus();
		document.f.ID.select()
		return false;
	}

	// 아이디 길이 체크 (4~12자)
	if (document.f.ID.value.length < 4 || document.f.ID.value.length > 12) {
		alert("아이디를 4~12자까지 입력해주세요.")
		document.f.ID.focus();
		document.f.ID.select();
		return false;
	}

	// 비밀번호 입력여부 체크
	if (document.f.PASSWORD.value == "") {
		alert("비밀번호를 입력하지 않았습니다.")
		document.f.PASSWORD.focus();
		return false;
	}

	if (f.PASSWORD.value == f.ID.value) {
		alert("아이디와 비밀번호가 같습니다.")
		document.f.PASSWORD.focus();
		return false;
	}

	// 비밀번호 길이 체크(4~8자 까지 허용)
	if (document.f.PASSWORD.value.length < 4
			|| document.f.PASSWORD.value.length > 12) {
		alert("비밀번호를 4~12자까지 입력해주세요.")
		document.f.PASSWORD.focus();
		document.f.PASSWORD.select();
		return false;
	}
	// 비밀번호와 비밀번호 확인 일치여부 체크
	if (document.f.PASSWORD.value != document.f.PASSWORD1.value) {
		alert("비밀번호가 일치하지 않습니다")
		document.f.PASSWORD1.value = ""
		document.f.PASSWORD1.focus();
		return false;
	}

	if (document.f.EMAIL.value == "") {
		alert("E-mail을 입력하지 않았습니다.")
		document.EMAIL.focus();
		return false;
	}
	if (exptext.test(email) == false) {
		// 이메일 형식이 알파벳+숫자@알파벳+숫자.알파벳+숫자 형식이 아닐경우
		alert("E-mail의 형식이 올바르지 않습니다.");
		document.addjoin.email.focus();
		return false;
	}

	for (var i = 0; i < document.f.EMAIL.value.length; i++) {
		chm = document.f.EMAIL.value.charAt(i)
		if (!(chm >= '0' && chm <= '9') && !(chm >= 'a' && chm <= 'z')
				&& !(chm >= 'A' && chm <= 'Z') && !(chm == '@')
				&& !(chm == '.')) {
			alert("E-mail은 영문 대소문자, 숫자만 입력가능합니다.")
			document.f.EMAIL.focus();
			document.f.EMAIL.select();
			return false;
		}
	}

	if (document.f.NAME.value == "") {
		alert("이름을 입력하지 않았습니다.")
		document.f.name.focus();
		return false;
	}

	if (document.f.NAME.value.length < 2) {
		alert("이름을 2자 이상 입력해주십시오.")
		document.f.name.focus();
		return false;
	}

	if (document.f.postcode.value == "") {
		alert("주소를 입력하세요.")
		return false;
	}

	if (document.f.detailAddress.value < 2) {
		alert("상세주소를 입력하세요.")
		document.f.detailAddress.focus();
		return false;
	}

	// 실행

	const userData = {
		user_ID : document.f.ID.value,
		user_PW : document.f.PASSWORD.value,
		user_Name : document.f.NAME.value,
		user_Email : document.f.EMAIL.value,
		user_postcode : document.f.postcode.value,
		user_roadAddress : document.getElementById('roadAddress').value,
		user_jibunAddress : document.getElementById('jibunAddress').value,
		user_detailAddress : document.getElementById('detailAddress').value,
		user_extraAddress : document.getElementById('extraAddress').value
	}

	log('여기는 자스입니다.\n', userData)
	// document.f.submit();
	return true;

	// signUpSubmit(userData);
}

// function signUpSubmit(userData) {
// $.ajax({
// url : "./insertAccount", // 클라이언트가 HTTP 요청을 보낼 서버의 URL 주소
// data : userData, // HTTP 요청과 함께 서버로 보낼 데이터
// method : "POST", // HTTP 요청 메소드(GET, POST 등)
// dataType : "json" // 서버에서 보내줄 데이터의 타입
// }) // HTTP 요청이 성공하면 요청한 데이터가 done() 메소드로 전달됨.
// .done(function(json) {
// log('done')
//
// })// HTTP 요청이 실패하면 오류와 상태에 관한 정보가 fail() 메소드로 전달됨.
// .fail(function() {
//
// log('fail')
// }).always(function(xhr, status) {
// log('always')
//
// });
// }

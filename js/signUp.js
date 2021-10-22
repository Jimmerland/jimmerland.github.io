
$("#userId").focusout(function () {
    var userId = $("#userId").val();
    var text = $("#idConfirm");
    
    const regExp1 = /^[a-z][a-z\d]{3,11}$/;
    const regExp1sub =/^[a-z]+[a-zA-Z\d]{3,11}$/;
    const regExp1sub2 = /[0-9]$/;

    if(userId=="") {
      idConfirm.innerText = "필수 입력사항입니다";
      text.css("color", "red");
    }
    else if(!regExp1sub.test(userId)) {
        idConfirm.innerText = "아이디 시작은 소문자로 해주세요.";
        text.css({"color": "red",
                "font-size":"14px"});         
    }
    else if(!regExp1sub2.test(userId)){
        idConfirm.innerText = "아이디에는 숫자가 포함되야합니다.";
        text.css({"color": "red",
              "font-size":"14px"});  
    }
    else if(!regExp1.test(userId)) {
      idConfirm.innerText = "아이디는 영문,숫자포함 4~12자리";
      text.css({"color": "red",
                "font-size":"14px"});         
    }
    else if(regExp1.test(userId)) {
      idConfirm.innerText = "사용가능한 아이디입니다.";
      text.css({"color": "blue",
                "font-size":"14px"});
    }
});

//https://beagle-dev.tistory.com/114

const $pwd1Valid = $("#pwd");
$pwd1Valid.focusout(function() {
  var pwd1 = $("#pwd").val();
  var text = $("#pwdConfirm1");
  const regExp2= /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,15}$/;
  if(!regExp2.test(pwd1)) {
    pwdConfirm1.innerText = "숫자/문자/특수문자/포함된 8~15자리";
    text.css({"color": "red",
                  "font-size":"14px"});            
  }
  else if(regExp2.test(pwd1)){
    pwdConfirm1.innerText = "사용가능합니다.";
    text.css({"color": "blue",
                  "font-size":"14px"}); 
    }
});

$("#pwdChk").focusout(function () {
    var pwd1 = $("#pwd").val();
    var pwd2 = $("#pwdChk").val();
    const text = $("#pwdConfirm2");
    if(pwd1=="") {
      pwdConfirm2.innerText = "비밀번호를 입력해 주세요.";
      text.css("color", "red");
    }
    else if(pwd1 != pwd2) {
      pwdConfirm2.innerText = "비밀번호가 일치하지 않습니다.";
      text.css("color", "red");
    }
    else if(pwd1 == pwd2) {
      pwdConfirm2.innerText = "비밀번호가 일치합니다.";
      text.css({"color": "blue",
                 "font-size":"14px"});
    }
});

$("#userName").focusout(function () {
    var userName = $("#userName").val();
    var text = $("#userNameConfirm");
    var regExp3 = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣][ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{1,3}$/;
    if(userName =="") {
      userNameConfirm.innerText = "필수 입력사항입니다";
      text.css("color", "red");
    }
    else if(!regExp3.test(userName)) {
      userNameConfirm.innerText = "한글 2글자이상 4글자 이하입니다";
      text.css({"color": "red",
                "font-size":"14px"});
    }
    else if(regExp3.test(userName)) {
        userNameConfirm.innerText = "사용가능합니다";
        text.css({"color": "blue",
                   "font-size":"16px"});
    }
});

$("#email").focusout(function () {
    var userEmail = $("#email").val();
    var text = $("#emailConfirm");
    const regExp4 = /^[\w]{4,}@[\w]+(\.[\w]+){1,3}$/;
    if(userEmail=="") {
      emailConfirm.innerText = "필수 입력사항입니다";
      text.css("color", "red");
    }
    else if(!regExp4.test(userEmail)) {
      emailConfirm.innerText = "올바르지 않은 이메일입니다.";
      text.css("color", "red");
    }
    else if(regExp4.test(userEmail)) {
        emailConfirm.innerText = "사용가능한 이메일입니다.";
        text.css({"color": "blue",
                   "font-size":"14px"});
    }
});

$(document.logInform).submit(e => {
    //가입완료
    alert("가입완료");
    saveMember();
  });

function MemberMap(userId,pwd,userName,gender,email){
    this.userId = userId; //아이디
    this.pwd = pwd; //비밀번호 
    this.userName = userName; //이름 
    this.gender = gender; //성별
    this.email = email; //이메일 
    this.signUpDate = Date.now();
}

const saveMember = () => {
  var gender = $("input[name='gender']:checked").val();

  const member = new MemberMap(userId.value, pwd.value, userName.value, gender, email.value);
  const members = JSON.parse(localStorage.getItem('members')) || [];
  members.push(member);
  localStorage.setItem('members', JSON.stringify(members));
}

function regExp(regExp, el){
    if(regExp.test(el.value))
        return true;
    //적합한 문자열이 아닌 경우
    el.value="";
    el.focus();
    return false;
}

 function signUpCheck(){
    var userId = document.getElementById("userId");
    var pwd = document.getElementById("pwd");
    var pwdChk = document.getElementById("pwdChk");
    var userName = document.getElementById("userName");
    var email = document.getElementById("email");
    var gender = document.getElementById("gender");

    //1.아이디검사
    //첫글자는 반드시 영소문자로 이루어지고, 
    //숫자가 하나이상 포함되어야함.
    //아이디의 길이는 4~12글자사이

    var regExp1 = /^[a-z][a-z\d]{3,11}$/;
    var regExp2 = /[0-9]/;
    if(!regExpTest(regExp1
                  ,userId
                  ,"아이디는 영소문자로 시작하는 4~12글자입니다."))
        return false;
    if(!regExpTest(regExp2
                  ,userId
                  ,"아이디는 숫자를 하나이상 포함하세요."))
        return false;


    //2.비밀번호 확인 검사
    //숫자/문자/특수문자/ 포함 형태의 8~15자리 이내의 암호 정규식 
    //전체길이검사 /^.{8,15}$/
    //숫자하나 반드시 포함 /\d/ 
    //영문자 반드시 포함 /[a-zA-Z]/
    //특수문자 반드시 포함  /[\*!&]/
        
    var regExpArr = [/^.{8,15}$/, /\d/, /[a-zA-Z]/, /[\*!&]/];

    for(let i = 0; i < regExpArr.length; i++){
        if(!regExpTest(regExpArr[i], pwd, "비밀번호는 8~15자리 숫자/문자/특수문자를 포함해야합니다.")){
            return false;
        }
    }
  
    if(!isEqualPwd()){
        return false;
    }

    //3.이름검사
    //한글2글자 이상만 허용. [가-힣] 으로 해도되긴 하지만 자음만(ㄱㄴㄷㄹ)있으면 필터링이 안됨
    var regExp3 = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,}$/;
    if(!regExpTest(regExp3,userName,"한글2글자이상 입력하세요."))
        return false;


    //5.이메일 검사
    // 4글자 이상(\w = [a-zA-Z0-9_], [\w-\.]) @가 나오고
    // 1글자 이상(주소). 글자 가 1~3번 반복됨
    if(!regExpTest(/^[\w]{4,}@[\w]+(\.[\w]+){1,3}$/, email, "이메일 형식에 어긋납니다."))
            return false;

    document.signUpForm.submit();
  }

function isEqualPwd(){
  if(pwd.value == pwdChk.value){
      return true;
  }
  else{
    alert("비밀번호가 일치하지 않습니다.");
    pwd.select(); 
    return false;
  }
}

function regExpTest(regExp, el, msg){
    if(regExp.test(el.value))
        return true;
    //적합한 문자열이 아닌 경우
    alert(msg);
    el.value="";
    el.focus();
    return false;
}
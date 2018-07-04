function message(){
	$(".message_panel").css("display","block");
	$("#h3").html("你的问题");
	$("#solveId").click(function() {
		submit();
	})
}
function submit(){
	var content = $("#txtCon").val();
	var user = JSON.parse(sessionStorage.getItem('user'));

	if (user == null) {
		login();
	} else if (content == "" ) {
		alert("填写你的内容");
	}
	else {
		var id = user.id;
		var name = user.name;
		var date = new Date();
		var time = date.getFullYear() + "-"+ (date.getMonth() + 1) + "-" + date.getDate();
		$.ajax({
			type:"post",
			url:"../../ObjectServlet?method=message",
			async:false,
			data:{
				"type":"add",
				"time": time,
				"content": content,
				"account_id": id
			},
			success:function(data){
//				var str = "";
//				var jsonAccount = getAccount(id);
//				var account = JSON.parse(jsonAccount);
//				var flag = document.createDocumentFragment();
//				str += '<div class="oldMessage" id="messages">';
//				if (account[0].image == "") {
//					str += '<img src="../images/kenan.jpg" class="headPortrait">';
//				} else {
//					str += '<img src="' + account[0].image + '" class="headPortrait">';
//				}
//
//				str += '<div class="oldMessage_content">';
//				str += '<div id="content">';
//				str += '<span id="name">' + account[0].name +'：</span>';
//				str += '<span id="problem">'+ content +'</span>';
//				str += '</div><div><span id="time">';
//				str += time + '</span><div class="oper">';
//				str += '<span onclick="getMore(' + message[0].id + ')">更多 | </span><span onclick="solveProblem(' + message[i].id + ')>解疑</span>';
//				str += '</div></div></div></div>';
//				flag.innerHTML += str;
//
//				document.getElementById("AllProblems").appendChild(flag);
				location.reload();
				back();
			},
			error:function(data){

			}
		})
	}
}
function back(){
	$(".message_panel").css("display","none");
	
}

window.onload = function() {
	var url = location.search;
	var index = decodeURI(url).indexOf("?");
	var columnName = decodeURI(url).substring(index + 1);
	var jsonMessage = getMessage(columnName);
	var message = JSON.parse(jsonMessage);
	var str = "";
	for(var i = message.length - 1; i >= 0 ; i--){
		var jsonAccount = getAccount(message[i].account_id);
		var account = JSON.parse(jsonAccount);
		str += '<div class="oldMessage" id="messages">';
		if (account[0].image == "") {
			str += '<img src="../images/kenan.jpg" class="headPortrait">';
		} else {
			str += '<img src="' + account[0].image + '" class="headPortrait">';
		}

		str += '<div class="oldMessage_content">';
		str += '<div id="content">';
		str += '<span id="name">' + account[0].name +'：</span>';
		str += '<span id="problem">'+ message[i].content +'</span>';
		str += '</div><div><span id="time">';
		str += message[i].time + '</span><div class="oper">';
		str += '<span onclick="getMore(' + message[i].id + ')">更多 | </span><span onclick="solveProblem(' + message[i].id + ')">解疑</span>';
		str += '</div></div></div></div>';
	}

	$('#AllProblems').html(str);
}

function getMessage(columnName) {
	var message = "";
	$.ajax({
		type:"post",
		url:"../../ObjectServlet?method=message",
		async:false,
		data:{
			"type":"select"
		},
		success:function(data){
			message = data;
		},
		error:function(data){

		}
	})
	return message;
}

function getAccount(accountId){
	var account = "";
	$.ajax({
		type:"post",
		url:"../../ObjectServlet?method=account",
		async:false,
		data:{
			"type":"select",
			"account_id":accountId,
		},
		success:function(data){
			account = data;
		},
		error:function(data){

		}
	})
	return account;
}

function getMore(id) {
	self.location.href = "messageShow.html?" + id;
}

function login() {
	self.location.href = "login.html";
}

function solveProblem(id) {
	$(".message_panel").css("display","block");
	$("#h3").html("答疑");
	
	$("#solveId").click(function() {
		solveSubmit(id);
	})
}

function solveSubmit(messageId){
	var jsonUser = sessionStorage.getItem("user");
	if(jsonUser != null){
		var user = JSON.parse(jsonUser);
		accountId = user.id;
		addreply(messageId, accountId);
	}else{
		self.location.href = "login.html";
	}
}

function addreply(messageId, accountId){
	var content = $("textarea").val();
	var time = new Date();
	var replyTime = time.getFullYear() + "-" + (time.getMonth()+1) + "-" + time.getDate();
	if(content != ""){
		$.ajax({
			type:"post",
			url:"../../ObjectServlet?method=reply",
			async:false,
			data:{
				"type":"add",
				"message_id":messageId,
				"account_id":accountId,
				"reply":content,
				"reply_time":replyTime
			},
			success:function(data){
				$("textarea").val("");
				allReply(messageId);
			},
			error:function(data){

			}
		})
	}
}

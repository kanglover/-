/**
 * 
 */
window.onload = function(){
	var url = location.search;
	var index = url.indexOf("?") + 1;
	var messageId = url.substring(index);
	var jsonMessage = getMessage(messageId);
	var message = JSON.parse(jsonMessage);
	$("#questionContent").html(message[0].content);
	$(".questionTime").html(message[0].time);
	var accountId = message[0].account_id;
	var jsonAccount = getAccount(accountId);
	var account = JSON.parse(jsonAccount);
	$("#name").html(account[0].name);
	if(account[0].image != ""){
		$("#touxiang").attr("src", account[0].image);
	}else{
		$("#touxiang").attr("src", "../images/kenan.jpg");
	}
	allReply(messageId);
	
}

function submit(){
	var url = location.search;
	var index = url.indexOf("?") + 1;
	var messageId = url.substring(index);
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

function getMessage(messageId){
	var message = "";
	$.ajax({
		type:"post",
		url:"../../ObjectServlet?method=message",
		async:false,
		data:{
			"type":"select",
			"message_id":messageId,
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

function allReply(messageId){
	var jsonAllReply = getAllReply(messageId);
	var  allReply= JSON.parse(jsonAllReply);
	var str = "";
	for(var i = allReply.length - 1; i >= 0; i--){
		var jsonAccount = getAccount(allReply[i].accountId);
		var account = JSON.parse(jsonAccount);
		str += '<div class="reply" id="reply">';
		str += '<div class="replyInformation">';
		str += '<img src="../images/kenan.jpg" id="touxiang" width="70" height="70">';
		str += '<p id="replyName">'+ account[0].name +'</p>';
	    str += '</div><div class="replyQuestion" id="replyQuestion">';
		str += '<div class="replyContent">' + allReply[i].reply +'</div>';
		str += '<div class="replyTime">'+allReply[i].replyTime+'</div>';
		str += '</div></div>';
	}
	$('#allReply').html(str);
}

function getAllReply(messageId){
	var allReply = "";
	$.ajax({
		type:"post",
		url:"../../ObjectServlet?method=reply",
		async:false,
		data:{
			"type":"select",
			"message_Id":messageId,
		},
		success:function(data){
			allreply = data;
		},
		error:function(data){

		}
	})
	return allreply;
}
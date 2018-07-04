/**
 * 
 */

function allMessage(){
	var all = selectMessage();
	var message = JSON.parse(all);
	var flag = document.createDocumentFragment();
	for (var i = 0; i < message.length; i++) {
		var jsonAccount = selectAccount(message[i].account_id);
		var account = JSON.parse(jsonAccount);
		var tr = document.createElement("tr"); 
		var str = "";
		str += '<td><input type="checkbox" name="id" onclick="judgeAll()" value="'+ message[i].id + '" /></td>';
		str += '<td>' + account[0].name + '</td>';
		str += '<td>' + account[0].phone + '</td>';
		str += '<td>' + account[0].email + '</td>';
		str += '<td>' + message[i].note + '</td>';
		str += '<td>' + message[i].time + '</td>';
		str += '<td><div class="button-group"><a class="button border-green"'; 
		str +=	' onclick="view('+ message[i].id +')"><span class="icon-search"></span> 查看</a>';
		str += '<a class="button border-red" href="javascript:void(0)"'; 
		str +=	' onclick="del(this, '+ message[i].id +')"><span class="icon-trash-o"></span>删除</a></div></td>';
		tr.innerHTML = str;
		flag.appendChild(tr);
		
		exhibition();
	}
	document.getElementById("tbody").appendChild(flag);

	//分页
	exhibition();
}

function selectAccount(account_id){
	var account;
	$.ajax({
		type:"post",
		url:"../../ObjectServlet?method=account",
		async:false,
		data:{
			"type":"select",
			"account_id": account_id,
		},
		success:function(data){
			account = data;
		},
		error:function(data){

		}
	})
	return account;
}

function selectReply(messageId){
	$.ajax({
		type:"post",
		url:"../../ObjectServlet?method=reply",
		async:false,
		data:{
			"type":"select",
			"message_id":messageId,
		},
		success:function(data){
			reply = data;
		},
		error:function(data){
		}
	})
	return reply;
}

function selectMessage(){
	var all = "";
	$.ajax({
		type:"post",
		url:"../../ObjectServlet?method=message",
		async:false,
		data:{
			"type":"select",
		},
		success:function(data){
			all = data;
		},
		error:function(data){

		}
	})
	return all;
}

function del(row,id) {
	if (confirm("您确定要删除吗?")) {
		delReply(id);
		delMessage(row, id);
		exhibition();
	}
}

function delMessage(row, id){
	$.ajax({
		type:"post",
		url:"../../ObjectServlet?method=message",
		async:true,
		data:{
			"type":"delete",
			"id": id
		},
		success:function(data){
			$(row).parent().parent().parent().remove();
		},
		error:function(data){
		}
	})
}

function delReply(id){
	$.ajax({
		type:"post",
		url:"../../ObjectServlet?method=reply",
		async:true,
		data:{
			"type":"delete",
			"message_id": id
		},
		success:function(data){
		},
		error:function(data){
		}
	})
}

function judgeAll(){
	var falg = true;
	$("input[name='id']").each(function() {
		if(this.checked == false){
			falg = false;
		}
	});

	if(falg){
		$("#checkall").prop("checked", falg);
	}else{
		$("#checkall").prop("checked", falg);
	}
}

function checkAll() {
	if($('#checkall').is(':checked')){
		$("input[name='id']").each(function() {
			this.checked = true;
		});
	}else{
		$("input[name='id']").each(function() {
			this.checked = false;
		});
	}
}

function DelSelect() {
	var index = 0;
	var WnoArray = [];
	var rowArray = [];
	$("input[name='id']").each(function() {
		if(this.checked == true){
			WnoArray.push(this.value);
			rowArray.push(index);
		}
		index++;
	});
	if (WnoArray.length == 0) {
		alert("选择你需要删除的项");
	} else {
		if (confirm("您确定要删除吗?")) {
			delAllMessage(WnoArray, rowArray);
		}
	}
} 

function delAllMessage(WnoArray, rowArray){
//	for(var i = 0; i < WnoArray.length; i++){
//		delReply(WnoArray[i]);
//	}
	$.ajax({
		url:"../../ObjectdeleteServlet?method=message",
		type: "post",
		data:{
			id: ""+WnoArray,
		},
		success: function() {
			alert("删除成功");
			for(var i = 0; i < rowArray.length; i++){
				document.getElementById('tbody').deleteRow(rowArray[i] - i);
			}
			$("#checkall").prop("checked", false);
		},
	});
	exhibition();
}

function view(id){
	location.href = "../html/messageShow.html?" + id;
}

function show(){
	var url = location.search;
	var index = url.indexOf("?");
	var jsonMessage = selectMessage(url.substring(index + 1));
    var message = JSON.parse(jsonMessage);
    var jsaonAccount = selectAccount(message[0].account_id);
    var jsonReply = selectReply(message[0].id);
	var account = JSON.parse(jsaonAccount);
	var reply = JSON.parse(jsonReply);
	$("#name").val(account[0].name);
	$("#phone").val(account[0].phone);
	$("#email").val(account[0].email);
	$("#content").val(message[0].content);
	$("#note").val(message[0].note);
	var content = "";
	for(var i = 0; i < reply.length; i++){
		var jsonReplyAccount = selectAccount(reply[i].accountId);
		var replyAccount = JSON.parse(jsonReplyAccount);
		content += reply[i].replyTime + " " + replyAccount[0].name + "：\n";
		content += "    " + reply[i].reply + "\n\n";
	}
	$("#reply").val(content);
	$("#time").val(message[0].time);
	$("input,textarea").attr("disabled", "true");
	$("input,textarea").css("background","white");
	$("input,textarea").css("border","none");
}

function back(){
	location.href = "../html/message.html";
}
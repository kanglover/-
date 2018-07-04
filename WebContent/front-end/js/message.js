function message(){
	$(".message_panel").css("display","block");
}
function submit(){
	var content = $("#txtCon").val();
	if(content != ""){
		$(".message_panel").css("display","none");
	}
}
function back(){
	$(".message_panel").css("display","none");
}

window.onload = function() {
	var url = location.search;
	var index = decodeURI(url).indexOf("?");
	var columnName = decodeURI(url).substring(index + 1);
	getContent(columnName);
}

function getContent(columnName) {
	$.ajax({
		type:"post",
		url:"../../ObjectServlet?method=message",
		async:true,
		data:{
			"type":"select"
		},
		success:function(data){
			var arry = JSON.parse(data);
			var str = "";
			$("#messages").html("");
			for (var i = 0; i < arry.length; i++) {
				str += '<img src="../images/kenan.jpg" class="headPortrait">';
			}

			document.getElementById("messages").appendChild(flag);
		},
		error:function(data){

		}
	})
}
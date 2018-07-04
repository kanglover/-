window.onload = function() {
	var url = location.search;
	var index = decodeURI(url).indexOf("?");
	var columnName = decodeURI(url).substring(index + 1);
	getContent(columnName);
}

function getContent(columnName) {
	$.ajax({
		type:"post",
		url:"../../ObjectServlet?method=article",
		async:true,
		data:{
			"type":"select",
			"column_name": columnName,
		},
		success:function(data){
			var arry = JSON.parse(data);
			var str = "";
			$("#content").html("");
			for (var i = 0; i < arry.length; i++) {
				str += '<div class="block">';
				str += '<img src="' + arry[i].image + '" /><span>' + arry[i].title + '</span></div>'
			}
			$("#content").html(str);
		},
		error:function(data){

		}
	})
}
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
			var flag = document.createDocumentFragment();
			for (var i = 0; i < arry.length; i++) {
				var p = document.createElement("p"); 
				p.innerText += arry[i].content;
				flag.appendChild(p);
			}

			document.getElementById("content").appendChild(flag);
		},
		error:function(data){

		}
	})
}
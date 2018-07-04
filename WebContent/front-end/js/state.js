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
			var j = 0;
			var flag = document.createDocumentFragment();
			for (var i = arry.length - 1; i >= 0; i--) {
				if (j == 5) {
					break;
				}
				j++;
				
				var str = "";
				var li = document.createElement("li"); 
				str += '<a target="center" onclick="lookState('+ arry[i].id +')">' + arry[i].title + '</a>' 
				str += '<span class="time">' + arry[i].createTime + '</span>'
				li.innerHTML += str;
				flag.appendChild(li);
			}
			document.getElementById("contentTrendsMid").appendChild(flag);
		},
		error:function(data){

		}
	})
}

function lookState(id) {
	 parent.location.href="courseDynamic.html?" + id;
}
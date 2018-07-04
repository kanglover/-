window.onload = function() {
	var url = location.search;
	var index = url.indexOf("?");
	var id = url.substring(index + 1);
	
		$.ajax({
			type:"post",
			url:"../../ObjectServlet?method=article",
			data:{
				"type":"select",
				"id": id
			},
			success:function(data){
				var arry = JSON.parse(data);
				$("#title").html(arry[0].title);
				$("#author").html(arry[0].author);
				$("#createTime").html(arry[0].createTime);
				$("#content").html(arry[0].content);
				$("#picture").attr("src", arry[0].image);
				if (arry[0].image == "") {
					$("#picture").hide();
				}
			},
			error:function(data){

			}
		})
}
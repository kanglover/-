window.onload = function() {
	var url = location.search;
	var index = decodeURI(url).indexOf("?");
	var fatherColumn = decodeURI(url).substring(index + 1);
	var columns = getColumn(fatherColumn);

	$("#column").html(fatherColumn);
	$(".column").html(fatherColumn);
	var str = ""
		for (var i = 0; i < columns.length; i++) {
			str += '<div class="left_navigation" onclick=\'showContent(\"'+ columns[i].columnName +'\")\'>' + columns[i].columnName + '</div>';
		}
	$("#columns").html(str);

	$(".columnName").html(columns[0].columnName);

	$("#contentFrame").attr("src", "content.html?" + columns[0].columnName);
	
	if (columns[0].columnName == "教学课件") {
		$("#contentFrame").attr("src", "resource.html?" + columns[0].columnName);
	} else if (columns[0].columnName == "问答板") {
		$("#contentFrame").attr("src", "message.html?" + columns[0].columnName);
	}
}

function getInfo(columnName) {
	var arry = ""
		$.ajax({
			type:"post",
			url:"../../ObjectServlet?method=article",
			async:false,
			data:{
				"type":"select",
				"column_name": columnName,
				"isPass": "1"
			},
			success:function(data){
				arry = JSON.parse(data);
			},
			error:function(data){

			}
		})
		return arry;
}

function getColumn(fatherColumn) {
	var columns = ""
		$.ajax({
			type:"post",
			url:"../../ObjectServlet?method=part",
			async:false,
			data:{
				"type":"select",
				"father_column": fatherColumn,
			},
			success:function(data){
				arry = JSON.parse(data);
			},
			error:function(data){

			}
		})
		return arry;
}

function showContent(columnName) {
	$(".columnName").html(columnName);
	if (columnName == "课程动态") {
		$("#contentFrame").attr("src", "state.html?" + columnName);
	} else if (columnName == "教学课件" || columnName == "教学视频") {
		$("#contentFrame").attr("src", "resource.html?" + columnName);
	} else if (columnName == "问答板") {
		$("#contentFrame").attr("src", "message.html?" + columnName);
	} else {
		$("#contentFrame").attr("src", "content.html?" + columnName);
	}
}
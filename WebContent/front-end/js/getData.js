window.onload = function() {
	var introduce = getInfo("课程简介");
	$("#contentIntroduce").html(introduce[0].content);
	
	var courseDirector = getInfo("课程负责人");
	$("#directorImage").attr("src", courseDirector[0].image);
	$("#contentPrincipal").html(courseDirector[0].content);
	
	var state = getInfo("课程动态");
	var j = 0;
	var flag = document.createDocumentFragment();
	for (var i = state.length - 1; i >= 0; i--) {
		if (j == 5) {
			break;
		}
		j++;
		
		var str = "";
		var li = document.createElement("li"); 
		str += '<a target="center" onclick="lookState('+ state[i].id +')">' + state[i].title + '</a>' 
		str += '<span class="time">' + state[i].createTime + '</span>'
		li.innerHTML += str;
		flag.appendChild(li);
	}
	document.getElementById("contentTrendsMid").appendChild(flag);
	
	var members = getInfo("课程组成员");
	j = 0;
	str = "";
	for (var i = members.length - 1; i >= 0; i--) {
		if (j == 10) {
			break;
		}
		j++;
		
		if (members[i].image == "") {
			str += '<li class="trendsImg"><img src="../images/nullImage.png"/></li>';
		} else {
			str += '<li class="trendsImg"><img src="'+ members[i].image +'"/></li>';
		}
	}
	document.getElementById("carousel_ul").innerHTML = str;
	
	
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

function lookState(id) {
	 self.location.href="courseDynamic.html?" + id;
}

function more() {
	self.location.href="model.html?课程介绍";
}
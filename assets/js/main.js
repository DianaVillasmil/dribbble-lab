$(document).ready(function(){
	$.getJSON('https://api.dribbble.com/v1/users/eduardo/shots?access_token=d08b535d59f86d3adbe81d94b0a2f4a76325f7137a1f2d597f2c838700cc4dfa&callback=?', function(resp){
		console.log(resp);
		if(resp.data.length > 0){
			$.each(resp.data.reverse(), function(i, val){
				$("#dribbble-shots").prepend('<li class="list-group-item"><div class="thumbnail"><img src="' + val.images.normal + '" alt="..."><div class="caption"><span><i class="fa fa-link" aria-hidden="true"></i></span><ul><li><i class="fa fa-eye" aria-hidden="true"></i>' + val.views_count + '</li><li><i class="fa fa-comment-o" aria-hidden="true"></i>' + val.comments_count + '</li><li><i class="fa fa-heart" aria-hidden="true"></i>' + val.likes_count + '</li></ul></div></div></li>');
			});
		}else{
			$("#dribbble-shots").append("<li>No shots.</li>");
		}
	});

	var html = [];
  
	$.function(project) {
    html.push('<li><a href="' + project.user.html_url + '/projects/' + project.id + '" target="_blank">');
  	html.push('<b>' + project.name + ': </b> [' + project.shots_count + ']</a>');
    html.push(' <i>by ' + project.user.username + '</i></li>');
  };
  
  $('#dribbble-shots').html(html.join(''));
});


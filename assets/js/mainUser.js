// SIDE BAR - PERFIL EDUARDO

$(document).ready( function(){
	var perfil = function(e) {
		var avatar = '<img src="' + e.avatar_url + '" alt="">'
		
			nombre = e.name 
			pais = e.location
			bio = e.bio
			rs_tw = e.links.twitter
			shots = e.shots_count
			followers = e.followers_count
			followings = e.followings_count
			buckets = e.buckets_count
			likes = e.likes_count


		$("#logo").append(avatar);
		$("#info").append("<h3>" + nombre + "</h3>" + "<span>" + pais + "</span>" + "<p>" + bio + "</p>" );
		$("fa-twitter").append(rs_tw);
		$("#valor").append("<span>" + shots + "</span>");
		$("#personas").append("<span>" + followers + "</span>");
		$(".following").append("<span>" + followings + "</span>");
		$(".buckets").append("<span>" + buckets + "</span>");
		$(".likes").append("<span>" + likes + "</span>");
	}

	$.ajax({
		url: 'https://api.dribbble.com/v1/users/eduardo/?access_token=96386721d94da7847ddfd3769b2c4e8690cdd02e001f29eff3c9b20728bab3e4',
		type: 'GET',
		dataType: 'json',
	})
	.done(function(eduardo) {
		console.log("success");
		perfil(eduardo)
	})
	.fail(function(eduardo) {
		console.log("error");
	})
	.always(function(eduardo) {
		console.log("complete");
	});
});
	
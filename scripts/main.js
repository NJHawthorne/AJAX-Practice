var ajaxInitialSettings = {
	url: 'http://www.omdbapi.com/?s=Spiderman',
	type: 'get',
	dataType: 'json',
	success: function(data) {
		var ajaxDetailedSettings = {
		url: 'http://www.omdbapi.com/?i=tt1433184',
		type: 'get',
		dataType: 'json',
		success: function(movieData) {
			console.log(movieData);
			var movieDetails = {
				title: movieData.Title,
				year: movieData.Year,
				language: movieData.Language,
				runtime: movieData.Runtime,
				plot: movieData.Plot,
				rating: movieData.imdbRating
			}
			var ajaxSendingSettings = {
				url: 'https://small-tiyfe.herokuapp.com/collections/movies',
				type: 'post',
				data: movieDetails,
				dataType: 'json',
				success: function() {
					console.log('Aaand you just submitted the dumbest movie ever.');
				},
				error: function() {
					console.log('Well, you tried.');
				},
				complete: function() {
					console.log('You made it this far. Kudos.');
				}
			}
			$.ajax(ajaxSendingSettings);
		},
		error: function(err) {
			console.log('Something broke');
			console.log(err);
		},
		complete: function() {
			console.log('Got your movie. Gooooood.');
			}
		};
		$.ajax(ajaxDetailedSettings);
	},
	error: function(err) {
		console.log('Something broke');
		console.log(err);
	},
	complete: function() {
		console.log('Well at least the javascript file read. Good job.');
	}
};

$.ajax(ajaxInitialSettings);
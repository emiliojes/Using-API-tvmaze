$(function() {
	/**
	submit search form
	*/
	$('#app-body')
		.find('form')
		.submit(function (ev){
			ev.preventDefault();
			var busqueda = $(this)
				.find('input[type="text"]')
				.val();
			alert('Se ha buscado: ' + busqueda)
		})


	$.ajax({
		url: 'http://api.tvmaze.com/shows',
		success: function (data, textStatus, xhr) {
			console.log(data)
		}
	})
})



try {

	$.ajax({
			url: "....",
			method: 'post',
			success: function(results) {
				throw Error("something did not work out...");
			});

} catch(err) {
	console.log(err);
}


$.ajax({
		url: "....",
		method: 'post',
		success: function(results) {

				$.ajax({
						url: "....",
						method: 'post',
						success: function(results) {

								$.ajax({
										url: "....",
										method: 'post',
										success: function(results) {

												$.ajax({
														url: "....",
														method: 'post',
														success: function(results) {

														}
												});
										}
								});
						}
				});

		}
});

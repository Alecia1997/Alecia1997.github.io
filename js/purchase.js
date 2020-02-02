
// clicking the remove button should delete all the rows in the table
// Prevent the form from submitting.
$(function() {
	$("#remove-submit").on("click", function(event) {
		event.preventDefault();
		$("tbody").remove();
	});
	
	
// Clicking the purchase button should add a new entry to the table 
// prevent the form from submitting
		$("#purchase-submit").on("click", function(event) {
		event.preventDefault();
		var flightsPrice = +$("#flights").find(":selected").data("price");
		var numTickets = +$("#tickets").val();
		var total = flightsPrice * numTickets;
		$('#purchase-table tr:last').after(('<tr><td>' +$('#flights').val() +'</td><td>' + $('#tickets').val() + '</td><td>' + total + '</td></tr><tr></tr><tr></tr>'));
	});	
})	





	
	
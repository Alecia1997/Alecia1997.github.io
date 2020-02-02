$(function() {
    $("#filter-button").on("click", function(event) {
        event.preventDefault();
		
        if ($("#filter").val() === "ALL") {
            $(".box").show();
}
		if ($("#filter").val() === "DOM") {
            $(".box").hide();
			$(".domestic").show();
}
		if ($("#filter").val() === "INT") {
            $(".box").hide();
			$(".international").show();  
}
		
		if ($("#filter").val() === "SAA") {
			$(".box").hide();
			$(".box").each(function() {
        if ($(this).find("td").data("airline") === "SAA") {
            $(this).show();
		} 
	});
}

		if ($("#filter").val() === "DUR") {
			$(".box").hide();
			$(".box").each(function() {
		if ($(this).find(".origin").data("origin") === "DUR"){
			$(this).show();
		} 
		if ($(this).find(".destination").data("destination") === "DUR"){
			$(this).show();
		} 
	});
}
		if ($("#filter").val() === "AFT") {
			$(".box").hide();
			$(".box").each(function() {
		if ($(this).find(".departure").data("departure") === "17:05"){
			$(this).show();
		}
		if ($(this).find(".departure").data("departure") === "15:35"){
			$(this).show();
		}
		if ($(this).find(".departure").data("departure") === "22:45"){
			$(this).show();
		}
		if ($(this).find(".departure").data("departure") === "14:20"){
			$(this).show();
		}
	});
}
}); 
	
// clicking a flight div should toggle the selected class changing the heading text from yellow to blue and back again.
	$(".flight").on("click", function() {
		$(this).toggleClass("selected h1 ");
	});
	
	
});

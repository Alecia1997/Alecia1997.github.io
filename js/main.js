$(document).ready(function() {

$("img").on("mouseenter", function() {
    var currentSource = $(this).attr("src");
    var newSource = currentSource.replace("images/", "images/alt_")
    $(this).attr("src", newSource);
});


$("img").on("mouseleave", function() {
    var currentSource = $(this).attr("src");
    var newSource = currentSource.replace("images/alt_", "images/")
    $(this).attr("src", newSource);
});
});
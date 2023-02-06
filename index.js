$(".navItems").hover(function() {

if ($(this).hasClass("navAbout")) {
    $(".navAbout").addClass("hover");
    $(".navPortfolio").removeClass("hover");
    $(".navContact").removeClass("hover");
}

else if ($(this).hasClass("navPortfolio")) {
    $(".navPortfolio").addClass("hover");
    $(".navContact").removeClass("hover");
    $(".navAbout").removeClass("hover");
}

else if ($(this).hasClass("navContact")) {
    $(".navContact").addClass("hover");
    $(".navAbout").removeClass("hover");
    $(".navPortfolio").removeClass("hover");
}

});
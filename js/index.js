$("#js-button-drawer").on("click", function () {
  $(this).toggleClass("is-checked");
  $("#js-drawer").slideToggle();
  $("body").toggleClass("is-fixed");
});

$("#js-drawer a").on("click", function () {
  if (window.innerWidth < 768) {
    $("#js-button-drawer").removeClass("is-checked");
    $("#js-drawer").slideToggle();
    $("body").removeClass("is-fixed");
  }
});

$(window).on("resize", function () {
  if (window.innerWidth >= 768) {
    $("#js-drawer").show();
    $("body").removeClass("is-fixed");
  } else {
    if (!$("#js-button-drawer").hasClass("is-checked")) {
      $("#js-drawer").hide();
    }
  }
});

$("#js-button-drawer").on("click", function () {
  $(this).toggleClass("is-checked");
  $("#js-drawer").slideToggle();
  $("body").toggleClass("is-fixed");
});

$("#js-drawer a").on("click", function () {
  $("#js-button-drawer").removeClass("is-checked");
  $("#js-drawer").slideToggle();
  $("body").removeClass("is-fixed");
});

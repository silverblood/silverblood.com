$(document).ready(function () {
  // bootstrap tooltips
  $("[data-toggle=tooltip]").tooltip({
    'container': 'body'
  });

  // populate the electronic letter delivery hyperlinks to hide them from the source
  $("a.electronic-letter-delivery").each(function () {
    var x = new Array("silverblood", ".c", "om").join("");
    var y = new Array("admin", x).join("@");
    var z = new Array("ma", "il", "to:", y).join("");
    $(this).text(y);
    $(this).attr("href", z);
  });
});
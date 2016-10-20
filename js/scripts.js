$(document).ready(function() {
  $("form#questions").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var genderPref = $("s")
    var quote = (100 - age) * 3;

    $("#rate").empty().append(quote);
    $("#quote").show();

    event.preventDefault();
  });
});

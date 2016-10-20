$(document).ready(function() {
  $("form#questions").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var genderPref = $("select#genderPref").val();
    //var result = $(".A-H").val();

  var celebrity = function(age, gender, genderPref){

      if (age < 25 && gender === "male" && genderPref === "female") {
        return ("A");
      } else if (age <  25 && gender === "male" && genderPref === "male") {
        return ("B");
      } else if (age < 25 && gender === "female" && genderPref === "male") {
        return ("C");
      } else if (age < 25 && gender === "female" && genderPref === "female") {
        return ("D");
      } else if (age > 25 && gender === "male" && genderPref === "female") {
        return ("E");
      } else if (age > 25 && gender === "male" && genderPref === "male") {
        return ("F");
      } else if (age > 25 && gender === "female" && genderPref === "male") {
        return ("G");
      } else if (age > 25 && gender === "female" && genderPref === "female") {
        return ("H");
      }
    };

    $("#output").text(celebrity);
    $("#yourceleb").show();

    event.preventDefault();
  });
});

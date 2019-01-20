
// @codekit-prepend 'lib/jquery.1.12.4.js'

$(document).ready(function () {

  $.ajax({
    url: "https://randomuser.me/api/1.2/?results=50",
    method: "GET",
    dataType: "json",

    beforeSend: function () {
      $("body").animate({
          scrollTop: 0 
      }, "fast");

      $(".loader").css("visibility", "visible");
      $("body").css("overflow", "hidden");
    },

    error: function (jqXHR, textStatus, errorThrown) {
      console.log(jqXHR);
      console.log(textStatus);
      console.log(errorThrown);
    },

    complete: function (data) {

      console.log(data.responseJSON.results)

      // if (data.responseJSON.nameError != undefined) {

      //   $(".message").removeClass("success");
      //   $(".message").fadeOut(function () {
      //     $(".message").html(data.responseJSON.nameError).addClass("error").fadeIn();
      //   });

      // }

      $(".loader").css("visibility", "hidden");
      $("body").css("overflow", "scroll");

    }
  });

})



// @codekit-prepend 'lib/jquery.1.12.4.js'
// @codekit-prepend 'lib/bootstrap.bundle.js'

$(document).ready(function() {
  findUsers("https://randomuser.me/api/1.2/", 50, 30, 40)
})

$("form").submit(function (event) {
  event.preventDefault()

  var minAge = $("#minAge").val()
  var maxAge = $("#maxAge").val()
  var numberOfResults = $("#numberOfResults").val()

  findUsers("https://randomuser.me/api/1.2/", numberOfResults, minAge, maxAge)
})

function findUsers (sourceUrl, numberOfResults, minAge, maxAge) {
  $(".loader").css("visibility", "visible")

  if (minAge == undefined) {
    var minAge = 30
  }

  if (maxAge == undefined) {
    var maxAge = 40
  }

  if (numberOfResults == undefined) {
    var numberOfResults = 50
  }

  fetch(sourceUrl + "?results=" + numberOfResults)
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      var userData = data.results

      var maleUsers = []
      var maleUserData = ""

      var femaleUsers = []
      var femaleUserData = ""

      for (var i = 0; userData.length > i; i++) {
        if (userData[i].gender == "male" && userData[i].dob.age >= minAge && userData[i].dob.age <= maxAge) {
          maleUsers.push(userData[i])
          maleUserData += "<tr><td>" + userData[i].name.title + "</td><td>" + userData[i].name.first + "</td><td>" + userData[i].name.last + "</td><td>" + userData[i].dob.age + "</td></tr>"
        }

        if (userData[i].gender == "female" && userData[i].dob.age >= minAge && userData[i].dob.age <= maxAge) {
          femaleUsers.push(userData[i])
          femaleUserData += "<tr><td>" + userData[i].name.title + "</td><td>" + userData[i].name.first + "</td><td>" + userData[i].name.last + "</td><td>" + userData[i].dob.age + "</td></tr>"
        }
      }

      if (maleUsers.length > 0) {
        document.getElementById("maleUsers").innerHTML = maleUserData
      } else {
        document.getElementById("maleUsers").innerHTML = "<tr><td colspan='4'>No results</td></tr>"
      }

      if (femaleUsers.length > 0) {
        document.getElementById("femaleUsers").innerHTML = femaleUserData
      } else {
        document.getElementById("femaleUsers").innerHTML = "<tr><td colspan='4'>No results</td></tr>"
      }
    })

  $(".loader").css("visibility", "hidden")
}



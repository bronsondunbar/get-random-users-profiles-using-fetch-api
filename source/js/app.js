
// @codekit-prepend 'lib/jquery.1.12.4.js'
// @codekit-prepend 'lib/bootstrap.bundle.js'

document.addEventListener("DOMContentLoaded", function(event) { 
  fetch('https://randomuser.me/api/1.2/?results=50')
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      var userData = data.results

      filterUsers(userData)
    })
})

function filterUsers (userData) {
  var maleUsers = []
  var femaleUsers = []

  for (var i = 0; userData.length > i; i++) {
    if (userData[i].gender == 'male' && userData[i].dob.age >= 30 && userData[i].dob.age <= 40) {
      maleUsers.push(userData[i])

      // Generate male table data
      document.getElementById("maleUsers").innerHTML += "<tr><td>" + userData[i].name.title + "</td><td>" + userData[i].name.first + "</td><td>" + userData[i].name.last + "</td><td>" + userData[i].dob.age + "</td></tr>"
    }

    if (userData[i].gender == 'female' && userData[i].dob.age >= 30 && userData[i].dob.age <= 40) {
      femaleUsers.push(userData[i])

      // Generate female table data
      document.getElementById("femaleUsers").innerHTML += "<tr><td>" + userData[i].name.title + "</td><td>" + userData[i].name.first + "</td><td>" + userData[i].name.last + "</td><td>" + userData[i].dob.age + "</td></tr>"
    }
  }
}




// @codekit-prepend 'lib/jquery.1.12.4.js'

$(document).ready(function () {

  var maleUsers = []
  var femaleUsers = []

  fetch('https://randomuser.me/api/1.2/?results=50')
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      var userData = data.results

      for (var i = 0; userData.length > i; i++) {
        if (userData[i].gender == 'male' && userData[i].dob.age >= 30 && userData[i].dob.age <= 40) {
          maleUsers.push(userData[i])
        }

        if (userData[i].gender == 'female' && userData[i].dob.age >= 30 && userData[i].dob.age <= 40) {
          femaleUsers.push(userData[i])
        }
      }

      console.log(femaleUsers)
    })

})


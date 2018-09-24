//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

(function(exports) {
  function Chitter() {}

  this.chitter = new Chitter()

  Chitter.prototype.getLast50Peeps = function() {
    fetch('https://chitter-backend-api.herokuapp.com/peeps')
    .then(response => response.json())
    .then(data => {
    this.data = data
    console.log(data.length)
    chitter.buildOutput(data)
    })
  }

  Chitter.prototype.buildOutput = function(data) {
    var last50Peeps = "<ul>"
    data.forEach(function(peep) {
      last50Peeps += `<li><div>On ${peep.updated_at.substr(0, 10)}, ${peep.user.handle} posted: ${peep.body}</div></li>`
    })
    last50Peeps += "</ul>"
    chitter.updateBrowser(last50Peeps)
  }

  Chitter.prototype.updateBrowser = function(data) {
    peeps.innerHTML = data
  }

  Chitter.prototype.addUser = function (handle, password) {
    var data = {"user": {"handle":handle, "password":password}}

    fetch('https://chitter-backend-api.herokuapp.com/users', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": 'application/json'
      }
    }).then(function(response) {
      return response.json()
        }).then(function(response) {
        console.log(response)
        console.log(response.id)
        console.log(response.handle)
        })
      }

  exports.Chitter = Chitter
})(this)

//chitter.addUser("SomeHandle6", "Password")
chitter.getLast50Peeps()

myAppModule.factory("TeamFactory", function(){
  var teams = ["Seahawks", "Mariners"];
  return {
    getTeams: function(callbackFromController){
      console.log('got to factory, about to run code from controller')
      callbackFromController(teams)
      // return teams;
    }

  }

})

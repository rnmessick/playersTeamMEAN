myAppModule.factory("TeamFactory", function(){
  var teams = [
    {name:"Seahawks"},
    {name:"Mariners"},
    {name:"Giants"}
  ];
  var factory = {};
  
      factory.getTeams = function(callbackFromController){
        console.log('got to factory, about to run code from controller')
        callbackFromController(teams)
      }

      factory.addTeam = function(newTeam) {

        teams.push(newTeam);
      }

      factory.removeTeam = function($index) {
        teams.splice($index, 1);
      }
    
      return factory;
})

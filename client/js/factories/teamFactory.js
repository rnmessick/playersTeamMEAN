myAppModule.factory("TeamFactory", function(){
  teams = [];
  return {
    getTeams: function(){
      return teams;
    }
  }

})

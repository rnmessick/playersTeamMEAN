myAppModule.controller("TeamsController", function($scope, TeamFactory){
   $scope.teams = [];

   //When this controller is loaded, fetch the team list
   TeamFactory.getTeams(function(teamsFromFactory){
      console.log('got data from factory, about to attach to $scope')
      $scope.teams = teamsFromFactory;
   })

   //Pass new team info to the TeamFactory
   $scope.addTeam = function(){   
      TeamFactory.addTeam($scope.newTeam)
      $scope.newTeam = {}; //Reset newTeam form
      console.log('added a team')
   }

   //Pass $index to TeamFactory to remove
   $scope.removeTeam = function($index){
      TeamFactory.removeTeam($index);
      console.log('removed a team')
   }
})
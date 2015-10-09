'use strict';

app.factory('Auth', function($http){
	function logNewUser(newUserData){
		return $http({
			method: "POST", 
			url: url,
			data: newUserData
		})
		.then(function(res){
			return 
		})
	}
})
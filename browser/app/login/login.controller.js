app.controller('LoginCtrl', function($scope, Auth){
	$scope.authLogin = function(userInfo){
		Auth.login(userInfo);
	}
});
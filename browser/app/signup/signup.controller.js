app.controller('SignupCtrl', function ($scope, Auth){
	$scope.authSignup = function(newUserInfo){
		Auth.signUp(newUserInfo);
	}

})
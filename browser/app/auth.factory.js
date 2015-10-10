'use strict';

app.factory('Auth', function($http){
	function signUp(newUserInfo){
		return $http.post('/api/users', newUserInfo)
		.then(function(res){
			alert('Account created with e-mail: '+res.data.email+'!');
			return res.data
		});
	}

	function login(userInfo){
		return $http.post('/api/users/login', userInfo)
		.then(function(res){
			console.log(res);
		})
	}

	function logout() {
		return $http.put('/api/users/logout').then(function(res){
			console.log(res);
		})	
	}

	return {
		signUp: signUp,
		login: login,
		logout: logout
	}


})
function BalanceCtrl($scope) {
  var transactions = $scope.items = [];

  $scope.addItem = function() {
    $scope.items.push({text:$scope.transAmount});
    $scope.transAmount = ''; //reset input after submit
  };

  $scope.getBalance = function(){
    var balance = 0;
    for(var i = 0; i < $scope.items.length; i++){
        var newItem = $scope.items[i];
        balance += newItem.text;
    }
    return balance;
	};
}

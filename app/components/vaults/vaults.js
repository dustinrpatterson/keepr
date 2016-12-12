; (function () {
  angular.module('keepr')
    .component('vaultsComponent', {
      templateUrl: 'app/components/vaults/vaults.html',
      controller: VaultsController
    })

  function VaultsController(Models, AuthService) {
    var vc = this

    vc.addVault = function (vault) {
      debugger
      vault.userId = vc.user.uid
      Models.Vaults.create(vault)
        .then(function(created) {
          console.log(created);
        })
        .catch(function(error) {
          console.log(error);
        });
      vc.newVault = null
    }
// MIKEY's SOLUTION BELOW
   vc.member = AuthService.getMember()

  //  vc.addVault = function (newVault) {
  //    debugger
  //    vc.member.vaults = vc.member.vaults || []
  //    vc.member.vaults.push(newVault)
  //    console.log(vc.member.vaults)
  //    vc.newVault = null
  //  }



  }
} ())

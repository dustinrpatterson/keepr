; (function () {
  angular.module('keepr')
    .component('keepsComponent', {
      templateUrl: 'app/components/keeps/keeps.html',
      controller: KeepsController
    })

  function KeepsController(Models) {
    var kc = this

    Models.Keeps.findAll({}).then(function (keeps) {
      kc.keeps = keeps
    })


    kc.onKeepClick = function (keep) {
      keep.keepCount++
      Models.Keeps.update(keep)
      // Need to add function that pushes this keep into myKeeps
    }

    kc.onShareClick = function (keep) {
      keep.shareCount++
      // Need a function that shares it
    }

    kc.onViewClick = function (keep) {
      keep.viewCount++
    }


  }
} ())

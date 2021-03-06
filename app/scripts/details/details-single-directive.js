(function () {
    'use strict';

    /* ngInject */
    function DetailsSingle() {
        var module = {
            restrict: 'AE',
            scope: {
                data: '<',
                properties: '<',
                record: '<',
                definition: '<'
            },
            templateUrl: 'scripts/details/details-single-partial.html',
            bindToController: true,
            controller: 'DetailsSingleController',
            controllerAs: 'ctl'
        };
        return module;
    }

    angular.module('ase.details')
    .directive('aseDetailsSingle', DetailsSingle);

})();

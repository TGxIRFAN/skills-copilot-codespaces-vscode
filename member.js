funtion skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'templates/skills-member.html',
        controller : 'SkillsMemberController',
        controllerasAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}
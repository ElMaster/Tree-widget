angular.module("TreeApp", ['ngCookies'])
    .controller('TreeController', ['$scope','$cookies', function ($scope, $cookies) {

        if (!$cookies.get('dataTree')) {
            $scope.dataTree = [
                {
                    name: "Frontend",
                    skills: [
                        {
                            name: "HTML & CSS",
                            skills: [
                                {
                                    name: "Understanding block, inline and table models",
                                    skills:[],
                                    opened:true
                                },
                                {
                                    name: "Stylesheets",
                                    skills: [
                                        {
                                            name: "Positioning",
                                            skills: [
                                                {
                                                    name: "static, relative and absolute, fixed, sticky",
                                                    skills:[],
                                                    opened:true
                                                }
                                            ],
                                            opened:true
                                        },
                                        {
                                            name: "Understanding of box model",
                                            skills:[],
                                            opened:true
                                        },
                                        {
                                            name: "Understanding floating",
                                            skills:[],
                                            opened:true
                                        }
                                    ],
                                    opened:true
                                }
                            ],
                            opened:true
                        },
                        {
                            name: "JavaScript",
                            skills: [
                                {
                                    name: "Core",
                                    skills: [
                                        {
                                            name: "DOM",
                                            skills:[],
                                            opened:true
                                        },
                                        {
                                            name: "Events",
                                            skills:[],
                                            opened:true
                                        },
                                        {
                                            name: "Data structures",
                                            skills: [
                                                {
                                                    name: "Primitives and limitations",
                                                    skills:[],
                                                    opened:true
                                                },
                                                {
                                                    name: "Object",
                                                    skills:[],
                                                    opened:true
                                                }
                                            ],
                                            opened:true
                                        }
                                    ],
                                    opened:true
                                },
                                {
                                    name: "Approaches",
                                    skills: [
                                        {
                                            name: "OOP",
                                            skills: [
                                                {
                                                    name: "class",
                                                    skills:[],
                                                    opened:true
                                                },
                                                {
                                                    name: "Prototypes",
                                                    skills:[],
                                                    opened:true
                                                }
                                            ],
                                            opened:true
                                        },
                                        {
                                            name: "Asynchronous programming",
                                            skills:[],
                                            opened:true
                                        }
                                    ],
                                    opened:true
                                },
                                {
                                    name: "Frameworks & libraries",
                                    skills: [
                                        {
                                            name: "React",
                                            skills:[],
                                            opened:true
                                        },
                                        {
                                            name: "jQuery",
                                            skills:[],
                                            opened:true
                                        }
                                    ],
                                    opened:true
                                }
                            ],
                            opened:true
                        }
                    ],
                    opened:true
                }
            ];
        } else {
            $scope.dataTree = JSON.parse($cookies.get('dataTree'));
        }

        $scope.add = function (data) {
            var post = data.skills.length + 1;
            var newName = "New element" + '-' + post;
            data.skills.push({name: newName, skills: [], opened:true});
            $scope.editSave();
        };
        $scope.delete = function (data) {
            data.skills = [];
            $scope.editSave();
        };
        $scope.deleteElemet = function (data) {
            console.log(data.parent, 1)
            data = [];


            console.log(data, 2)
            $scope.editSave();
        }



        $scope.editSave = function () {
            $cookies.putObject('dataTree', $scope.dataTree, { path: '/' });
        }
    }]);
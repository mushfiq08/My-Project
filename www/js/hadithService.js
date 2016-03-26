angular.module('starter.hadithService', [])

        .factory('Hadiths', function () {

            var hadiths = [
                  {
                    "id": 0,
                    "name": "Hadith",
                    "description": "Hadith1 text bukhari"
                  },
                  {
                    "id": 1,
                    "name": "Hadith",
                    "description": "Hadith2 text muslim"
                  },
                  {
                    "id": 2,
                    "name": "Hadith",
                    "description": "Hadith3 text tirmizi"
                  },
                  {
                    "id": 3,
                    "name": "Hadith",
                    "description": "Hadith4 text abu daud"
                  },
                  {
                    "id": 4,
                    "name": "Hadith",
                    "description": "Hadith5 text sunani Ahmed"
                  }
                  
                ];

            return {
                all: function () {
                    return hadiths;
                },
                get: function (hadithId) {
                    for (var i = 0; i < hadiths.length; i++) {
                        if (hadiths[i].id === parseInt(hadithId)) {
                            console.log(hadiths[i]);
                            return hadiths[i];
                        }
                    }
                    return null;
                },
                getHadithsLength: function(){
                    return hadiths.length;
                }
            };
        });


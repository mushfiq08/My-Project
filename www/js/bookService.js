angular.module('starter.bookService', [])

        .factory('Books', function () {
            
            var books = [
                  {
                    "id": 0,
                    "name": "moidan",
                    "chapters": [
                        {
                            "chapter": 0,
                            "chapterText": "chapter1Text chapter1Textchapter1Textchapter1Textchapter1Textchapter1Textchapter1Textchapter1Textchapter1Textchapter1Textchapter1Textchapter1Textchapter1Text"
                        }
                    ]
                  },
                 {
                    "id": 1,
                    "name": "jihad",
                    "chapters": [
                        {
                            "chapter": 0,
                            "chapterText": "chapter1Text 2 chapter1Text 2chapter1Text 2"
                        },
                        {
                            "chapter": 1,
                            "chapterText": "chapter2Text 2"
                        },
                        {
                            "chapter": 2,
                            "chapterText": "chapter3Text 2"
                        }
                    ]
                },
                {
                    "id": 2,
                    "name": "Book3",
                    "chapters": [
                        {
                            "chapter": 0,
                            "chapterText": "chapter1Text 3"
                        },
                        {
                            "chapter": 1,
                            "chapterText": "chapter2Text 3"
                        },
                        {
                            "chapter": 2,
                            "chapterText": "chapter3Text 3"
                        }
                        ,
                        {
                            "chapter": 3,
                            "chapterText": "chapter4Text 3"
                        }
                    ]
                }


            ];

            return {
                all: function () {
                    return books;
                },
                get: function (bookId) {
                    for (var i = 0; i < books.length; i++) {
                        if (books[i].id === parseInt(bookId)) {
                            return books[i];
                        }
                    }
                    return null;
                },
                getChapter: function (bookId, chapterNumberChapter) {
                    console.log(bookId + ' number  ' + chapterNumberChapter);
                    for (var i = 0; i < books.length; i++) {
                        if (books[i].id === parseInt(bookId)) {
                            for (var j = 0; j < books[bookId].chapters.length; j++) {
                                if (books[bookId].chapters[j].chapter === parseInt(chapterNumberChapter)) {
                                    console.log('content ' + books[bookId].chapters[j].length);
                                    return books[bookId].chapters[j];
                                }
                            }
                            return null;
                        }

                    }

                },
                getBooksLength: function(){
                    return books.length;
                }

            };
        });

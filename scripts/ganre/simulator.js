var demo = new Vue({
    el: '#main',
    data: {
        searchString: "",

        articles: [{

                "title": "TT Isle of Man",
                "image": "../assets/glavn/expected/TTIsleofMan.jpg",
                "url": "infGame/TT_Isle_of_Man.html",
            },

        ]

    },


    computed: {
        // Вычисленное свойство, которое содержит только те статьи, которые соответствуют searchString.
        filteredArticles: function () {

            var articles_array = this.articles,
                searchString = this.searchString;

            if (!searchString) {

                return articles_array;
            }

            searchString = searchString.trim().toLowerCase();

            articles_array = articles_array.filter(function (item) {

                if (item.title.toLowerCase().indexOf(searchString) !== -1)

                {
                    return item;
                }

            })

            // Возвращает массив с отфильтрованными данными.
            return articles_array;;
        }

    }

});
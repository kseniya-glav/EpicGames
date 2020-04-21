var demo = new Vue({
    el: '#main',
    data: {
        searchString: "",

        articles: [{

                "title": "Project Cars 2",
                "image": "../assets/glavn/expected/ProjectCars2.jpg",
                "url": "infGame/Project_Cars_2.html",
            },
            {

                "title": "Forza Motorsport 7",
                "image": "../assets/games/forzaMotosport7.jpg",
                "url": "infGame/Forza_Motorsport_7.html",
            },
            {

                "title": "Need for Speed",
                "image": "../assets/glavn/expected/NeedforSpeed-Payback.jpg",
                "url": "infGame/Need_for_Speed_Payback.html",
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
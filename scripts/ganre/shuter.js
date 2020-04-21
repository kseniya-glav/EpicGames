var demo = new Vue({
    el: '#main',
    data: {
        searchString: "",

        articles: [{

                "title": "Destiny 2",
                "image": "../assets/glavn/expected/Destiny2.jpg",
                "url": "infGame/Destiny_2.html",
            },
            {

                "title": "Red Dead Redemption 2",
                "image": "../assets/glavn/expected/RedDeadRedemption2.jpg",
                "url": "infGame/Red_Dead_Redemption_2.html",
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
var demo = new Vue({
    el: '#main',
    data: {
        searchString: "",

        articles: [{

                "title": "Total War Saga",
                "image": "../assets/glavn/top/Total-War-Saga.png",
                "url": "infGame/Total_War_Saga.html",
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
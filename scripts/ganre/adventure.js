var demo = new Vue({
    el: '#main',
    data: {
        searchString: "",

        articles: [{

                "title": "Fe",
                "image": "../assets/glavn/top/Fe-boxart-cover.png",
                "url": "infGame/Fe.html",
            },
            {

                "title": "Ni no Kuni II",
                "image": "../assets/glavn/top/Ni-no-Kuni-II-Revenant-Kingdom-boxart-cover.jpg",
                "url": "infGame/Ni_no_Kuni_II.html",
            },
            {

                "title": "Kingdom Come",
                "image": "../assets/glavn/top/Kingdom-Come-Deliverance-boxart-cover.jpg",
                "url": "infGame/Kingdom_Come.html",
            },
            {

                "title": "Witcher 3",
                "image": "../assets/glavn/expected/witcher3.jpg",
                "url": "infGame/Witcher_3.html",
            },
            {

                "title": "Ghost of a Tale",
                "image": "../assets/glavn/expected/GhostofaTale.jpg",
                "url": "infGame/Ghost_of_a_Tale.html",
            },
            {

                "title": "Outcast",
                "image": "../assets/glavn/expected/OutcastSecondContact.jpg",
                "url": "infGame/Outcast_Second_Contact.html",
            },
            {

                "title": "Assassin's Creed: Origins",
                "image": "../assets/glavn/expected/Assassin'sCreed.jpg",
                "url": "infGame/Assassin's_Creed_Origins.html",
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
            return articles_array;
        }

    }

});
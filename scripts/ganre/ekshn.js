var demo = new Vue({
    el: '#main',
    data: {
        searchString: "",

        articles: [{

                "title": "A Way Out",
                "image": "../assets/glavn/top/AwayOut.jpg",
                "url": "infGame/A_Way_Out.html",
            },
            {

                "title": "Far Cry 5",
                "image": "../assets/glavn/top/Far-Cry-5-cover.jpg",
                "url": "infGame/Far_Cry_5.html",
            },
            {

                "title": "State of Decay 2",
                "image": "../assets/glavn/top/State-of-Decay-2-boxart-cover.jpg",
                "url": "infGame/State_of_Decay_2.html",
            },
            {

                "title": "Monster Hunter: World",
                "image": "../assets/glavn/top/Monster-Hunter-World-boxart-cover.png",
                "url": "infGame/Monster_Hunter_World.html",
            },

            {

                "title": "Dark Souls Remastered",
                "image": "../assets/glavn/top/Dark-Souls-Remastered-boxart-cover.jpg",
                "url": "infGame/Dark_Souls_Remastered.html",
            },

            {

                "title": "Friday",
                "image": "../assets/glavn/expected/Friday.jpg",
                "url": "infGame/Friday.html",
            },
            {

                "title": "Metro: Exodus",
                "image": "../assets/glavn/expected/Metro-Exodus.jpg",
                "url": "infGame/Metro_Exodus.html",
            },

            {

                "title": "Vampyr",
                "image": "../assets/glavn/top/Vampyr-boxart-cover.jpg",
                "url": "infGame/Vampyr.html",
            },

            {
                "title": "Watch Dogs 2",
                "image": "../assets/games/WatchDogs2.jpg",
                "url": "infGame/Watch_Dogs_2.html",
            },

            {
                "title": "DYNASTY WARRIORS 9",
                "image": "../assets/glavn/expected/DYNASTYWARRIORS9.jpg",
                "url": "infGame/DYNASTY_WARRIORS_9.html",
            },

            {
                "title": "Death Stranding",
                "image": "../assets/glavn/expected/DeathStranding.jpg",
                "url": "infGame/Death_Stranding.html",
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
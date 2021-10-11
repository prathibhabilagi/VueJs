const app = Vue.createApp ({
    data() {
        return {
            name: "Krispy Kreme Donut",
            picture: "https://www.themealdb.com/images/media/meals/4i5cnx1587672171.jpg",
            category: "Dessert",
            area: "America",
            ytLink:  "https://www.youtube.com/watch?v=SamYg6IUGOI",
            blogLink: "https://www.mythirtyspot.com/krispy-kreme-copycat-recipe-for/"
        }
    },
    methods: {
        async getDish() {
            const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
            const results = await res.json();
            this.name = results.meals[0].strMeal;
            this.picture = results.meals[0].strMealThumb;
            this.category = results.meals[0].strCategory;
            this.area = results.meals[0].strArea;
            this.ytLink = results.meals[0].strYoutube;
            this.blogLink = results.meals[0].strSource;
        }
    }
})

app.mount('#app');

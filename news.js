const loadCatagories = () => {

    fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res => res.json())
        .then(data => showcategories(data.data))
}

const showcategories = data => {
    // console.log(data)
    const cetagoriesContainer = document.getElementById("catagories-container")
    data.news_category.forEach(singleCetagory => {
        // console.log(singleCetagory)
        cetagoriesContainer.innerHTML += `
        <a class="nav-link" href="#">${singleCetagory.category_name}</a>
        `
    });
}

// loadCatagories()

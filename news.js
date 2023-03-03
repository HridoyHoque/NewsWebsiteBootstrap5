const loadCatagories = () => {

    fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res => res.json())
        .then(data => showcategories(data.data))
}

const showcategories = data => {
    console.log(data)
    const cetagoriesContainer = document.getElementById("catagories-container")
    data.news_category.forEach(singleCetagory => {
        // console.log(singleCetagory)
        cetagoriesContainer.innerHTML += `
        <a class="nav-link" href="#" onclick="fetchCategoriesNews('${singleCetagory.category_id}')">${singleCetagory.category_name}</a>
        `
    });
}

// fetch All Newses Avialable in categories
 const fetchCategoriesNews = category_id => {
//   console.log(category_id)
fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
.then(res => res.json())
.then(data => showAllNews(data , category_id))

 }

 const showAllNews = (data , category_id) => {
    console.log(data , category_id)
    document.getElementById("category-count").innerText= data.data.length
    document.getElementById("category-name").innerText= category_id
 }

// const loadNews = () =>{
//     fetch('https://openapi.programming-hero.com/api/news/categories')
//     .then(res => res.json())
//     .then(data => console.log(data.data.news_category))
// }

// loadNews();

const loadAllNews = async()=>{
    const response = await fetch("https://openapi.programming-hero.com/api/news/category/01");
    
    const data = await response.json();
    const getData = data.data ;
    
    displayNews(getData);
    
    
  
}
const displayNews = allnews =>{
    const newsContainer = document.getElementById('news-container');
    allnews.forEach(news => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('col')
        newsDiv.innerHTML =`
        <div class="card lg:card-side bg-base-100 shadow-xl">
         <figure><img src="${news.thumbnail_url}" alt="Album"></figure>
         <div class="card-body">
          <h2 class="card-title">${news.title}</h2>
         <p>${news.details}</p>
           <div class="card-actions justify-between">
           <div class="grid grid-cols-2">
           <img class="w-8 rounded-full"  src="${news.author.img}">
           <h2>${news.author.name}</h2>
           </div>
           <div>
           <h1 class="text-xl"><i class="fa-sharp fa-solid fa-eye"></i>${news.total_view}</h1>
           </div>
           <div>
           <button class="btn btn-primary">Listen</button>
           </div>
             
           </div>
         </div>
       </div>
         `;
        newsContainer.appendChild(newsDiv)
    });
}

loadAllNews();
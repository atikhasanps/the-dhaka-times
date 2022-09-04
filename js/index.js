// const loadAllNews = async()=>{
//     const response = await fetch("https://openapi.programming-hero.com/api/news/categories");
    
//     const data = await response.json();
//     const getData = data.data.news_category ;
//     return getData ;
    
//     // console.log(data.data.news_category)
// }

// const setAllMenu = async()=>{

//     const data = await loadAllNews();
    
//     for(const news of data){
//         // console.log(news.category_name)
//     }
    
// }
// setAllMenu();

// // loadAllNews();


// const btnHome = document.getElementById('btn-home');

// btnHome.addEventListener('click', async(event)=>{
//     const allNews = await loadAllNews();
//     // console.log(allNews)
//     const newsContainer = document.getElementById('news-container');
//     newsContainer.textContent = ""; 

//     allNews.forEach(news => {
//         // console.log(news)

//         const div = document.createElement("div");
//         div.innerHTML =`
//         <div class="card lg:card-side bg-base-100 shadow-xl">
//         <figure><img src="${news.thumbnail_url}" alt="Album"></figure>
//         <div class="card-body">
//           <h2 class="card-title">New album is released!</h2>
//           <p>Click the button to listen on Spotiwhy app.</p>
//           <div class="card-actions justify-end">
//             <button class="btn btn-primary">Listen</button>
//           </div>
//         </div>
//       </div>
//         `
//         newsContainer.appendChild(div)
//     });
    
// })
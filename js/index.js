
const loadCategories = ()=>{
   fetch("https://openapi.programming-hero.com/api/news/categories")
    
    .then(res=>res.json()) 
    .then(data=> displayCategories(data.data.news_category))
    
}

const displayCategories = categories =>{
  
  const categoriesContainer = document.getElementById('categories-container');
  for(const categorie of categories){
    
    const categoriList =document.createElement('div');
    categoriList.classList.add('categorie');
    categoriList.innerHTML=`
      <button onclick="loadAllNews('${categorie.category_id}')" class="text-orange-700 me-5">${categorie.category_name}</button>
    `;
    categoriesContainer.appendChild(categoriList);
  }
}

loadCategories();




const loadAllNews = async(category_id)=>{
    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
    
    const data = await response.json();
    const getData = data.data ;
    
    displayNews(getData);
    
    //  displayCategories(category_id)
  
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
         <p>${news.details.slice(0,350)}</p>
           <div class="card-actions justify-between">
           <div class="grid grid-cols-2 ">
           <img class="w-8 rounded-full"  src="${news.author.img}">
           <h2>${news.author.name}</h2>
           </div>
           <div>
           <h1 class="text-xl"><i class="fa-sharp fa-solid fa-eye"></i>${news.total_view}</h1>
           </div>
           <div>
           <label for="my-modal-6" onclick="showModal()" class="btn modal-button">Show Details</label>
           </div>
             
           </div>
         </div>
       </div>
         `;
        newsContainer.appendChild(newsDiv)
    });
}




const showModal =()=>{
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML =`
    <h3 class="font-bold text-lg">${news.title}</h3>
    <img src="">
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
      <label for="modal-body" class="btn">Yay!</label>
    </div>

    `;
    
}




loadAllNews();

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

const newsCount =(category_id)=>{
  const inputField = document.getElementById('input-field');
    const items =category_id.length;
    items= inputField.value
}


const loadAllNews = async(category_id)=>{
  
    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
    
    const data = await response.json();
    const getData = data.data ;
    const item = getData.length;
    
    const inputField = document.getElementById('input-field');
     
     inputField.value = item;
    
    displayNews(getData);
    
    
}

const displayNews = allnews =>{
  
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML=``;
    allnews.forEach(news => {
      
        const newsDiv = document.createElement('div');
        toggleSpinner(true);
        newsDiv.classList.add('col')
        newsDiv.innerHTML =`
        <div class="card lg:card-side bg-base-100 shadow-xl">
         <figure><img src="${news.thumbnail_url}" alt="Album"></figure>
         <div class="card-body">
          <h2 class="card-title">${news.title}</h2>
            <p>${news.details.slice(0, 250).concat('...')}</p>
           <div class="card-actions justify-between">
           <div class="grid grid-cols-2 ">
           <img class="w-8 rounded-full"  src="${news.author.img}">
           <h2>${news.author.name}</h2>
           </div>
           <div>
           <h1 class="text-xl"><i class="fa-sharp fa-solid fa-eye"></i>${news.total_view}</h1>
           </div>
           <div>
          
           <label  onclick="loadDetails('${news._id}')" for="my-modal-6" class="btn modal-button">Show Details</label>
           
           </div>

           </div>
         </div>
       </div>
         `;
         
        newsContainer.appendChild(newsDiv)
        
    });
    
}




const loadDetails = async(_id)=>{
  const response = await fetch(`https://openapi.programming-hero.com/api/news/${_id}`);
  
  const data = await response.json();
  const getData = data.data ;
  
  displayDetails(getData);
  
//  console.log(getData)

}

const displayDetails =(allDetails)=>{
  
    const detailsBody = document.getElementById('details-body');
    detailsBody.innerHTML=``;
    allDetails.forEach(details =>{
      const detailsDiv =document.createElement('div');
     
     detailsDiv.innerHTML =`
      <h1 class="font-bold text-lg card-title ">${details.title}</h1>
    <h3 class="font-semi-bold text-sm">${details.details}</h3>
   

    <div class="grid grid-cols-2 justify-content-start pt-5 ">
    <div class="grid align-items-center justify-start">
    <img class="w-8 rounded-full"  src="${details.author.img}">
    <h2>${details.author.name ? details.author.name : 'No Data Available'}</h2>
    </div>

    <div>
            <h2>Total View: ${details.total_view ? details.total_view : 'No Data Available'}</h2>
    </div>
    </div>
    
    
    `;
    
    detailsBody.appendChild(detailsDiv);
      
    });

}



const toggleSpinner = isLoading =>{

  const LoaderSection = document.getElementById('loader');
  if(isLoading){
    LoaderSection.classList.remove('d-none')
  }
  else{
    LoaderSection.classList.add('d-none')
  }
}




loadDetails();


loadAllNews();

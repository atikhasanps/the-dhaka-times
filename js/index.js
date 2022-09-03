const loadAllNews = async()=>{
    const response = await fetch("https://openapi.programming-hero.com/api/news/categories");
    
    const data = await response.json();
    const getData = data.data.news_category ;
    return getData ;
    
    // console.log(data.data.news_category)
}

const setAllMenu = async()=>{

    const data = await loadAllNews();
    
    for(const news of data){
        console.log(news.category_name)
    }
    
}
setAllMenu();

loadAllNews();
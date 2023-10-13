import {blogData} from './js/data.js'


function getBlogData() {
    let blogHTML = ``
    
    blogData.forEach(function(blog){
        let hiddenBlogClass = [4, 5, 6].includes(blog.id) ?  'show-blogs' : '';
       blogHTML += `
        <div class="blogs ${hiddenBlogClass}">
            <img src=${blog.image}>
            <p class="blog-date"> ${blog.date}  </p>  
            <h1 class="blog-name"> ${blog.name} </h1>
            <p class="blog-summary"> ${blog.summary}  </p>   
        </div>  
       ` 
    })
    
    return blogHTML
}

function render(){
    document.getElementById(`content-pane`).innerHTML = getBlogData()
}

 render()
 
 
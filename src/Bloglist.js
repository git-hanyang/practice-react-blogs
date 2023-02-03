import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import blogSample from "./data/BlogSample"

const Bloglist=()=>{
let blogContent=[]
        
    const cloneblog=blogSample.BlogSample.blogs
 
        // cloneblog.map((el,idx)=>{
        //     const blogdata={
        //         title:el.title,
        //         id:el.id,
        //         author:el.author,
        //         body:el.body
        //     } //this will create sets of object, depends on the no. of el it has
        //     blogContent.push(blogdata) //this will create arrays for the sets of object
        //     //console.log(blogContent)
        // })
        
        let [blogs,setBlogs]= useState(cloneblog)

        const handleDelete=(id)=>{
            console.log(id)
            const newBlogs = blogs.filter((el,idx)=>{
                return idx!=id  
            }) 
            console.log(newBlogs)
            setBlogs(newBlogs)
        }


    //console.log(blogs)
       
    return(
        <div className="blog-list">
            {blogs.title}
            {blogs.map((blog,idx)=>(

                <div className="blog-preview" key={idx}>
                    <Link to={`/blog/${blog.id}`}>
                        <h2>
                            {blog.id}.
                            {blogs.title}
                        </h2>
                        <p>written by: {blog.author}</p>
                    </Link>

                        <button onClick={
                            ()=>handleDelete(idx)}>Delete one blog</button>
                        {/* passing idx as the arguement to the parameter */}

                    
                </div>
                    
            ))}
            
        </div>
    )
}
        
 
export default Bloglist
import { useParams } from "react-router"

const BlogDetails=()=>{

    const {id}=useParams()
    return ( <div className="blog-details">One Blog - {id}</div>)
}

export default BlogDetails

// type sfc for shortcut
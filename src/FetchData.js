import{useState,useEffect} from 'react'

const FetchData=(url)=>{
    let[blogs,setBlogs]= useState(null)
    let[isPending,setIsPending]=useState(null)



    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>{
            setBlogs(data)
            setIsPending(false)
        })
        .catch((err)=>console.log(err))
    },[url])

    return {blogs,isPending}
}
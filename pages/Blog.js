import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Blog = () => {
  function createMarkup(c) {
    return { __html: c };
  }
  const [blogs,setblogs]=useState([]);
  useEffect(()=>{
  fetch('http://localhost:3000/api/blog').then((a)=>{
    return a.json();
  }).then((data)=>{
    setblogs(data);
  }).catch((err)=>{
    alert("some error occured"+err);
    console.log(err);
  })
  },[])
  return (
    <>
      <div className="container">
        <h2 className="blogh2"> Blogs</h2>
      </div>
    <div className="container my-3 d-flex justify-content-center align-items-center flex-wrap">
      {blogs.map((blogitem)=>{
        return <div className="card mx-2" key ={blogitem.slug}>
        <Image src="/image1.jpg" className="card-img-top" width ="200" height="200" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{blogitem.title}</h5>
          <p className="card-text">{<div dangerouslySetInnerHTML={createMarkup(blogitem.content.substr(0,150))}></div>}...</p>
          <Link href={blogitem.slug} className="btn btn-primary">Read More</Link>
        </div>
      </div>
      })}
    
    </div>
    </>
  )
}
export async function getServerSideProps(context){
  let data = await fetch('http://localhost:3000/api/blog');
  let allblogs = await data.json();
  return{
    props:{allblogs}
  }
}
export default Blog
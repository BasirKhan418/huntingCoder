import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import styles from "../styles/Home.module.css"
const slug = (props) => {
    function createMarkup(c) {
        return { __html: c };
      }
    const [blog ,setBlog] =useState(props.myblog);
    
    return <div className={styles.container}>
        <main className={styles.main}>
            <h1>{blog && blog.title}</h1>
            <hr />
            <div>
                {blog&&<div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
            </div>
        </main>
    </div>;
};
export async function getServerSideProps(context){
    const {slug} =context.query;
    let data =await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
    let myblog = await data.json();
    return{
        props:{myblog},
    }
}
export default slug;

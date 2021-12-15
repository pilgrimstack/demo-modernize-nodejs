import React from "react";
import axios from "axios";

function Home({ posts }) {
  const res = [];
  posts.map((v,i) => {
    let img = "";
    if(! /http.:/.test(v.image.url)){ img += process.env.STRAPI_URL}
    img += v.image.url
    res.push(
      <hr/>,
      <h2> {v.title} </h2>,
      <img src={img} style={{width: "100%"}}/>,
      <p> {v.body} </p>,
    );
  })
  return <>
    <div className="container">
    <h1>Modernize your application</h1>
    From monolitic to horizontal scaling
    <style jsx>{`
      .container { margin:50px; }
    `}</style>
    {res}
    </div>
    </>;
}

export default Home;

export async function getStaticProps({ params }){
  const postsRes = await axios.get(process.env.STRAPI_URL + "/posts")
  return {
    props: {
	   posts: postsRes.data
    }
  }
}

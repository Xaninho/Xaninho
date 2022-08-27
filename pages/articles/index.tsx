import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import { useState } from 'react'
import Navbar from '../../components/Navbar'
import ArticlesGrid from '../../components/ArticlesGrid'
import ArticlesHeader from '../../components/ArticlesHeader'
import Sidebar from '../../components/Sidebar'

import { sanityClient } from '../../lib/sanity'


const articlesQuery = `*[_type == "article"]{
  _id,
  title,
  slug,
  mainImage,
  publishedAt
}`;

const Articles : NextPage = ({ articles } : InferGetStaticPropsType<typeof getStaticProps>) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>

      <Navbar toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <ArticlesHeader />
      <ArticlesGrid articles={articles} />

    </div>
  )
  
}

export default Articles;

export const getStaticProps : GetStaticProps = async () =>{

  const articles = await sanityClient.fetch(articlesQuery);
  console.log(articles);
  return { props: { articles }, revalidate: 1 };

}

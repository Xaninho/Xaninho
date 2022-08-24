import { useRouter } from 'next/router';
import { useState } from 'react'
import { sanityClient, urlFor, PortableText} from "../../lib/sanity";
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import ArticleBody from '../../components/ArticleBody';
import SingleArticleHeader from '../../components/SingleArticlesHeader';

const articleQuery = `*[_type == "article" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    mainImage{
        asset->{
            _id,
            url
        }
    },
    body
  }`;


const Article : NextPage = ({ data } : any) =>{

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    const { article } = data;

    return (
        <div>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <SingleArticleHeader title={article.title}/>
            <ArticleBody article={article}/>
        </div>
    );
}

export default Article;

export async function getStaticPaths(){
    const paths = await sanityClient.fetch(
        `*[_type == "article" && defined(slug.current)]{
            "params": {
                "slug": slug.current
            }
        }`
    );
    return { paths, fallback: true };
}

export async function getStaticProps({ params } : any){
    const { slug } = params;
    const article = await sanityClient.fetch(articleQuery, { slug });
    return { props: { data: { article } } };
}
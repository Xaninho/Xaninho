import { useState } from 'react';
import { useRouter } from 'next/router';

import { sanityClient, urlFor, PortableText} from "../../lib/sanity";

const projectQuery = `*[_type == "project" && slug.current == $slug][0]{
    _id,
    name,
    slug,
    mainImage{
        asset->{
            _id,
            url
        }
    },
    tool[]{
        _key,
        tool->{
            name,
            image
        }
    },
    details,
    likes
  }`;

export default function OneProject({ data } : any) {

    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>
    }
    const [likes, setLikes] = useState(data?.project?.likes);
    
    const addLike = async () => {
        const res = await fetch("/api/handle-like", {
            method: "POST",
            body: JSON.stringify({ _id: project._id }),
        }).catch( error => console.log(error))

        const data = await res?.json();

        setLikes(data.likes);
    }

    const { project } = data;

    return (
        <article className="project">
            <h1>{project.name}</h1>

            <button className="like-button" onClick={ addLike }>
                {likes} 💞
            </button>

            <main className="content">
                <img src={urlFor(project?.mainImage).url()}/>
                <div className="breakdown">
                    <ul className="tools">
                        {project.tool?.map((tool: any) => (
                            <li key={tool._key} className="tool">
                                <img src={urlFor(tool.tool.image).url()}/>
                                {tool.tool.name}
                            </li>
                        ))}
                    </ul>
                    
                    <PortableText
                        value={project?.details}
                        className="details"
                    />
                </div>
            </main>
        </article>
    );
}

export async function getStaticPaths(){
    const paths = await sanityClient.fetch(
        `*[_type == "project" && defined(slug.current)]{
            "params": {
                "slug": slug.current
            }
        }`
    );
    return { paths, fallback: true };
}

export async function getStaticProps({ params } : any){
    const { slug } = params;
    const project = await sanityClient.fetch(projectQuery, { slug });
    return { props: { data: { project } } };
}
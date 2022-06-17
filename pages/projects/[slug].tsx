import { sanityClient, urlFor, PortableText } from "../../lib/sanity";

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
    details
  }`;

export default function OneProject({ data } : any) {

    const { project } = data;
    console.log(data);

    return (
        <article className="project">
            <h1>{project.name}</h1>
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
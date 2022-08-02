import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'

import { sanityClient, urlFor } from '../../lib/sanity'

const projectsQuery = `*[_type == "project"]{
  _id,
  name,
  slug,
  mainImage,
}`;

const Projects: NextPage = ({ projects } : InferGetStaticPropsType<typeof getStaticProps>) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>

      <Navbar toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>

      <h1>Welcome to my portfolio</h1>

      <ul className="projects-list">
        { projects?.length > 0  && projects.map((project: any) => (
          <li key={ project._id } className="project-card">
            <Link href={`/projects/${project.slug.current}`}>
            <a>
              <img src={urlFor(project.mainImage).url()}/>
              <span>{ project.name }</span>
            </a>
            </Link>
          </li>
        ))}
      </ul>

    </div>
  )
  
}

export default Projects;

export const getStaticProps : GetStaticProps = async () =>{

  const projects = await sanityClient.fetch(projectsQuery);
  return { props: { projects } };

}

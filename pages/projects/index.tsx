import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import { useState } from 'react'
import Navbar from '../../components/Navbar'
import ProjectsGrid from '../../components/ProjectsGrid'
import ProjectsHeader from '../../components/ProjectsHeader'
import Sidebar from '../../components/Sidebar'

import { sanityClient } from '../../lib/sanity'


const projectsQuery = `*[_type == "project"]{
  _id,
  name,
  slug,
  mainImage,
  details
}`;

const Projects : NextPage = ({ projects } : InferGetStaticPropsType<typeof getStaticProps>) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>

      <Navbar toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <ProjectsHeader />
      <ProjectsGrid projects={projects}/>

    </div>
  )
  
}

export default Projects;

export const getStaticProps : GetStaticProps = async () =>{

  const projects = await sanityClient.fetch(projectsQuery);
  return { props: { projects }, revalidate: 1, };

}

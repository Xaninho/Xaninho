import { urlFor } from '../../lib/sanity'
import { Grid, Card, Icon, Title, Button } from './ProjectsGridElements'
import { PortableText } from '../../lib/sanity'
import Link from 'next/link'

const ProjectsGrid = ({projects} : any) => {

    return (    
      <main>

          <Grid>

            { projects?.length > 0  && projects.map((project: any) => (

              <Card key={ project._id }>
                  
                    <Icon src={urlFor(project.mainImage).url()}/>
                    <Title>{project.name}</Title>
                    <PortableText
                        value={project.details}
                        className="details"
                    />

                    <Link href={`/projects/${project.slug.current}`}>
                      <Button>Visit</Button>
                    </Link>
                    
                  
              </Card>
              
            ))}

          </Grid>

      </main>
    )

}


export default ProjectsGrid;
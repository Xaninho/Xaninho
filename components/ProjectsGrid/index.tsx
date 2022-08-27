import { urlFor } from '../../lib/sanity'
import { Grid, Card, Icon, Title, Button } from './ProjectsGridElements'
import { PortableText } from '../../lib/sanity'

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

                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener">
                      <Button>Visit</Button>
                    </a>
                    
                  
              </Card>
              
            ))}

          </Grid>

      </main>
    )

}


export default ProjectsGrid;
import { urlFor } from '../../lib/sanity'
import { Grid, Card, Icon, Title, Button } from './ArticlesGridElements'
import { PortableText } from '../../lib/sanity'
import Link from 'next/link'

const ArticlesGrid = ({articles} : any) => {

    return (    
      <main>

          <Grid>

            { articles?.length > 0  && articles.map((article: any) => (

              <Card key={ article._id }>
                  
                    <Icon src={urlFor(article.mainImage).url()}/>
                    <Title>{article.title}</Title>
                    <Title>{article.publishedAt}</Title>
                    <PortableText
                        value={article.details}
                        className="details"
                    />

                    <Link href={`/projects/${article.slug.current}`}>
                      <Button>Visit</Button>
                    </Link>
                    
                  
              </Card>
              
            ))}

          </Grid>

      </main>
    )

}


export default ArticlesGrid;
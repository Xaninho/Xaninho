import { urlFor, PortableText} from "../../lib/sanity";
import { WrapperContent, Img } from "./ArticleBodyElements";

const ArticleBody = ({ article } : any) => {

    return (
        <WrapperContent>

            <Img src={urlFor(article?.mainImage).url()}/>

            <PortableText
                value={article?.body}
                className="portable-text"
            />

        </WrapperContent>
    );

}

export default ArticleBody;
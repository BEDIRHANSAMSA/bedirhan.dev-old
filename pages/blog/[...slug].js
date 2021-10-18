import {getMdxNode, getMdxPaths} from "next-mdx/server"
import {useHydrate} from "next-mdx/client"
import { mdxComponents } from "../../components/mdx-components.js"
import Form from "../../components/form";
import Comments from "../../components/comments";
import useComment from "../../hooks/useComment";


export default function Post({post}) {
    const [comments,onSubmit,text,textSet] = useComment()

    const content = useHydrate(post, {
        components: mdxComponents,
    })
    return (
        <div className="site-container">
            <article className="prose">
                <h1 className="text-4xl font-bold">{post.frontMatter.title}</h1>
                <p className="text-gray-600">{post.frontMatter.date}</p>
                <p>{post.frontMatter.excerpt}</p>
                <hr className="my-4 mt-8 border-t-2 2xl:w-96 mx-auto"/>
                {
                    post.frontMatter.image !== undefined ? (
                        <img src={post.frontMatter.image} alt={post.frontMatter.alt}/>
                    ) : null
                }
                <div className="prose">{content}</div>
            </article>

            <hr className="my-4 mt-8 border-t-2 2xl:w-96 mx-auto"/>

            <Form onSubmit={onSubmit} textSet={textSet} text={text}/>
            <Comments comments={comments}/>
        </div>
    )
}

export async function getStaticPaths() {
    return {
        paths: await getMdxPaths("post"),
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const post = await getMdxNode("post", context)

    if (!post) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            post,
        },
    }
}
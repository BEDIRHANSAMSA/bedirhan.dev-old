import Link from "next/link"
import { getMdxNode, getMdxPaths } from "next-mdx/server"
import { useHydrate } from "next-mdx/client"
import { mdxComponents } from "../../components/mdx-companents.js"

export default function Post({post}){
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
                <img src={post.frontMatter.image} alt={post.frontMatter.alt}/>
                <div className="prose">{content}</div>
            </article>
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
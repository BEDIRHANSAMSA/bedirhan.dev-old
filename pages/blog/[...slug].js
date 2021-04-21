import {getMdxNode, getMdxPaths} from "next-mdx/server"
import {useHydrate} from "next-mdx/client"
import {mdxComponents} from "../../components/mdx-companents.js"
import {useAuth0} from "@auth0/auth0-react";
import {useEffect, useState} from "react";
import Form from "../../components/form";
import Comments from "../../components/comments";


export default function Post({post}) {
    const {getAccessTokenSilently} = useAuth0()
    const [text, textSet] = useState("")
    const [url, urlSet] = useState(null);
    const [comments, commentsSet] = useState([]);

    const fetchComment = async () => {
        const query = new URLSearchParams({url})
        const newUrl = `/api/comment?${query.toString()}`
        const response = await fetch(newUrl, {
            method: 'GET'
        })

        const data = await response.json()
        commentsSet(data);
    }

    useEffect(() => {
        const url = window.location.origin + window.location.pathname
        urlSet(url)

    }, [])

    useEffect(() => {
        if (!url) return
        fetchComment()
    }, [url])


    const content = useHydrate(post, {
        components: mdxComponents,
    })

    const onSubmit = async (e) => {
        e.preventDefault();

        const userToken = await getAccessTokenSilently();

        await fetch("/api/comment", {
            method: 'POST',
            body: JSON.stringify({text, userToken, url}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        fetchComment()
        textSet('')
    }

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
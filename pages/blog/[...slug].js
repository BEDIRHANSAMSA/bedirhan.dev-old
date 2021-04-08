import {getMdxNode, getMdxPaths} from "next-mdx/server"
import {useHydrate} from "next-mdx/client"
import {mdxComponents} from "../../components/mdx-companents.js"
import {useAuth0} from "@auth0/auth0-react";


export default function Post({post}) {
    const content = useHydrate(post, {
        components: mdxComponents,
    })
    const {loginWithRedirect, logout, isAuthenticated, user} = useAuth0()
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
            <form className="mt-10">
                <div className="mt-5">
                    <textarea  className="w-full h-16 px-3 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"/>
                    {isAuthenticated ?
                        <div className="flex items-center space-x-2">
                            <div className="relative inline-block  mt-5">
                                <img className="inline-block object-cover w-12 h-12 rounded-full"
                                     src={user.picture}
                                />
                                <span className=" absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full"/>
                            </div>
                            <span className="mt-5">{user.name}</span>
                            <button className="mt-5 text-red-600"
                                    typeof="button"
                                    onClick={() =>
                                        logout({returnTo: process.env.NEXT_PUBLIC_URL + '/blog'})
                                    }>
                                X
                            </button>
                            <button className="mt-5 bg-blue-600 text-white rounded px-2 py-2">Gönder
                            </button>
                        </div>
                        :
                        <div>
                            <button className="mt-5 bg-blue-600 text-white rounded px-2 py-2"
                                    onClick={() => loginWithRedirect()}>Giriş Yap
                            </button>
                        </div>

                    }
                </div>
            </form>
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
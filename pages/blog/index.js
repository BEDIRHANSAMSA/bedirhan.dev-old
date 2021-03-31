import {getAllNodes} from "next-mdx/server"
import Link from 'next/link'

function Blog({posts}) {
    return (
        <div className="site-container">
            <div className="space-y-4">

            </div>
            {posts.map(post => {
                    return (
                        <article key={post.url}>
                            <h2 className="text-xl font-bold">
                                <Link href={post.url}>
                                    {post.frontMatter.title}
                                </Link>
                            </h2>
                            <p>{post.frontMatter.excerpt}</p>
                            <div className="text-gray-600">
                                <span>{post.frontMatter.date}</span>
                            </div>
                        </article>
                    )
                })}

        </div>
    )
}

export async function getStaticProps() {
    return {
        props: {
            posts: await getAllNodes("post"),
        },
    }
}

export default Blog
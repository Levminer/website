import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Head from "next/head"
import Link from "next/link"

export const sortByDate = (a, b) => {
	return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
}

export default function Home({ posts }) {
	return (
		<>
			<Head>
				<title>Blog</title>
			</Head>

			<section className="posts">
				{posts.map((post, index) => (
					<div key={index} className="body-font page bg3 overflow-hidden">
						<div className="container mx-auto px-5 py-24">
							<div className="flex flex-wrap justify-center gap-10">
								<div className="glass flex max-w-md flex-col items-start p-12 md:max-w-4xl">
									<div>
										<img src={post.frontmatter.cover_image} className="rounded-xl bg-gray-700 p-1" alt="cover" />
									</div>
									<h2 className="title-font my-4 text-3xl font-medium sm:text-5xl">{post.frontmatter.title}</h2>
									<span className="orange mb-5 rounded-lg bg-gray-700 p-2 text-sm font-bold tracking-widest">{post.frontmatter.date}</span>
									<div className="prose prose-invert lg:prose-xl">{post.frontmatter.excerpt}</div>
									<div className="mt-5">
										<Link href={`/blog/${post.slug}`}>
											<a className="button">Read More</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</section>
		</>
	)
}

export async function getStaticProps() {
	// Get files from the posts dir
	const files = fs.readdirSync(path.join("posts"))

	// Get slug and frontmatter from posts
	const posts = files.map((filename) => {
		// Create slug
		const slug = filename.replace(".md", "")

		// Get frontmatter
		const markdownWithMeta = fs.readFileSync(path.join("posts", filename), "utf-8")

		const { data: frontmatter } = matter(markdownWithMeta)

		return {
			slug,
			frontmatter,
		}
	})

	return {
		props: {
			posts: posts.sort(sortByDate),
		},
	}
}

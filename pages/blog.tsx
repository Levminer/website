import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Head from "next/head"
import Link from "next/link"

export const sortByDate = (a, b) => {
	// @ts-ignore
	return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
}

export default function Home({ posts }) {
	return (
		<>
			<Head>
				<title>Blog</title>
			</Head>

			<section className="bg-gradient-to-r from-indigo-900 to-sky-900">
				{posts.map((post, index) => (
					<div key={index} className="overflow-hidden">
						<div className="container mx-auto px-5 py-32">
							<div className="flex flex-wrap justify-center gap-10">
								<div className="flex max-w-md flex-col items-start rounded-xl bg-gray-800 p-12 md:max-w-4xl">
									<div className="relative aspect-[1.91/1] w-full">
										<img
											width={1200}
											height={630}
											src={post.frontmatter.cover_image}
											className="h-full w-full rounded-xl bg-gray-700 object-cover p-1"
											alt="cover"
										/>
									</div>
									<h2 className="title-font my-6 text-3xl font-medium sm:text-5xl">{post.frontmatter.title}</h2>
									<span className="text-popup-blue mb-5 rounded-lg bg-gray-700 p-2 text-sm font-bold tracking-widest">
										{post.frontmatter.date}
									</span>
									<div className="prose prose-invert lg:prose-xl">{post.frontmatter.excerpt}</div>
									<div className="mt-5">
										<Link className="button" href={`/blog/${post.slug}`}>
											Read post
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

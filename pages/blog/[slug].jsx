import fs from "fs"
import path from "path"
import matter from "gray-matter"
import markdownIt from "markdown-it"
import highlightjs from "markdown-it-highlightjs"
const md = markdownIt().use(highlightjs)
import Head from "next/head"

export default function PostPage({ frontmatter: { title, date, cover_image, excerpt }, slug, content }) {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={excerpt} />
				<meta property="og:title" content={title} key="ogTitle" />
				<meta property="og:description" content={excerpt} key="ogDescription" />
				<meta property="og:type" content="article" key="ogType" />
				<meta property="og:image" content="https://cdn.levminer.com/blog/tauri-vs-electron/tauri-vs-electron.png" key="ogImage" />
			</Head>
			<article className="body-font page bg3 overflow-hidden">
				<div className="container mx-auto px-5 py-24">
					<div className="flex flex-wrap justify-center gap-10">
						<div className="glass flex max-w-md flex-col items-start p-12 md:max-w-4xl">
							<div>
								<img src={cover_image} className="bg-gray-700 rounded-xl p-1" alt="cover" />
							</div>
							<h2 className="title-font my-6 text-3xl font-medium sm:text-5xl">{title}</h2>
							<span className="orange mb-5 rounded-lg bg-gray-700 p-2 text-sm font-bold tracking-widest">{date}</span>
							<div className="prose prose-invert lg:prose-xl">
								<div dangerouslySetInnerHTML={{ __html: md.render(content) }}></div>
							</div>
						</div>
					</div>
				</div>
			</article>
		</>
	)
}

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join("posts"))

	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace(".md", ""),
		},
	}))

	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({ params: { slug } }) {
	const markdownWithMeta = fs.readFileSync(path.join("posts", slug + ".md"), "utf-8")

	const { data: frontmatter, content } = matter(markdownWithMeta)

	return {
		props: {
			frontmatter,
			slug,
			content,
		},
	}
}

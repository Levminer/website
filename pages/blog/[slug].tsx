import fs from "fs"
import path from "path"
import matter from "gray-matter"
import markdownIt from "markdown-it"
import highlightjs from "markdown-it-highlightjs"
const md = markdownIt().use(highlightjs)
import Head from "next/head"
import Link from "next/link"

const shareArticle = async () => {
	const shareData = {
		title: "Levminer's Blog",
		text: "Check out this cool article!",
		url: location.href,
	}

	await navigator.share(shareData)
}

export default function PostPage({ frontmatter: { title, date, cover_image, excerpt }, slug, content }) {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={excerpt} />
				<meta property="og:title" content={title} key="ogTitle" />
				<meta property="og:description" content={excerpt} key="ogDescription" />
				<meta property="og:type" content="article" key="ogType" />
				<meta property="og:image" content={cover_image} key="ogImage" />
			</Head>
			<div className="bg-gradient-to-r from-indigo-900 to-sky-900">
				<article>
					<div className="container mx-auto py-16">
						<div className="flex flex-wrap justify-center">
							<div className="!w-full flex flex-col items-start rounded-xl bg-gray-800 p-5 md:p-10 md:max-w-3xl">
								<div>
									<img src={cover_image} className="rounded-xl bg-gray-700 p-1" alt="Cover image" />
								</div>
								<h2 className="title-font my-6 text-3xl font-medium sm:text-5xl">{title}</h2>
								<span className="text-popup-blue mb-6 rounded-lg bg-gray-700 p-2 text-sm font-bold tracking-widest">{date}</span>
								<div className="prose prose-invert lg:prose-xl">
									<div dangerouslySetInnerHTML={{ __html: md.render(content) }}></div>
								</div>
							</div>
						</div>
					</div>
				</article>

				<div className="pb-32">
					<div className="!w-full container mx-auto rounded-xl bg-gray-800 p-8 md:max-w-3xl">
						<h1 className="text-4xl">👋 Hi there!</h1>
						<h2 className="mt-5 text-2xl text-gray-200">
							Thanks for reading this post! If you enjoyed this article check out my other articles, share it with others and follow me
							on Twitter.
						</h2>
						<div className="flex-wrap mt-5 flex gap-3">
							<a
								href="https://twitter.com/levminer92"
								className="button gap-3 border-white bg-white font-medium text-black hover:text-white"
								rel="noopener noreferrer"
								target="_blank"
								aria-label="Twitter"
							>
								<svg role="img" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<title>X</title>
									<path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
								</svg>
								Follow
							</a>

							<button className="buttont gap-3 font-medium" onClick={shareArticle}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
									/>
								</svg>
								Share
							</button>

							<Link href="/blog" className="buttont gap-3 font-medium" aria-label="Other articles">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
									/>
								</svg>
								Other articles
							</Link>
						</div>
					</div>
				</div>
			</div>
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

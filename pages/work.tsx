import Head from "next/head"
import Link from "next/link"
import MarkdownSymbol from "../components/markdownSymbol"

const Home = () => {
	let i = 1

	return (
		<>
			<Head>
				<title>Work</title>
			</Head>

			<div className="relative flex min-h-screen justify-center bg-gradient-to-r from-teal-400 to-lime-500 py-32 font-mono">
				<div className="mx-1 h-fit rounded-2xl bg-black/70 p-3 text-left text-lg sm:mx-28 sm:p-10 sm:text-2xl md:max-w-7xl">
					<div className="flex gap-1">
						<MarkdownSymbol symbol="#" line={i++} />
						<h1>Work</h1>
					</div>

					<div className="flex gap-1">
						<MarkdownSymbol symbol="" line={i++} />
						<br />
					</div>

					<div className="flex gap-1">
						<MarkdownSymbol symbol="#" line={i++} />
						<h1>Forum App Kft.</h1>
					</div>

					<div className="flex gap-1">
						<MarkdownSymbol symbol="*" line={i++} />
						<h1>
							Developed a website and mobile app for university students looking for opportunities in Europe. Used technologies like
							React Native, React, TypeScript and TailwindCSS collaborating closely with designers and other developers.
						</h1>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home

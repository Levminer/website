import Head from "next/head"
import Link from "next/link"
import MarkdownSymbol from "../components/markdownSymbol"

const Home = () => {
	let i = 1

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>

			<div className="relative flex min-h-screen justify-center bg-gradient-to-r from-yellow-600 to-red-600 py-32 font-mono">
				<div className="mx-1 h-fit rounded-2xl bg-black/70 p-3 text-left text-lg sm:mx-28 sm:p-10 sm:text-2xl md:max-w-7xl">
					<div className="flex gap-1">
						<MarkdownSymbol symbol="#" line={i++} />
						<h1>Welcome!</h1>
					</div>

					<div className="flex gap-1">
						<MarkdownSymbol symbol="*" line={i++} />
						<h2>I'm a Software Engineer based in Hungary, currently working as a freelancer.</h2>
					</div>

					<div className="flex gap-1">
						<MarkdownSymbol symbol="" line={i++} />
						<br />
					</div>

					<div className="flex gap-1">
						<MarkdownSymbol symbol="##" line={i++} />
						<h2>Open-source stuff</h2>
					</div>

					<div className="flex gap-1">
						<MarkdownSymbol symbol="*" line={i++} />
						<h3>
							Couple of things I did in my free time{" "}
							<Link className="font-semibold text-blue-500 duration-200 ease-in hover:underline" href="/projects">
								[Projects](/projects)
							</Link>
						</h3>
					</div>

					<div className="flex gap-1">
						<MarkdownSymbol symbol="" line={i++} />
						<br />
					</div>

					<div className="flex gap-1">
						<MarkdownSymbol symbol="##" line={i++} />
						<h2>Things I worked on</h2>
					</div>

					<div className="flex gap-1">
						<MarkdownSymbol symbol="*" line={i++} />
						<h3>
							Companies I worked with{" "}
							<Link className="font-semibold text-blue-500 duration-200 ease-in hover:underline" href="/work">
								[Work](/work)
							</Link>
						</h3>
					</div>

					<div className="flex gap-1">
						<MarkdownSymbol symbol="" line={i++} />
						<br />
					</div>

					<div className="flex gap-1">
						<MarkdownSymbol symbol="##" line={i++} />
						<h2>Socials</h2>
					</div>

					<div className="flex gap-1">
						<MarkdownSymbol symbol="*" line={i++} />
						<a
							href="https://github.com/levminer"
							className="font-semibold text-blue-500 duration-200 ease-in hover:underline"
							target="_blank"
							rel="noopener noreferrer"
						>
							[GitHub](github.com/levminer)
						</a>
					</div>
					<div className="flex gap-1">
						<MarkdownSymbol symbol="*" line={i++} />
						<a
							href="https://twitter.com/levminer92"
							className="font-semibold text-blue-500 duration-200 ease-in hover:underline"
							target="_blank"
							rel="noopener noreferrer"
						>
							[Twitter](twitter.com/levminer92)
						</a>
					</div>

					<div className="flex gap-1">
						<MarkdownSymbol symbol="*" line={i++} />
						<a href="mailto:contact@levminer.com" className="font-semibold text-blue-500 duration-200 ease-in hover:underline">
							[Email](contact@levminer.com)
						</a>
					</div>

					<div className="flex gap-1">
						<MarkdownSymbol symbol="" line={i++} />
					</div>
				</div>
			</div>
		</>
	)
}

export default Home

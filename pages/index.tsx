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

			<div className="relative flex min-h-screen flex-col bg-gray-800 py-32 font-mono">
				<div className="mx-auto flex w-full max-w-xl flex-col items-center justify-center space-y-5 px-5">
					<h1 className="text-center">
						Hi! I'm a Software Engineer based in Hungary, currently working as a freelancer. Mostly working with React, Next.js and React
						Native.
					</h1>

					<div className="w-full rounded-xl border-2 border-gray-700 p-5 text-center">
						<h2 className="text-2xl font-bold">Open-source</h2>
						<h3 className="text-balance">
							Couple of things I did in my free time{" "}
							<Link className="font-semibold text-blue-500 duration-200 ease-in hover:underline" href="/projects">
								[Projects](/projects)
							</Link>
						</h3>
					</div>

					<div className="w-full rounded-xl border-2 border-gray-700 p-5 text-center">
						<h2 className="text-2xl font-bold">Work</h2>
						<h3 className="text-balance">
							Companies I worked with{" "}
							<Link className="font-semibold text-blue-500 duration-200 ease-in hover:underline" href="/work">
								[Work](/work)
							</Link>
						</h3>
					</div>

					<div className="w-full rounded-xl border-2 border-gray-700 p-5 text-center">
						<h2 className="text-2xl font-bold">Socials</h2>
						<ol className="">
							<li>
								<a
									href="https://github.com/levminer"
									className="font-semibold text-blue-500 duration-200 ease-in hover:underline"
									target="_blank"
									rel="noopener noreferrer"
								>
									[GitHub](github.com/levminer)
								</a>
							</li>
							<li>
								<a
									href="https://twitter.com/levminer92"
									className="font-semibold text-blue-500 duration-200 ease-in hover:underline"
									target="_blank"
									rel="noopener noreferrer"
								>
									[Twitter](twitter.com/levminer92)
								</a>
							</li>
							<li>
								<a href="mailto:contact@levminer.com" className="font-semibold text-blue-500 duration-200 ease-in hover:underline">
									[Email](contact@levminer.com)
								</a>
							</li>
						</ol>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home

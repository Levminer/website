import Link from "next/link"

const Home = () => {
	let i = 0

	return (
		<>
			<div className="relative min-h-screen font-mono">
				<div className="mx-1 mt-16 rounded-2xl bg-black p-10 text-left text-lg sm:mx-20 sm:text-2xl">
					<div className="flex gap-1">
						<MarkdownSymbol symbol="#" line={i++} />
						<h1>Lőrik Levente</h1>
					</div>

					<div className="flex gap-1">
						<MarkdownSymbol symbol="*" line={i++} />
						<h1>Freelance Software Engineer</h1>
					</div>

					<div className="flex gap-1">
						<MarkdownSymbol symbol="" line={i++} />
						<br />
					</div>

					<div className="flex gap-1">
						<MarkdownSymbol symbol="##" line={i++} />
						<h2>Open-source stuff:</h2>
					</div>

					<div className="flex gap-1">
						<MarkdownSymbol symbol="*" line={i++} />
						<Link className="font-semibold text-blue-500 duration-200 ease-in hover:underline" href="/projects">
							[Projects](/projects)
						</Link>
					</div>

					<div className="flex gap-1">
						<MarkdownSymbol symbol="" line={i++} />
						<br />
					</div>

					<div className="flex gap-1">
						<MarkdownSymbol symbol="##" line={i++} />
						<h2>Socials:</h2>
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

const MarkdownSymbol = ({ symbol, line }) => {
	return (
		<div className="flex">
			<span className="w-14 font-bold text-gray-500">{line}</span>
			<span className="font-bold text-gray-400">{symbol}</span>
		</div>
	)
}

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
						<MarkdownSymbol symbol="*" line={i++} />
						<h3>Couple of companies I've worked for</h3>
					</div>

					<div className="flex gap-1">
						<MarkdownSymbol symbol="" line={i++} />
						<br />
					</div>

					<div className="flex gap-1">
						<MarkdownSymbol symbol="##" line={i++} />
						<h2>Forum App Kft.</h2>
					</div>

					<div className="flex gap-1">
						<MarkdownSymbol symbol="*" line={i++} />
						<h3>Stack: React, React Native, Expo, Next.js, TailwindCSS</h3>
					</div>

					<div className="flex gap-1">
						<MarkdownSymbol symbol="*" line={i++} />
						<h3>
							Developed a website and mobile app for university students looking for opportunities in Europe. Used technologies like
							React Native, React, TypeScript and TailwindCSS collaborating closely with designers and other developers.
						</h3>
					</div>

					<div className="flex gap-1">
						<MarkdownSymbol symbol="" line={i++} />
						<br />
					</div>

					<div className="flex gap-1">
						<MarkdownSymbol symbol="##" line={i++} />
						<h2>Giftery International Kft.</h2>
					</div>

					<div className="flex gap-1">
						<MarkdownSymbol symbol="*" line={i++} />
						<h3>Stack: Svelte, SvelteKit, TailwindCSS</h3>
					</div>

					<div className="flex gap-1">
						<MarkdownSymbol symbol="*" line={i++} />
						<h3>
							Helped built a E-commerce website that is present in 10 countries. Used technologies like SvelteKit, TailwindCSS and
							Firebase. Also helped maintain a complex Back-office website.
						</h3>
					</div>

					<div className="flex gap-1">
						<MarkdownSymbol symbol="" line={i++} />
						<br />
					</div>

					<div className="flex gap-1">
						<MarkdownSymbol symbol="##" line={i++} />
						<h2>out!</h2>
					</div>

					<div className="flex gap-1">
						<MarkdownSymbol symbol="*" line={i++} />
						<h3>Stack: React Native, Expo, TypeScript</h3>
					</div>

					<div className="flex gap-1">
						<MarkdownSymbol symbol="*" line={i++} />
						<h3>
							Built a mobile app for Android and iOS. Users who don't use their phone can earn points that they can redeem for coupons.
						</h3>
					</div>

					<div className="flex gap-1">
						<MarkdownSymbol symbol="" line={i++} />
						<br />
					</div>
				</div>
			</div>
		</>
	)
}

export default Home

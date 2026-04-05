import Head from "next/head"
import AppShowcase from "../components/appShowcase"

const Home = () => {
	return (
		<>
			<Head>
				<title>Projects</title>
			</Head>

			{/* desktop projects */}
			<section id="desktop" className="mx-auto flex flex-col flex-wrap bg-gradient-to-tr from-gray-700 via-rose-800 to-pink-800 py-32">
				<div className="mx-auto flex flex-col flex-wrap justify-center items-center space-y-5 w-full max-w-2xl px-5">
					<AppShowcase
						img={"https://raw.githubusercontent.com/Levminer/cores/dev/.github/screenshots/home.png"}
						title={"Cores"}
						description={"Modern hardware monitor with remote monitoring."}
						website={"https://coresmonitor.com"}
						source={"https://github.com/levminer/cores"}
						technologies={"Rust, Svelte, TypeScript, C#"}
					/>

					<AppShowcase
						img={"https://raw.githubusercontent.com/Levminer/authme/dev/screenshots/codes.png"}
						title={"Authme"}
						description={"Simple cross platform two-factor authentication app for desktop."}
						website={"https://authme.levminer.com/"}
						source={"https://github.com/levminer/authme"}
						technologies={"Rust, Svelte, TypeScript"}
					/>

					<AppShowcase
						title={"Trusted Signing CLI"}
						description={"A simple CLI tool to sign files with Trusted Signing"}
						website={"https://github.com/levminer/trusted-signing-cli"}
						source={"https://github.com/levminer/trusted-signing-cli"}
						technologies={"Rust"}
					/>
				</div>
			</section>
		</>
	)
}

export default Home

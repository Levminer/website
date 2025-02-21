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
						website={"https://cores.levminer.com"}
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
						img={"https://raw.githubusercontent.com/Levminer/screentime/dev/screenshots/application.png"}
						title={"Screentime"}
						description={"Track how much time you spend on your computer."}
						website={"https://github.com/levminer/screentime/releases"}
						source={"https://github.com/levminer/screentime"}
						technologies={"Electron, TypeScript"}
					/>

					<AppShowcase
						img={"https://raw.githubusercontent.com/Levminer/netflix-statistics/main/images/en.png"}
						title={"Netflix Statistics"}
						description={"View how much time you spent in your life watching Netflix."}
						website={"https://netflixstatistics.levminer.com"}
						source={"https://github.com/levminer/netflix-statistics"}
						technologies={"Next.js, React, TypeScript"}
					/>
				</div>
			</section>
		</>
	)
}

export default Home

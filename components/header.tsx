import { useRouter } from "next/router"
import Link from "next/link"

const Header = () => {
	const router = useRouter()

	return (
		<>
			<header className="small:relative small:backdrop-blur-0 small:bg-black sticky top-0 z-50 bg-gray-900/70 text-gray-50 backdrop-blur-xl backdrop-saturate-100">
				<div className="container mx-auto flex flex-col justify-between flex-wrap items-center p-5 md:flex-row">
					<nav className="flex flex-wrap  text-base">
						<Link
							className={`mr-3 rounded-xl p-1 px-2 text-2xl transition duration-200 ease-in hover:translate-y-0.5 hover:text-gray-300 ${
								router.pathname == "/" ? "bg-white p-1 text-black hover:bg-gray-300 hover:!text-black" : ""
							}`}
							href="/"
						>
							Home
						</Link>
						<Link
							className={`mr-3 rounded-xl p-1 px-2 text-2xl transition duration-200 ease-in hover:translate-y-0.5 hover:text-gray-300 ${
								router.pathname == "/projects" ? "bg-white p-1 text-black hover:bg-gray-300 hover:!text-black" : ""
							}`}
							href="/projects"
						>
							Projects
						</Link>
						<Link
							className={`mr-3 rounded-xl p-1 px-2 text-2xl transition duration-200 ease-in hover:translate-y-0.5 hover:text-gray-300 ${
								router.pathname == "/blog" ? "bg-white p-1 text-black hover:bg-gray-300 hover:!text-black" : ""
							}`}
							href="/blog"
						>
							Blog
						</Link>
					</nav>
					<button className="button mt-5 md:mt-0">
						<a target="_blank" rel="noopener noreferrer" href="mailto:contact@levminer.com">
							Contact
						</a>
					</button>
				</div>
			</header>
		</>
	)
}

export default Header

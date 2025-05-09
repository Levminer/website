import { useRouter } from "next/router"
import Link from "next/link"

const Header = () => {
	const router = useRouter()

	return (
		<>
			<header className="relative backdrop-blur-0 bg-black sm:sticky top-0 z-50 sm:bg-gray-900/70 text-gray-50 sm:backdrop-blur-xl backdrop-saturate-100">
				<div className="container mx-auto flex flex-col flex-wrap items-center justify-center p-5 md:flex-row">
					<nav className="flex flex-wrap text-base">
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
				</div>
			</header>
		</>
	)
}

export default Header

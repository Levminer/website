import { useRouter } from "next/router"
import Link from "next/link"
import { House, Newspaper, Presentation } from "lucide-react"

const HeaderLink = ({ path, children }) => {
	const router = useRouter()

	return (
		<Link
			className={`rounded-xl flex justify-center items-center flex-row gap-1 p-2 text-lg transition duration-200 ease-in hover:translate-y-0.5 hover:text-gray-300 ${
				router.pathname == path ? "bg-white text-black hover:bg-gray-300 hover:!text-black" : ""
			}`}
			href={path}
		>
			{children}
		</Link>
	)
}

const Header = () => {
	const router = useRouter()

	return (
		<>
			<header className="relative backdrop-blur-0 bg-black sm:sticky top-0 z-50 sm:bg-gray-900/70 text-gray-50 sm:backdrop-blur-xl backdrop-saturate-100">
				<div className="container mx-auto flex flex-col flex-wrap items-center justify-center p-5 md:flex-row">
					<nav className="flex flex-wrap text-base space-x-4">
						<HeaderLink path="/">
							<House />
							<span>Home</span>
						</HeaderLink>
						<HeaderLink path="/projects">
							<Presentation />
							<span>Projects</span>
						</HeaderLink>

						<HeaderLink path="/blog">
							<Newspaper />
							<span>Blog</span>
						</HeaderLink>
					</nav>
				</div>
			</header>
		</>
	)
}

export default Header

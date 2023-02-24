import Link from "next/link"

const Error404 = () => {
	return (
		<>
			<section className="bg">
				<div className="hero container mx-auto -mt-12 flex flex-col items-center justify-center py-72">
					<div className="glass max-w-xs p-10 text-center lg:max-w-4xl">
						<h1 className="mb-4 text-8xl font-bold ">404</h1>
						<p className="mb-4 text-4xl">The page you're looking for isn't here.</p>
						<p className="mb-4 text-2xl">You might have the wrong address, or the page may have moved.</p>
						<div className="flex items-center justify-center gap-5">
							<Link className="button" href="/">
								Home
							</Link>

							<a className="button" rel="noreferrer" target="_blank" href="https://status.levminer.com">
								Status
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Error404

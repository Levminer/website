const About = () => {
	return (
		<>
			<section className="body-font page overflow-hidden">
				<div className="container mx-auto px-5 py-24">
					<div className="flex flex-wrap justify-center gap-10">
						<div className="glass flex max-w-md flex-col items-start p-12 md:max-w-2xl">
							<span className="rainbow rounded-lg bg-gray-600 p-2 text-sm font-bold tracking-widest">Website</span>
							<h2 className="title-font my-4 text-2xl font-medium sm:text-3xl">Changing my site since 2018...</h2>
							<p className="mb-4 leading-relaxed">As a developer I have to constantly change my site. This website is roughly the fifth iteration. The site is built with React, with the help of Next.js. I prefer using React over other frontend frameworks (I tried many). But React came out as the winner when I started rewriting the website. And Next.js is just awesome! It's so much better than any other React solution.</p>
							<p className="mb-4 leading-relaxed">For the styling I used Tailwind. Tailwind is a good tool, and speeds up the development.</p>
							<p className="mb-4 leading-relaxed">The site is hosted on Cloudflare Pages. I've used Vercel and Netlify before, but I'm using Cloudflare for my website any way, so its just a convenience thing to use Cloudflare Pages.</p>
						</div>

						{/* <div className="glass flex max-w-md flex-col items-start p-12 md:max-w-2xl">
							<span className="rainbow rounded-lg bg-gray-600 p-2 text-sm font-bold tracking-widest">Me</span>
							<h2 className="title-font my-4 text-2xl font-medium sm:text-3xl">Programming since 2018...</h2>
							<p className="mb-4 leading-relaxed">I started programming in 2018. My first website was a counter, that was counted how many days were remaining until a given date.</p>
						</div> */}
					</div>
				</div>
			</section>
		</>
	)
}

export default About

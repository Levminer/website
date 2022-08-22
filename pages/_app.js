import Head from "next/head"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/index.css"
import "../styles/code.css"

const App = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<title>Levminer</title>
				<meta charSet="UTF-8" />
				<meta name="description" content="Levminer's website - Web apps, desktop apps amd a technical blog" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
				<meta property="og:title" content="Levminer's website - Web apps, desktop apps amd a technical blog" key="ogTitle" />
				<meta property="og:image" content="https://www.levminer.com/og.png" key="ogImage" />
				<meta property="og:type" content="website" key="ogType" />
				<meta property="og:description" content="Levminer's website - Web apps, desktop apps amd a technical blog" key="ogDescription" />
				<meta property="og:locale" content="en_US" />
			</Head>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	)
}

export default App


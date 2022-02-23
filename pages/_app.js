import Head from "next/head"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/globals.css"

const App = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<title>Levminer</title>
				<meta charSet="UTF-8" />
				<meta name="description" content="Levminer's website - Websites and Desktop apps" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
			</Head>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	)
}

export default App

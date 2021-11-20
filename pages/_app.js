import Footer from '../components/footer'

import Nav from "../components/nav"

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Nav />
			<Component {...pageProps} />
			<Footer />
		</>
	)
}

export default MyApp

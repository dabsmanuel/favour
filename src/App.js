import { useEffect } from 'react';
import AOS from 'aos';
// AOS styles
import 'aos/dist/aos.css';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { GlobalStyles } from './components/shared/GlobalStyles/GlobalStyles';

function App() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<>
			<GlobalStyles />
			<Header />
			<Cards />
			<Footer />
		</>
	);
}

export default App;

import './App.css';
import './Styles/spacing.css';
import './Styles/color.css';

import { Navigation } from './Components/Navigation/Navigation';
import { Header } from './Components/Header/Header';
import { Offers } from './Components/Offers/Offers';
import { Info } from './Components/Info/Info';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Offers />
      <Info />
      <Footer />
    </>
  );
}

export default App;

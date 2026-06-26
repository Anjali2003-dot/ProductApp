import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';


import Footer from "../components/Footer";

export default function MyApp({ Component, pageProps }) {
  return(
    <>
   
   <Component {...pageProps} />
   <Footer />
   </>
  ); 
}
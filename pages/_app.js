import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './Components/Navbar'
export default function App({ Component, pageProps }) {
  return <>
  {/* <Head>
   <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head> */}
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
  <Navbar/>
  <Component {...pageProps} />
  </>
}

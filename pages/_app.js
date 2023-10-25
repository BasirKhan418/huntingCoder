/* eslint-disable @next/next/no-sync-scripts */
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './Components/Navbar'
import { useQuery,QueryClientProvider, QueryClient } from '@tanstack/react-query'
export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return <>
  {/* <Head>
   <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head> */}
  <QueryClientProvider client={queryClient}>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
  <Navbar/>
  <Component {...pageProps} />
  </QueryClientProvider>
  </>
}

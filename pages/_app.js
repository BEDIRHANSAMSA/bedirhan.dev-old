import '../styles/global.css'
import Header from "../components/header";
import { Auth0Provider } from "@auth0/auth0-react";


function MyApp({Component, pageProps}) {
    return (
        <Auth0Provider
            domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
            clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
            redirectUri={process.env.NEXT_PUBLIC_URL}
        >
            <div className="antialiased text-gray-600">
                <Header/>
                <main className="mt-6 mb-20">
                    <Component {...pageProps} />
                </main>
            </div>
        </Auth0Provider>
    )

}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
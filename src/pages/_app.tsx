import { AppProvider } from "context/AppContext";
import { AuthProvider } from "context/AuthContext";
import "styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
   return (
      <AuthProvider>
         <AppProvider>
            <Component {...pageProps} />
         </AppProvider>
      </AuthProvider>
   );
};

export default MyApp;

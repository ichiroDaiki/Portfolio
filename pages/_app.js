import "../styles/globals.css";
import { MenuContextProvider } from "../context/MenuContext";

function MyApp({ Component, pageProps }) {
  return (
    <MenuContextProvider>
      <Component {...pageProps} />
    </MenuContextProvider>
  );
}

export default MyApp;

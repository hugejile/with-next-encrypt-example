import type { AppProps } from "next/app";
import { AppEncryptProvider } from "with-next-encrypt";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppEncryptProvider {...pageProps} encryptKey={process.env.withNextEncryptKey}>
      <Component {...pageProps} />
    </AppEncryptProvider> 
  );
}

export default MyApp;
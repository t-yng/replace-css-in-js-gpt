import { colors } from "@/styles/color";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>{`
        body {
          background-color: ${colors.background};
          margin: 0;
        }

        h1,
        h2,
        h3 {
          margin: 0;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
};

export default App;

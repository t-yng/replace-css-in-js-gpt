import { Global, css } from '@emotion/react';
import { colors } from "@/styles/color";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  );
};

const globalStyles = css`
  body {
    background-color: ${colors.background};
    margin: 0;
  }

  h1,
  h2,
  h3 {
    margin: 0;
  }
`;

export default App;
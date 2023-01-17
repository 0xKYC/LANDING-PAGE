import { ConfigProvider } from "antd";
import { AppProps } from "next/app";
import { Layout } from "../src/components/layout";
import { colors } from "../src/styles/colors";
import { Styles } from "../src/styles/globals";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colors.primary,
        },
      }}
    >
      <Styles />
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </ConfigProvider>
  );
}

export default MyApp;

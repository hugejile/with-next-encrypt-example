import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from "next";
import { EncryptOptions, withEncryptedServerSide } from "with-next-encrypt";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage<any> = ({ t, encryptOption, encryptKey }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{t ?? "no defined"}</h1>

        <p>{encryptOption ?? 'no options'}</p>
        <p>{encryptKey ?? "no key"}</p>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<any> =
  withEncryptedServerSide(async (ctx: GetServerSidePropsContext) => {
    let option = process.env.withNextEncryptOption as EncryptOptions;
    let key = process.env.withNextEncryptKey;

    return {
      props: { t: "I am encrypted", encryptOption: option ?? "", encryptKey: key ?? "" },
    };
  }, process.env.withNextEncryptOption as EncryptOptions);
export default Home;

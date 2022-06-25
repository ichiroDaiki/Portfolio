import Head from "next/head";
import Layout from "../components/Layout";
import styles from "../../styles/Projects.module.css";
const Contact = () => {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>

      <div className={styles.gallery}>
        <div className={styles.galleryItem}></div>
      </div>
    </Layout>
  );
};

export default Contact;

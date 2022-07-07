import Head from "next/head";
import Layout from "../components/Layout";
import styles from "../../styles/Contact.module.css";
import Image from "next/image";
import Link from "next/link";
const Contact = () => {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <div className={styles.contactInfo}>
        <div className={styles.contact}>
        <h1>Social</h1>
        <p>Im social, feel free to contact me.</p>
        </div>
        <div className={styles.social}>
          <div className={styles.red}>
            <div className={styles.blue}>
              <Link href="https://www.linkedin.com/in/jostick-omar-quiel-espinosa-870872120/">
                <a target="_blank">
                  <Image src="/social/in.jpg" width={30} height={30} alt="in" />
                </a>
              </Link>
            </div>
            <div className={styles.yellow}>
              <Link href="https://www.linkedin.com/in/jostick-omar-quiel-espinosa-870872120/">
                <a target="_blank">Jostick Omar Quiel Espinosa</a>
              </Link>
            </div>
          </div>
          <div className={styles.red}>
            <div className={styles.blue}>
            <Link href="https://www.instagram.com/jostick_quiel/">
              <a target="_blank">
                <Image src="/social/ign.png" width={30} height={30} alt="in" />
              </a>
            </Link>
            </div>
            <div className={styles.yellow}>
              <Link href="https://www.instagram.com/jostick_quiel/">
                <a target="_blank">jostick_quiel</a>
              </Link>
            </div>
          </div>

          <div className={styles.red}>
            <div className={styles.blue}>
            <Link href="https://www.instagram.com/jostick_quiel/">
              <a target="_blank">
                <Image src="/social/twi.png" width={30} height={30} alt="in" />
              </a>
            </Link>
            </div>
            <div className={styles.yellow}>
              <Link href="https://twitter.com/JostickOmar">
                <a target="_blank">@JostickOmar</a>
              </Link>
            </div>
          </div>
          
          <div className={styles.red}>
            <div className={styles.blue}>
            <Image src="/social/ema.png" width={30} height={30} alt="email" />
            </div>
            <div className={styles.yellow}>
              <Link href="mailto:ichirodaiki@protonmail.com">
                <a target="_blank">ichirodaiki@protonmail.com</a>
              </Link>
            </div>
          </div>
          <div className={styles.red}>
            <div className={styles.blue}>
            <Image src="/social/wha.png" width={30} height={30} alt="phone" />
            </div>
            <div className={styles.yellow}>
              <Link href="https://wa.me/+50766465080">
                <a target="_blank">+507 66465080</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

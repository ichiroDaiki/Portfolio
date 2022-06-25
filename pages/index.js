import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout from "./components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Inicio</title>
        <meta
          name="description"
          content="Jostick Quiel Software Developer Portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.intro}>
        <div className={styles.welcomeText}>
          <h1>Welcome to my portfolio 📜</h1>
        </div>
        <div className={styles.consoleText}>
          <div className={styles.consoleDiv}>
            <div className={styles.consoleButton}>
              <div className={styles.consoleButtonOne}></div>
              <div className={styles.consoleButtonTwo}></div>
            </div>
            <div className={styles.consoleTextMessage}>
              <p>
                Hi, I am Jostick 😁 a Software Developer 👨‍💻 that love tech 🚀
                <span className={styles.writeText}>and coffe ☕</span>
              </p>
              <span className={styles.consoleOpacityText}>
                Hola, soy Jostick un desarrollador de software que ama la
                tecnologia y el cafe.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.divSkills}>
        <div className={styles.titleSkills}>
          <h1>🎯 My Skills </h1>
          <p>
            I like to know how everything works, I am not just a frontend
            developer,{" "}
            <span className={styles.greenText}>I also like the backend</span>{" "}
            and so{" "}
            <span className={styles.greenText}>my skills are varied.</span> I
            like the quality and beauty of the software and how that software
            looks to the user, the software has to be easy to use and look nice.
          </p>
        </div>
        <div className={styles.skills}>
          <div className={styles.cardSkill}>
            <div className={styles.cardLogo}>
              <Image
                layout="intrinsic"
                src={"/assets/rust.webp"}
                width={300}
                height={300}
                alt="rust"
              />
            </div>
            <div className={styles.cardDescription}>
              <h1>Rust</h1>
              <div>
                <div className={styles.states}></div>
                <span>Beginner</span>
              </div>
            </div>
          </div>

          <div className={styles.cardSkill}>
            <div className={styles.cardLogo}>
              <Image
                src={"/assets/react.webp"}
                layout="intrinsic"
                width={300}
                height={300}
                alt="react"
                className={styles.iconSkill}
              />
            </div>
            <div className={styles.cardDescription}>
              <h1>React</h1>
              <div>
                <div className={styles.states}></div>
                <span>Best</span>
              </div>
            </div>
          </div>

          <div className={styles.cardSkill}>
            <div className={styles.cardLogo}>
              <Image
                src={"/assets/php.webp"}
                layout="intrinsic"
                width={380}
                height={300}
                alt="php"
                className={styles.iconSkill}
              />
            </div>
            <div className={styles.cardDescription}>
              <h1>PHP</h1>
              <div>
                <div className={styles.states}></div>
                <span>Good</span>
              </div>
            </div>
          </div>
          <div className={styles.cardSkill}>
            <div className={styles.cardLogo}>
              <Image
                src={"/assets/html.webp"}
                layout="intrinsic"
                width={300}
                height={300}
                alt="html"
                className={styles.iconSkill}
              />
            </div>
            <div className={styles.cardDescription}>
              <h1>HTML</h1>
              <div>
                <div className={styles.states}></div>
                <span>Best</span>
              </div>
            </div>
          </div>

          <div className={styles.cardSkill}>
            <div className={styles.cardLogo}>
              <Image
                src={"/assets/css.webp"}
                layout="intrinsic"
                width={300}
                height={300}
                alt="css"
                className={styles.iconSkill}
              />
            </div>
            <div className={styles.cardDescription}>
              <h1>CSS</h1>
              <div>
                <div className={styles.states}></div>
                <span>Best</span>
              </div>
            </div>
          </div>

          <div className={styles.cardSkill}>
            <div className={styles.cardLogo}>
              <Image
                src={"/assets/js.webp"}
                layout="intrinsic"
                width={300}
                height={300}
                alt="js"
                className={styles.iconSkill}
              />
            </div>
            <div className={styles.cardDescription}>
              <h1>JS</h1>
              <div>
                <div className={styles.states}></div>
                <span>Best</span>
              </div>
            </div>
          </div>

          <div className={styles.cardSkill}>
            <div className={styles.cardLogo}>
              <Image
                src={"/assets/sql.webp"}
                layout="intrinsic"
                width={300}
                height={300}
                alt="sql"
                className={styles.iconSkill}
              />
            </div>

            <div className={styles.cardDescription}>
              <h1>
                SQL <a></a>
              </h1>
              <div>
                <div className={styles.states}></div>
                <span>Good</span>
              </div>
            </div>
          </div>

          <div className={styles.cardSkill}>
            <div className={styles.cardLogo}>
              <Image
                src={"/assets/py.webp"}
                layout="intrinsic"
                width={300}
                height={300}
                alt="sql"
                className={styles.iconSkill}
              />
            </div>
            <div className={styles.cardDescription}>
              <h1>Python</h1>
              <div>
                <div className={styles.states}></div>
                <span>Beginner</span>
              </div>
            </div>
          </div>

          <div className={styles.cardSkill}>
            <div className={styles.cardLogo}>
              <Image
                src={"/assets/reactnative.webp"}
                layout="intrinsic"
                width={300}
                height={300}
                alt="reactnative"
                className={styles.iconSkill}
              />
            </div>
            <div className={styles.cardDescription}>
              <h1>React Native</h1>
              <div>
                <div className={styles.states}></div>
                <span>Beginner</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.linkToProjects}>
          <Link href="/Projects">
            <a onClick={() => activeItem("Projects")}>Go to Projects</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

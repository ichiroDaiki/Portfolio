import Head from "next/head";
import Layout from "../components/Layout";
import styles from "../../styles/Projects.module.css";
import Link from "next/link";
import { useState } from "react";
import GalleryItem from "../components/GalleryItem";
import { QueryClient, QueryClientProvider } from "react-query";

const Projects = () => {
   
  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
        <div className={styles.gallery}>
          <GalleryItem />
        </div>
    </Layout>
  );
};

export default Projects;

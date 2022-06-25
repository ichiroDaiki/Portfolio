import Head from "next/head";
import Layout from "../components/Layout";
import styles from "../../styles/Projects.module.css";
import Link from "next/link";
import { useState } from "react";
import GalleryItem from "../components/GalleryItem";
import { QueryClient, QueryClientProvider } from "react-query";

const Projects = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnmount: false,
        refetchOnReconnect: false,
        retry: false,
      },
    },
  });

  
  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <div className={styles.gallery}>
          <GalleryItem />
        </div>
      </QueryClientProvider>
    </Layout>
  );
};

export default Projects;

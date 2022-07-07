import Link from "next/link";
import Image from "next/image";
import styles from '../../../styles/galleryItem.module.css'
import { useQuery } from "react-query";
import { getProjects } from "../../api/Get";
import Loading from "../Loading";
import ErrorComponent from "../Error";

const GalleryItem = () => {

  const { data, status } = useQuery("projects", getProjects);

  if (status === "loading") {
    return <Loading loading={true}/>;
  }

  if (status === "error") {
    return <ErrorComponent/>;
  }

  return (
    <>
    {data.data.map((projects, key) => (
        <div className={styles.galleryItem} key={key} >
          <div className={styles.galleryImg}>
            <Image src={"/assetsProjects/" + projects.gallery_name + ".webp"}         
                layout="intrinsic"
                width={500}
                height={300} alt="instagram"/>
          </div>
          <div className={styles.subGalleryItem}>
            <div className={styles.galleryTitle}>
              <h1>{projects.title} <Link href={'#'}><span className={styles.link}>⛺</span></Link></h1>
              <p>{projects.body}</p>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.galleryTech}>
              <div className={styles.galleryTechImg}>
                {
                  projects.name_tech.map((tech, key) => (
                      <Image
                      key={key}
                        src={"/assets/" + tech + ".webp"}
                        width={30}
                        height={30}
                        alt={tech.name_tech}
                      />
                  ))
                }
                    
              </div>
            </div>
          </div>
        </div>
      ))}

    </>
  );
};

export default GalleryItem;

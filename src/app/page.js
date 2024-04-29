import { Typography } from "@mui/material";
import styles from "./page.module.css";
import Avatar from '@mui/material/Avatar';
import CountUps from "@/(components)/homepage/countups/CountUps";
import Testimonials from "@/(components)/homepage/testimonials/Testimonials";

export default function Home() {
  return (
    <>
    <main className={styles.main}>
       <Avatar id={styles.avatar} alt="Tyren Rhinehart" src="/resume-pic.jpg" />
      <Typography mx={5} color={"white"} variant="h4" >
        Hi, I'm Tyren!
      </Typography>
      <Typography color={"white"} variant="h4" >
        A Full Stack Developer located in Denver, CO.
      </Typography>
      <CountUps/>
    </main>
    <Testimonials/>
    </>
  );
}

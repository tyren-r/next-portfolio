import { Typography } from "@mui/material";
import styles from "./page.module.css";
import Avatar from '@mui/material/Avatar';
import CountUps from "@/(components)/homepage/countups/CountUps";
import Testimonials from "@/(components)/homepage/testimonials/Testimonials";

export default function Home() {
  return (
    <>
    <main className={styles.main}>
       <Avatar id={styles.avatar}  sx={{marginTop:{xs:'15vh',md:'150px'},height:{xs:'13vh',md:'150px'},width:{xs:'13vh',md:'150px'}}} alt="Tyren Rhinehart" src="/resume-pic.jpg" />
      <Typography my={{md:1}} className={styles.text} color={"white"} sx={{ typography: { md:'h4',sm: 'h5', xs: 'subtitle1' } }} >
        Hi, I&apos;m Tyren!
      </Typography>
      <Typography color={"white"} className={styles.text} sx={{ typography: { md:'h4',sm: 'h5', xs: 'subtitle1' } }} >
        A Full Stack Developer located in Denver, CO.
      </Typography>
      <CountUps/>
      <Testimonials/>
    </main>
    </>
  );
}

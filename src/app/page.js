import { Typography } from "@mui/material";
import styles from "./page.module.css";
import Avatar from '@mui/material/Avatar';
import CountUps from "@/(components)/homepage/CountUps";

export default function Home() {
  return (
    <main className={styles.main}>
       <Avatar sx={{height:150,width:150,marginBottom:'10px'}} alt="Tyren Rhinehart" src="/resume-pic.jpg" />
      <Typography mx={5} color={"white"} variant="h4" >
        Hi, I'm Tyren!
      </Typography>
      <Typography color={"white"} variant="h4" >
        A Full Stack Developer located in Denver, CO.
      </Typography>
      <CountUps/>
    </main>
  );
}

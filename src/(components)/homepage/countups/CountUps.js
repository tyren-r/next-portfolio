'use client'
import { Typography,Box } from "@mui/material";
import CountUp from "react-countup";
import styles from './countups.module.css';

const CountUps = () => {
  const countupsData = [
    {number:5,
    text:"Years Of Experience"},
    {number:15,
    text:"Happy Clients"},
    {number:45,
    text:"Projects Completed"}
  ];
  return(
    <Box mt={{xs:3,md:5}} id={styles.countupsContainer}>
      {countupsData.map((countup,i)=>(
              <article className={styles.countup} key={i}>
              <Typography className={styles.numberText} color={"white"} sx={{ typography: { md:'h3',sm: 'h4', xs: 'h5' } }} >
              <CountUp end={countup.number}/><br/>
              </Typography>
              <Typography className={styles.text} mt={{xs:1,md:2}} color={"white"} sx={{ typography: { md:'h4',sm: 'h5', xs: 'subtitle1' } }} >
                {countup.text}
              </Typography>
            </article>
      ))}
  </Box>
  )
}

export default CountUps;
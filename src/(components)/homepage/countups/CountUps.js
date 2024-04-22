'use client'
import { Typography,Box } from "@mui/material";
import CountUp from "react-countup";
import styles from './countups.module.css';

const CountUps = () => {
  const countupsData = [
    {number:5,
    text:"Years Of Experience"},
    {number:30,
    text:"Happy Clients"},
    {number:60,
    text:"Projects Completed"}
  ];
  return(
    <Box mt={5} id={styles.countupsContainer}>
      {countupsData.map((countup,i)=>(
              <article className={styles.countup} key={i}>
              <Typography color={"white"} variant="h3">
              <CountUp end={countup.number}/><br/>
              </Typography>
              <Typography mt={2} color={"white"} variant="h4">
                {countup.text}
              </Typography>
                
            </article>
      ))}
  </Box>
  )
}

export default CountUps;
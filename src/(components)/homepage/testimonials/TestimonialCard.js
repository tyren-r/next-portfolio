'use client'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styles from './TestimonialCard.module.css';


const TestimonialCard = (props) => (
<Card className={styles.cardContainer} variant="outlined">
    <CardContent className={styles.cardContent}>
     <Typography className={styles.testimonialText}>
    "{props.testimonial}"
     </Typography>

     <Typography>
     - {props.writer}
     </Typography>

    </CardContent>
  </Card>
);

export default TestimonialCard;



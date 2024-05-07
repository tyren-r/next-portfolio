'use client'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styles from './TestimonialCard.module.css';


const TestimonialCard = (props) => (
<Card className={styles.cardContainer} variant="outlined">
    <CardContent className={styles.cardContent}>
     <Typography  sx={{
    fontSize: {
      sm: 15,
      xs: 12
    }
  }}>
     <strong>&quot;{props.testimonial}&quot;</strong>
     </Typography>

     <Typography
     sx={{
    fontSize: {
      sm: 15,
      xs: 12
    }
  }}>
     - {props.writer}
     </Typography>

    </CardContent>
  </Card>
);

export default TestimonialCard;



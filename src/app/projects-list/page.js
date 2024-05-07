import projectObjects from '../../[assets]/projects.json';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styles from './projectListStyles.module.css';

const ProjectsList = () => (
    <Box id={styles.main} >
       <Grid container  my={2} justifyContent='center'  >
    {projectObjects.map((project)=>(
      <Grid item key={project.name}  xs={12}  md={4}>
        <Link href={project.link}>
        <Card className={styles.projectCard}>
        <CardMedia
          sx={{ height: 250 }}
          image={project.image}
          title={project.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {project.description}
          </Typography>
        </CardContent>
      </Card>
      </Link>
      </Grid>
    ))}
    </Grid>
    </Box>
)

export default ProjectsList;
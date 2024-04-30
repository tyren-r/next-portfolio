import projectObjects from '../../[assets]/projects.json';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import styles from './projectListStyles.module.css';

const ProjectsList = () => (
    <div id={styles.main}>
    {projectObjects.map((project)=>(
        <div key={project.name}>
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
      </div>
    ))}
    </div>
)

export default ProjectsList;
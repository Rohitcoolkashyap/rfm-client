import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    minWidth: 100,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    fontWeight: "bold"
  },
  pos: {
    marginBottom: 12,
    
  },
});

export default function OutlinedCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="black" gutterBottom>
          Customer Services<br />
        </Typography>
        <Typography variant="h5" component="h2">

        </Typography>

        <Typography variant="body2" component="p">
          &#10003;Shared Team Inbox<br />
          &#10003;LiveChat and In-app-Messenger<br />
          &#10003;Built-in video and audio call<br />
          &#10003;Customer engagement<br />
          &#10003;Customer support<br />
          &#10003;Knowledge Base<br />
          <br />
         
      </Typography>
      </CardContent>
      <CardActions>
      <Button className="button1" size="small">Learn More</Button>
      </CardActions>
      <Card/>
      <Card className={classes.root} variant="outlined"></Card>
      <CardContent>
        <Typography className={classes.title} color="black" gutterBottom>
          Email And SMS Marketing
        </Typography>
        <Typography variant="h5" component="h2">
        </Typography>
        <Typography variant="body2" component="p">
          &#10003;Pop-ups & Forms<br/>
          &#10003;Growth marketing/hacking<br/>
          &#10003;Email marketing<br/>
          &#10003;Built-in email verification<br/>
          &#10003;SMS marketing<br/>
          &#10003;Event tracking and segmentation<br/>
          &#10003;User tracking<br/>
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>



    </Card>
  );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from '@emotion/styled';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
const red = 10;
const Cardo = styled.div`
background: linear-gradient(to top, rgba(${red},160,230), brown);
width: 15%;
height: 10%px;
display: inline-block;
margin: 5px;
border-radius: 15px;
color: white;
line-height: 10px;
align-content: left;
font-family: 'Quicksand', sans-serif;
font-size: 1.3rem;
img {
width: 50%
}
`
var TypographyStyle = {
  height: '30px'
}

const Equipment = (props) => {
const classes = useStyles();
const {name} = props;
const {image} = props;
const {description} = props;
  return (
    <Cardo className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" overflow="hidden" style={TypographyStyle}>
          {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Read More
        </Button>
      </CardActions>
    </Cardo>
  );
}
export default Equipment

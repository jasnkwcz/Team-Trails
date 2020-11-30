import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styled from '@emotion/styled';
import './EquipmentCard.css'

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
  height: '50px'
}

const Equipment = (props) => {
const classes = useStyles();
const {name} = props;
const {image} = props;
const {description} = props;

  return (
    <Cardo className={classes.root}>
      <CardActionArea>
        <div className = "imageholder">
          <img class="cardimage" src={image} alt="default" />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" overflow="hidden" style={TypographyStyle}>
          {description}
          </Typography>
        </CardContent>
      </CardActionArea>

    </Cardo>
  );
}
export default Equipment

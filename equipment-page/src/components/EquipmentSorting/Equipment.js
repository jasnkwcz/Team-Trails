import React from 'react';
import styled from '@emotion/styled';

export default function EquipmentCard(props) {
  const red = 20;
  const Card = styled.div`
  background: linear-gradient(to bottom, rgba(${red},200,200), brown);
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
  const {name} = props;
  const {image} = props;
  const {description} = props;

  return (
    <Card>
    <h2>{name}</h2>
    <img src={image}></img>
    <p>{description}</p>
    </Card>
  );
}
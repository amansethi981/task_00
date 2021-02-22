import React from "react";
import { Card, Col, Row, Pagination } from "antd";
import Model from "./Model";
const { Meta } = Card;

const Cards = (props) => {
  console.log(props);
  return (
    <Card
      hoverable
      style={{ width: 240 ,margin:"10px",padding:"10px"}}
      cover={<img alt="example" src={props.chars.image} style={{width:"220px"}} />}
    >
      <Meta title={props.chars.name} />
    </Card>
  );
};

export default Cards;

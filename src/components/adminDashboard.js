import React from "react";
import { Grid, Image } from "semantic-ui-react";
import Upload from "./Upload";
import Dropdown from "./Dropdown";
import Inputurl from "./Url";
import Submit from "./Submitbtn";
import Date from "./Date";

const adminDashboard = () => {
  return (
    <Grid celled="internally">
      <Grid.Row>
        <Grid.Column width={3}>
          <h4>Phone Number</h4>
          <Upload />
          <h4>Product</h4>
          <Dropdown />
          <h4>URL</h4>
          <Inputurl />
          <Submit />
        </Grid.Column>
        <Grid.Column width={10}>
          <h4>
            To: <Date />
            From: <Date />
          </h4>
          <h4>Product</h4>
          <Dropdown />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default adminDashboard;

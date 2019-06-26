import React from "react";
import { Grid, Image } from "semantic-ui-react";
import Upload from "./Upload";
import Dropdown from "./Dropdown";
import Inputurl from "./Url";
import Submit from "./Submitbtn";
import Date from "./Date";
// import Faker from "./faker";
import Search from "./Search";
import "./adminDashboard.css";

const adminDashboard = () => {
  return (
    <div className="ui grey fluid card">
      <div className="card content">
        <Grid celled="internally">
          <Grid.Row>
            <Grid.Column width={5}>
              <h4 className="number">Phone Number</h4>
              <Upload />
              <h4 className="product">Product</h4>
              <Dropdown />
              <h4 className="url">URL</h4>
              <Inputurl />
              <div className="btn">
                <Submit />
              </div>
            </Grid.Column>
            <Grid.Column width={8} style={{ padding: "30px" }}>
              <div className="dates">
                <h4 className="to">
                  To: <Date />
                </h4>

                <h4 className="from">
                  From: <Date />
                </h4>
              </div>
              <h4>Product</h4>
              <Dropdown />
              <h4>Search</h4>
              <Search />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
};

export default adminDashboard;

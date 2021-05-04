import TextField from "@material-ui/core/TextField";

import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function Final(props) {
  const { setStep, userData, setUserData } = props;

  var value = userData.dailyBudget;
  const lead = value / 5;

  const lod = (value * 2) / 5;

  return (
    <div className="container mt-5">
      <div className="row col-12">
        <div className="col-6">
          <header className="item">
            <h2> Congratulations!</h2>
            <span>
              {" "}
              Your campaign is being processed. We will start delivering the
              first lead within the next 24 hours.
            </span>
          </header>
        </div>
        <div className="col-6">
          <div className="col-12 text-center ">
            <div className="col-8 float-right">
              <Card variant="outlined" style={{backgroundColor: "#00FFFF"}} color="textSecondary">
                <CardContent>
                  <TextField
                    className="mb-3"
                    type="text"
                    disabled="true"
                    value={`Leads per day:   ${Math.ceil(lead)} - ${Math.ceil(
                      lod
                    )}`}
                    onChange={(e) =>
                      setUserData({ ...userData, perDayLead: e.target.value })
                    }
                  />
                  <TextField
                    className="mb-3"
                    type="text"
                    value={`Cost per Lead: $${value}`}
                    disabled="true"
                    onChange={(e) =>
                      setUserData({ ...userData, value: e.target.value })
                    }
                  />
                  <TextField
                    className="mb-3"
                    type="text"
                    disabled="true"
                    value={`Cost per Lead:  $${lead / 4} -$${lod / 4}`}
                    onChange={(e) =>
                      setUserData({ ...userData, perLeadCost: e.target.value })
                    }
                  />
                  <TextField
                    className="mb-2"
                    type="text"
                    disabled="true"
                    value={userData["startdate"]}
                    onChange={(e) =>
                      setUserData({ ...userData, startdate: e.target.value })
                    }
                    placeholder="Date"
                  />{" "}
                  <TextField
                    type="text"
                    disabled="true"
                    value={userData["enddate"]}
                    onChange={(e) =>
                      setUserData({ ...userData, enddate: e.target.value })
                    }
                    placeholder="No end date"
                  />{" "}
                </CardContent>

                <CardActions></CardActions>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Button
        variant="outlined"
        className="btn-info small float-left mt-n8"
        onClick={() => setStep(1)}
      >
        GO TO DASHBOARD<span className="h3 mt-1 ml-1"> &raquo;</span>
      </Button>
    </div>
  );
}

export default Final;

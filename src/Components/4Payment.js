import React from "react";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";


function Payment(props) {
  const { setStep, userData, setUserData } = props;

  var value = userData.dailyBudget || 0;
  const lead = value / 5;

  const lod = (value * 2) / 5;

  return (
    <div className="container mt-5">
      <div className="row col-12">
        <div className="col-8">
          <h2> Just a few more details, before you are live </h2>
          <span className="ml-3">
            {" "}
            Fill in the form the below. You will be charged at the end of the
            day.{" "}
          </span>
          <div className="row col-12">
            <div className="col-6">
              <TextField
                type="text"
                placeholder="CREDIT CARD NUMBER"
                size="small"
                margin="dense"
                variant="outlined"
                fullWidth={true}
              />
            </div>
            <div className="col-4">
              <TextField
                type="text"
                placeholder="DATE"
                size="small"
                margin="dense"
                variant="outlined"
                fullWidth={true}
              />
            </div>
            <div className="col-2">
              <TextField
                type="text"
                placeholder="CVV"
                size="small"
                margin="dense"
                variant="outlined"
                fullWidth={true}
              />
            </div>
          </div>
          <div className="mt-3">
            <span className="ml-3">
              HOW WOULD YOU LIKE TO RECEIVED THE LEADS?
            </span>
            <div className="row col-12">
              <div className="col-6">
                <TextField
                  type="text"
                  placeholder="EMAIL ME"
                  size="small"
                  margin="dense"
                  variant="outlined"
                  fullWidth={true}
                />
              </div>
              <div className="col-6">
                <TextField
                  type="text"
                  placeholder="CONNECT TO MY CRM"
                  size="small"
                  margin="dense"
                  variant="outlined"
                  fullWidth={true}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 text-center mt-5">
          
          <Card variant="outlined" style={{backgroundColor: "#00FFFF"}} color="textSecondary" >
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
                value={userData["No end date"]}
                onChange={(e) =>
                  setUserData({ ...userData, enddate: e.target.value })
                }
                placeholder="Date"
              />{" "}
            </CardContent>

            <CardActions></CardActions>
          </Card>
        </div>
      </div>
      <div className="row col-12" style={{color: "#00FFFF"}}>
        <div className="col-6" >
          <Button
          style={{backgroundColor: "#00FFFF"}}
            variant="outlined"
            className="btn-info small float-left mt-5"
            onClick={() => setStep(3)}
          >
            <span className="h3 mt-1 ml-1"> &laquo;</span>Previous
          </Button>
        </div>
        <div className="col-6">
          <Button
          style={{backgroundColor: "#00FFFF"}}

          variant="outlined"
            className="btn-info small float-right mt-5"
            onClick={() => setStep(5)}
          >
            Next<span className="h3 mt-1 ml-1"> &raquo;</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Payment;

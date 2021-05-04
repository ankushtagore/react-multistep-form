import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import TextField from "@material-ui/core/TextField";
import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";



export default function OutlinedCard(props) {

  let {userData, setUserData, setStep} = props;


  const handleChange = (e, newValue) => {
    setUserData({ ...userData, dailyBudget : newValue })
  };
  
  var sliderValue = userData.dailyBudget || 0;

  const lead = sliderValue / 5;
  const lod = (sliderValue * 2)/ 5;


  return (
    <div className="container mt-5">
    <div className="row col-12">
        <div className="col-6">
            <h2>Lets Talk about the budget</h2>
            <Typography id="continuous-slider" gutterBottom>
                <span>Daily Budget</span>
            </Typography>
            <Grid container>
                <Grid item></Grid>
                <Grid item xs>
                    <Slider
                        value={sliderValue}
                        

                        onChange={handleChange}
                        aria-labelledby="continuous-slider"
                        max="1000"
                        valueLabelDisplay="on"
                    />
                </Grid>
                <Grid item></Grid>
            </Grid>
        </div>
        <div className="col-6 text-center ">
            <div className="col-8 float-right">
                <Card style={{backgroundColor: "#00FFFF"}} variant="outlined" color="textSecondary">
                    <CardContent>
                        <div className="text-secondary">
                            <TextField
                                className="mb-3"
                                type="text"
                                disabled="true"
                                
                                value={ `Leads per day:   ${Math.ceil(lead)} - ${Math.ceil(lod)}`}
                                onChange={(e) =>
                                    setUserData({ ...userData, perDayLead: e.target.value })
                                }
                            />

                            <TextField
                            className="mb-3"
                            type="text"
                            value={ `Cost per Lead: $${sliderValue}`}
                            disabled="true"

                            onChange={(e) =>
                                setUserData({ ...userData, value: e.target.value })
                            }
                        />
                            <TextField
                                className="mb-3"
                                type="text"
                                disabled="true"

                                value={ `Cost per Lead:  $${lead / 4} -$${lod / 4}`}
                                onChange={(e) =>
                                    setUserData({ ...userData, perLeadCost: e.target.value })
                                }
                            />
                           
                            <TextField
                                className="mb-3"
                                type="text"
                                disabled="true"
                                value={userData["startdate"]}
                                onChange={(e) =>
                                    setUserData({ ...userData, startdate: e.target.value })
                                }
                                placeholder="Date"
                            />{" "}
                        </div>
                        <TextField
                            type="text"
                            disabled="true"
                            value={userData["enddate"]}
                            onChange={(e) =>
                                setUserData({ ...userData, enddate: e.target.value })
                            }
                            placeholder="No end date"
                        />
                        {" "}
                    </CardContent>

                    <CardActions></CardActions>
                </Card>
            </div>
        </div>
        <div className="row col-12">
            <div className="col-6">
                <Button variant="outlined" style={{backgroundColor: "#00FFFF"}} className="btn-info small float-left mt-5" onClick={() => setStep(2)}>
                    <span className="h3 mt-1 ml-1"> &laquo;</span>Previous
                </Button>
            </div>
            <div className="col-6">
                <Button  variant="outlined" style={{backgroundColor: "#00FFFF"}} className="btn-info small float-right mt-5" onClick={() => setStep(4)}>
                    Next<span className="h3 mt-1 ml-1"> &raquo;</span>
                </Button>
            </div>
        </div>
    </div>
</div>
  );
}

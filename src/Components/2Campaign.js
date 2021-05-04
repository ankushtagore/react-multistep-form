import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


function Campaign(props) {
  
  const { setStep, userData, setUserData } = props;

  return (
    <div className="container mt-5 col-12">
    <div className="col-6">
        <h2> Let's talk about your campaign</h2>
        <form>
            <span>Fill-in the form the below</span>
            <div>
                <TextField
                    type="text"
                    value={userData["campaign"]}
                    onChange={(e) =>
                        setUserData({ ...userData, campaign: e.target.value })
                    }
                    placeholder="CAMPAIGN NAME"

                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    margin="dense"
                />
            </div>
            <div>
                <TextField
                    type="date"
                    value={userData["startdate"]}
                    onChange={(e) =>
                        setUserData({ ...userData, startdate: e.target.value })
                    }

                    size="small"
                    fullWidth={true}
                    margin="dense"
                    variant="outlined"
                />
            </div>
            <div>
                <TextField
                    type="date"
                    value={userData["enddate"]}
                    onChange={(e) =>
                        setUserData({ ...userData, enddate: e.target.value })
                    }

                    size="small"
                    fullWidth={true}
                    margin="dense"
                    variant="outlined"
                />
            </div>
            <div>
                <TextField
                    value={userData["clients"]}
                    onChange={(e) =>
                        setUserData({ ...userData, clients: e.target.value })
                    }
                    type="text"
                    placeholder="ENTER 5 POTENTIAL CLIENTS (NAME OR WEBSITES)"

                    size="small"
                    fullWidth={true}
                    margin="dense"
                    variant="outlined"
                />
            </div>
        </form>
        <Button style={{backgroundColor: "#00FFFF"}}  variant="outlined" className="btn-info small float-left mt-5" onClick={() => setStep(1)}>
            <span className="h3 mt-1 ml-1"> &laquo;</span>Previous
        </Button>
    </div>
    <Button  style={{backgroundColor: "#00FFFF"}} variant="outlined" className="btn-info small float-right mt-5" onClick={() => setStep(3)}>
        Next<span className="h3 mt-1 ml-1"> &raquo;</span>
    </Button>
</div>  );
}

export default Campaign;

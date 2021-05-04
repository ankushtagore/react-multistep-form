import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import Campaign from "./2Campaign";

function Form(props) {
  const { setStep, userData, setUserData } = props;

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
    <div className="container mt-5">
        <form>
            <div className="row col-12">
                <div className="col-6">
                    <h2> Let's get started with your business details</h2>
                    <span>
                        {" "}
                        To be or not to be that's the question, whether it's the nobler
                        to suffer
                    </span>
                </div>

                <div className="col-6 ">
                    <span>Fill-in the form below</span>
                    <div style={{ justifyContent: 500 }}>
                        <div>
                            <TextField
                                type="text"
                                value={userData["name"]}
                                onChange={(e) =>
                                    setUserData({ ...userData, name: e.target.value })
                                }
                                placeholder="BUSINESS NAME"
                                margin="dense"
                                variant="outlined"
                                size="small"
                                fullWidth={true}
                            />
                        </div>
                    </div>

                    <div>
                        <TextField
                            type="text"
                            value={userData["website"]}
                            onChange={(e) =>
                                setUserData({ ...userData, website: e.target.value })
                            }
                            placeholder="WEBSITE"
                            margin="dense"
                            variant="outlined"
                            size="small"
                            fullWidth={true}
                        />
                    </div>
                    <div>
                        <TextField
                            type="text"
                            value={userData["loc"]}
                            onChange={(e) =>
                                setUserData({ ...userData, loc: e.target.value })
                            }
                            placeholder="LOCATION "
                            margin="dense"
                            variant="outlined"
                            size="small"
                            fullWidth={true}
                        />
                    </div>
                    <div>
                        <TextField
                            type="text"
                            value={userData["phone"]}
                            onChange={(e) =>
                                setUserData({ ...userData, phone: e.target.value })
                            }
                            placeholder="PHONE NUMBER"
                            margin="dense"
                            variant="outlined"
                            size="small"
                            fullWidth={true}
                        />
                    </div>
                    <div>
                        <Select
                            className="mt-2"
                            value={age}
                            onChange={handleChange}
                            fullWidth={true}
                            size="small"
                            margin="dense"
                            label="BUSINESS CATEGORY"
                            variant="outlined"
                        >
                            <MenuItem value={1}>BUSINESS CATEGORY</MenuItem>
                            <MenuItem value={10}>IT Sector</MenuItem>
                            <MenuItem value={20}>Manufacturing</MenuItem>
                            <MenuItem value={30}>Telecom</MenuItem>
                        </Select>
                    </div>
                    <Button  style={{backgroundColor: "#00FFFF"}} variant="outlined" className="btn-info small float-right mt-4" onClick={() => setStep(2)}>
                        Next<span className="h3 mt-1 ml-1"> &raquo;</span>
                    </Button>
                </div>
            </div>
        </form>
    </div>
</div>
  );
}

export default Form;

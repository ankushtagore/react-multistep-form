<div >
<div style={{display: 'flex', justifyContent:'space-around'}}>
<div style={{display: 'column'}}>
<h2> Just a few more details, before you are live </h2>
 
             <h4> Fill in the form the below. You will be charged at the end of the day. </h4>
             
              <TextField type="text" placeholder='CREDIT CARD NUMBER' margin='normal' variant='outlined'/>
        
              <TextField type="text" placeholder='DATE' margin='normal' variant='outlined'/>
              <TextField type="text" placeholder='CVV' margin='normal' variant='outlined'/>
                    
<h3>HOW WOULD YOU LIKE TO RECEIVED THE LEADS?</h3>
<TextField type="text" placeholder='EMAIL ME' margin='normal' variant='outlined'/>
<TextField type="text" placeholder='CONNECT TO MY CRM' margin='normal' variant='outlined'/>


<Card style={{display: "row"}} variant="outlined" color= 'textSecondary'>
  
<CardContent >


<TextField
type="text"
disabled="true"
value={ `Leads per day: ${Math.ceil(lead)}-${Math.ceil(lod)}`}
onChange={(e) =>
setUserData({ ...userData, perDayLead: e.target.value })
}

/>

<TextField
type="text"
disabled="true"
value={ `Cost per Lead: ${lead / 4}-${lod / 4}`}
onChange={(e) =>
setUserData({ ...userData, perLeadCost: e.target.value })
}
/>

<TextField
type="text"
disabled="true"

value={ value}
onChange={(e) =>
setUserData({ ...userData, sliderValue: e.target.value })
}

/>

<TextField
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
placeholder="Date"
/>{" "}

</CardContent>


<CardActions>


</CardActions>
</Card>


</div>
</div>
<Button size='large' onClick={()=> setStep(3)}>Previous </Button>

<Button size='large' onClick={()=> setStep(5)}>Next </Button>
</div>


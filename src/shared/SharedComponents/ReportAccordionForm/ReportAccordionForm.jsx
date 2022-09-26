import {
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React,{useState,useEffect} from "react";
import { Button } from "react-bootstrap";
import InputDatePicker from "../DatePicker/InputDatePicker";
import './ReportAccordionForm.scss'
import { countryList } from "../../../utils/Country";
import { getOffer } from "../../../api/Offer/Offer";
import { userInfo } from "../../../utils/auth";
import { getAffiliate } from "../../../api/Affiliate/Affiliate";
import { getAdvertiser } from "../../../api/Advertiser/Advertiser";
import { dayReport } from "../../../api/Report/Report";

const ReportAccordionForm = () => {
  const [offerId, setofferId] = useState([])
  const [userId, setuserId] = useState([])
  const [advertiserId, setadvertiserId] = useState([]);
  const [values, setValues] = useState({
    offer_id: "",
    country_id: "",
    user_id: "",
    advertiser_id: "",
    status: "",
  });

  const {offer_id,country_id,user_id,advertiser_id,status} = values;

  const {token} = userInfo();

  useEffect(() => {
    const loadData = async () => {
       const res = await getOffer(token);
       setofferId(res.data)
    }
    loadData()
  }, []);

  useEffect(() => {
    const loadData = async () => {
       const res = await getAffiliate(token);
       setuserId(res.data)
    }
    loadData()
  }, []);

  useEffect(() => {
    const loadData = async () => {
       const res = await getAdvertiser(token);
       setadvertiserId(res.data)
    }
    loadData()
  }, []);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name] : e.target.value,
    });
    console.log(values)
  }

  const handleSubmit = async (e) => {
   try{ 
    const {token} = userInfo();
    e.preventDefault();
    const formData = new FormData();
    formData.append("offer_id", offer_id);
    formData.append("country_id", country_id);
    formData.append("user_id", user_id);
    formData.append("advertiser_id", advertiser_id);
    formData.append("status", status);
  
    const res =  await dayReport(token,{offer_id,country_id,user_id,advertiser_id,status})
   
    console.log(formData)
    console.log(offer_id)
   }catch (err) {
    console.log(err)
   }
  }
  return (
    <div className="ManageForm" id="ReportAccordionForm">
      <form onSubmit={handleSubmit}>
        <Card className="mangeCard">
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4} lg={4}>
                <h5>offer</h5>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Offer</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Offer Id"
                    name = 'offer_id'
                    onChange={handleChange}
                  >
                   {offerId.map((offerid) => ( 
                    <MenuItem value={offerid.id}>{offerid.name}</MenuItem>
                    ))}

                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <h5>country</h5>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    choose one
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Status"
                    name="country_id"
                    onChange={handleChange}
                  >
                   {countryList.map((country) => ( 
                    <MenuItem key={country.id} value={country.id}>{country.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <h5>affiliate</h5>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    choose one
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Staus"
                    name="user_id"
                    onChange={handleChange}
                  >
                   {userId.map((userid) => ( 
                    <MenuItem value={userid.id}>{userid.first_name} {userid.last_name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <h5>advertiser</h5>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">All</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Advertiser"
                    name="advertiser_id"
                    onChange={handleChange}
                  >
                     {advertiserId.map((adverId) => ( 
                    <MenuItem value={adverId.id}>{adverId.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4} lg={4} className="margin__top-input">
                <h5>conversion status</h5>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">All</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Status"
                    name="status"
                    onChange={handleChange}
                  >
                    <MenuItem value="approved">Approved</MenuItem>
                    <MenuItem value="success">Success</MenuItem>
                    <MenuItem value="invalid">Invalid</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <h5>Date</h5>
                <InputDatePicker />
              </Grid>

              <Grid item xs={12} md={4} lg={4}>
                <Button variant="primary m_btn" className="applyBtn" type="submit">
                  Apply
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default ReportAccordionForm;

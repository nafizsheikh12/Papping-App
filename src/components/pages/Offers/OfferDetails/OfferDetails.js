import React,{useEffect,useState} from "react";
import Layout from "../../../Layout/Layout";
import {Grid} from '@mui/material';
import OfferDetail from "./Elements/OfferDetail";
import "./OfferDetails.scss";
import CustomerPayout from "./Elements/CustomerPayout";
import CountryPayout from "./Elements/CountryPayout";
import CustomCap from "./Elements/CustomCap";
import OfferBlock from "./Elements/OfferBlock";
import Payout from "./Elements/Payout";
import ConversionRatio from "./Elements/ConversionRatio";
import CustomConversionRatio from "./Elements/CustomConverstionRatio";
import { useParams } from 'react-router-dom'
import { getSingleOffer } from './../../../../api/Offer/OfferDetails';
import { userInfo } from './../../../../utils/auth';




const OfferDetails = (props) => {
    const [values, setValues] = useState({
        errorMsg:'',
        error: false,
        loading: true,
        success: false,
        offer_data: {}
    });
    const { loading, error, errorMsg,offer_data,success} = values;
    const { id } = useParams();
    const { token } = userInfo();
    const SingleData = () =>{
        getSingleOffer(token,id)
        .then(response => {
            
            setValues({ 
                ...values,
                offer_data:response.data,
                error:false, 
                success:success,
                disabled: false,
                loading: false 
            });

            // console.log(values.offer_data.data);
        })
        .catch(err =>{
            let errMsg = 'Something went wrong!';
            if (err.response.data !== undefined) {
                errMsg = err.response.data.message;
            } else {
                errMsg = 'Something went wrong!';
            };
            setValues({ ...values,
                error:true, 
                errorMsg: errMsg,
                disabled: false,
                loading: true 
            });
        })
    }
    
    useEffect(() =>{
        SingleData();
    },[]);
    return (
      <Layout
        title="Offer Details"
        className="offer"
        subActive="offer.details"
        activeNum="2"
      >
        <div id="OfferDetails">
          <Grid container spacing={5}>
            <Grid item lg={6} xs={12}>
              <div className="offer_details">
                <OfferDetail offer_data={offer_data} />
                <br />
                <CustomerPayout/>
                <br />
                <CountryPayout />
                <br />
                <CustomCap />
                <br />
                <OfferBlock />
              </div>
            </Grid>
            <Grid item lg={6} xs={12}>
              <div className="offer_details">
                <Payout />
                <br />
                <ConversionRatio />
                <br />
                <CustomConversionRatio />
              </div>
            </Grid>
          </Grid>
        </div>
      </Layout>
    );
}


export default OfferDetails;
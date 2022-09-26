import React from "react";
import logo from "../../../../../assets/Rectangle 42.png";
import useCountries from "../../../../../customHooks/useCountries";

const OfferDetail = ({ offer_data }) => {
  // const countries = useCountries();
  // const countryCode = offer_data.data.countries;
 
  return (
    <div className="OfferDetail">
      <h4>Offer Details</h4>
      {/* There is no avatar found in api , So we are using SmartLink logo as default avata */}
      <img src={logo} alt={logo} />
      <ul>
        <li>
          advertiser: <span> {offer_data?.data?.advertiser_id} </span>
        </li>
        <li>
          Offer Name: <span> {offer_data?.data?.name} </span>
        </li>
        <li>
          offer preview URL: <span> {offer_data?.data?.preview_url} </span>
        </li>
        <li>
          daily cap: <span>{offer_data?.data?.cap} </span>
        </li>
        <li>
          Country:{" "}
          <span>
            {" "}
            {offer_data?.data?.countries.map((country) => `${country} `)}
          </span>
        </li>
        <li>
          default payout: <span>{offer_data?.data?.payout} </span>
        </li>
        <li>
          expire date: <span> {offer_data?.data?.expiration_date} </span>
        </li>
        <li>
          Description: <span>{offer_data?.data?.description}</span>
        </li>
      </ul>
    </div>
  );
};

export default OfferDetail;

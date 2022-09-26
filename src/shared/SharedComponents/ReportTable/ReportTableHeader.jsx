import React from 'react'
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const ReportTableHeader = () => {
  return (
    <tr style={{ whiteSpace: "nowrap" }}>
      <th>
        Id <ArrowDropDownIcon />
      </th>
      <th>
        OfferReport{" "}
        <span>
          <ArrowDropDownIcon />
        </span>
      </th>
      <th>
        Date/Time <ArrowDropDownIcon />
      </th>
      <th>
        Advertiser <ArrowDropDownIcon />
      </th>
      <th>
        Affiliate <ArrowDropDownIcon />
      </th>
      <th>
        Source <ArrowDropDownIcon />
      </th>
      <th>
        Geography/IP <ArrowDropDownIcon />
      </th>
      <th>
        Click ID <ArrowDropDownIcon />
      </th>
      <th>
        AFF Click ID <ArrowDropDownIcon />
      </th>
      <th>
        Sub1 <ArrowDropDownIcon />
      </th>
      <th>
        Sub2 <ArrowDropDownIcon />
      </th>
      <th>
        Sub3 <ArrowDropDownIcon />
      </th>
      <th>
        Device <ArrowDropDownIcon />
      </th>
      <th>
        User Agent <ArrowDropDownIcon />
      </th>
      <th>
        Revenue <ArrowDropDownIcon />
      </th>
      <th>
        Payout <ArrowDropDownIcon />
      </th>
      <th>
        Profit <ArrowDropDownIcon />
      </th>
      <th>
        Action <ArrowDropDownIcon />
      </th>
    </tr>
  );
}

export default ReportTableHeader
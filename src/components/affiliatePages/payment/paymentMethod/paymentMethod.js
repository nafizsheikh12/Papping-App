import React,{useState,useEffect} from 'react'
import Layout from '../../../Layout/Layout'
import {Table,Button} from 'react-bootstrap';
import './AllAdvertiser.scss';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Link, useHistory} from 'react-router-dom';
import {getAdvertiser,deleteAdvertiser} from '../../../../api/Advertiser/Advertiser';
import {userInfo} from '../../../../utils/auth';
import ItemAdvertiser from './ItemAdvertiser';
import {Loading,showError,showSuccess} from '../../../../utils/messages';

const PaymentMethod = () => {
    const [values, setValues] = useState({
        errorMsg:'',
        error: false,
        loading: true,
        success: false,
        advertiser_data:[]
    });
    const { loading, error, errorMsg,advertiser_data,success} = values;
    const {token} = userInfo();

    const loeadAdvertiser = () => {
        getAdvertiser(token)
        .then(response => {
            if(response.status === 200){
                setValues({ 
                    ...values,
                    advertiser_data:response.data,
                    error:false, 
                    success:success,
                    disabled: false,
                    loading: false 
                    });
            }
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

    useEffect(() => {
        loeadAdvertiser();

    },[]);
   
    
    const removeItem = (item) => () => {
        if(!window.confirm("Are You Sure?")) return 
        deleteAdvertiser(token,item)
        .then(response => {
            loeadAdvertiser();
                setValues({ ...values,
                    error:false, 
                    success:true,
                    errorMsg:'Deleted Successfully!!',
                    disabled: false,
                    loading: false 
                    });
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
            });
        })
        
}
    
let history = useHistory();
const editAdvertiser = (id) => {
  history.push({
    pathname: "/advertiser/edit",
    search: "?id=" + id,
  });
};
   

  return (
    <Layout
      title="Payment Method"
      className="AffiliatePayment"
      subActive="AffiliatePayment.all"
      activeNum="16"
    >
      <div id="AllAdvertiser">
        <div className="manageFinaceHeader">
          <h2>Invoice</h2>
          <Link to="/advertiser/create">
            <Button variant="primary duplicate_m__btn">
               Add Method
            </Button>
          </Link>
        </div>
        {showSuccess(success, errorMsg)}

        <Table className="table" responsive>
          <thead>
            <tr>
              <th>
                ID <ArrowDropDownIcon />
              </th>
              <th>
                name <ArrowDropDownIcon />
              </th>
              <th>
                email <ArrowDropDownIcon />
              </th>
              <th>
                contact person <ArrowDropDownIcon />
              </th>
              <th>
                skype <ArrowDropDownIcon />
              </th>
              <th>
                manager <ArrowDropDownIcon />
              </th>
              <th>
                website <ArrowDropDownIcon />
              </th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {advertiser_data.map((item) => (
              <ItemAdvertiser
                editAdvertiserHandler={editAdvertiser}
                data={item}
                key={item.id}
                removeItem={removeItem(item.id)}
              />
            ))}
          </tbody>
        </Table>
        {showError(error, errorMsg)}
        {Loading(loading)}
      </div>
    </Layout>
  );
}

export default PaymentMethod
import React,{useState,useEffect} from 'react'
import Layout from '../../../../Layout/Layout'
import {Table,Button} from 'react-bootstrap';
import './AllPostback.scss';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Link, useHistory} from 'react-router-dom';
import {userInfo} from '../../../../../utils/auth';
import ItemAdvertiser from './ItemPostback';
import {Loading,showError,showSuccess} from '../../../../../utils/messages';
import { deletePostback, getPostback } from '../../../../../api/Affiliate/Postback';
import AddPostback from './AddPostback';
import { FaPlus } from "react-icons/fa";

const AllAdvertiser = () => {
    const [modalShow, setModalShow] = useState(false);
    const [values, setValues] = useState({
        errorMsg:'',
        error: false,
        loading: false,
        success: false,
        advertiser_data:[]
    });
    const { loading, error, errorMsg,advertiser_data,success} = values;
    const {token} = userInfo();

    const loeadAdvertiser = () => {
        getPostback(token)
        .then(response => {
            console.log('postback',response);
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
        // loeadAdvertiser();
    },[]);
   
    
    const removeItem = (item) => () => {
        if(!window.confirm("Are You Sure?")) return 
        deletePostback(token,item)
        .then(response => {
            // loeadAdvertiser();
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
    pathname: "/postback/edit",
    search: "?id=" + id,
  });
};
   

  return (
    <Layout title='All Postback' className='affiliate' subActive='affiliate.postback' activeNum='3'>
    <div id='AllAdvertiser'>
            <div className='manageFinaceHeader'>
                <h2>Afiliate Postbacks</h2>
                <Button variant="primary create__m_btn" onClick={() => setModalShow(true)}>
                    <FaPlus /> Create
                </Button>
                <AddPostback show={modalShow} onHide={() => setModalShow(false)} />
            </div>
            {showSuccess(success,errorMsg)}
           
        <Table className='table' responsive>
                <thead>
                    <tr>
                    <th>ID <ArrowDropDownIcon/></th>
                    <th>Affiliate Name <ArrowDropDownIcon/></th>
                    <th>Offer <ArrowDropDownIcon/></th>
                    <th>Status <ArrowDropDownIcon/></th>
                    <th>Code/Url <ArrowDropDownIcon/></th>
                    <th>Save <ArrowDropDownIcon/></th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {advertiser_data.map((item) => <ItemAdvertiser editAdvertiserHandler={editAdvertiser} data={item} key={item.id} removeItem={removeItem(item.id)}/>)} */}
                    <ItemAdvertiser/>
                </tbody>
        </Table>
        {showError(error,errorMsg)}
        {Loading(loading)}
    </div>
    </Layout>
  )
}

export default AllAdvertiser
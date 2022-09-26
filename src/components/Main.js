import React from 'react'
import { Switch, Route,Redirect } from "react-router-dom";


import MyOffer from './affiliatePages/Offers/myoffer/AffiliateMyOffer'

import Dashboard from './pages/Dashbard/AffiliateDashboard';
import Refferals from './pages/Refferals/Refferals';
import PostBackTools from './pages/Tools/PostBack/PostBackTools';
import './Main.scss';

import Notifications from './pages/Notifications/Notifications';
import Advertiser from './pages/Advertiser/All/AllAdvertiser';
import AdvertiserCreate from './pages/Advertiser/Create/AdvertiserCreate';
import EditAdvertiser from './pages/Advertiser/Edit/EditAdvertiser';


import AdminRoute from './protectedRoutes/AdminRoute';
import PrivateRoute from './protectedRoutes/PrivateRoute';

import ManageFinance from './pages/Finance/ManageFinance';

import Manager from './pages/Manager/Manager';

import DailyReport from './pages/Reports/Daily/DailyReport';
import ClickReport from './pages/Reports/Click/ClickReport';
import CountryReport from './pages/Reports/Country/CountryReport';
import AdvartiserReport from './pages/Reports/Advartiser/AdvartiserReport';
import AffiliateReport from './pages/Reports/Affiliate/AffiliateReport';
import Sub1Report from './pages/Reports/Sub1/Sub1Report';
import Sub2Report from './pages/Reports/Sub2/Sub2Report';
import Sub3Report from './pages/Reports/Sub3/Sub3Report';
import PostBackReport from './pages/Reports/PostBack/PostBackReport';
import OfferReport from './pages/Reports/Offer/OfferReport';
import ConversionReport from "./pages/Reports/ConversionReport/ConversionReport";
import PendingReport from "./pages/Reports/PendingReport/PendingReport";
import RejectReport from "./pages/Reports/RejectReport/RejectReport";
import ReversedReport from "./pages/Reports/ReversedReport/ReversedReport";
import DuplicateReport from "./pages/Reports/DuplicateReport/DuplicateReport";



import ManageAffiliate from './pages/Affiliates/Manage/ManageAffiliate';
import ApplicationAffiliate from './pages/Affiliates/Application/ApplicationAffiliate';

import ApplicationOffer from './pages/Offers/Application/ApplicationOffer';
import FinanceInvoice from './pages/Finance/Invoice/FinanceInvoice';
import Update from './pages/Notifications/Update';
import Account from './pages/Account/Account';
import CreateManager from './pages/Manager/CreateManager/CreateManager';
import EditManager from './pages/Manager/EditManager/EditManager';
import CreateAffiliate from './pages/Affiliates/Create/CreateAffiliate';
import EditAffiliate from './pages/Affiliates/Edit/EditAffiliate';

import Settings from "./pages/Settings/Settings";
import AllAdvertiser from './pages/Advertiser/All/AllAdvertiser';
import AllOffer from './pages/Offers/AllOffer/AllOffer';
import EditOffer from './pages/Offers/Edit/EditOffer';
import OfferDetails from './pages/Offers/OfferDetails/OfferDetails';
import Category from './pages/Offers/Category/Category';
import CreateOffer from './pages/Offers/Create/CreateOffer';

import Login from './pages/SignIn/Login';
import Register from './pages/SignIn/Register';

import CreatePostback from './pages/Affiliates/Postback/Create/CreatePostback';
import Postback from './pages/Affiliates/Postback/All/AllPostback';
import './table.scss';
import Login2 from './pages/Login2/Login2';

import AffiliateDashboard from './affiliatePages/Dashboard/Dashboard';
import AffilateDailyReport from  './affiliatePages/Reports/Daily/DailyReport'
import AffiliateConversationReport from './affiliatePages/Reports/ConversionReport/ConversionReport';
import AffiliateClickReport from './affiliatePages/Reports/Click/ClickReport';
import AffiliateOfferReport from './affiliatePages/Reports/Offer/OfferReport';
import AffiliateCountryReport from './affiliatePages/Reports/Country/CountryReport'
import AffiliateSub1 from './affiliatePages/Reports/Sub1/Sub1Report';
import AffiliateSub2 from './affiliatePages/Reports/Sub2/Sub2Report';
import AffiliateSub3 from './affiliatePages/Reports/Sub3/Sub3Report';
import AffiliateAccount from './affiliatePages/Account/Account'
import AffiliateNotification from './affiliatePages/Notifications/Notifications';
import AffiliateRefferal from './affiliatePages/Refferals/Refferals'
import AffiliateAvailableOffer from './affiliatePages/Offers/Availiableoffer/AffiliateAvailableOffer/AffiliateAvailableOffer'
import AffiliatePostBack from "./affiliatePages/developertool/PostBack/PostBackTools"
import AffiliatePaymentMethod from "./affiliatePages/payment/paymentMethod/paymentMethod"


import ManagerDashboard from './managerPages/Dashboard/Dashboard';
import ManagerOffers from './managerPages/Offers/managerOffer/managerOffer';
import ManagerOfferApplication from './managerPages/Offers/Application/ApplicationOffer';
import ManagerReportDaily from './managerPages/Reports/Daily/DailyReport';
import ManagerReportAffiliate from './managerPages/Reports/Affiliate/AffiliateReport';
import ManagerReportConversation from './managerPages/Reports/ConversionReport/ConversionReport';
import ManagerReportClick from './managerPages/Reports/Click/ClickReport';
import ManagerReportOffer from './managerPages/Reports/Offer/OfferReport';
import ManagerReportCountry from './managerPages/Reports/Country/CountryReport';
import ManagerReportSub1 from './managerPages/Reports/Sub1/Sub1Report';
import ManagerReportSub2 from './managerPages/Reports/Sub2/Sub2Report';
import ManagerReportSub3 from "./managerPages/Reports/Sub3/Sub3Report";
import ManagerAffiliateCreate from './managerPages/Affiliates/Create/CreateAffiliate';
import ManagerAffiliateManage from './managerPages/Affiliates/Manage/ManageAffiliate';
import ManagerAccount from './managerPages/Account/Account';
import ManagerNotification from './managerPages/Notifications/Notifications';

const Main = (props) => {
  return (
    <div>
      <Switch>
        {/* <Route path="/login" exact component={Login} /> */}
       
      
        <Route path="/f" exact component={Login2} />

        {/*affilate dashboard route */}
  
        <Route path="/affiliate/dashboard" exact component={AffiliateDashboard} />
        <Route path="/affiliate/myoffer" exact component={MyOffer} />
        <Route path="/affiliate/offer/availableoffer" exact component={AffiliateAvailableOffer} />


        <Route path="/affiliate/report/daily" exact component={AffilateDailyReport} />
        <Route path="/affiliate/report/conversation" exact component={AffiliateConversationReport} />
        <Route path="/affiliate/report/click" exact component={AffiliateClickReport} />
        <Route path="/affiliate/report/offer" exact component={AffiliateOfferReport} />
        <Route path="/affiliate/report/country" exact component={AffiliateCountryReport} />
        <Route path="/affiliate/report/sub1" exact component={AffiliateSub1} />
        <Route path="/affiliate/report/sub2" exact component={AffiliateSub2} />
        <Route path="/affiliate/report/sub3" exact component={AffiliateSub3} />
        
        <Route path="/affiliate/developertool/postback" exact component={AffiliatePostBack} />

        <Route path="/affiliate/payment/paymentmethod" exact component={AffiliatePaymentMethod} />
        <Route path="/affiliate/payment/invoice" exact component={AffiliatePaymentMethod} />

        <Route path="/affiliate/notification" exact component={AffiliateNotification} />

        <Route path="/affiliate/refferal" exact component={AffiliateRefferal} />

        <Route path="/affiliate/rollback" exact component={AffiliateAccount} />

        <Route path="/affiliate/account" exact component={AffiliateAccount} />

        <Route path="/affiliate/account" exact component={AffiliateAccount} />



        {/*Manager  route */}
        <Route path="/manager/dashboard" exact component={ManagerDashboard} />

        <Route path="/manager/offers" exact component={ManagerOffers} />
        <Route path="/manager/offer/application" exact component={ManagerOfferApplication} />

        <Route path="/manager/report/daily" exact component={ManagerReportDaily} />
        <Route path="/manager/report/affiliate" exact component={ManagerReportAffiliate} />
        <Route path="/manager/report/conversation" exact component={ManagerReportConversation} />
        <Route path="/manager/report/click" exact component={ManagerReportClick} />
        <Route path="/manager/report/offer" exact component={ManagerReportOffer} />
        <Route path="/manager/report/country" exact component={ManagerReportCountry} />
        <Route path="/manager/report/sub1" exact component={ManagerReportSub1} />
        <Route path="/manager/report/sub2" exact component={ManagerReportSub2} />
        <Route path="/manager/report/sub3" exact component={ManagerReportSub3} />


        <Route path="/manager/affiliate/create" exact component={ManagerAffiliateCreate} />
        <Route path="/manager/affiliate/manage" exact component={ManagerAffiliateManage} />
       

        <Route path="/manager/account" exact component={ManagerAccount} />

        <Route path="/manager/notification" exact component={ManagerNotification} />

        <Route path="/manager/rollback" exact component={AffiliateAccount} />

        {/* Adimin  route */}

        <AdminRoute exact path="/">
          <Dashboard />
        </AdminRoute>

        <AdminRoute exact path="/advertiser/create">
          <AdvertiserCreate />
        </AdminRoute>
        <AdminRoute exact path="/advertiser/edit">
          <EditAdvertiser />
        </AdminRoute>
        <AdminRoute exact path="/advertiser/all">
          <AllAdvertiser />
        </AdminRoute>

        <AdminRoute exact path="/finance">
          <ManageFinance />
        </AdminRoute>
        <AdminRoute exact path="/finance/invoice">
          <FinanceInvoice />
        </AdminRoute>

        <AdminRoute exact path="/affiliate/manage">
          <ManageAffiliate />
        </AdminRoute>
        <AdminRoute exact path="/affiliate/create">
          <CreateAffiliate />
        </AdminRoute>
        <AdminRoute exact path="/affiliate/edit">
          <EditAffiliate />
        </AdminRoute>
        <AdminRoute exact path="/affiliate/application">
          <ApplicationAffiliate />
        </AdminRoute>
        <AdminRoute exact path="/postback/create">
          <CreatePostback />
        </AdminRoute>
        <AdminRoute exact path="/affiliate/postback">
          <Postback />
        </AdminRoute>

        <AdminRoute exact path="/manager">
          <Manager />
        </AdminRoute>
        <AdminRoute exact path="/manager/create">
          <CreateManager />
        </AdminRoute>
        <AdminRoute exact path="/manager/edit">
          <EditManager />
        </AdminRoute>

        <AdminRoute exact path="/offer">
          <AllOffer />
        </AdminRoute>
        <AdminRoute exact path="/offer/aplication">
          <ApplicationOffer />
        </AdminRoute>
        <AdminRoute exact path="/offer/create">
          <CreateOffer />
        </AdminRoute>
        <AdminRoute exact path="/offer/edit">
          <EditOffer />
        </AdminRoute>
        <AdminRoute exact path="/offer/details">
          <OfferDetails />
        </AdminRoute>
        <AdminRoute exact path="/offer/details/:id">
          <OfferDetails />
        </AdminRoute>
        <AdminRoute exact path="/offer/category">
          <Category />
        </AdminRoute>

        <AdminRoute exact path="/report/daily">
          <DailyReport />
        </AdminRoute>

        <AdminRoute exact path="/report/click">
          <ClickReport />
        </AdminRoute>

        <AdminRoute exact path="/report/offer">
          <OfferReport />
        </AdminRoute>

        <AdminRoute exact path="/report/country">
          <CountryReport />
        </AdminRoute>

        <AdminRoute exact path="/report/advartiser">
          <AdvartiserReport />
        </AdminRoute>

        <AdminRoute exact path="/report/conversion">
          <ConversionReport />
        </AdminRoute>

        <AdminRoute exact path="/report/affiliate">
          <AffiliateReport />
        </AdminRoute>

        <AdminRoute exact path="/report/reject">
          <RejectReport />
        </AdminRoute>

        <AdminRoute exact path="/report/reversed">
          <ReversedReport />
        </AdminRoute>

        <AdminRoute exact path="/report/duplicate">
          <DuplicateReport />
        </AdminRoute>

        <AdminRoute exact path="/report/sub1">
          <Sub1Report />
        </AdminRoute>

        <AdminRoute exact path="/report/sub2">
          <Sub2Report />
        </AdminRoute>
     
        <AdminRoute exact path="/report/sub3">
          <Sub3Report />
        </AdminRoute>
       
        <AdminRoute exact path="/report/pending">
          <PendingReport />
        </AdminRoute>
        
       
        <AdminRoute exact path="/report/postback">
          <PostBackReport />
        </AdminRoute>
        
        <AdminRoute exact path="/refferals">
          <Refferals />
        </AdminRoute>

        <AdminRoute exact path="/tools/postback">
          <PostBackTools />
        </AdminRoute>

        <AdminRoute exact path="/notifications">
          <Notifications />
        </AdminRoute>

        <AdminRoute exact path="/notifications/update">
          <Update />
        </AdminRoute>

        <AdminRoute exact path="/account">
          <Account />
        </AdminRoute>
         
          {/* Settin Route */}
        <AdminRoute exact path="/settings/:setting">
           <Settings />
        </AdminRoute>
        
        <AdminRoute exact path="/settings">
           <Settings />
        </AdminRoute>

        <AdminRoute exact path="/settings/:setting">
           <Settings />
        </AdminRoute>

        <AdminRoute exact path="/settings/:setting">
           <Settings />
        </AdminRoute>
        


        <Route exact path="/login" component={Login2} />
        <Route exact path="/register"  component={Register} />
       
      
        <Redirect to="/login" />
      </Switch>
    </div>
  );
}

export default Main

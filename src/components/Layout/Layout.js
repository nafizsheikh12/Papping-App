import ArticleIcon from "@mui/icons-material/Article";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BentoIcon from "@mui/icons-material/Bento";
import ConstructionIcon from "@mui/icons-material/Construction";
import DiscountIcon from "@mui/icons-material/Discount";
import GroupIcon from "@mui/icons-material/Group";
import HomeIcon from "@mui/icons-material/Home";
import LightModeIcon from "@mui/icons-material/LightMode";
import LinkIcon from "@mui/icons-material/Link";
import MarkChatUnread from "@mui/icons-material/MarkChatUnread";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import SettingsIcon from "@mui/icons-material/Settings";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import PaidIcon from '@mui/icons-material/Paid';
import RotateRightIcon from '@mui/icons-material/RotateRight';

import {
  Box, Container, CssBaseline, Divider, IconButton, List,
  Toolbar, Typography,Tooltip,Avatar,MenuItem,Menu
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import { useEffect,useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import { Link, Redirect } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import { NotificationIcon } from "../../assets/Icons";
import ProfilePhoto from '../../assets/profile.png';
import dark from "./../../assets/dark.png";
import light from "./../../assets/light.png";
import "./layout.scss";
import CopyRight from "./utils/CopyRight";
import { AppBar, Drawer } from "./utils/Elements";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcon from "@mui/icons-material/Menu";
import { FaAlignLeft } from 'react-icons/fa';
import { signout, userInfo } from "../../utils/auth";
import { getUser } from "../../api/Auth/apiAuth";
import { useDispatch,useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

//component
import AfilateCard from './cardcomponent/AfilateCard'

const mdTheme = createTheme();

const Layout = ({ title, children,className,subActive,activeNum }) => {
  // sidebar toggler
  const [open, setOpen] = React.useState(true);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [UserData, setuserData] = useState("");
  const dispatch = useDispatch();
  const { userrole,user} = useSelector((state) => state.users);
  const history = useHistory();

  const toggleDrawer = () => {
    setOpen(!open);
    console.log(open)
  };
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const Logout = () => {
    history.push("/login");
    signout()
   
    
    console.log(history)
    
  }

  useEffect(() => {
    document.title = title;
  }, []);

  const { token } = userInfo();
  useEffect(() => {
    const GetUserData = async () => {
      try{
        dispatch({type:"userFetchStart"})
        const res = await  getUser(token)
        dispatch({type:"userRole",payload:res.data.role})
        dispatch({type:"userfetchSuccess",payload:res.data})
        setuserData(res.data)
      } catch(err){
         console.log(err)
      }
  }
  GetUserData()
  },[token,dispatch]);

  // dark mode light mode  code start herer
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [Modetheme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );


  const switchTheme = () => {
    const newTheme = Modetheme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  var root = document.querySelector('html');
  var feed = root.setAttribute('data',Modetheme)
 document.querySelector('body').setAttribute('data-theme',Modetheme);
 
  // dark mode light mode  code end herer
  return (
    <div>
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="absolute" open={open}>
            <Toolbar
              className="header__area"
              sx={{
                pr: "24px", // keep right padding when drawer closed
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                className='d-n-d-b-m toggle__button'
                sx={{
                  marginRight: "36px",
                  ...(open && { display: "none" }),
                }}
              >
                {/* <MenuIcon /> */}
                <FaAlignLeft className="" />
              </IconButton>
              <Typography
                component="h1"
                variant="body2"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1,fontSize:10,fontWeight:400 }}
              ><span className="mobile-none">
                <span className="update mobile-none">Update: </span>CPAPing Committed Towards Grow Your Revenue. We will Pay You, Once We Get Payments from Ou...
                </span>
              </Typography>
              <div className="server">
                <p>Server Time: <span>23:59:15</span></p>
              </div>

              <IconButton color="inherit" onClick={switchTheme}>
                {/* <Badge badgeContent={4} color="secondary"></Badge> */}
                {Modetheme === "light" ? (
                  <ModeNightIcon style={{ color: "black" }} />
                ) : (
                  <LightModeIcon color="light" />
                )}
              </IconButton>
              <div className="notification">
                {NotificationIcon}
                <span className="count">2</span>
              </div>
              <div className="profile">
                  <Tooltip title="Open settings">
                     <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Remy Sharp" src={ProfilePhoto} />
                     </IconButton>
                  </Tooltip>
                  <span>Administration</span>
                  <Menu
                      sx={{ mt: '45px' }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                  >
              
                    <MenuItem  onClick={handleCloseUserMenu}>
                      <Typography textAlign="center" onClick={Logout}>Logout</Typography>
                   </MenuItem>
           
                </Menu>
                 
              </div>
            </Toolbar>
          </AppBar>

          <Drawer variant="permanent" className={`side__bar ${open ? "":"openSidebar"}`} open={open}>
            <Toolbar
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                px: [1],
              }}
              
            >
              <Box
                sx={{
                  alignItems: "center",
                  marginRight: "70px",
                  justifyContent: "flex-end",
                  px: [1],
                }}
              >
                <Link>
                  <img
                    src={Modetheme === "light" ? dark : light}
                    alt="logo.png"
                    width="100%"
                  />
                </Link>
              </Box>

              <IconButton className='d-n-d-b-m' onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <Divider style={{  opacity:'0' }} />
            <List component="nav">
            <div>
              <Accordion defaultActiveKey={activeNum} >

               {userrole === 'Admin' ?  <>
                  <Accordion.Item eventKey="0">
                      <Link to='/' id={className == 'dashboard'? 'active':' '} className='sidebarItem '> <HomeIcon /> Dashboard</Link>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" >
                      <Accordion.Header id={className == 'advertiser'? 'active':' '}  className="sidebarItem">  <GroupIcon />  Advertiser</Accordion.Header>
                      <Accordion.Body >
                        <ul>
                            <li id={subActive === 'advertiser.create' ? 'menuActive':''}><Link to='/advertiser/create'>Create Advertiser</Link></li>
                            <li id={subActive === 'advertiser.all' ? 'menuActive':''}> <Link to='/advertiser/all'>Manage Advertiser</Link></li>
                        </ul>
                      </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" expanded='true'>
                      <Accordion.Header id={className === 'offer'? 'active':' '}  className="sidebarItem"><DiscountIcon /> Offers</Accordion.Header>
                      <Accordion.Body expanded='true'>
                      <ul>
                            <li id={subActive === 'offer.all' ? 'menuActive':''}><Link to='/offer'>- All Offers</Link></li>
                            <li id={subActive === 'offer.create' ? 'menuActive':''}><Link to='/offer/create'>Create An Offer</Link></li>
                            <li id={subActive === 'offer.manage' ? 'menuActive':''}><Link to='/offer'>Manage Offer</Link></li>
                            <li id={subActive === 'offer.details' ? 'menuActive':''}><Link to='/offer/details'>Offer details</Link></li>
                            <li id={subActive === 'offer.application' ? 'menuActive':''}> <Link to='/offer/aplication'>Offers Application</Link></li>
                            <li id={subActive === 'offer.category' ? 'menuActive':''}><Link to='/offer/category'>Manage A Category</Link></li>
                        </ul>
                      </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                      <Accordion.Header id={className === 'affiliate'? 'active':' '}  className="sidebarItem"><AttachMoneyIcon /> Affiliates</Accordion.Header>
                      <Accordion.Body>
                      <ul>
                            <li  id={subActive === 'affiliate.create' ? 'menuActive':''}><Link to='/affiliate/create'>Create Affilitaes</Link></li>
                            <li id={subActive === 'affiliate.manage' ? 'menuActive':''}><Link to='/affiliate/manage'> Manage Affilitaes</Link></li>
                            <li id={subActive === 'affiliate.application' ? 'menuActive':''}><Link to='/affiliate/application'>Affilitae Application</Link></li>
                            <li id={subActive === 'affiliate.postback' ? 'menuActive':''}> <Link to='/affiliate/postback'>Affilitae Postback</Link></li>
                        </ul>
                      </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                      <Accordion.Header  className="sidebarItem"><BentoIcon /> Manager</Accordion.Header>
                      <Accordion.Body>
                      <ul>
                            <li id={subActive === 'manager.create' ? 'menuActive':''}><Link to='/manager/create'>Create Manager</Link></li>
                            <li id={subActive === 'manager.manage' ? 'menuActive':''}><Link to='/manager'>Manage Manager</Link></li>
                        </ul>
                      </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                      <Accordion.Header id={className === 'report'? 'active':' '}  className="sidebarItem"><ArticleIcon  /> Reports</Accordion.Header>
                      <Accordion.Body>
                      <ul>
                            <li id={subActive === 'report.daily' ? 'menuActive':''}><Link to='/report/daily'>Daily Reports</Link></li>
                            <li id={subActive === 'report.offer' ? 'menuActive':''}><Link to='/report/offer'>Offer Reports</Link></li>
                            <li id={subActive === 'report.click' ? 'menuActive':''}><Link to='/report/click'>Click Reports</Link></li>
                            <li id={subActive === 'report.affiliate' ? 'menuActive':''}><Link to='/report/affiliate'>Affilitae Reports</Link></li>
                            <li id={subActive === 'report.country' ? 'menuActive':''}><Link to='/report/country'>Country Reports</Link></li>
                            <li id={subActive === 'report.advertiser' ? 'menuActive':''}><Link to='/report/advartiser'>Advertiser Reports</Link></li>
                            <li id={subActive === 'report.conversion' ? 'menuActive':''}><Link to='/report/conversion'>Conversion Reports</Link></li>
                            <li id={subActive === 'report.sub1' ? 'menuActive':''}><Link to='/report/sub1'>Sub-1 Reports</Link></li>
                            <li id={subActive === 'report.sub2' ? 'menuActive':''}><Link to='/report/sub2'>Sub-2 Reports</Link></li>
                            <li id={subActive === 'report.sub3' ? 'menuActive':''}><Link to='/report/sub3'>Sub-3 Reports</Link></li>
                            <li id={subActive === 'report.pendding' ? 'menuActive':''}><Link to='/report/pending'>Pending Conversion</Link></li>
                            <li id={subActive === 'report.reject' ? 'menuActive':''}><Link to='/report/reject'>Reject Conversion</Link></li>
                            <li id={subActive === 'report.reversed' ? 'menuActive':''}><Link to='/report/reversed'>Reversed Conversion</Link></li>
                            <li id={subActive === 'report.duplicate' ? 'menuActive':''}><Link to='/report/duplicate'>Duplicate Conversion Reports</Link></li>
                            <li id={subActive === 'report.post' ? 'menuActive':''}><Link to='/report/postback'>Post Back Log Reports</Link></li>
                        </ul>
                      </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="6">
                      <Accordion.Header id={className === 'finance'? 'active':' '}  className="sidebarItem"><StackedLineChartIcon />Finance</Accordion.Header>
                      <Accordion.Body>
                      <ul>
                            <li  id={subActive === 'finance.manage' ? 'menuActive':''}><Link to='/finance'>Mange Finance</Link></li>
                            <li  id={subActive === 'finance.invoice' ? 'menuActive':''}><Link to='/finance/invoice'>Affilitae Invoice</Link></li>
                        </ul>
                      </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="7">
                      <Accordion.Header id={className === 'settings'? 'active':' '}  className="sidebarItem"><SettingsIcon  />Settings</Accordion.Header>
                      <Accordion.Body>
                      <ul>
                            <li><Link to='/settings/appearance'>Appearance</Link></li>
                            <li><Link to='/settings/signup-quescd'>Register Questions</Link></li>
                            <li><Link to='/settings/own-post-bac'>Own Post Backs</Link></li>
                            <li><Link to='/settings/smtp'>SMTP</Link></li>
                        </ul>
                      </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="8">
                      <Accordion.Header id={className === 'developertools'? 'active':' '} className="sidebarItem"><ConstructionIcon  />Developer Tools</Accordion.Header>
                      <Accordion.Body>
                      <ul>
                            <li><Link to='dashboard'>API</Link></li>
                            <li><Link to='/tools/postback'>Own Post Backs</Link></li>
                        </ul>
                      </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="9">
                      <Link to='/account'  id={className === 'account'? 'active':' '} className="sidebarItem"> <GroupIcon  /> Account</Link>
                  </Accordion.Item>
                  <Accordion.Item eventKey="10">
                      <Link to='/notifications' id={className === 'notification'? 'active':' '} className="sidebarItem"> <MarkChatUnread  /> Notifications</Link>
                  </Accordion.Item>
                  <Accordion.Item eventKey="11">
                      <Link to='/refferals' id={className === 'referals'? 'active':' '} className="sidebarItem"> <LinkIcon  /> Refferals</Link>
                  </Accordion.Item></> : null }

            {userrole === 'Affiliate' ? <>    
                <h1>Affiliate side bar start here</h1>

                  <Accordion.Item eventKey="12">
                      <Link to='/affiliate/dashboard' id={className === 'affiliateDashboard'? 'active':' '} className="sidebarItem">  <HomeIcon />Dashbard</Link>
                  </Accordion.Item>
                  <Accordion.Item eventKey="13">
                      <Accordion.Header id={className === 'Aoffer'? 'active':' '}  className="sidebarItem"><DiscountIcon /> Offers</Accordion.Header>
                      <Accordion.Body>
                      <ul>
                            <li  id={subActive === 'offer.my' ? 'menuActive':''}><Link to='/affiliate/myoffer'>my Offers</Link></li>
                            <li  id={subActive === 'offer.ab' ? 'menuActive':''}><Link to='/affiliate/offer/availableoffer'>available offer</Link></li>
                        </ul>
                      </Accordion.Body>
                  </Accordion.Item>
  
                  <Accordion.Item eventKey="14">
                      <Accordion.Header id={className === 'AffiliateReport'? 'active':' '}  className="sidebarItem"><ArticleIcon  />Reports</Accordion.Header>
                      <Accordion.Body>
                      <ul>
                            <li id={subActive === 'AffiliateReport.daily' ? 'menuActive':''}><Link to='/affiliate/report/daily'>Daily Reports</Link></li>
                            <li id={subActive === 'AffiliateReport.conversation' ? 'menuActive':''}><Link to='/affiliate/report/conversation'>Conversion Reports</Link></li>
                            <li id={subActive === 'AffiliateReport.click' ? 'menuActive':''}><Link to='/affiliate/report/click'>Click Reports</Link></li>
                            <li id={subActive === 'AffiliateReport.offer' ? 'menuActive':''}><Link to='/affiliate/report/offer'>Offer Reports</Link></li>
                            <li id={subActive === 'AffiliateReport.country' ? 'menuActive':''}><Link to='/affiliate/report/country'>Country Reports</Link></li>
                            <li id={subActive === 'AffiliateReport.sub1' ? 'menuActive':''}><Link to='/affiliate/report/sub1'>Sub-1 Reports</Link></li>
                            <li id={subActive === 'AffiliateReport.sub2' ? 'menuActive':''}><Link to='/affiliate/report/sub2'>Sub-2 Reports</Link></li>
                            <li id={subActive === 'AffiliateReport.sub3' ? 'menuActive':''}><Link to='/affiliate/report/sub3'>Sub-3 Reports</Link></li>
                        </ul>
                      </Accordion.Body>
                  </Accordion.Item>


                  <Accordion.Item eventKey="15">
                      <Accordion.Header id={className === 'affiliateDeveloperTool'? 'active':' '}  className="sidebarItem"><ConstructionIcon  />Developer Tools</Accordion.Header>
                      <Accordion.Body>
                      <ul>
                            <li id={subActive === 'affiliateDeveloperTool.postback' ? 'menuActive':''}><Link to='/affiliate/developertool/postback'>Postbacks</Link></li>
                            
                        </ul>
                      </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="16">
                      <Accordion.Header id={className === 'AffiliatePayment'? 'active':' '}  className="sidebarItem"><PaidIcon />Payment</Accordion.Header>
                      <Accordion.Body>
                      <ul>
                            <li id={subActive === 'AffiliatePayment.all' ? 'menuActive':''}><Link to='/affiliate/payment/paymentmethod'>Payment Mathod</Link></li>
                            <li id={subActive === 'AffiliatePayment.invoice' ? 'menuActive':''}><Link to='/affiliate/payment/invoice'>Invoice</Link></li>
                        </ul>
                      </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="17">
                      <Link to='/affiliate/account' id={className === 'affiliateAccount'? 'active':' '} className="sidebarItem">  <GroupIcon  /> Account</Link>
                  </Accordion.Item>
                  <Accordion.Item eventKey="`18`">
                      <Link to='/affiliate/notification' id={className === 'affiliateNotification'? 'active':' '} className="sidebarItem"> <MarkChatUnread  />Notifications</Link>
                  </Accordion.Item>
                  <Accordion.Item eventKey="19">
                      <Link to='/affiliate/refferal' id={className === 'affiliateRefferal'? 'active':' '} className="sidebarItem"> <LinkIcon  />Refferals</Link>
                  </Accordion.Item>
                  <Accordion.Item eventKey="20">
                      <Link to='/affiliate/rollback' id={className === 'affiliateRollback'? 'active':' '} className="sidebarItem"> <RotateRightIcon /> Rollback</Link>
                  </Accordion.Item>  </> : null }

                {userrole === 'Manager' ? <>
                  <h1>Manager side bar start here</h1>


                  <Accordion.Item eventKey="21">
                      <Link to='/manager/dashboard' id={className === 'managerDashboard'? 'active':' '} className="sidebarItem">  <HomeIcon />Dashbard</Link>
                  </Accordion.Item>
                  <Accordion.Item eventKey="22">
                      <Accordion.Header id={className === 'managerOffer'? 'active':' '}  className="sidebarItem"><DiscountIcon /> Offers</Accordion.Header>
                      <Accordion.Body>
                      <ul>
                            <li  id={subActive === 'managerOffer.offer' ? 'menuActive':''}><Link to='/manager/offers'>Offers</Link></li>
                            <li  id={subActive === 'managerOffer.application' ? 'menuActive':''}><Link to='/manager/offer/application'>Application</Link></li>
                        </ul>
                      </Accordion.Body>
                  </Accordion.Item>
  
                  <Accordion.Item eventKey="23">
                      <Accordion.Header id={className === 'managerReport'? 'active':' '}  className="sidebarItem"><ArticleIcon  />Reports</Accordion.Header>
                      <Accordion.Body>
                      <ul>
                            <li id={subActive === 'managerReport.daily' ? 'menuActive':''}><Link to='/manager/report/daily'>Daily Reports</Link></li>
                            <li id={subActive === 'managerReport.affiliate' ? 'menuActive':''}><Link to='/manager/report/affiliate'>Affiliate Reports</Link></li>
                            <li id={subActive === 'managerReport.conversation' ? 'menuActive':''}><Link to='/manager/report/conversation'>Conversion Reports</Link></li>
                            <li id={subActive === 'managerReport.click' ? 'menuActive':''}><Link to='/manager/report/click'>Click Reports</Link></li>
                            <li id={subActive === 'managerReport.offer' ? 'menuActive':''}><Link to='/manager/report/offer'>Offer Reports</Link></li>
                            <li id={subActive === 'managerReport.country' ? 'menuActive':''}><Link to='/manager/report/country'>Country Reports</Link></li>
                            <li id={subActive === 'managerReport.sub1' ? 'menuActive':''}><Link to='/manager/report/sub1'>Sub-1 Reports</Link></li>
                            <li id={subActive === 'managerReport.sub2' ? 'menuActive':''}><Link to='/manager/report/sub2'>Sub-2 Reports</Link></li>
                            <li id={subActive === 'managerReport.sub3' ? 'menuActive':''}><Link to='/manager/report/sub3'>Sub-3 Reports</Link></li>
                        </ul>
                      </Accordion.Body>
                  </Accordion.Item>


                  <Accordion.Item eventKey="24">
                      <Accordion.Header id={className === 'managerAffiliate'? 'active':' '}  className="sidebarItem"><AttachMoneyIcon /> Affiliate</Accordion.Header>
                      <Accordion.Body>
                      <ul>
                            <li  id={subActive === 'managerAffiliate.create' ? 'menuActive':''}><Link to='/manager/affiliate/create'>Create Affilitaes</Link></li>
                            <li id={subActive === 'managerAffiliate.manage' ? 'menuActive':''}><Link to='/manager/affiliate/manage'> Manage Affilitaes</Link></li>
                            
                        </ul>
                      </Accordion.Body>
                  </Accordion.Item>

                 
                  <Accordion.Item eventKey="25">
                      <Link to='/manager/account' id={className === 'managerAccount'? 'active':' '} className="sidebarItem">  <GroupIcon  /> Account</Link>
                  </Accordion.Item>
                  <Accordion.Item eventKey="`26`">
                      <Link to='/manager/notification' id={className === 'managerNotification'? 'active':' '} className="sidebarItem"> <MarkChatUnread  />Notifications</Link>
                  </Accordion.Item>
                  <Accordion.Item eventKey="27">
                      <Link to='/manager/refferal' id={className === 'managerRollback'? 'active':' '} className="sidebarItem"> <RotateRightIcon />Rollback</Link>
                  </Accordion.Item> </> : null }

              </Accordion>

            <AfilateCard User={UserData}/>

          </div>
              <Divider sx={{ my: 1 }} style={{  opacity:'0' }} />
            </List>
          </Drawer>
          <Box
            component="main"
            className="MainContentArea"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Toolbar/>
            <Container
              className="MainContentContainer"
              maxWidth="lg"
              sx={{ mt: 5, mb: 4 }}
            >
              <div className="MainContainerContentArea">{children}</div>
            </Container>
          </Box>
            <CopyRight sx={{ pt: 12 }} lg={12} />
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Layout;

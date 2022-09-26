import {
  Button,
  Card,
  CardContent,
  FormLabel,
  Grid,
  MenuItem,
  TextField,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  updateOffer,
  getOfferByID,
  getOffer,
} from "../../../../api/Offer/Offer";
import { getAdvertiser } from "../../../../api/Advertiser/Advertiser";
import { userInfo } from "../../../../utils/auth";
import { getCategory } from "../../../../api/Offer/Category";
import Layout from "../../../Layout/Layout";
import TextEditor from "./TextEditor/TextEditor";
import {
  showError,
  showSuccess,
  showLoading,
} from "../../../../utils/messages";
import { useLocation } from "react-router-dom";

const CreateOffer = () => {
  const { handleSubmit, control,reset } = useForm();
  const [offers, setOffer] = useState([]);
  const [advertisers, setAdvertiser] = useState([]);
  const [categories, setCategory] = useState([]);
  const [descriptionValue, setDescriptionValue] = useState("");
  const [formDatas, setFormData] = useState(null);
  const [values, setValues] = useState({
    errors: false,
    errorMsg: " ",
    error: false,
    loading: false,
    disabled: false,
    success: false,
  });
  const { errors, errorMsg, error, loading, disabled, success } = values;
  const { token } = userInfo();
  const location = useLocation();
  useEffect(() => {
      const id = location.search.split("=")[1];
    getOfferByID(token, id)
      .then((res) => {
        console.log(res.data);
        setDescriptionValue(res.data.data.description);
        setFormData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    getOffer(token, id)
      .then((offer) => {
        setOffer(offer.data);
      })
      .catch((err) => {
        console.log(err);
      });
    getAdvertiser(token)
      .then((advertiser) => {
        setAdvertiser(advertiser.data);
      })
      .catch((err) => {
        console.log(err);
      });
    getCategory(token)
      .then((category) => {
        setCategory(category.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(()=>{
    reset(formDatas)
  },[formDatas])
  const data = [
    {
      id: 1,
      type: "input",
      name: "name",
      label: "Offer Name",
      placeholder: "type your offer Name",
      msg: "offer Name required",
    },
    {
      id: 2,
      type: "select",
      name: "category_id",
      label: "category",
      placeholder: "select your category",
      msg: "Select a category",
    },
    {
      id: 3,
      type: "select",
      name: "advertiser_id",
      label: "advertiser",
      placeholder: "select advertiser",
      msg: "Select a advertiser",
    },
    {
      id: 4,
      type: "textEdit",
    },
    {
      id: 5,
      type: "input",
      name: "preview_url",
      label: "Preview uRL",
      placeholder: "enter revenue",
      msg: "Preview uRL required",
    },
    {
      id: 6,
      type: "input",
      name: "tracking_url",
      label: "Tracking URL",
      placeholder: "enter revenue",
      msg: "Preview uRL required",
    },
  ];

  const rightData = [
    {
      id: 18,
      type: "input",
      name: "revenue",
      label: "enter revenue",
      placeholder: "enter revenue",
      msg: "revenue required",
    },
    {
      id: 19,
      type: "input",
      name: "cap",
      label: "daily cap",
      placeholder: "enter daily cap",
      msg: "daily cap required",
    },
    {
      id: 3,
      type: "select",
      name: "alternative_offer",
      label: "alternative offer",
      placeholder: "select your alternative offer",
      msg: "select a offer",
    },
    {
      id: 5,
      type: "select",
      name: "status",
      label: "status",
      placeholder: "select your status",
      msg: "Select a status",
    },
    {
      id: 5,
      type: "select",
      name: "payout_type",
      label: "payout type",
      placeholder: "select your payout type",
      msg: "Select a payout type",
    },
    {
      id: 9,
      type: "input",
      name: "payout",
      label: "payout",
      placeholder: "enter payout",
      msg: "payout required",
    },
    {
      id: 6,
      type: "date",
      label: "Expiration Date",
      name: "expiration_date",
    },
  ];
  const statuses = [
    {
      id: 1,
      name: "Pending",
      option: "Pending",
    },
    {
      id: 2,
      name: "Active",
      option: "Active",
    },
    {
      id: 3,
      name: "Request Approved",
      option: "RequestApproved",
    },
  ];
  const payoutTypes = [
    {
      id: 1,
      name: "Revenue Share",
      option: "revenue_share",
    },
    {
      id: 2,
      name: "Fix",
      option: "fix",
    },
  ];
  const config = {
    buttons: ["bold", "italic", "link", "unlink", "underline", "source"],
  };
  
  const onSubmit = (data) => {
    const id = location.search.split("=")[1];
    console.log(data);
    updateOffer(token,id, {
      category_id: data.category_id,
      advertiser_id: parseInt(data.advertiser_id),
      name: data.name,
      description: descriptionValue,
      alternative_offer: data.alternative_offer,
      payout_type: data.payout_type,
      preview_url: data.preview_url,
      tracking_url: data.tracking_url,
      revenue: data.revenue,
      payout: data.payout,
      status: data.status,
      cap: data.cap,
      expiration_date: data.expiration_date,
      country_id:2
    })
      .then((response) => {
        if (response.status === 200) {
          setValues({
            ...values,
            error: false,
            errorMsg: "Offer Updated Successfully!!",
            loading: false,
            disabled: false,
            success: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        let errMsg = "Something went wrong!";
        if (err.response.data != undefined) {
          errMsg = err.response.data.message;
        } else {
          errMsg = "Something went wrong!";
        }
        setValues({
          ...values,
          error: true,
          errorMsg: errMsg,
          disabled: false,
          loading: false,
        });
      });
  };

  const getValue = (value) => {
    setDescriptionValue(value);
  };
  return (
    <Layout title='Edit Offer' className="offer" subActive="offer.all"  activeNum='2'>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {showError(error, errorMsg)}
          {showLoading(loading)}
          {showSuccess(success, errorMsg)}
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Card sx={{ padding: 1 }}>
                <CardContent>
                  <Grid container spacing={2}>
                    {data.map((it) => (
                      <>
                        {it.type === "input" && (
                          <Grid sm={12} item>
                            <FormLabel sx={{ mb: 2 }}>{it.label}</FormLabel>
                            <Controller
                              name={it.name}
                              control={control}
                              render={({
                                field: { onChange, value },
                                fieldState: { error },
                              }) => (
                                <TextField
                                  label={it.label}
                                  variant="outlined"
                                  fullWidth
                                  value={value}
                                  onChange={onChange}
                                  error={!!error}
                                  helperText={error ? error.message : null}
                                />
                              )}
                              rules={{ required: it.msg }}
                            />
                          </Grid>
                        )}
                        {it.type === "select" && (
                          <Grid xs={12} sm={12} item>
                            <FormLabel sx={{ mb: 2 }}>{it.label}</FormLabel>
                            <Controller
                              name={it.name}
                              control={control}
                              render={({
                                field: { onChange, value },
                                fieldState: { error },
                              }) => (
                                <TextField
                                  placeholder={it.placeholder}
                                  select
                                  fullWidth
                                  label={it.label}
                                  sx={{ borderRadius: 4, border: "outlined" }}
                                  variant="outlined"
                                  value={value}
                                  onChange={onChange}
                                  error={!!error}
                                  helperText={error ? error.message : null}
                                >
                                  {it.name == "category"
                                    ? categories.map((category) => (
                                        <MenuItem
                                          key={category.id}
                                          value={category.id}
                                        >
                                          {category.name}
                                        </MenuItem>
                                      ))
                                    : advertisers.map((advertiser) => (
                                        <MenuItem
                                          key={advertiser.id}
                                          value={advertiser.id}
                                        >
                                          {advertiser.name}
                                        </MenuItem>
                                      ))}
                                </TextField>
                              )}
                              rules={{ required: it.msg }}
                            />
                          </Grid>
                        )}
                        {it.type === "textEdit" && (
                          <Grid sm={12} item>
                            <FormLabel sx={{ mb: 2 }}>description</FormLabel>
                            <TextEditor
                              getValue={getValue}
                              config={config}
                            />
                          </Grid>
                        )}
                      </>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card sx={{ padding: 1 }}>
                <CardContent>
                  <Grid container spacing={2}>
                    {rightData.map((rIT) => (
                      <>
                        {rIT.type === "input" && (
                          <Grid sm={12} item>
                            <FormLabel sx={{ mb: 2 }}>{rIT.label}</FormLabel>
                            <Controller
                              name={rIT.name}
                              control={control}
                              render={({
                                field: { onChange, value },
                                fieldState: { error },
                              }) => (
                                <TextField
                                  label={rIT.label}
                                  variant="outlined"
                                  fullWidth
                                  value={value}
                                  onChange={onChange}
                                  error={!!error}
                                  helperText={error ? error.message : null}
                                />
                              )}
                            />
                          </Grid>
                        )}
                        {rIT.type === "select" && (
                          <Grid xs={12} sm={12} item key={rIT.id}>
                            <FormLabel sx={{ mb: 2 }}>{rIT.label}</FormLabel>
                            <Controller
                              name={rIT.name}
                              control={control}
                              
                              render={({
                                field: { onChange, value },
                                fieldState: { error },
                              }) => (
                                <TextField
                                  placeholder={rIT.placeholder}
                                  select
                                  fullWidth
                                  label={rIT.label}
                                  sx={{ borderRadius: 4, border: "outlined" }}
                                  variant="outlined"
                                  value={value}
                                  onChange={onChange}
                                  error={!!error}
                                  helperText={error ? error.message : null}
                                >
                                  {rIT.name == "alternative_offer"
                                    ? offers.map((offer) => (
                                        <MenuItem
                                          key={offer.id}
                                          value={offer.id}
                                        >
                                          {offer.name}
                                        </MenuItem>
                                      ))
                                    : rIT.name == "payout_type"
                                    ? payoutTypes.map((type) => (
                                        <MenuItem
                                          key={type.id}
                                          value={type.option}
                                        >
                                          {type.name}
                                        </MenuItem>
                                      ))
                                    : statuses.map((status) => (
                                        <MenuItem
                                          key={status.id}
                                          value={status.option}
                                        >
                                          {status.name}
                                        </MenuItem>
                                      ))}
                                </TextField>
                              )}
                            />
                          </Grid>
                        )}
                        {rIT.type === "date" && (
                          <Grid sm={12} item>
                            <FormLabel sx={{ mb: 2 }}>{rIT.label}</FormLabel>
                            <Controller
                              name={rIT.name}
                              control={control}
                              
                              render={({
                                field: { onChange, value },
                                fieldState: { error },
                              }) => (
                                <TextField
                                  type="date"
                                  variant="outlined"
                                  fullWidth
                                  value={value}
                                  onChange={onChange}
                                  error={!!error}
                                  helperText={error ? error.message : null}
                                />
                              )}
                            />
                          </Grid>
                        )}
                      </>
                    ))}
                    <Grid item xs={12} align="center" sx={{ mt: 2 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{
                          paddingRight: 10,
                          paddingLeft: 10,
                          backgroundColor: "#7040FF",
                        }}
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </form>
      </div>
    </Layout>
  );
};

export default CreateOffer;

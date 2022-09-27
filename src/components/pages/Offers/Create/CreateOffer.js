import {
  Card,
  CardContent,
  FormLabel,
  Grid,
  MenuItem,
  TextField,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { createOffer, getOffer } from "../../../../api/Offer/Offer";
import { getAdvertiser } from "../../../../api/Advertiser/Advertiser";
import { userInfo } from "../../../../utils/auth";
import { getCategory } from "../../../../api/Offer/Category";
import Layout from "../../../Layout/Layout";
import TextEditor from "../Edit/TextEditor/TextEditor";
import {
  showError,
  showSuccess,
  showLoading,
} from "../../../../utils/messages";
import "./CreateOffer.scss";
import { Button } from "react-bootstrap";
import InputDatePicker from "./../../../../shared/SharedComponents/DatePicker/InputDatePicker";
const data = [
  {
    id: 1,
    type: "input",
    name: "offerName",
    label: "Offer Name",
    placeholder: "type your offer Name",
    msg: "offer Name required",
  },
  {
    id: 2,
    type: "select",
    name: "category",
    label: "category",
    placeholder: "select your category",
    msg: "Select a category",
  },
  {
    id: 3,
    type: "select",
    name: "advertiser",
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
    name: "PreviewURL",
    label: "Preview uRL",
    placeholder: "enter revenue",
    msg: "Preview uRL required",
  },
  {
    id: 6,
    type: "input",
    name: "TrackingURL",
    label: "Tracking URL",
    placeholder: "enter revenue",
    msg: "Preview uRL required",
  },
];

const rightData = [
  {
    id: 8,
    type: "input",
    name: "revenue",
    label: "enter revenue",
    placeholder: "enter revenue",
    msg: "revenue required",
  },
  {
    id: 10,
    type: "input",
    name: "dailyCap",
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
    id: 6,
    type: "select",
    name: "payout_type",
    label: "payout type",
    placeholder: "select your payout type",
    msg: "Select a payout type",
  },
  {
    id: 11,
    type: "input",
    name: "payout",
    label: "payout",
    placeholder: "enter payout",
    msg: "payout required",
  },
  {
    id: 20,
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

const CreateOffer = () => {
  const { handleSubmit, control, reset } = useForm();
  const [offers, setOffer] = useState([]);
  const [advertisers, setAdvertiser] = useState([]);
  const [categories, setCategory] = useState([]);
  const [descriptionValue, setDescriptionValue] = useState("");
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
  useEffect(() => {
    getOffer(token)
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

  const onSubmit = (data) => {
    createOffer(token, {
      category_id: data.category,
      advertiser_id: parseInt(data.advertiser),
      name: data.offerName,
      description: descriptionValue,
      alternative_offer: data.alternative_offer,
      payout_type: data.payout_type,
      preview_url: data.PreviewURL,
      tracking_url: data.TrackingURL,
      revenue: data.revenue,
      payout: data.payout,
      status: data.status,
      cap: data.dailyCap,
      expiration_date: data.expiration_date,
    })
      .then((response) => {
        if (response.status === 201) {
          reset();
          setValues({
            ...values,
            error: false,
            errorMsg: "Offer Created Successfully!!",
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
    <Layout
      title="Create Offer"
      className="offer"
      subActive="offer.create"
      activeNum="2"
    >
      <div id="CreateOffer">
        <form id="form" onSubmit={handleSubmit(onSubmit)}>
          {showError(error, errorMsg)}
          {showLoading(loading)}
          {showSuccess(success, errorMsg)}
          <Grid container spacing={4}>
            <Grid item xs={12} lg={6} md={6}>
              <Card sx={{ padding: 1 }} className="createOfeerbgset">
                <CardContent>
                  <Grid container spacing={2}  className="custommhc70k">
                    {data.map((it) => (
                      <>
                        {it.type === "input" && (
                          <Grid sm={12} item>
                            <FormLabel sx={{ mb: 2 }}>{it.label}</FormLabel>
                            <Controller
                              name={it.name}
                              control={control}
                              defaultValue=""
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
                              defaultValue=""
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
                            <TextEditor getValue={getValue} config={config} />
                          </Grid>
                        )}
                      </>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Card sx={{ padding: 1 }} className="createOfeerbgset">
                <CardContent>
                  <Grid container spacing={2}  className="custommhc70k">
                    {rightData.map((rIT) => (
                      <>
                        {rIT.type === "input" && (
                          <Grid sm={12} item>
                            <FormLabel sx={{ mb: 2 }}>{rIT.label}</FormLabel>
                            <Controller
                              name={rIT.name}
                              control={control}
                              defaultValue=""
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
                              defaultValue=""
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
                              defaultValue=""
                              render={({
                                field: { onChange, value },
                                fieldState: { error },
                              }) => (
                                <InputDatePicker
                                  className="date__input"
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
                      <Button type="submit" variant="primary m_btn">
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

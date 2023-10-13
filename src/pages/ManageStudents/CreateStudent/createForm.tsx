import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

import RestartAltIcon from '@mui/icons-material/RestartAlt';
import CustomSelectBox from '../../../components/CustomSelectBox/index';
import SendIcon from '@mui/icons-material/Send';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

import { Typography } from '@mui/material';
import {Button} from "@material-tailwind/react";

const StudentCreateForm = ({ formik, allDepartments}: any) => {







  return (
      <>
        <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
          <Grid item xs={12} sm={12}>
            <Grid container spacing={{ xs: 2, md: 3 }}>
              <Grid item xs={12} sm={6}>
                <div>
                  <label htmlFor="full-name" className="block text-sm font-semibold leading-6 text-gray-900">
                   Full Name
                  </label>
                  <div className="mt-2.5">
                    <input
                        type="text"
                        name="full-name"
                        id="full-name"
                        autoComplete="family-name"
                        className=" w-full rounded-md  px-3.5 py-2 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </Grid>
              <Grid>

                <div>
                  <label htmlFor="birthday" className="block text-sm font-semibold leading-6 text-gray-900">
                    Birthday
                  </label>
                  <div className="mt-2.5">
                    <input
                        type="date"
                        name="birthday"
                        id="birthday"
                        autoComplete="family-name"
                        className=" w-full rounded-md  px-3.5 py-2 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} sm={6}>
                <div>
                  <label htmlFor="mobile-number" className="block text-sm font-semibold leading-6 text-gray-900">
                    Mobile Number
                  </label>
                  <div className="mt-2.5">
                    <input
                        type="text"
                        name="mobile-number"
                        id="mobile-number"
                        autoComplete="family-name"
                        className=" w-full rounded-md  px-3.5 py-2 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div>
                  <label htmlFor="address" className="block text-sm font-semibold leading-6 text-gray-900">
                    Address
                  </label>
                  <div className="mt-2.5">
                    <input
                        type="text"
                        name="address"
                        id="address"
                        autoComplete="family-name"
                        className=" w-full rounded-md  px-3.5 py-2 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>

              </Grid>

              <Grid item xs={12} sm={6}>
                <CustomSelectBox
                    fullWidth
                    variant="standard"
                    name="department"
                    id="department"
                    select
                    label="Department"
                    value={formik.values.department}
                    onChange={formik.handleChange}
                    error={formik.touched.department && Boolean(formik.errors.department)}
                    helperText={formik.touched.department && formik.errors.department}
                    options={allDepartments}
                />
              </Grid>






            </Grid>
            <Grid container justifyContent="center" style={{ marginTop: 20 }}>
              <Button children={<SendIcon />} value="Send Request" type="submit" />
              <Button children={<RestartAltIcon />} value="Cancel" type="reset" />
            </Grid>
          </Grid>
        </form>
      </>
  );
};
export default StudentCreateForm;

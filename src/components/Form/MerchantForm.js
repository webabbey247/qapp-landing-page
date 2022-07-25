import React, { useState, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Calendar } from "react-feather";
import { DatePicker } from 'antd';
import Select from 'react-dropdown-select';
import 'antd/dist/antd.css';
import { FormWrapper, Form, Input, IconHolder } from "./FormStyles";
import { Content2Column2, ContentFullColumn, ContentRow, CustomDiv, GeneralMdText, CustomButton } from "styles/GlobalCss";


const MerchantForm = () => {
  const [areaCode, setAreaCode] = useState([]);
  // const [setSelectedAreaCode] = useState("");

  const MerchantOption = [
    { value: 'Dispatcher', label: 'Dispatcher' },
    { value: 'Ecommerce', label: 'Ecommerce' },
  ];



  useEffect(() => {
    fetch("https://restcountries.com/v3/all")
      .then((response) => response.json())
      .then((data) => {
        const areaCodeData = data.map((item) => {
          return {
            code: item.cca2,
            name: item.name.common,
            flag: item.flags[1],
            dialCode: [item.idd.root, (item.idd.suffixes || [])[0]].join(""),
          };
        });

        setAreaCode(areaCodeData);
        // if (areaCodeData.length > 0) {
        //   let defaultAreaData = areaCodeData.filter((a) => a.code === "NG");
        //   if (defaultAreaData.length > 0) {
        //     setSelectedAreaCode(defaultAreaData[0]);
        //   }
        // }
      })
      .catch((err) => {
        console.error("Request failed", err);
      });
  }, []);

  const validationSchema = yup.object().shape({
    merchantName: yup.string().trim().required("Kindly provide your merchant name!"),
    mobileNumber: yup
      .number("This should be numbers or integers!")
      .positive()
      .typeError("Mobile Number should be a valid number!")
      .min(11, "Mobile Number shouldn't be lower than 11 digits!")
      .required("Kindly provide a valid mobile number!"),
    rcNumber: yup.string().trim().required("Kindly provide your RC Number"),
    country: yup
      .string()
      .trim()
      .required("Kindly provide your contact full name!"),
    merchantType: yup
      .string()
      .trim()
      .required("Kindly provide your contact email address!")
      .email("Kindly provide a valid email address!"),
    adminPhone: yup
      .number("This should be numbers or integers!")
      .positive()
      .typeError("Mobile Number should be a valid number!")
      .min(11, "Mobile Number shouldn't be lower than 11 digits!")
      .required("Kindly provide your contact mobile number!"),
    scheduleDate: yup
      .string()
      .trim()
      .required("Kindly schedule date for this demo!"),
  });

  const { register, handleSubmit, control, formState } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const { errors } = formState;

  const requestDemo = async (data) => {
    // setLoading(false);
    // setMounted(false);
  };

  return (
    <>
      <FormWrapper>
        <Form onSubmit={handleSubmit(requestDemo)}>
          <ContentRow>
            <ContentFullColumn>
              <GeneralMdText margin="0.6rem 0" fontSize="24px" lineHeight="39px" textAlign="left" color="var(--orange)" textTransform="capitalize" fontWeight="600">
                Merchant
              </GeneralMdText>
            </ContentFullColumn>
            <Content2Column2>
              {/* {errors.merchantName && (
                <InputErrors>{errors.merchantName.message}</InputErrors>
              )} */}

              <Input
                className={`${errors.merchantName ? "invalid" : ""}`}
                name='merchantName'
                type='text'
                placeholder='Merchant Name'
                {...register("merchantName")}
              />

            </Content2Column2>

            <Content2Column2>
              {/* {errors.country && (
                <InputErrors>{errors.country.message}</InputErrors>
              )} */}
              <Controller
                control={control}
                name="country"
                className={`${errors.country ? "invalid" : ""}`}
                render={({ field }) => (
                  <Select
                    placeholder="Select Country"
                    options={areaCode.map(({ name }) =>
                      ({ label: name, value: name })
                    )}
                    {...register("country")}
                  />
                )}
              />
            </Content2Column2>



            <Content2Column2>
              <Input
                className={`${errors.rcNumber ? "invalid" : ""}`}
                name='rcNumber'
                type='text'
                placeholder='RC Number'
                {...register("rcNumber")}
              />
            </Content2Column2>

            <Content2Column2>
              {/* {errors.merchantType && (
                <InputErrors>{errors.country.message}</InputErrors>
              )} */}
              <Controller
                control={control}
                name="merchantType"
                render={({ field }) => (
                  <Select
                    className={`${errors.merchantType ? "invalid" : ""}`}
                    placeholder="Merchant Type"
                    options={MerchantOption}
                    {...register("country")}
                  />
                )}
              />
            </Content2Column2>


            <ContentFullColumn>
              <CustomDiv position="relative">
                <Controller
                  control={control}
                  name="scheduleData"
                  render={({ field }) => (
                    <>
                      <DatePicker showTime placeholder="Select Demo Date" onChange={(date) => field.onChange(date)}
                        selected={field.value} />
                      <IconHolder>
                        <Calendar color="#292D32" size='28' strokeWidth="1" />
                      </IconHolder>
                    </>
                  )}
                />
              </CustomDiv>
            </ContentFullColumn>

            <ContentFullColumn>
              <CustomDiv display="flex" flexDirection="column" margin="0.5rem 0" padding="0">

                <CustomButton border="1px solid var(--orange)" background="var(--orange)" color="var(--white)" fontSize="14px" lineHeight="17.03px" fontWeight="600" margin="1rem 0" height="48px">
                  Request a Demo
                </CustomButton>

                <CustomButton border="1px solid var(--orange)" background="var(--white)" color="var(--orange)" fontSize="14px" lineHeight="17.03px" fontWeight="600" height="48px">
                  Get Started
                </CustomButton>

              </CustomDiv>
            </ContentFullColumn>
          </ContentRow>
        </Form>
      </FormWrapper>
    </>
  );
};

export default MerchantForm;

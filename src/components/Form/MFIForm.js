import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Calendar } from "react-feather";
import { DatePicker } from 'antd';
import Select from 'react-dropdown-select';
import 'antd/dist/antd.css';
import { Content2Column2, ContentFullColumn, ContentRow, CustomDiv, GeneralMdText, CustomButton } from "styles/GlobalCss";


const FormWrapper = styled.div`
 display: flex: 
 justify-content: center;
 flex-direction: column
`;

const Form = styled.form`
  width: 100%;
  padding: 0 0 0 6rem;
  box-sizing: border-box;

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    padding: 16px 5px;
  }
`;

const Input = styled.input`
  background-color: var(--white);
  border: 1px solid var(--primary);
  height: 62px;
  padding: 0 16px;
  width: ${({ width }) => (width ? width : "100%")};
  border-radius: 8px;
  font-weight: 600;
  box-sizing: border-box;
  color: var(--primary);
  font-size: 14px;
  line-height: 17.05px;
  margin-bottom: 1rem;

  &.invalid {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3E%3Cpath stroke='%23dc3545' d='M0 0l3 3m0-3L0 3'/%3E%3Ccircle r='.5'/%3E%3Ccircle cx='3' r='.5'/%3E%3Ccircle cy='3' r='.5'/%3E%3Ccircle cx='3' cy='3' r='.5'/%3E%3C/svg%3E") !important;
    border-color: rgba(220, 53, 69, 0.5) !important;
    color: #dc3545;
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.1875rem) center;
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
  }

  &::placeholder {
    font-size: 14px;
    line-height: 17.05px;
    font-weight: 400;
    color: var(--primary);
    opacity: 0.2;
  }

  &:focus {
    color: var(--orange);
    background-color: var(--white);
    border-color: var(--orange);
    outline: 0;
    box-shadow: none !important;
  }
`;

const InputErrors = styled.div`
  width: 100%;
  font-size: 13px !important;
  color: #dc3545;
  margin: 0.5rem 0;
  padding: 0;
`;

const IconHolder = styled.div`
display: flex;
flex-direction: row;
-moz-box-pack: center;
justify-content: center;
-moz-box-align: center;
align-items: center;
margin: 0px;
padding: 0px;
position: absolute;
right: 3%;
top: 28%;
`;

// const CustomButtonCta = styled.a`
// padding: 0.6rem 2rem;
// background: var(--orange);
// border-radius: 8px;
// border: 1px solid var(--orange);
// margin: 1rem 0;
// width: 100%;
// text-transform: unset;
// color: var(--white);
// font-size: 14px;
// font-weight: 600;
// line-height: 17.03px;
// text-align: center;
// cursor: pointer;
// `;


const MFIForm = () => {
    // const [loading, setLoading] = useState(false);
    const [areaCode, setAreaCode] = useState([]);
    // const [setSelectedAreaCode] = useState("");
    // const [startDate, setStartDate] = useState(new Date());


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
                //     let defaultAreaData = areaCodeData.filter((a) => a.code === "NG");
                //     if (defaultAreaData.length > 0) {
                //         setSelectedAreaCode(defaultAreaData[0]);
                //     }
                // }
            })
            .catch((err) => {
                console.error("Request failed", err);
            });
    }, []);

    const validationSchema = yup.object().shape({
        bankName: yup.string().trim().required("Kindly provide your bank name!"),
        rcNumber: yup.string().trim().required("Kindly provide your RC Number"),
    });

    const { register, handleSubmit, control, formState } = useForm({
        resolver: yupResolver(validationSchema),
    });


    const { errors } = formState;

    const requestDemo = async (data) => {
        // setLoading(true);
        const userData = {
            name: data.bankName,
            rcNumber: data.rcNumber,
            country: data.country,
            mobileNumber: data.mobileNumber,
        };

        console.log("form info", userData);
        // setLoading(false);
    };

    return (
        <>
            <FormWrapper>
                <Form onSubmit={handleSubmit(requestDemo)}>
                    <ContentRow>
                        <ContentFullColumn>
                            <GeneralMdText fontSize="24px" margin="0 0 20px" lineHeight="49px" textAlign="left" color="var(--orange)" textTransform="capitalize" fontWeight="600">Financial Institutions</GeneralMdText>
                        </ContentFullColumn>
                        <Content2Column2>
                            {errors.bankName && (
                                <InputErrors>{errors.bankName.message}</InputErrors>
                            )}

                            <Input
                                className={`${errors.bankName ? "invalid" : ""}`}
                                name='bankName'
                                type='text'
                                placeholder='Bank Name'
                                {...register("bankName")}
                            />

                        </Content2Column2>

                        <Content2Column2>
                            <Controller
                                control={control}
                                name="country"
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
                            {errors.country && (
                                <InputErrors>{errors.country.message}</InputErrors>
                            )}
                        </Content2Column2>



                        <Content2Column2>
                            {errors.rcNumber && (
                                <InputErrors>{errors.rcNumber.message}</InputErrors>
                            )}
                            <Input
                                className={`${errors.rcNumber ? "invalid" : ""}`}
                                name='rcNumber'
                                type='text'
                                placeholder='RC Number'
                                {...register("rcNumber")}
                            />
                        </Content2Column2>

                        <Content2Column2>
                            <CustomDiv position="relative">
                                <Controller
                                    control={control}
                                    name="scheduleDate"
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
                        </Content2Column2>

                        <ContentFullColumn>
                            <CustomDiv display="flex" flexDirection="column" margin="-1rem 0" padding="0">

                                <CustomButton border="1px solid var(--orange)" background="var(--orange)" color="var(--white)" fontSize="14px" lineHeight="17.03px" fontWeight="600" margin="1rem 0" height="48px">
                                  Request a Demo
                                </CustomButton>

                                <CustomButton border="1px solid var(--orange)" background="var(--white)" color="var(--orange)" fontSize="14px" lineHeight="17.03px" fontWeight="600" height="48px">
                                    Get Started
                                </CustomButton>

                                {/* <Link to="/">
                                <CustomButtonCta>
                                        Get Started
                                    </CustomButtonCta>
                                    </Link> */}

                            </CustomDiv>
                        </ContentFullColumn>
                    </ContentRow>
                </Form>
            </FormWrapper>
        </>
    );
};

export default MFIForm;

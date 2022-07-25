import React, { useState, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Calendar } from "react-feather";
import { DatePicker } from 'antd';
import Select from 'react-dropdown-select';
import 'antd/dist/antd.css';
import { FormWrapper, Form, Input, InputErrors, IconHolder } from "./FormStyles";
import { Content2Column2, ContentFullColumn, ContentRow, CustomDiv, GeneralMdText, CustomButton } from "styles/GlobalCss";



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

export default MFIForm;

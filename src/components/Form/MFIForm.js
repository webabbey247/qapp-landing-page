import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { CgChevronDownR } from "react-icons/cg";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Calendar, Clock } from "react-feather";
import { DatePicker, TimePicker } from 'antd';
import 'antd/dist/antd.css';
import moment from "moment";
import { Content2Column2, ContentFullColumn, ContentRow, CustomDiv, GeneralMdText, GeneralSmText, CustomLink, CustomButton } from "styles/GlobalCss";

import { toast } from 'react-toastify';

import {
    ContentCta,
} from "../Content/ContentStyles";

const FormWrapper = styled.div`
 displauy: flex: 
 justify-content: center;
 flex-direction: column
`;

const Form = styled.form`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    padding: 16px 5px;
  }
`;

const DialingCodeInputWrapper = styled.div`
display:flex;
flex-direction: row,
justify-content: flex-start;
margin: 0.2rem 0 0;
`;

const DialingCodeInput = styled.div`
  width: 40%;
  background-color: var(--white);
  border: 1.5px solid var(--gray-color);
  height: 3.5rem;
  margin-bottom: 1rem;
  margin-right: 5px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.7rem 0.5rem;
  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    width: 30%;
  }
  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    width: 40%;
  }
`;

const CountryFlag = styled.img`
  width: 35px;
  height: 20px;
  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    width: 30px;
    height: 19px;
  }
`;

const CountryCode = styled.span`
  display: block;
  align-items: center;
  margin: auto 0;
`;

const DialingCodeModalWrapper = styled.ul`
  position: absolute;
  z-index: 2;
  list-style: none;
  text-align: left;
  padding: 0;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  background-color: var(--white);
  border: 1px solid var(--gray-color);
  white-space: nowrap;
  max-height: 150px;
  overflow-y: scroll;
  overflow-x: hidden;
  transition: all 0.2s cubic-bezier(0.5, 0, 0, 1.25), opacity 0.15s ease-out;
  width: 220px;


  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    max-width: 100px;
    overflow-x: hidden;
  }
  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    max-width: 90px;
    overflow-x: hidden;
  }
`;

const DialingCodeModalList = styled.li`
  line-height: initial;
  min-height: auto;
  text-align: center;
  padding: 5px 10px;
  background-color: transparent;
  margin-top: 0;
  list-style: none;
  border-bottom: 0.5px solid rgba(129, 129, 129, 0.2);
  outline: none;
  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    padding: 3px 8px;
  }
`;

const DialingCodeModalListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.5rem 0;
  justify-content: space-between;
`;

const DialingCodeModalListIcon = styled.img`
  width: 35px;
  height: 20px;
  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    width: 30px;
    height: 19px;
  }
`;
const DialingCodeModalListName = styled.span`
  font-weight: 700;
  font-size: 13px;
  line-height: 25px;
  color: var(--input-color);
  margin-left: 0.5rem;
`;

const Input = styled.input`
    background-color: var(--white);
    border: 1.5px solid var(--gray-color);
    // background-color: var(--gray-color);
    // border: 1px solid var(--gray-color);
  height: 3.5rem;
  line-height: 17px;
  padding: 0 16px;
  width: ${({ width }) => (width ? width : "100%")};
  border-radius: 5px;
  font-weight: 400;
  box-sizing: border-box;
  color: #818181;
  font-size: 15px;
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
    font-size: 15px;
    line-height: 25px;
    font-weight: 400;
    color: rgba(0,0,0, 0.25);
    opacity: 0.6;
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
top: 25%;
`;

const MFIForm = () => {
    const [loading, setLoading] = useState(false);
    const [areaCode, setAreaCode] = useState([]);
    const [selectedAreaCode, setSelectedAreaCode] = useState("");
    const [modalVisbile, setModalVisible] = useState(false);
    const [statusResponse, setStatusResponse] = useState(false);
    const [fullName, setFullName] = useState("");
    const [startDate, setStartDate] = useState(new Date());


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
                if (areaCodeData.length > 0) {
                    let defaultAreaData = areaCodeData.filter((a) => a.code === "NG");
                    if (defaultAreaData.length > 0) {
                        setSelectedAreaCode(defaultAreaData[0]);
                    }
                }
            })
            .catch((err) => {
                console.error("Request failed", err);
            });
    }, []);

    const validationSchema = yup.object().shape({
        bankName: yup.string().trim().required("Kindly provide your bank name!"),
        rcNumber: yup.string().trim().required("Kindly provide your RC Number"),
    });

    const { register, handleSubmit, control, reset, formState } = useForm({
        resolver: yupResolver(validationSchema),
    });


    const { errors } = formState;

    const requestDemo = async (data) => {
        setLoading(true);
        const userData = {
            name: data.bankName,
            rcNumber: data.rcNumber,
            country: data.country,
            mobileNumber: data.mobileNumber,
        };

        console.log("form info", userData)

        // if (userData.demo_date === "") {
        //     toast.success("Kindly schedule date and time for this demo ");
        // }

        // axios.post("/auth/demo", userData).then((res) => {
        //     if (res.data.success === true) {
        //         // toast.success(res.data.result ? res.data.result : "")
        //         setStatusResponse(true);
        //         setFullName(userData.bankName)
        //         reset();
        //     } else {
        //         console.log(res.status);
        //     }
        // });
        setLoading(false);
    };

    return (
        <>
            {statusResponse ? (
                <FormWrapper>
                    <GeneralMdText margin="1rem 0" fontSize="36px" lineHeight="40px" textAlign="center" color="var(--header-color)" textTransform="capitalize" fontWeight="500">Congratulations {fullName}</GeneralMdText>
                    <GeneralSmText fontSize="19px" lineHeight="26px" textAlign="center" color="var(--header-color)" textTransform="unset" fontWeight="500" margin="0 0 1rem 0" padding="1rem 0"> Your request for a demo has been scheduled for {moment(startDate).format('MMMM Do YYYY, h:mm:ss, a')}.
                        Thank You!</GeneralSmText>
                    <ContentCta to='/'>Return Home</ContentCta>
                </FormWrapper>
            ) : (
                <>
                    <GeneralMdText margin="1rem 0" fontSize="34px" lineHeight="40px" textAlign="center" color="var(--header-color)" textTransform="capitalize" fontWeight="400">Financial Institutions</GeneralMdText>
                    <FormWrapper>
                        <Form onSubmit={handleSubmit(requestDemo)}>
                            <ContentRow>
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
                                    {errors.country && (
                                        <InputErrors>{errors.country.message}</InputErrors>
                                    )}
                                    <Input
                                        className={`${errors.country ? "invalid" : ""}`}
                                        name='country'
                                        type='text'
                                        placeholder={selectedAreaCode?.name}
                                        value={selectedAreaCode?.name}
                                        {...register("country")}
                                        readOnly
                                    />
                                </Content2Column2>

                                <Content2Column2>
                                    <DialingCodeInputWrapper>
                                        <DialingCodeInput onClick={() => setModalVisible(!modalVisbile)}>
                                            <GeneralSmText fontSize="16px" lineHeight="22px" color="#818181" margin="0.15rem 0" fontWeight="400">{selectedAreaCode?.dialCode}</GeneralSmText>
                                            <CountryCode>
                                                <CgChevronDownR color='rgb(215, 211, 211)' size='20px' strokeWidth="0" />
                                            </CountryCode>
                                        </DialingCodeInput>
                                        <Input
                                            name='mobileNumber'
                                            width='100%'
                                            type='text'
                                            placeholder="Mobile"
                                        />
                                    </DialingCodeInputWrapper>
                                    {modalVisbile ? (
                                        <DialingCodeModalWrapper>
                                            {areaCode.map((item, i) => (
                                                <DialingCodeModalList id={item.id}>
                                                    <DialingCodeModalListWrapper
                                                        key={item.i}
                                                        onClick={() => {
                                                            setSelectedAreaCode(item);
                                                            setModalVisible(false);
                                                        }}>
                                                        {/* <DialingCodeModalListIcon
                                                            src={item.flag}
                                                            alt={item.dialCode}
                                                        ></DialingCodeModalListIcon> */}
                                                        <DialingCodeModalListName>
                                                            {item.name}
                                                        </DialingCodeModalListName>
                                                        <DialingCodeModalListName>
                                                            {item.dialCode}
                                                        </DialingCodeModalListName>
                                                    </DialingCodeModalListWrapper>
                                                </DialingCodeModalList>
                                            ))}
                                        </DialingCodeModalWrapper>
                                    ) : (
                                        ""
                                    )}

                                    {errors.scheduleDate && (
                                        <InputErrors>{errors.scheduleDate.message}</InputErrors>
                                    )}
                                </Content2Column2>

                                <Content2Column2>
                                    <CustomDiv position="relative">
                                        <Controller
                                            control={control}
                                            name="scheduleData"
                                            render={({ field }) => (
                                                <>
                                                    <DatePicker onChange={(date) => field.onChange(date)}
                                                        selected={field.value} />
                                                    {/* <DatePicker
                                                placeholderText="Select date"
                                                onChange={(date) => field.onChange(date)}
                                                selected={field.value}
                                                showTimeInput
                                            /> */}
                                                    <IconHolder>
                                                        <Calendar color="#b1b1b1" size='28' strokeWidth="1" />
                                                    </IconHolder>
                                                </>
                                            )}
                                        />
                                    </CustomDiv>
                                </Content2Column2>

                                <Content2Column2>
                                    <CustomDiv position="relative">
                                        <Controller
                                            control={control}
                                            name="scheduleData"
                                            render={({ field }) => (
                                                <>
                                                    <TimePicker onChange={(time) => field.onChange(time)} selected={field.value} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
                                                    <IconHolder>
                                                        <Clock color="#b1b1b1" size='28' strokeWidth="1" />
                                                    </IconHolder>
                                                </>
                                            )}
                                        />
                                    </CustomDiv>
                                </Content2Column2>

                                <ContentFullColumn>
                                    <CustomDiv display="flex" flexDirection="row" justifyContent="space-between" margin="2rem 0 0">
                                        <CustomButton border="1px solid var(--orange)" background="var(--orange)" color="var(--white)" fontSize="15px" lineHeight="22px" fontWeight="400">
                                            {loading ? "loading......" : "Request A Demo"}
                                        </CustomButton>

                                        <CustomLink color="var(--orange)" fontSize="15px" lineHeight="22px" textAlign="center" display="flex" justifyContent="center" margin="1rem 0 0" fontWeight="600">Get Started</CustomLink>

                                    </CustomDiv>
                                </ContentFullColumn>
                            </ContentRow>

                        </Form>
                    </FormWrapper>
                </>
            )}
        </>
    );
};

export default MFIForm;

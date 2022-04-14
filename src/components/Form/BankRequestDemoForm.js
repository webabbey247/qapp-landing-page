import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {CgChevronDownR} from "react-icons/cg";
import {Button} from "../../globalStyles";

import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  ContentHeading,
  ContentDescription,
  ContentCta,
} from "../Content/ContentStyles";

const FormWrapper = styled.div`
  padding: 2rem 0;
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
`;

const DialingCodeInput = styled.div`
  width: 17%;
  background-color: var(--gray-color);
  border: 1px solid var(--gray-color);
  height: 3rem;
  margin-bottom: 1rem;
  margin-right: 5px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.8rem;

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
  margin: 0 0 0 -1px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  background-color: var(--white);
  border: 1px solid var(--gray-color);
  white-space: nowrap;
  max-height: 200px;
  overflow-y: scroll;
  transition: all 0.2s cubic-bezier(0.5, 0, 0, 1.25), opacity 0.15s ease-out;

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
  border-bottom: 0.5px solid rgba(129, 129, 129, 0.5);
  outline: none;

  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    padding: 3px 8px;
  }
`;

const DialingCodeModalListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.5rem 0;
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
  background-color: var(--gray-color);
  border: 1px solid var(--gray-color);
  height: 3rem;
  line-height: 17px;
  padding: 0 16px;
  width: ${({width}) => (width ? width : "100%")};
  border-radius: 5px;
  font-weight: 400;
  box-sizing: border-box;
  color: var(--input-color);
  font-size: 13px;
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
    font-size: 13px;
    line-height: 25px;
    font-weight: 400;
    color: var(--input-color);
    opacity: 0.6;
  }

  &:focus {
    color: var(--input-color);
    background-color: var(--white);
    border-color: var(--gray-color);
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

const BankRequestDemoForm = () => {
  // const [loading, setLoading] = useState(false);
  // const [mounted, setMounted] = useState(true);
  const [areaCode, setAreaCode] = useState([]);
  const [selectedAreaCode, setSelectedAreaCode] = useState("");
  const [modalVisbile, setModalVisible] = useState(false);
  const [statusResponse, setStatusResponse] = useState(false);
  const [fullName, setFullName] = useState("");

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
    mobileNumber: yup
      .number("This should be numbers or integers!")
      .positive()
      .typeError("Mobile Number should be a valid number!")
      .min(11, "Mobile Number shouldn't be lower than 11 digits!")
      .required("Kindly provide a valid mobile number!"),
    rcNumber: yup.string().trim().required("Kindly provide your RC Number"),
    adminFullName: yup
      .string()
      .trim()
      .required("Kindly provide your contact full name!"),
    adminEmail: yup
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

  const {register, handleSubmit, formState} = useForm({
    resolver: yupResolver(validationSchema),
  });

  const {errors} = formState;

  const requestDemo = async (data) => {
    setFullName(data.adminFullName);
    setStatusResponse(true);
    // setLoading(false);
    // setMounted(false);
  };

  return (
    <>
      {statusResponse ? (
        <FormWrapper>
          <ContentHeading>Congratulations {fullName}!</ContentHeading>
          <ContentDescription>
            Your request for a demo has been scheduled for May 1, 2022 at 4pm.
            Thank You!
          </ContentDescription>
          <ContentCta to='/'>Return Home</ContentCta>
        </FormWrapper>
      ) : (
        <FormWrapper>
          <Form onSubmit={handleSubmit(requestDemo)}>
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
            {errors.mobileNumber && (
              <InputErrors>{errors.mobileNumber.message}</InputErrors>
            )}
            <DialingCodeInputWrapper>
              <DialingCodeInput onClick={() => setModalVisible(!modalVisbile)}>
                <CountryFlag
                  src={selectedAreaCode?.flag}
                  alt={selectedAreaCode?.dialCode}
                ></CountryFlag>
                <CountryCode>
                  <CgChevronDownR color='var(--input-color)' size='20px' />
                </CountryCode>
              </DialingCodeInput>
              <Input
                className={`${errors.mobileNumber ? "invalid" : ""}`}
                width='83%'
                name='mobileNumber'
                type='text'
                placeholder='Mobile Number'
                {...register("mobileNumber")}
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
                      }}
                    >
                      <DialingCodeModalListIcon
                        src={item.flag}
                        alt={item.dialCode}
                      ></DialingCodeModalListIcon>
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
            {errors.adminFullName && (
              <InputErrors>{errors.adminFullName.message}</InputErrors>
            )}
            <Input
              className={`${errors.adminFullName ? "invalid" : ""}`}
              name='adminFullName'
              type='text'
              placeholder='Contact Full Name'
              {...register("adminFullName")}
            />
            {errors.adminPhone && (
              <InputErrors>{errors.adminPhone.message}</InputErrors>
            )}
            <Input
              className={`${errors.adminPhone ? "invalid" : ""}`}
              name='adminPhone'
              type='text'
              placeholder='Contact Phone Number ( Must be from selected country above)'
              {...register("adminPhone")}
            />
            {errors.adminEmail && (
              <InputErrors>{errors.adminEmail.message}</InputErrors>
            )}
            <Input
              className={`${errors.adminEmail ? "invalid" : ""}`}
              name='adminEmail'
              type='text'
              placeholder='Contact Email Address (E.g admin@bankname.com)'
              {...register("adminEmail")}
            />
            {errors.scheduleDate && (
              <InputErrors>{errors.scheduleDate.message}</InputErrors>
            )}
            <Input
              className={`${errors.scheduleDate ? "invalid" : ""}`}
              name='scheduleDate'
              type='text'
              placeholder='Demo Date (DD/MM/YYYY :HR:SS)'
              {...register("scheduleDate")}
            />
            <Button width='200px' margin='10px auto'>
              Request A Demo
            </Button>
          </Form>
        </FormWrapper>
      )}
    </>
  );
};

export default BankRequestDemoForm;

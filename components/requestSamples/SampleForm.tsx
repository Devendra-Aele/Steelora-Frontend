"use client";

import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Input } from "../reusables/Input";
import { TextArea } from "../reusables/TextArea";
import SelectInput, { OPTION } from "../reusables/Select";
import { preventNumberInputs } from "@/utils/preventNumberInput";
import { preventCharsInput } from "@/utils/preventCharsInput";
import { capitalizeObjValues } from "@/utils/capitalizeObjValues";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { relevantSectors } from "@/constants/requestSamples";

export type SAMPLE_FORM = {
  name: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  projectName: string;
  relevantSector: OPTION | null;
  // address: string;
  details: string;
  address1: string;
  address2: string;
  state: string;
  city: string;
  pincode: string;
};

const SampleForm = ({ sampleData }: { sampleData?: SAMPLE_FORM }) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SAMPLE_FORM>({
    mode: "all",
    defaultValues: sampleData || undefined,
  });

  const onsubmit = async (data: SAMPLE_FORM) => {
    const finalObj = capitalizeObjValues(
      { ...data, relevantSector: data.relevantSector?.value },
      ["email", "phoneNumber", "address1", "address2", "pincode", "details"]
    );

    try {
      const res = await axios.post(process.env.NEXT_PUBLIC_FORM_URL!, {
        data: finalObj,
      });

      const response = await axios.post(
        `https://cms.steelora.com/api/requested-for-samples`,
        { data: finalObj }
      );

      if (res.status === 200 && response.status === 200) {
        toast.success(`Message sent! We will get back to you soon!`);
        reset();
      }
    } catch (error) {
      toast.error("Something Went Wrong");
    }

    // if (res.status === 200) {
    //   toast.success(`Message sent! We will get back to you soon!`);
    //   reset();
    // } else {
    //   toast.error("Something Went Wrong");
    // }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-6">
          <Input
            {...register("name", {
              required: "Name is required",
            })}
            id="name"
            label="Name"
            required
            error={errors.name?.message}
            capitalize
            onKeyDown={preventNumberInputs}
            placeholder="Enter your name"
          />

          <Input
            {...register("companyName", {
              required: "Company Name is required",
            })}
            id="companyName"
            label="Company Name"
            required
            error={errors.companyName?.message}
            capitalize
            placeholder="Enter company name"
          />

          <Input
            {...register("email", {
              required: "Email is required",
            })}
            type="email"
            id="email"
            label="Email"
            required
            error={errors.email?.message}
            placeholder="Enter your email address"
          />

          <Input
            {...register("phoneNumber", {
              required: "Phone Number is required",
            })}
            id="phoneNumber"
            label="Phone Number"
            required
            error={errors.phoneNumber?.message}
            capitalize
            onKeyDown={preventCharsInput}
            maxLength={10}
            placeholder="Enter your phone number"
          />

          <Input
            {...register(
              "projectName"
              // {
              //   required: "Project Name is required",
              // }
            )}
            id="projectName"
            label="Project Name"
            // required
            error={errors.projectName?.message}
            capitalize
            placeholder="Enter project name"
          />

          <Controller
            rules={{
              shouldUnregister: true,
              required: "Select a relevant sector",
            }}
            control={control}
            name={`relevantSector`}
            render={({ field: { ...other } }) => (
              <SelectInput
                id="relevantSector"
                label="Select Relevant Sector"
                required
                options={relevantSectors}
                error={errors?.relevantSector?.message}
                placeholder="Select a sector"
                {...other}
              />
            )}
          />

          <Input
            {...register("address1", {
              required: "Address line 1 is required",
            })}
            id="address1"
            label="Address Line 1"
            required
            error={errors.address1?.message}
            // capitalize
            placeholder="Address Line 1"
          />

          <Input
            {...register("address2", {
              required: "Address line 2 is required",
            })}
            id="address2"
            label="Address Line 2"
            required
            error={errors.address2?.message}
            // capitalize
            placeholder="Address Line 2"
          />

          <Input
            {...register("state", {
              required: "State is required",
            })}
            id="state"
            label="State"
            required
            error={errors.state?.message}
            // capitalize
            placeholder="State"
          />

          <Input
            {...register("city", {
              required: "City is required",
            })}
            id="city"
            label="City"
            required
            error={errors.city?.message}
            // capitalize
            placeholder="City"
          />

          <Input
            {...register("pincode", {
              required: "Pin code is required",
            })}
            id="pincode"
            label="Pin code"
            required
            error={errors.pincode?.message}
            // capitalize
            placeholder="Pin code"
          />

          {/* <TextArea
            {...register("address", {
              required: "Address is required",
            })}
            label="Your Address"
            rows={8}
            error={errors.address?.message}
          /> */}

          <TextArea
            {...register("details", {
              required: "Details are required",
            })}
            label="Details About Sample And Project*"
            rows={8}
            error={errors.details?.message}
          />
        </div>

        <div className="flex justify-center items-center">
          <button disabled={isSubmitting} className="primary-button">
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>

      <Toaster
        toastOptions={{
          duration: 3000,
        }}
      />
    </div>
  );
};

export default SampleForm;

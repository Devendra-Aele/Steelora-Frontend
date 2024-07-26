"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../reusables/Input";
import { TextArea } from "../reusables/TextArea";
import { preventNumberInputs } from "@/utils/preventNumberInput";
import { preventCharsInput } from "@/utils/preventCharsInput";
import { capitalizeObjValues } from "@/utils/capitalizeObjValues";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

type ContactForm = {
  fullname: string;
  email: string;
  phoneNumber: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    mode: "all",
    defaultValues: {
      email: "",
      fullname: "",
      message: "",
      phoneNumber: "",
    },
  });

  const onSubmit = async (data: ContactForm) => {
    const finalObj = capitalizeObjValues(data, [
      "email",
      "phoneNumber",
      "message",
    ]);

    const res = await axios.post(process.env.NEXT_PUBLIC_FORM_URL!, {
      data: finalObj,
    });

    const response = await axios.post(
      `https://cms.steelora.com/api/business-enquiries`,
      {
        data: finalObj,
      }
    );

    if (res.status === 200 && response.status === 200) {
      toast.success(`Message sent! We will get back to you soon!`);
      reset();
    } else {
      toast.error("Something Went Wrong");
    }
  };

  return (
    <div className="mt-6">
      <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col w-full gap-6 mb-8">
          <Input
            type="text"
            id="fullname"
            {...register("fullname", {
              required: "Full name is required",
            
            })}
            label="Name"
            placeholder="Enter Full Name"
            error={errors.fullname?.message}
            capitalize
            onKeyDown={preventNumberInputs}
          />

          <Input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
            })}
            label="Email Address"
            placeholder="Enter Email Address"
            error={errors.email?.message}
          />

          <Input
            type="tel"
            {...register("phoneNumber", {
              required: "Phone Number is required",
            })}
            label="Phone Number"
            placeholder="Enter Phone Number"
            error={errors.phoneNumber?.message}
            maxLength={10}
            onKeyDown={preventCharsInput}
          />

          <TextArea
            id="message"
            {...register("message")}
            label="Message"
            rows={8}
            error={errors.message?.message}
            placeholder="Enter message"
          />
        </div>

        <button
          disabled={isSubmitting}
          type="submit"
          className="primary-button hidden lg:block"
        >
          {isSubmitting ? "Submitting..." : "Send"}
        </button>
      </form>
      <Toaster
        toastOptions={{
          duration: 3000,
        }}
      />
    </div>
  );
};

export default ContactForm;

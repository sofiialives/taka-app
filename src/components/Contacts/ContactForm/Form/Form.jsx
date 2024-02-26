import { useRef } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import {
  Form,
  FormButton,
  FormInput,
  FormLabel,
  FormTextArea,
  LabelDivs,
} from "./Form.styled";
import { useNavigate } from "react-router-dom";

const FormContact = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_5iiiovo", "template_u0cnr98", form.current, {
        publicKey: "XdZgWkRPqJU3nI6iF",
      })
      .then(
        () => {
          navigate("/email");
        },
        () => {
          toast.error(`${t("contacts.notifyError")}`);
        }
      );
    form.current.reset();
  };
  return (
    <Form ref={form} onSubmit={handleSubmit}>
      <LabelDivs>
        <label>
          <FormLabel>{t("contacts.name")}</FormLabel>
          <FormInput type="text" name="user_name" />
        </label>
        <label>
          <FormLabel>Email</FormLabel>
          <FormInput
            type="email"
            name="user_email"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          />
        </label>
      </LabelDivs>
      <label>
        <FormLabel>{t("contacts.message")}</FormLabel>
        <FormTextArea name="message" />
      </label>
      <FormButton type="submit">{t("contacts.send")}</FormButton>
    </Form>
  );
};

export default FormContact;

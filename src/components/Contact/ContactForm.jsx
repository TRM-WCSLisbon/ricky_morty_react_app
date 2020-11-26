/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Header, Form,
} from './styleContact';

const SignupSchema = yup.object().shape({
  First_Name: yup.string().required(),
  Last_Name: yup.string().required(),
  age: yup
    .number()
    .required('Please supply your age')
    .min(16, 'You must be at least 16 years')
    .max(420, 'You must be at most 420 years'),
  email: yup.string().required(),
  gender: yup.string().required(),
});

function ContactForm() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(SignupSchema),
  });
  const onSubmit = () => {
    alert('We will contact you soon!');
  };

  return (
    <>
      <Header>
        <header>
          <h1>
            Contact Us
          </h1>
        </header>
      </Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: 5 }}>
          <label>First Name</label>
          <input type="text" name="First_Name" ref={register} />
          {errors.First_Name && <p>{errors.First_Name.message}</p>}
        </div>
        <div style={{ marginBottom: 5 }}>
          <label>Last Name</label>
          <input type="text" name="Last_Name" ref={register} />
          {errors.Last_Name && <p>{errors.Last_Name.message}</p>}
        </div>
        <div style={{ marginBottom: 5 }}>
          <label>Age</label>
          <input name="age" type="number" ref={register} />
          {errors.age && (
            <p>You Must be older then 16 to see this TV series xD and younger then 420 years old!!</p>
          )}
        </div>
        <div style={{ marginBottom: 0 }}>
          <label>Gender Selection</label>
          <select name="gender" ref={register} style={{ marginLeft: 5 }}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>E-mail</label>
          <input type="email" name="email" ref={register} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        {/* <label>Subject</label> */}
        {/* <Controller
        name="Subject"
        as={Select}
        options={[
          { value: "chocolate", label: "Chocolate" },
          { value: "strawberry", label: "Strawberry" },
          { value: "vanilla", label: "Vanilla" }
        ]}
        ref={register}
        defaultValue=""
      /> */}
        <input type="submit" style={{ marginTop: 20 }} />
      </Form>
    </>
  );
}

export default ContactForm;

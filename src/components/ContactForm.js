import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [data, setData] = useState();
  const { register, errors, handleSubmit, reset } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    setData(data);
  };

  return (
    <div className='App'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='firstName'>First Name*</label>
          <input
            name='firstName'
            placeholder='bill'
            data-testid='fname'
            ref={register({ required: true, maxLength: 3 })}
          />
          {errors.firstName && (
            <p>Looks like there was an error: {errors.firstName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor='lastName'>Last Name*</label>
          <input
            name='lastName'
            placeholder='luo'
            data-testid='lname'
            ref={register({ required: true })}
          />
          {errors.lastName && (
            <p>Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>

        <div>
          <label
            htmlFor='email'
            placeholder='bluebill1049@hotmail.com'
            data-testid='email'
          >
            data-testid='submit' Email*
          </label>
          <input name='email' ref={register({ required: true })} />
          {errors.email && (
            <p>Looks like there was an error: {errors.email.type}</p>
          )}
        </div>
        <div>
          <label htmlFor='message'>Message</label>
          <textarea
            name='message'
            data-testid='message'
            ref={register({ required: false })}
          />
        </div>
        {data && (
          <pre style={{ textAlign: "left", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        <input data-testid='submit' type='submit' />
      </form>
    </div>
  );
};

export default ContactForm;

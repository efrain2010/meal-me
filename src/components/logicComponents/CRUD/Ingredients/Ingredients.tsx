import React from "react";
import { Field, Form, Formik, FormikValues } from "formik";

/**
 * TODO
 * Think how to handle reusable components for the CRUD logic
 */

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const Ingredients = () => {
  const handleOnSubmit = (_values: FormValues, _setSubmitting: FormikValues) => {
    console.log("test>>");
  };

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={handleOnSubmit}
      >
        <Form>
          <label>something</label>
          <Field />
        </Form>
      </Formik>
    </>
  );
};

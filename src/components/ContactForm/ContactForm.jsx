import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Minimum 3 symbols!')
    .max(50, 'Maximum 50 symbols!')
    .required('This field is required!'),
  number: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols!')
    .required('This field is required!'),
});

export default function ContactForm({ onAdd }) {
  const fieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log('SUBMIT', values);
    onAdd(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor={`${fieldId}-name`}>Name</label>
          <Field
            type="text"
            name="name"
            id={`${fieldId}-name`}
            placeholder="Name"
          />
          <ErrorMessage name="name" component="span" />
        </div>

        <div>
          <label htmlFor={`${fieldId}-number`}>Number</label>
          <Field
            type="tel"
            name="number"
            id={`${fieldId}-number`}
            placeholder="Phone number"
          />
          <ErrorMessage name="number" component="span" />
        </div>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
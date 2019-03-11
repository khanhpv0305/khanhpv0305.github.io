import React, { memo } from 'react'
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik'

import Form from './styled'

import validationSchema from './validationSchema'

import delay from 'utils/delay-promise'

export default memo(props => {
  const {
    data,
    onSubmit
  } = props

  return <Formik
    validationSchema={validationSchema}
    initialValues={data}
    isInitialValid={validationSchema.isValidSync(data)}
    onSubmit={(values, actions) => {
      onSubmit(data.id, values)
        .then(() => {
          actions.setStatus({ message: "Update successfully" })

          actions.setSubmitting(false)
        })
        .then(() => delay(2000))
        .then(() => actions.setStatus({ message: undefined }))
    }}
  >
    {({ errors, isValid, isSubmitting, status, ...restProps }) => {
      return <Form as={FormikForm}>
      {status && status.message && <Form.SuccessMessage>{status.message}</Form.SuccessMessage>}

      <Field
        name="title"
        render={
          ({ field }) => <Form.Group>
            <Form.Label htmlFor="title-id">
              Title

              <Form.RequiredMark>*</Form.RequiredMark>
            </Form.Label>

            <Form.TextInput
              id="title-id"
              invalid={!!errors.title}
              {...field}
            />

            <ErrorMessage name="title" component={Form.InvalidMsg} />
          </Form.Group>
        }
      />

      <Field
        name="descr"
        placeholder="Description *"
        invalid={!!errors.descr}
        render={
          ({ field }) => <Form.Group>
            <Form.Label htmlFor="descr-id">
              Description

              <Form.RequiredMark>*</Form.RequiredMark>
            </Form.Label>

            <Form.Textarea
              id="descr-id"
              invalid={!!errors.descr}
              {...field}
            />

            <ErrorMessage name="descr" component={Form.InvalidMsg} />
          </Form.Group>
        }
      />

      <Field
        name="photographer"
        placeholder="Photographer"
        invalid={!!errors.photographer}
        render={
          ({ field }) => <Form.Group>
            <Form.Label htmlFor="photographer-id">Description</Form.Label>

            <Form.TextInput
              id="photographer-id"
              {...field}
            />
          </Form.Group>
        }
      />

      <Form.SubmitBtn disabled={!isValid || isSubmitting}>SAVE</Form.SubmitBtn>
    </Form>
    }}
  </Formik>
})
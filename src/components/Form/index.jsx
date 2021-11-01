import React from 'react'
import * as Yup from 'yup'
import {Formik} from 'formik'
import {
  Label,
  Submit,
  FieldContainer,
  FormContainer,
  TicketSelector,
  Row,
  FlexContainer
} from './styles'
import {P} from '../../styles'

const FormComponent = ({handleSuccess, cartTickets, setCartTickets}) => {
  const schema = Yup.object().shape({
    tickets: Yup.number()
  })

  const handleChange = (event) => {
    setCartTickets(event.target.value)
  }

  return (
    <Formik
      initialValues={{
        tickets: 1
      }}
      onSubmit={handleSuccess}
      validationSchema={schema}
    >
      {() => (
        <FormContainer>
          <Label>Select quantity:</Label>
          <TicketSelector>
            <FieldContainer
              as="select"
              name="tickets"
              value={cartTickets}
              onChange={handleChange}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <option value={num} key={num}>
                  {num} Ticket{num > 1 && 's'}
                </option>
              ))}
            </FieldContainer>

            <FlexContainer>
              <Row>
                <P>Subtotal:</P>
                <P>${12 * cartTickets}.00</P>
              </Row>
              <Row>
                <P>Fees:</P>
                <P>$5.00</P>
              </Row>
              <Row>
                <P>Total:</P>
                <P>${12 * cartTickets + 5}.00</P>
              </Row>
            </FlexContainer>

            <Submit type="submit">Add to cart</Submit>
          </TicketSelector>
        </FormContainer>
      )}
    </Formik>
  )
}

export default FormComponent

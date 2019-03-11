import styled from 'styled-components'
import is from 'styled-is'

const Form = styled.form``

Form.Heading = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
`

Form.Group = styled.div`
  margin-bottom: 0.75rem;
`

Form.Label = styled.label`
  font-size: 0.875rem;
`

Form.RequiredMark = styled.span`
  color: red;
  margin-left: 5px;
`
Form.SuccessMessage = styled.div`
  font-size: 1.15rem;
  margin-bottom: 1em;
  background: #d4edda;
  border-left: 4px solid #155724;
  color: #155724;
  padding: 15px;
`

Form.InvalidMsg = styled.div`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.5em;
`

Form.TextInput = styled.input.attrs({ type: 'text' })`
  display: block;
  width: 100%;
  border: 1px solid #cecccc;
  padding-left: 12px;
  padding-right: 12px;
  height: 55px;

  &:focus {
    border-color: #b0acac;
    outline: none;
  }

  ${is('invalid')`
    border-color: red;
  `}
`

Form.Textarea = styled.textarea`
  display: block;
  width: 100%;
  border: 1px solid #cecccc;
  padding: 12px;
  min-height: calc(15em + 26px);

  &:focus {
    border-color: #b0acac;
    outline: none;
  }

  ${is('invalid')`
    border-color: red;
  `}
`

Form.SubmitBtn = styled.button.attrs({ type: 'submit' })`
  height: 55px;
  padding-left: 24px;
  padding-right: 24px;
  color: white;
  border: none;
  background: #784CC0;

  &:disabled {
    background: #a38fc4;
  }
`

export default Form
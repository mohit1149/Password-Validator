// Write your code here
import {useState} from 'react'
import {
  MainBgCard,
  MainBgContainer,
  MainHeading,
  MainInput,
  MainParagraph,
  MainParagraphError,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const showErrorMessage = password.length < 8

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <MainBgContainer>
      <MainBgCard>
        <MainHeading>Password validator</MainHeading>
        <MainParagraph>
          Check how strong and secure is your Password
        </MainParagraph>
        <MainInput
          type="password"
          onChange={onChangePassword}
          value={password}
        />
        {showErrorMessage && (
          <MainParagraphError>
            Your password must be at least 8 characters
          </MainParagraphError>
        )}
      </MainBgCard>
    </MainBgContainer>
  )
}

export default PasswordValidator

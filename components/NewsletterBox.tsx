import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { media } from 'utils/media';
import { Checkmark } from './Checkmark';
import Input from './Input';

interface InputProps {
  invalid: boolean;
}
interface FormValue {
  email: string;
}
export const NewsletterBox = () => {
  const { register, handleSubmit, formState } = useForm<FormValue>();
  const { isSubmitted, errors, isSubmitSuccessful } = formState;
  const onSubmit = handleSubmit((data) => console.log(data));
  const isSent = isSubmitted && isSubmitSuccessful;
  return (
    <NewsletterWrapper>
      {isSent ? (
        <SuccessBox>
          <Checkmark />
          <LargeText>Congratulations!</LargeText>
          <LargeText>Your subscription to our newsletter has been confirmed.</LargeText>
        </SuccessBox>
      ) : (
        <>
          <Text>Sign up for our newsletter</Text>
          <InfoText>
            We&apos;re launching soon on Ethereum, get in touch with us by signing up and keeping up to date with our developments
          </InfoText>
          <Flex>
            <FormWrapper>
              <InputWrapper>
                <StyledInput
                  invalid={Boolean(errors.email)}
                  placeholder="Email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  title="Type your email here"
                />
                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
              </InputWrapper>

              <StyledButton onClick={onSubmit}>
                Sign up <span>&rarr;</span>
              </StyledButton>
            </FormWrapper>
          </Flex>
        </>
      )}
    </NewsletterWrapper>
  );
};

const NewsletterWrapper = styled.div`
  flex: 0.8;
  border-radius: 1rem;
  text-align: center;
  background-color: #adb0be;
  margin-right: 5rem;
  padding: 4rem 2rem;
  color: black;
  ${media('<=desktop')} {
    margin: 7rem 0 0 0;
    order: 1;
    max-width: 600px;
    padding: 2rem 1rem;
  }
`;

const FormWrapper = styled.div`
  width: 94%;
  display: flex;
  margin-top: 1rem;
  ${media('<=phone')} {
    width: 100%;
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  margin-right: 1rem;
  margin-left: 2rem;
`;
const SuccessBox = styled.div`
  height: 100%;
  margin-top: 1rem;
  padding: 1rem 2rem;
  ${media('<=desktop')} {
    padding: 1rem;
    padding: 3rem;
  }
  ${media('<=tablet')} {
    padding: 3rem;
  }
`;
const ErrorMessage = styled.p`
  /* color: #ffa07a; */
  color: red;
  font-size: 1.2rem;
  margin-top: 0.5rem;
  margin-left: 0.3rem;
  text-align: left;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const InfoText = styled.p`
  font-size: 1.3rem;
  opacity: 0.8;
  margin: 0 3rem;
  margin-bottom: 3rem;
`;

const LargeText = styled.p`
  font-size: 1.8rem;

  opacity: 0;
  animation: show linear forwards 1s 1s;
  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const StyledInput = styled(Input)<InputProps>`
  padding: 1rem;
  width: 100%;
  height: 46px;
  border: 1px solid ${(props) => (props.invalid ? 'red' : 'rgb(45, 55, 72)')};
  &:focus {
    outline: none;
    box-shadow: var(--shadow-lg);
    border: 1px solid ${(props) => (props.invalid ? 'red' : 'rgb(45, 55, 72)')};
  }
  ::placeholder {
    color: #8c92ac;
  }
`;

const Text = styled.p`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const StyledButton = styled.button`
  width: 40%;
  text-decoration: none;
  text-align: center;
  background: rgb(var(--primary));
  padding: 1rem 2.2rem;
  margin-right: 2.5rem;
  height: 46px;
  font-size: 1.2rem;
  color: rgb(var(--textSecondary));
  text-transform: uppercase;
  font-family: var(--font);
  font-weight: bold;
  border-radius: 0.4rem;
  border: 2px solid rgb(var(--primary));
  transition: transform 0.3s;
  backface-visibility: hidden;
  will-change: transform;
  cursor: pointer;

  &:hover {
    transform: scale(1.025);
  }

  ${media('<=tablet')} {
    padding: 0;
  }
`;

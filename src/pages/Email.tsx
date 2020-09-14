import anime from 'animejs';
import PageTemplate from 'components/PageTemplate';
import EmailJs from 'emailjs-com';
import Analytics from 'lib/analytics';
import useInput from 'lib/hooks/useInput';
import { useSnackbar } from 'notistack';
import React, { memo, useCallback, useEffect, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import TelephoneImage from 'static/images/telephone.jpg';
import styled, { css } from 'styled-components';

import { ACTION, CATEGORY, LABEL } from 'constants/ga';
import * as Routes from 'constants/routes';

const EmailContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;

const CardBox = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const ImageCard = styled.div`
  z-index: 1;
  position: absolute;
  border-radius: 50px;
`;

const Image = styled.img`
  border-radius: inherit;
  max-height: 550px;
  width: auto;
  box-shadow: ${({ theme }) => theme.shadows.lg};

  ${({ theme }) => theme.media.customMax(767)} {
    display: none;
    width: 0;
    height: 0;
  }
`;

const ContactCard = styled.form`
  position: relative;
  max-width: 900px;
  margin-left: 140px;
  padding: 50px 50px 50px 280px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50px;
  box-shadow: ${({ theme }) => theme.shadows.lg};

  p {
    padding-bottom: 40px;
  }

  ${({ theme }) => theme.media.customMax(767)} {
    min-width: auto;
    margin-left: 0;
    padding: 50px 15px;
  }
`;

const Title = styled.h3`
  font-family: Inter, Helvetica Neue, Arial, sans-serif;
  padding-bottom: 20px;
  color: ${({ theme }) => theme.colors.violet};

  ${({ theme }) => theme.media.customMax(767)} {
    padding-bottom: 20px;
  }
`;

const textCss = css`
  width: 100%;
  color: ${({ theme }) => theme.colors.grey};
  border: 1px ${({ theme }) => theme.colors.border} solid;
  border-radius: 10px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 30px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.violet};
    opacity: 0.6;
  }
`;

const Input = styled.input`
  ${textCss};
  height: 50px;
`;

const Message = styled.textarea`
  ${textCss};
  resize: none;
  height: 100%;
  padding: 20px;
  min-height: 120px;
`;

const SubmitButton = styled.button`
  cursor: pointer;
  background: ${({ theme }) => theme.colors.violet};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  border-radius: 15px;
  padding: 10px;
  transition: 0.3s all;
  box-shadow: ${({ theme }) => theme.shadows.md};
  width: 100px;
  margin-top: 20px;

  :hover {
    opacity: 0.8;
  }
`;

function Email() {
  const { enqueueSnackbar } = useSnackbar();
  const [name, onChangeName, onResetName] = useInput('');
  const [email, onChangeEmail, onResetEmail] = useInput('');
  const [message, onChangeMessage, onResetMessage] = useInput('');
  const imageCardRef = useRef<HTMLDivElement>(null);
  const contactCardRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    Analytics.pageView(Routes.EMAIL);

    if (imageCardRef.current && contactCardRef.current) {
      imageCardRef.current.style.transform = 'translateX(-1000px)';
      contactCardRef.current.style.transform = 'translateX(1000px)';

      anime({
        targets: imageCardRef.current,
        translateX: 0,
        duration: 1500,
        easing: 'easeInOutExpo',
      });
      anime({
        targets: contactCardRef.current,
        translateX: 0,
        duration: 1500,
        easing: 'easeInOutExpo',
      });
    }
  }, []);

  const handleGa = useCallback(
    (label: string) => () => {
      Analytics.event({
        eventCategory: CATEGORY.about,
        eventAction: ACTION.menu,
        eventLabel: label,
      });
    },
    []
  );

  const onMouseEnter = useCallback((e: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.focus();
  }, []);

  const onSubmitSendEmail = useCallback(
    (e) => {
      e.preventDefault();

      handleGa(LABEL.email.submit);

      if (!name.length || !email.length || !message.length) {
        enqueueSnackbar('Oops... Check form data. some field empty.', { variant: 'warning' });
        return;
      }

      EmailJs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          to_name: 'Danah',
          from_name: name,
          from_email: email,
          message,
        },
        process.env.REACT_APP_EMAILJS_USER_ID
      ).then(
        (result) => {
          if (result.status === 200) {
            enqueueSnackbar('Your mail is sent!', { variant: 'success' });
            onResetName();
            onResetEmail();
            onResetMessage();
            handleGa(LABEL.email.success);
          } else {
            enqueueSnackbar('Oops... Something wrong', { variant: 'warning' });
            handleGa(`${LABEL.email.error}_${result.status}`);
          }
        },
        (error) => {
          enqueueSnackbar('Failed... Try again?', { variant: 'error' });
          handleGa(`${LABEL.email.error}_${error}`);
        }
      );
    },
    [email, enqueueSnackbar, handleGa, message, name, onResetEmail, onResetMessage, onResetName]
  );

  return (
    <EmailContainer>
      <PageTemplate
        isMenu
        title="Email | Danah"
        description="Send email to Danah"
        canonical={Routes.EMAIL}
        wrapperCss={{ padding: '60px 20px', margin: 'auto' }}
      >
        <CardBox>
          <ImageCard ref={imageCardRef}>
            <Image src={TelephoneImage} />
          </ImageCard>
          <ContactCard ref={contactCardRef} onSubmit={onSubmitSendEmail}>
            <Title>Wanna work with me ?</Title>
            <p>Contact me if you want to hire me</p>
            <Input type="name" placeholder="name" value={name} onChange={onChangeName} onMouseEnter={onMouseEnter} />
            <Input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={onChangeEmail}
              onMouseEnter={onMouseEnter}
            />
            <Message placeholder="Message" value={message} onChange={onChangeMessage} onMouseEnter={onMouseEnter} />
            <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} />
            <SubmitButton type="submit">Submit</SubmitButton>
          </ContactCard>
        </CardBox>
      </PageTemplate>
    </EmailContainer>
  );
}

export default memo(Email);

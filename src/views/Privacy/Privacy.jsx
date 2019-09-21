import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { Wrapper } from '../../components/Wrapper';
import { Title } from '../../components/Title';
import { Paragraph } from '../../components/Paragraph';
import { policy } from './Privacy.module.scss';

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper>
      <div className={policy}>
        <Title id="policy">Privacy Policy</Title>
        <br />
        <Title level={3}>Privacy Notice</Title>
        <Paragraph>
          This privacy notice discloses the privacy practices for Chingu.io.
          This privacy notice applies solely to information collected by this
          website. It will notify you of the following:
          <br />
          <br />
          <ol>
            <li>
              What personally identifiable information is collected from you
              through the website, how it is used and with whom it may be
              shared.
            </li>
            <li>
              What choices are available to you regarding the use of your data.
            </li>
            <li>
              The security procedures in place to protect the misuse of your
              information.
            </li>
            <li>How you can correct any inaccuracies in the information.</li>
          </ol>
        </Paragraph>
        <Title level={3}>Information Collection, Use, and Sharing</Title>
        <Paragraph>
          We are the sole owners of the information collected on this site. We
          only have access to/collect information that you voluntarily give us
          via email or other direct contact from you.
          <br />
          <br />
          We will use your information to respond to you, regarding the reason
          you contacted us. We will not share your information with any third
          party outside of our organization, other than as necessary to fulfill
          requests from you, and we will not sell your information to anyone.
        </Paragraph>
        <Title level={3}>Your Access to and Control Over Information</Title>
        <Paragraph>
          You may opt out of any future contacts from us at any time by
          terminating your account. You can do the following at any time by
          contacting us via the email address given on our website:
          <br />
          <br />
          <ul>
            <li>See what data we have about you, if any.</li>
            <li>Change/correct any data we have about you.</li>
            <li>Express any concern you have about our use of your data.</li>
          </ul>
        </Paragraph>
        <Title level={3}>Security</Title>
        <Paragraph>
          We take precautions to protect your information. When you submit
          sensitive information via the website, your information is protected
          both online and offline.
          <br />
          <br />
          Wherever we collect information it is encrypted and transmitted to us
          in a secure way. You can verify this by looking for a lock icon in the
          address bar and looking for “https” at the beginning of the address of
          the Web page.
          <br />
          <br />
          While we use encryption to protect sensitive information transmitted
          online, we also protect your information offline. Only staff members
          who need the information to perform a specific job (for example,
          processing support tickets) are granted access to personally
          identifiable information.
          <br />
          <br />
          If you you have questions about this privacy policy contact us at
          support@chingu.io.
        </Paragraph>
      </div>
    </Wrapper>
  );
}

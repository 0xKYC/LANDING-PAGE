import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';

export default function ContactPage() {
  return (
    <Page title="Privacy policy">
      <PrivacyPolicyContainer>
        <RichText>
          <p>
            Deserunt culpa consequat non nostrud esse cillum pariatur velit consequat. Est fugiat voluptate deserunt sint culpa sint.
            Laboris irure veniam quis ea voluptate. Nulla ad proident ex excepteur. Sunt sint ex laborum dolor quis magna aliquip qui amet
            nulla. Laboris proident aute exercitation irure esse id eu occaecat ad ipsum est. Dolor cillum Lorem occaecat enim veniam
            ullamco cupidatat qui dolore exercitation Lorem eu quis magna. Esse cillum aliqua et laborum eu dolore consectetur. Exercitation
            id non quis ex qui in dolore est est proident. Laborum nisi commodo fugiat nulla et magna veniam aliquip. Aliqua duis non
            nostrud ea velit incididunt. Laboris nostrud incididunt laborum enim eu dolor. Culpa anim sit sit ea. Labore laborum et aute ex
            est est excepteur labore voluptate deserunt. Amet ea laboris ea culpa dolor laborum consequat aliquip reprehenderit voluptate
            non laboris ipsum. Quis excepteur pariatur est enim duis consectetur nulla cupidatat ipsum dolor nisi ipsum. Dolore dolor
            nostrud aute dolore. Excepteur reprehenderit aliquip amet pariatur excepteur. Aliqua commodo nulla dolor ex nisi duis
            reprehenderit sint aliqua in minim. Lorem amet quis non veniam ut reprehenderit aliquip mollit do ullamco pariatur.
          </p>
          <br />
          <strong>
            Reprehenderit aliquip minim commodo magna occaecat dolore labore mollit mollit do esse deserunt. Aliquip eu reprehenderit aute{' '}
          </strong>
          <ul>
            <li>
              Ipsum cillum amet aliqua laboris ut excepteur enim laborum veniam officia officia esse. Anim et voluptate qui quis cillum
              labore ipsum incididunt consequat est ea exercitation et commodo. Consequat consequat amet officia sit non id occaecat
              occaecat duis irure.
            </li>
            <li>Nostrud dolor pariatur dolore Lorem in aliqua sunt aliqua excepteur laboris exercitation proident officia.</li>
            <li>Ut et voluptate consequat elit amet minim.</li>
            <li>Reprehenderit et consequat ea minim est proident eu incididunt non laboris proident culpa consequat sint.</li>
          </ul>
        </RichText>
      </PrivacyPolicyContainer>
    </Page>
  );
}

const PrivacyPolicyContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;

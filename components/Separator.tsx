import styled from 'styled-components';
import { media } from 'utils/media';

const Separator = styled.div`
  margin: 12.5rem 0;
  border: 1px solid rgba(var(--secondary), 0.025);
  height: 0px;
  margin-bottom: 8rem;
  ${media('<=tablet')} {
    margin: 5rem 0;
  }
`;

export default Separator;

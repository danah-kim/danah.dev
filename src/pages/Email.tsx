import PageTemplate from 'components/PageTemplate';
import React from 'react';
import styled from 'styled-components';

import * as Routes from 'constants/routes';

const Container = styled.div`
  margin-bottom: 100px;
  text-align: center;

  ${(props) => props.theme.media.small} {
    margin-bottom: 50px;
  }
`;

function Email() {
  return (
    <PageTemplate isMenu title="Email | Danah" description="Send email to Danah" canonical={Routes.EMAIL}>
      <Container>email</Container>
    </PageTemplate>
  );
}

export default Email;

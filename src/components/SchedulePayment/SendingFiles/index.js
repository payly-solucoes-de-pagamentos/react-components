import React, { memo } from 'react';
import PropTypes from 'prop-types';
import BodyComponent from './bodyComponent';
import SentFeedBack from '../../SentFeedback';
import { ContentBox, Container } from './style';

const SendingFiles = memo(({ sentContext, retrySend, resetFlow }) => {
  const iconHandler = {
    error: false,
    succes: false,
  };

  if (typeof sentContext !== 'undefined') {
    iconHandler.error = !sentContext;
    iconHandler.succes = sentContext;
  }

  return (
    <Container>
      <SentFeedBack error={iconHandler.error} success={iconHandler.succes} />
      <ContentBox>
        <BodyComponent context={sentContext} retrySend={retrySend} resetFlow={resetFlow} />
      </ContentBox>
    </Container>
  );
})

SendingFiles.propTypes = {
  success: PropTypes.bool,
  erro: PropTypes.bool,
  sentContext: PropTypes.any,
  retrySend: PropTypes.func.isRequired,
  resetFlow: PropTypes.func.isRequired,
  sentFilesResult: PropTypes.oneOf([PropTypes.bool, PropTypes.string]),
}

SendingFiles.defaultProps = {
  sentContext: undefined,
}

export default SendingFiles;

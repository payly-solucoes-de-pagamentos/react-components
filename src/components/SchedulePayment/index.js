import React, { useState } from 'react'
import PropType from 'prop-types';
import * as Styled from './style';
import GetFiles from './GetFiles';
import SendingFiles from './SendingFiles';


const SchedulePayment = ({
  uploadFiles,
  retrySend,
  sentFileResult,
  fileList,
  getFileList,
  removeFile,
  setSendingFileResult,
}) => {
  const [isFileSent, setFileSentStatus] = useState(false);

  const resetFlow = () => {
    setFileSentStatus(false);
    setSendingFileResult();
    removeFile({ removeAll: true });
  }

  return (
    <Styled.Container>
      {isFileSent
        ? <SendingFiles fileList={fileList} sentContext={sentFileResult} resetFlow={resetFlow} retrySend={retrySend} />
        : <GetFiles removeFile={removeFile} getFileList={getFileList} fileList={fileList} uploadFiles={uploadFiles} setFileSentStatus={setFileSentStatus} />
      }
    </Styled.Container>
  )
}

SchedulePayment.propTypes = {
  uploadFiles: PropType.func.isRequired,
  retrySend: PropType.func.isRequired,
  getFileList: PropType.func.isRequired,
  setSendingFileResult: PropType.func.isRequired,
  removeFile: PropType.func.isRequired,
  sentFileResult: PropType.any,
  fileList: PropType.array.isRequired,
}

SchedulePayment.defaultProps = {
  sentFileResult: undefined,
}

export default SchedulePayment

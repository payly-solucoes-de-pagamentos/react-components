import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Button from '../../Button';
import Calendar from '../../DateCalendar';
import { TimeInput } from '../../Input';

import IconRemove from '../../../images/icon/remove.svg';
import { MAX_FILES_NAME_LENGTH } from '../../../helpers/constants';
import { stringLimitator } from '../../../helpers/index';
import * as Styled from './style';

class GetFiles extends PureComponent {
  state = {
    time: undefined,
    calendar: {
      fileDate: undefined,
      startAtdateEnd: null,
      focusedInput: '',
      isShared: false,
      selectedDate: undefined,
    },
  };

  onFocusChange = (value) => {
    this.setState(state => (
      {
        calendar: {
          ...state.calendar,
          focusedInput: value,
        },
      }));
  }

  onSetTime = (value) => {
    this.setState({ time: value });
  }

  onDatesChange = ({ type, date }) => {
    this.setState(state => (
      {
        calendar: {
          ...state.calendar,
          [type]: date,
        },
        time: state.time,
      }));
  }

  addFilesHandler = (e) => {
    const {
      target: {
        files,
      },
    } = e;

    const {
      getFileList,
    } = this.props;

    const {
      calendar: { fileDate },
      time,
    } = this.state;

    const fileList = Array.from(files).map((file) => {
      return {
        date: moment(fileDate),
        time,
        fileName: file.name,
        fileBlob: URL.createObjectURL(file),
      };
    });
    getFileList(fileList);
  }

  fileRenderHandler = () => {
    const {
      fileList,
    } = this.props;

    return fileList.map((file, key) => {
      // If have time defined, concat it
      const parseTime = file.time ? ' - '.concat(file.time.replace(':', 'h')) : '';
      const parseDate = moment(file.date).format('DD/MM');

      return (
        // eslint-disable-next-line react/no-array-index-key
        <Styled.FileBox key={`file-number-${key}`}>
          <Styled.FileContent>
            <Styled.FileName>
              {stringLimitator(file.fileName || '', MAX_FILES_NAME_LENGTH)}
            </Styled.FileName>
            <Styled.FileDateTime>
              {`${parseDate}${parseTime}`}
            </Styled.FileDateTime>
          </Styled.FileContent>
          <Styled.ExcludeIcon onClick={() => { this.removeFiles(key); }}>
            <img alt="remove file" src={IconRemove} />
          </Styled.ExcludeIcon>
        </Styled.FileBox>
      );
    });
  }

  sendFiles = () => {
    const {
      setFileSentStatus,
      uploadFiles,
    } = this.props;

    uploadFiles();
    setFileSentStatus(true);
  }

  removeFiles = (index) => {
    const {
      removeFile,
    } = this.props;

    removeFile({ index });
  }

  render() {
    const {
      time,
      calendar: {
        fileDate,
        endAtdateBegin,
        focusedInput,
        selectedDate,
      },
    } = this.state;
    const {
      fileList,
    } = this.props;

    const fileCharacteristic = {
      id: 'csv-files',
      name: 'csv-files',
      onChange: this.addFilesHandler,
      accept: '.csv',
    };

    const isAddFilesDisabled = () => {
      return !time || time.length < 5 || !fileDate;
    };

    const ComponentFiles = !!fileList.length && this.fileRenderHandler();

    return (
      <>
        <Styled.Title>
          Agendar
        </Styled.Title>
        <Styled.Field>
          <Calendar
            label="Data de pagamento"
            startDate={fileDate}
            startDateId="fileDate"
            endDate={endAtdateBegin}
            endDateId="endAtdateBegin"
            onChange={this.onDatesChange}
            focusedInput={focusedInput}
            onFocus={this.onFocusChange}
            disabled={false}
            hasWeekDays={false}
            placeholder="dd / mm / aaaa"
            width="200px"
            value={selectedDate}
            openDirection="down"
            isOutsideRange={date => date.isBefore(moment(), 'day')}
          />
        </Styled.Field>
        <Styled.Field>
          <Styled.Label>Horário de pagamento</Styled.Label>
          <TimeInput
            dayTime
            time={time}
            onChange={this.onSetTime}
            name="getFiles"
          />
        </Styled.Field>
        <Button
          width="200px"
          disabled={isAddFilesDisabled()}
          fileCharacteristic={fileCharacteristic}
          isSecondary={false}
        >
          Adicionar arquivos
        </Button>
        <Styled.FileContainer>
          {ComponentFiles}
        </Styled.FileContainer>
        {!!fileList.length
          && <Button width="200px" onClick={() => { this.sendFiles(); }}>Enviar</Button>
        }
      </>
    );
  }
}

GetFiles.propTypes = {
  setFileSentStatus: PropTypes.func.isRequired,
  uploadFiles: PropTypes.func.isRequired,
  fileList: PropTypes.array.isRequired,
  getFileList: PropTypes.func.isRequired,
  removeFile: PropTypes.func.isRequired,
};

export default GetFiles;

import React from 'react';
import DatePicker from '../../../../../../Style/Picker/DatePicker';
import TimePicker from '../../../../../../Style/Picker/TimePicker';
import { transferTimeHHMM } from '../../../../../../services/timeManager';
import './LogMeetingMain.scss';

const contactSelectHint = "Logged Meetings must have at Least one association";
const LogMeetingCardMain = ({
    currentTime,
    currentDate,
    onDateChange,
    onTimeChange,
    contact,
    userId,
    contactList,
}) => (
        <div className="meetingCardBody">
            <div className='meetingCardBody__container'>
                <div className="cardLabel">
                    Date
                </div>
                <div className='meetingCardBody__container__picker'>
                    <DatePicker defaultDate={currentDate}
                        onDateChange={onDateChange}
                    />
                </div>
            </div>
            <div className='meetingCardBody__container'>
                <div className="cardLabel">
                    Time
                </div>
                <div className='meetingCardBody__container__picker'>
                    <TimePicker defaultTime={transferTimeHHMM(currentTime)}
                        onTimeChange={onTimeChange} />
                </div>
            </div>
        </div>
    )

export default LogMeetingCardMain;
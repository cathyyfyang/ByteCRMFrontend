import React from 'react';
import MeetingCards from './components/MeetingCards/MeetingCards';
import MeetingPageHeader from './components/Header/MeetingPageHeader';
import shuffleCards from '../../../../services/shuffleCards';
import { GetMeetings,UpdateMeeting,DeleteMeetingLog } from '../../../../Api/Meeting/meeting';
import "./MeetingPage.scss";
import { ActivityContext } from '../../../Context';

class MeetingPage extends React.Component {
    constructor(props) {
        super(props);
        this.id="5f740910947dc00d88cc918c";
        /*this.meetingCardsList = [
            { key: 1, name: "Sherry Li", value: "test", type: "Logged meeting", date: '2020-09-14',time:'9:00 PM'},
            { key: 2, name: "Sherry Li", value: "test", type: "Meeting", date: '2020-10-13',time:'9:30 PM' },
            { key: 3, name: "Sherry Li", value: "test", type: "Logged meeting", date: '2020-08-12',time:'10:00 AM'},
            { key: 4, name: "Sherry Li", value: "test", type: "Meeting", date: '2020-09-15',time:'7:16 PM' },
            { key: 5, name: "Sherry Li", value: "test", type: "Logged meeting", date: '2020-08-14',time:'12:00 AM'},
            { key: 6, name: "Sherry Li", value: "test", type: "Logged meeting", date: '2020-10-14',time:'13:48 AM'},
        ];*/
        this.state = {
            cardList: [],
            cardsArray: [],
        }
        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeMeeting = this.onChangeMeeting.bind(this);
        this.handleLogMeeting = this.handleLogMeeting.bind(this);
        this.handleDeleteCard = this.handleDeleteCard.bind(this);
    }

    sortCardsArray(meetingList) {
        if(meetingList){
        const newCardsArray = shuffleCards(meetingList);
        this.setState({
            cardsArray: newCardsArray
        })
        }
        return;
    }

    onChangeText(newContent, cardKey) {
        const newCardsList = this.state.cardList;
        for (let i in newCardsList) {
            if (newCardsList[i].key === cardKey) {
                newCardsList[i].description = newContent;
                this.setState({
                    cardsList: newCardsList,
                })
            }
        }
    }

    onChangeMeeting(meetingId, body) {
        UpdateMeeting(meetingId, body);
    }

    handleLogMeeting(meeting) {
        const newCardList = this.state.cardList;
        newCardList.push(meeting);
        this.setState({
            cardList: newCardList,
        })
        this.sortCardsArray(newCardList);
    }

    handleDeleteCard(id) {
        const response = DeleteMeetingLog(id);
        response.then(value => {
            if (value) {
                this.handleInitPage();
            }
        })
    }

    handleInitPage() {
        //const meetings = GetMeetings(this.props.contactId);
        const meetings = GetMeetings(this.id);
        meetings.then(meetingList => {
            if (meetingList.length > 0) {
                this.setState({
                    cardList:meetingList
                })
                return meetingList;
            }
            else {
                return null;
            }
        }).then((meetingList) => {
            this.sortCardsArray(meetingList);
        });
    }

    componentDidMount() {
        this.handleInitPage();
        /*
        //const meetings = GetMeetings(this.props.id);
        const tempMeetings = GetMeetings(this.id);
        tempMeetings.then(value => {
            this.setState({
                cardList: value
            });
            return this.state.cardList
        }).then(data => {
            if (data.length >= 1) {
                this.sortCardsArray();
            }
        });

        */
        /*tempMeetings.then(function(result) {
            console.log("result");
            console.log(result); // "Some User token"
            this.setState({
            cardList: result
        });
        })*/
        /*
        tempMeetings.then(function(result) {
            console.log("result");
            console.log(result); // "Some User token"
            this.setState({
            cardList: result
        });
        })
        console.log("this.state.cardList");
        console.log(this.state.cardList);
        this.sortCardsArray();*/
    }

    render() {    
        const {cardsArray} = this.state;
        return (
            <ActivityContext.Consumer>
                {contactData => {
                    return (
                        <div className="meetingPage">
                            <MeetingPageHeader 
                                contactData={contactData}
                                handleLogMeeting={this.handleLogMeeting} />
                            <MeetingCards
                                contactData={contactData}
                                cardsArray={cardsArray}
                                handleDeleteCard={this.handleDeleteCard}
                                onChangeMeeting={this.onChangeMeeting} />
                        </div>
                    )
                }}
            </ActivityContext.Consumer>
        )
    }
}

export default MeetingPage;
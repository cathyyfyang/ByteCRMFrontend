import React from 'react';
import SelectItem from './components/SelectItem/SelectItem';
import './ContactSelect.scss';



class ContactSelect extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
        this.onChangeRemoveContact = this.onChangeRemoveContact.bind(this);
    }

    onChangeRemoveContact(id){
        if(this.props.contactList.length <= 1){
            console.log("card must have at least one contact");
        }
        else{
            this.props.handleRemoveContact(id);
        }
    }

    render() {
        const { contactList, searchList,contact } = this.props;
        return (
            <div className="contactSelect">
                <div className="contactSelect__title">
                    <span className="contactSelect__title__text">
                        {this.props.label}
                    </span>
                </div>
                {searchList.length > 0 ?
                    searchList.map(item => {
                        return (
                            <SelectItem
                                key={item.contact._id}
                                contactID={item.contact._id}
                                contact={item.contact}
                                checked={item.checked}
                                handleRemoveContact={this.props.handleRemoveContact}
                                handleAddContact={this.props.handleAddContact}>
                            </SelectItem>
                        )
                    })
                    :
                    <React.Fragment>
                        <SelectItem
                            contactID={contact._id}
                            contact={contact}
                            email={contact.email}
                            checked={true}
                            handleRemoveContact={this.props.handleRemoveContact}
                            handleAddContact={this.props.handleAddContact}>
                        </SelectItem>
                        {contactList.map(item => {
                            if (item._id !== contact._id) {
                                return (
                                    <SelectItem
                                        key={item._id}
                                        contactID={item._id}
                                        contact={item}
                                        email={item.email}
                                        checked={true}
                                        handleRemoveContact={this.props.handleRemoveContact}
                                        handleAddContact={this.props.handleAddContact}>
                                    </SelectItem>
                                )
                            }
                            return null;
                        })
                        }
                    </React.Fragment>
                }
            </div>
        )
    }
}


export default ContactSelect;
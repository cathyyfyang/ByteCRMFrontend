import React, { Component } from 'react';
import Modal from '../../Modal';
import {CompanyContext} from '../Context';
import {ModalContext} from '../../Modal/components/ModalContext';
import InfoPage from '../../InfoPage';
import Activities from '../../Activities';
import Navbar from "../../Navbar";
import './CompanyMain.scss';

class CompanyMain extends Component {
    constructor(props) {
        const testCompany = {
            Name: 'Nike', CompanyDomainName: 'Nike.Ltd', Industry: 'IT', PhoneNumber: '123123',
            CompanyOwner: 'John Doe', Type: 'Partner', City: 'Sydney'
        }
        const expandPack = [{key:'About this Contact',content:""}]
        super(props);
        this.state = {
            Xaxis: 300,
            Yaxis: 50,
            visible: false,
            company: testCompany,
            expandPack,
            currentModal: "",
        }
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    openModal(selectedModal) {
        this.setState({
            visible: true,
            currentModal: selectedModal,

        });
        console.log("open the modal " + this.state.visible)
    }

    closeModal() {
        this.setState({
            visible: false,
        });
        console.log("close the modal " + this.state.visible)
    }

    render() {
        const { visible, currentModal, company,expandPack } = this.state
        return (
            <div>
                <ModalContext.Provider value={this.openModal}>
                    <header>
                        <Navbar />
                    </header>
                    <div className="Main">
                        <CompanyContext.Provider value={this.onChangeContactInfo}>
                            <InfoPage openModal={this.openModal}
                                      company={company}
                                      expandPack={expandPack}
                            />
                        </CompanyContext.Provider>

                        <div className="Function">
                            <Activities />
                        </div>

                        <div className="Company">
                            <p>Company component</p>
                        </div>
                        <Modal Xaxis={this.state.Xaxis}
                            Yaxis={this.state.Yaxis}
                            visible={visible}
                            currentModal={currentModal}
                            closeModal={this.closeModal}
                        />
                    </div>
                </ModalContext.Provider>
            </div>
        )
    }

}


export default CompanyMain;
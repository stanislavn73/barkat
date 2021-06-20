import React, { PureComponent } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../ui-kit/Header';
import Footer from '../ui-kit/Footer/Footer';
import FadeInWrapper from '../ui-kit/FadeInWrapper';
import Modal from '../ui-kit/Modal';
import SoftModal from '../ui-kit/SoftModal';

import './Layout.module.less';

const { Provider, Consumer } = React.createContext();

class Layout extends React.Component {
    state = {
        isMenuOpened: true,
        isModalOpened: false,
        isSoftModalOpened: false,
        softModalCode: null,
    };

    handleCloseModal = () => {
        this.setState({ isModalOpened: false });
    };

    handleOpenModal = (comment) => {
        this.setState({
            isModalOpened: true,
        });
    };

    handleOpenSoftModal = (code) => () => {
        this.setState({
            isSoftModalOpened: true,
            softModalCode: code,
        });
    };

    handleCloseSoftModal = () => {
        this.setState({
            isSoftModalOpened: false,
            softModalCode: null,
        });
    };

    render() {
        const {
            isMenuOpened,
            isModalOpened,
            isSoftModalOpened,
            softModalCode,
            comment,
        } = this.state;

        return (
            <>
                <Provider
                    value={{
                        handleOpenForm: this.handleOpenModal,
                        handleOpenSoftModal: this.handleOpenSoftModal,
                    }}
                >
                    <Modal
                        isOpened={isModalOpened}
                        onClose={this.handleCloseModal}
                        comment={comment}
                    />
                    <SoftModal
                        type={softModalCode}
                        isOpened={isSoftModalOpened}
                        onClose={this.handleCloseSoftModal}
                    />
                    <Header />
                    {this.props.children}
                    <Footer page={this.props.page} />
                </Provider>
            </>
        );
    }
}

export const ModalConsumer = Consumer;

export default Layout;

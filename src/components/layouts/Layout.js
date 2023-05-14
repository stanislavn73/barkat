import { createContext, useState } from 'react'
import Header from '../ui-kit/Header'
import Footer from '../ui-kit/Footer/Footer'
import Modal from '../ui-kit/Modal'
import SoftModal from '../ui-kit/SoftModal'

const { Provider, Consumer } = createContext()

const Layout = ({ children, page }) => {
    const [state, setState] = useState({
        isModalOpened: false,
        isSoftModalOpened: false,
        softModalCode: null,
    })

    const handleCloseModal = () => {
        setState(prev => ({ ...prev, isModalOpened: false }))
    }

    const handleOpenModal = () => {
        setState(prev => ({ ...prev, isModalOpened: true }))
    }

    const handleOpenSoftModal = code => () => {
        setState(prev => ({
            ...prev,
            isSoftModalOpened: true,
            softModalCode: code,
        }))
    }

    const handleCloseSoftModal = () => {
        setState(prev => ({
            ...prev,
            isSoftModalOpened: false,
            softModalCode: null,
        }))
    }

    const { isModalOpened, isSoftModalOpened, softModalCode, comment } = state

    return (
        <Provider
            value={{
                handleOpenForm: handleOpenModal,
                handleOpenSoftModal,
            }}
        >
            <Modal
                isOpened={isModalOpened}
                onClose={handleCloseModal}
                comment={comment}
            />
            <SoftModal
                type={softModalCode}
                isOpened={isSoftModalOpened}
                onClose={handleCloseSoftModal}
            />
            <Header />
            {children}
            <Footer page={page} />
        </Provider>
    )
}

export const ModalConsumer = Consumer

export default Layout

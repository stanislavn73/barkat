import { createContext, useContext, useEffect, useState } from 'react'
import Header from '../ui-kit/Header'
import Footer from '../ui-kit/Footer/Footer'
import Modal from '../ui-kit/Modal'
import SoftModal from '../ui-kit/SoftModal'

const { Provider, Consumer } = createContext()
export const TranslationContext = createContext(null)

const Layout = ({ children, page, locale }) => {
    const [state, setState] = useState({
        isModalOpened: false,
        isSoftModalOpened: false,
        softModalCode: null,
    })

    const [translation, setTranslation] = useState(null)
    useEffect(() => {
        ;(async () => {
            const res = await fetch('/api/translations', {
                body: JSON.stringify({ locale: '', page: 'soft' }),
                method: 'POST',
            })
            const data = await res.json()
            setTranslation(data)
        })()
    }, [])

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

    if (!translation) return null
    return (
        <TranslationContext.Provider value={{ data: translation, locale }}>
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
        </TranslationContext.Provider>
    )
}

export const ModalConsumer = Consumer

export default Layout
export const useTranslation = key => {
    const allTrans = useContext(TranslationContext)

    if (key?.length) {
        return { t: allTrans.data[allTrans.locale][key] }
    }
    return { t: allTrans.data[allTrans.locale] }
}

import { createContext, useContext, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Header from '../ui-kit/Header'
import Footer from '../ui-kit/Footer/Footer'

// Load modals client-side only to avoid SSR issues with images and interactive features
const Modal = dynamic(() => import('../ui-kit/Modal'), { ssr: false })
const SoftModal = dynamic(() => import('../ui-kit/SoftModal'), { ssr: false })

const { Provider, Consumer } = createContext()
export const TranslationContext = createContext(null)

const Layout = ({ children, page, locale, translations }) => {
    const [state, setState] = useState({
        isModalOpened: false,
        isSoftModalOpened: false,
        softModalCode: null,
    })
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
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

    // Normalize locale for translation lookup (uk-UA -> ua)
    const normalizedLocale = locale?.includes('UA') ? 'ua' : locale

    return (
        <TranslationContext.Provider
            value={{ data: translations, locale: normalizedLocale }}
        >
            <Provider
                value={{
                    handleOpenForm: handleOpenModal,
                    handleOpenSoftModal,
                }}
            >
                {isClient && (
                    <>
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
                    </>
                )}
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
        return { t: allTrans.data[key] }
    }
    return { t: allTrans.data }
}

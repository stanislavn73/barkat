import { Box } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import FullPage from '../ui-kit/FullPage'
import { init, send } from 'emailjs-com';
// import UserDataForm from '../ui-kit/SoftModal/content/BuyButtons/UserDataForm'
// const initialUserData = {
//     name: '',
//     company: '',
//     website: '',
//     email: '',
//     phone: '',
//   }
  
const PaymentSuccess = () => {
    // const [userData, setUserData] = useState(initialUserData)

    useEffect(() => {
        const savedData = localStorage.getItem('USER_DATA_DATABASE') || []
        // if (savedData) setUserData(JSON.parse(savedData))
        init("user_8J36WovfcyvCTVUlGVgez")
        const serviceId = 'service_2gxgl7t'
        const templateId = 'template_9dlnssp';
        sendFeedback(serviceId, templateId, JSON.parse(savedData))
    },[])
    function sendFeedback(serviceId, templateId, data) {
        const state = {
            name: data.name,
            surname: data.name,
            companyName: data.company,
            profession: 'покупатель',
            email: data.email,
            phoneNumber: data.phone,
            target: 'заказ оплачен'
        }
        console.log(state)
        send(
            serviceId, templateId,
            {
                ...state,
                to_email: 'Julia@barkat-3d-ville.com',
                to_email1: 'Sergii@barkat-3d-ville.com',
            })
    }
    // function handleChangeUserData(event) {
    // const value = event.target.value
    // localStorage.setItem('USER_DATA_DATABASE', JSON.stringify({...userData, [event.target.name]:value}))
    // setUserData({...userData, [event.target.name]:value})
    // }

    return (
    <FullPage>
        <div className='soft-block-title'>Оплата прошла успешно.<br/> С Вами свяжутся в ближайшее время</div>
        {/* {userData && 
        <Box style={{margin: '0 20px'}}>
            <UserDataForm handleChangeUserData={handleChangeUserData} userData={userData}/>
        </Box>
        } */}
      </FullPage>
    )
}
export default PaymentSuccess
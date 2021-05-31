import React from 'react'
import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from '@material-ui/core'

const UserDataForm = ({ handleChangeUserData, userData }) => {
    return (
        <Box className='textfield_container'>
            <TextField
                autoFocus
                label='Ф.И.О.'
                name='name'
                onChange={handleChangeUserData}
                required
                className='textfield'
                value={userData.name}
            />
            {/* <TextField
                autoFocus
                label='Название компании/физлицо'
                name='company'
                required
                onChange={handleChangeUserData}
                required
                className='textfield'
                value={userData.company}
            /> */}
            <FormControl name='controll'>
                <InputLabel id='activity-label'>Вид деятельности</InputLabel>
                <Select
                    native
                    name='company'
                    labelId='activity-label'
                    id='company-select'
                    value={userData.company}
                    onChange={handleChangeUserData}
                    required
                >
                    <option aria-label='None' value='' />

                    <option value={'Физлицо'}>Физлицо</option>
                    <option value={'Компания'}>Компания</option>
                </Select>
            </FormControl>
            {userData.company === 'Компания' && (
                <TextField
                    autoFocus
                    label='Сайт'
                    required
                    name='website'
                    onChange={handleChangeUserData}
                    required
                    className='textfield'
                    value={userData.website}
                />
            )}
            <TextField
                autoFocus
                label='E-Mail'
                required
                name='email'
                onChange={handleChangeUserData}
                required
                className='textfield'
                value={userData.email}
            />
            <TextField
                autoFocus
                label='Конт. тел.'
                required
                name='phone'
                onChange={handleChangeUserData}
                required
                className='textfield'
                value={userData.phone}
            />
        </Box>
    )
}
export default UserDataForm

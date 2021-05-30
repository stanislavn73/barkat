import { Box, TextField } from '@material-ui/core';
import React from 'react';

const UserDataForm = ({ handleChangeUserData, userData }) => {
    return (
        <Box className='textfield_container'>
            <TextField
                label='Ф.И.О.'
                name='name'
                onChange={handleChangeUserData}
                required
                className='textfield'
                value={userData.name}
            />
            <TextField
                label='Название компании/физлицо'
                name='company'
                required
                onChange={handleChangeUserData}
                required
                className='textfield'
                value={userData.company}
            />
            <TextField
                label='Сайт'
                required
                name='website'
                onChange={handleChangeUserData}
                required
                className='textfield'
                value={userData.website}
            />
            <TextField
                label='E-Mail'
                required
                name='email'
                onChange={handleChangeUserData}
                required
                className='textfield'
                value={userData.email}
            />
            <TextField
                label='Конт. тел.'
                required
                name='phone'
                onChange={handleChangeUserData}
                required
                className='textfield'
                value={userData.phone}
            />
        </Box>
    );
};
export default UserDataForm;

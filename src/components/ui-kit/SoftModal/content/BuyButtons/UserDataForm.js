import { Box, TextField } from '@material-ui/core';
import React from 'react';

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
            <TextField
                autoFocus
                label='Название компании/физлицо'
                name='company'
                required
                onChange={handleChangeUserData}
                required
                className='textfield'
                value={userData.company}
            />
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
    );
};
export default UserDataForm;

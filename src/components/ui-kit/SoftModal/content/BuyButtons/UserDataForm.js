import {
    Box,
    FormControl,
    InputLabel,
    Select,
    TextField,
} from '@material-ui/core'

import styles from './BuySketchUpShop.module.scss'

const UserDataForm = ({ handleChangeUserData, userData }) => {
    return (
        <Box className={styles.textfield_container}>
            <TextField
                autoFocus
                label='Ф.И.О.'
                name='name'
                onChange={handleChangeUserData}
                required
                className={styles.textfield}
                value={userData.name}
                variant='standard'
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
            <FormControl name='control' variant='standard'>
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
                    className={styles.textfield}
                    value={userData.website}
                    variant='standard'
                />
            )}
            <TextField
                autoFocus
                label='E-Mail'
                required
                name='email'
                onChange={handleChangeUserData}
                className={styles.textfield}
                value={userData.email}
                variant='standard'
            />
            <TextField
                autoFocus
                label='Конт. тел.'
                required
                name='phone'
                onChange={handleChangeUserData}
                className={styles.textfield}
                value={userData.phone}
                variant='standard'
            />
        </Box>
    )
}
export default UserDataForm

import {
    Box,
    FormControl,
    InputLabel,
    Select,
    TextField,
} from '@material-ui/core'
import useTranslation from 'next-translate/useTranslation'

import styles from './BuySketchUpShop.module.scss'

const UserDataForm = ({ handleChangeUserData, userData }) => {
    const { t } = useTranslation('forms')
    return (
        <Box className={styles.textfield_container}>
            <TextField
                autoFocus
                label={t('userDataForm.fullName')}
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
                <InputLabel id='activity-label'>{t('userDataForm.activityType')}</InputLabel>
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

                    <option value={t('userDataForm.individual')}>{t('userDataForm.individual')}</option>
                    <option value={t('userDataForm.company')}>{t('userDataForm.company')}</option>
                </Select>
            </FormControl>
            {userData.company === t('userDataForm.company') && (
                <TextField
                    autoFocus
                    label={t('userDataForm.website')}
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
                label={t('userDataForm.email')}
                required
                name='email'
                onChange={handleChangeUserData}
                className={styles.textfield}
                value={userData.email}
                variant='standard'
            />
            <TextField
                autoFocus
                label={t('userDataForm.contactPhone')}
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

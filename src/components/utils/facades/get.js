export const get = (obj, str) => {
    return (
        str?.split('.').reduce((res, key) => {
            return res?.[key]
        }, obj) || ''
    )
}

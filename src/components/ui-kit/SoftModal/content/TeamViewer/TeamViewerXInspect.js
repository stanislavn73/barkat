import { useTranslation } from '../../../../layouts/Layout'

export const TeamViewerXInspect = () => {
    const { t } = useTranslation('soft')
    const { modal } = t.xInspect

    return (
        <>
            <p>{modal.general}</p>
            {modal.keys.map(({ key, title }) => (
                <div key={key}>
                    <p>{title}:</p>
                    <ul>
                        {modal[key].map((item, index) => (
                            <li key={key + index}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
            <p>{modal.integration}</p>
            <p>{modal.summary}</p>
        </>
    )
}

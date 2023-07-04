export const TeamViewer = modal => () => {
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
        </>
    )
}

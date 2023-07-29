const Revit = modal => () => {
    return (
        <>
            {modal.general.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </>
    )
}

export default Revit

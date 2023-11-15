import React from 'react'

export default function Navisworks(modal) {
    return () => (
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
            {modal.summary && <p>{modal.summary}</p>}
            {modal.summaryArray?.map(item => (
                <div>
                    <p>{item}</p>
                    <br />
                </div>
            ))}
        </>
    )
}

import React, { useEffect } from 'react';
import { Waypoint } from 'react-waypoint';

function Anchor({ onPositionChange, id, children }) {
    function handlePositionChange(key) {
        return (data) => {
            if (data.currentPosition === 'inside') {
                onPositionChange(key);
                window.history.replaceState(null, null, `#${key}`);
            }
        };
    }

    return (
        <Waypoint
            bottomOffset={'50%'}
            topOffset={'49%'}
            onPositionChange={handlePositionChange(id)}
        >
            <div id={id}>{children}</div>
        </Waypoint>
    );
}

export default React.memo(Anchor);

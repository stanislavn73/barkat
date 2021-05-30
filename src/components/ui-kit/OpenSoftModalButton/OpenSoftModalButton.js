import React, { useEffect, useContext, useState } from 'react';
import { ModalConsumer } from '../../layouts/Layout';
import './styles.less';

export default function OpenModalButton({ children }) {
    const [childrenEl, setChildren] = useState(null);
    const context = useContext(ModalConsumer);

    useEffect(() => {
        const content = children;
        content.addEventListener('click', context.handleOpenSoftModal);
        setChildren(content);

        return content.removeEventListener(
            'click',
            context.handleOpenSoftModal
        );
    }, []);

    return childrenEl;
}

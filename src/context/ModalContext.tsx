import React, { createContext, useState } from "react";

interface IModalContext {
    modal: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
}

export const ModalContext = createContext<IModalContext>({
    modal: false,
    open: () => {},
    close: () => {},
    toggle: () => {},
});

export const ModalState = ({ children }: { children: React.ReactNode }) => {
    const [modal, setModal] = useState(false);

    const open = () => setModal(true);

    const close = () => setModal(false);

    const toggle = () => setModal(prev => !prev);
    
    return (
        <ModalContext.Provider value={{ modal, open, close, toggle }}>
            {children}
        </ModalContext.Provider>
    );
};

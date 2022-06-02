import React from "react";

export const TextContext = React.createContext({text: 'Hello, from header'});

export const UserContext = React.createContext({
    name: '',
    onInputHandler: () => {}
});


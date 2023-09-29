import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from '../config/store';

interface StoreProviderProps {
    children?: ReactNode;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children } = props;
    console.log('render store')
    return <Provider store={store}>{children}</Provider>;
};

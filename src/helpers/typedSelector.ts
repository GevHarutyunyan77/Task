import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {RootState} from '../store';

// Define a custom typed selector hook
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useTypedSelector;

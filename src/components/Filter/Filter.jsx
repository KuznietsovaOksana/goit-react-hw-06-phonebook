// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { Input, Text } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Text>Who would you like to find?</Text>
      <Input
        type="text"
        onChange={event => {
          const action = filterContacts(event.target.value);
          dispatch(action);
        }}
      />
    </>
  );
};

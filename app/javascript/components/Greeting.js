import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { retrieveMessages } from '../redux/messages/message';

const Greeting = () => {
  const message = useSelector((state) => state.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveMessages());
  }, []);

  return <h1>{message.message}</h1>;
};

export default Greeting;
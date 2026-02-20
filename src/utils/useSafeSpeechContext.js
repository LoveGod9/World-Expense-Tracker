import { useSpeechContext } from '@speechly/react-client';

const useSafeSpeechContext = () => {
  const appId = process.env.REACT_APP_SPEECHLY_APP_ID;
  if (appId) {
    return useSpeechContext();
  }
  return { speechState: null, segment: null };
};

export default useSafeSpeechContext;

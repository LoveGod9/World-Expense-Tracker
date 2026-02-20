import { useSpeechContext } from '@speechly/react-client';

const useSafeSpeechContext = () => {
  try {
    // Call hook unconditionally to satisfy rules-of-hooks; if there's no provider
    // the library may throw — catch and return safe defaults instead.
    return useSpeechContext();
  } catch (e) {
    return { speechState: null, segment: null };
  }
};

export default useSafeSpeechContext;

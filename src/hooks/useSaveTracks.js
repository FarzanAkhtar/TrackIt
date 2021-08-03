import { useContext } from "react";
import { Context as TracksContext } from '../context/TracksContext';
import { Context as LocationContext } from '../context/LocationContext';
import { navigate } from '../navigationRef';

export default () => {
  const { createTrack } = useContext(TracksContext);
  const { state: { name, locations }, reset } = useContext(LocationContext);

  const saveTrack = async () => {
    await createTrack(name, locations);
    reset();
    navigate('TrackList');
  };

  const discard = () => {
    reset();
    navigate('TrackList');
  };

  return [saveTrack, discard];
};
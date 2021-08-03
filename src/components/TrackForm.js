import React, { useContext } from 'react';
import { Button, Input } from 'react-native-elements';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTracks from '../hooks/useSaveTracks';
import Spacer from './Spacer';

const TrackForm = () => {
  const { state: { name, recording, locations }, startRecording, stopRecording, changeName } = useContext(LocationContext);
  const [saveTrack, discard] = useSaveTracks();
  return (
    <>
      <Spacer>
        <Input
          placeholder='Track Name'
          value={name}
          onChangeText={changeName}
        />
      </Spacer>
      {recording ?
        <Button
          title="Stop"
          onPress={stopRecording}
          buttonStyle={{ marginHorizontal: 15 }}
        /> :
        <Button
          title="Record"
          onPress={startRecording}
          buttonStyle={{ marginHorizontal: 15 }}
        />
      }
      {(!recording && locations.length) ?
        <>
          <Spacer>
            <Button title="Save" onPress={saveTrack} />
          </Spacer>
          <Button title="Discard" onPress={discard} buttonStyle={{ marginHorizontal: 15 }} />
        </>
        : null
      }
    </>
  );
};

export default TrackForm;

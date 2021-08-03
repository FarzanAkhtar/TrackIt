import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context as TracksContext } from '../context/TracksContext';
import MapView, { Polyline } from 'react-native-maps';

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TracksContext);
  const id = navigation.getParam('_id');
  const track = state.find(t => t._id === id);
  return (
    <View>
      <Text style={styles.title}>{track.name}</Text>
      <MapView
        initialRegion={{
          ...track.locations[0].coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
        style={styles.map}
      >
        <Polyline coordinates={track.locations.map(loc => loc.coords)} />
      </MapView>
    </View>
  );
};

TrackDetailScreen.navigationOptions = {
  headerBackTitle: 'Back',
  title: ''
};

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
    marginVertical: 15
  },
  map: {
    height: 400
  }
});

export default TrackDetailScreen;

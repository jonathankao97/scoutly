import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import Video from 'react-native-video';

import { colors, fonts } from '../../styles';

// const chartIcon = require('../../../assets/images/pages/chart.png');
// const calendarIcon = require('../../../assets/images/pages/calendar.png');
// const chatIcon = require('../../../assets/images/pages/chat.png');
// const galleryIcon = require('../../../assets/images/pages/gallery.png');
// const profileIcon = require('../../../assets/images/pages/profile.png');
// const loginIcon = require('../../../assets/images/pages/login.png');
// const blogIcon = require('../../../assets/images/pages/blog.png');

export default function ProfileScreen(props) {
  const [modalOpen, setModalOpenState] = useState(false);
  const videos = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'g',
    'h',
    'i',
    'g',
    'h',
    'i',
  ];
  const footer = () => {
    return <View style={{ height: 350 }} />;
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Image
          // source={{
          //   uri:
          //     'https://upload.wikimedia.org/wikipedia/commons/b/b6/Justin_Fields_%28cropped%29_%28cropped%29.jpg',
          // }}
          source={require('./lamar.jpeg')}
          style={{
            marginLeft: 20,
            width: 100,
            height: 100,
            borderRadius: 20,
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: '#D62627',
            marginBottom: 10,
          }}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}
          >
            <Text style={styles.titleText}>Lamar Jackson</Text>
          </View>
          <Text style={styles.itemTextPlus}>Boynton Beach Community</Text>
          <Text style={styles.itemText}>Boynton Beach, FL</Text>
          <Text style={styles.itemText}>Class of 2015</Text>
          <Text style={styles.itemText}>Position: QB</Text>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingHorizontal: 20,
        }}
      >
        <Text style={styles.titleText2}>Your Stats</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Text style={styles.itemText}>40-yd dash: 4.34 s</Text>
            <Text style={styles.itemText}>Vertical: --</Text>
            <Text style={styles.itemText}>Bench: --</Text>
            <Text style={styles.itemText}>Squat: --</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginLeft: 80,
            }}
          >
            <Text style={styles.itemText}>Height: 6-2</Text>
            <Text style={styles.itemText}>Weight: 212</Text>
            <Text style={styles.itemText}>GPA: 3.90/4.00</Text>
            <Text style={styles.itemText}>Club Team: N/A</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          <Text style={styles.titleText2}>Your Highlights</Text>
          <TouchableOpacity
            onPress={() => {
              setModalOpenState(true);
            }}
          >
            <View
              style={{
                paddingHorizontal: 15,
                paddingVertical: 8,
                borderRadius: 10,
                backgroundColor: '#FF5959',
              }}
            >
              <Text style={styles.buttonText}>+ Upload Highlight</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
          }}
        >
          <View
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <FlatList
              columnWrapperStyle={{ justifyContent: 'space-between' }}
              data={videos}
              style={{ marginTop: 2, marginStart: 2 }}
              renderItem={({ item }) => (
                <View>
                  <TouchableOpacity
                    onPress={() => console.log('Pressed Profile Grid Image')}
                  >
                    <Video
                      source={require('../pages/IMG_7363.mp4')}
                      onBuffer={this.onBuffer} // Callback when remote video is buffering
                      onError={this.videoError}
                      style={{
                        height: 200,
                        width: 120,
                        // flex: 1,
                        marginEnd: 2,
                        marginBottom: 5,
                        borderStyle: 'solid',
                        borderWidth: 0.5,
                        borderRadius: 10,
                        borderColor: '#333333',
                        // alignItems: 'center',
                      }}
                    />
                  </TouchableOpacity>
                </View>
              )}
              numColumns={3}
              indicatorStyle="white"
              ListFooterComponent={footer}
              // showsVerticalScrollIndicator={true}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: colors.white,
    paddingTop: 10,
    height: '100%',
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  item: {
    flex: 1,
    height: 120,
    paddingVertical: 20,
    borderColor: colors.primaryLight,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 5,
  },
  itemText: {
    color: '#555555',
    fontFamily: fonts.primary,
  },
  itemTextPlus: {
    color: '#222222',
    fontFamily: fonts.primary,
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: fonts.primary,
  },
  itemImage: {
    height: 35,
  },
  titleText: {
    color: '#000000',
    fontFamily: fonts.primaryBold,
    fontSize: 20,
  },
  titleText2: {
    color: '#555555',
    fontFamily: fonts.primaryBold,
    fontSize: 18,
  },
});

import React, { useState } from 'react';
import styled from 'styled-components';
import TinderCard from 'react-tinder-card';
import { Image, View, ScrollView, Text, StyleSheet } from 'react-native';

import Video from 'react-native-video';

const vid1 = require(`./reel1.mp4`)
const vid2 = require(`./reel2.mp4`)
const vid3 = require(`./reel3.mp4`)

// Within your render function, assuming you have a file called
// "background.mp4" in your project. You can include multiple videos
// on a single screen if you like.

// Later on in your styles..
var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
});

const Container = styled.View`
  display: flex;
  background: #ffffff;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Header = styled.Text`
  color: #000;
  font-size: 30px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const CardContainer = styled.View`
  width: 100%;
  max-width: 320px;
  background: #ffffff;
  height: 640px;
`;

const Card = styled.View`
  position: absolute;
  background-color: #fff;
  width: 100%;
  max-width: 3200px;
  height: 640px;
  shadow-color: black;
  shadow-opacity: 0.2;
  shadow-radius: 20px;
  border-radius: 20px;
  resize-mode: cover;
`;

const CardImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 20px;
`;

const CardTitle = styled.Text`
  position: absolute;
  bottom: 0;
  margin: 10px;
  color: #fff;
`;

const InfoText = styled.Text`
  height: 28px;
  justify-content: center;
  display: flex;
  z-index: -100;
`;

const db = [
  {
    name: 'Mo Abaker',
    highSchool: 'UWC Costa Rica',
    position: 'GK',
    height: '6.2',
    video: vid1,
    img:
      'https://media.wired.com/photos/5926c635f3e2356fd800a657/master/w_2560%2Cc_limit/9ca106e4894ae453b8d3eca384ef3b13d14172c0efe88ed995266634bf7937d407033e8cc39b15eda5ec7bdb9f21ede5.jpg',
  },
  {
    name: 'Eric Chen',
    highSchool: 'Naperville',
    position: 'Striker',
    height: '5.11',
    video: vid2,
    img:
      'https://media.wired.com/photos/5926c635f3e2356fd800a657/master/w_2560%2Cc_limit/9ca106e4894ae453b8d3eca384ef3b13d14172c0efe88ed995266634bf7937d407033e8cc39b15eda5ec7bdb9f21ede5.jpg',
  },
  {
    name: 'J Kao',
    highSchool: 'No Idea',
    position: 'Doesnt Play',
    height: '5.10',
    video: vid3,
    img:
      'https://media.wired.com/photos/5926c635f3e2356fd800a657/master/w_2560%2Cc_limit/9ca106e4894ae453b8d3eca384ef3b13d14172c0efe88ed995266634bf7937d407033e8cc39b15eda5ec7bdb9f21ede5.jpg',
  },
  {
    name: 'Mo',
    highSchool: 'UWC Costa Rica',
    position: 'GK',
    height: '6.2',
    video: vid1,
    img:
      'https://media.wired.com/photos/5926c635f3e2356fd800a657/master/w_2560%2Cc_limit/9ca106e4894ae453b8d3eca384ef3b13d14172c0efe88ed995266634bf7937d407033e8cc39b15eda5ec7bdb9f21ede5.jpg',
  },
];

function Simple() {
  const [characters, setCharacters] = useState(db);
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    // console.log('swiped');
    var newArr = [...characters];

    newArr = newArr.filter(item => {
      return item.name != nameToDelete;
    });
    console.log(newArr.length);
    setCharacters(newArr);
    setLastDirection(direction);
  };

  const outOfFrame = name => {
    console.log('out of frame');
  };

  return (
    <Container>
      <Header>Atheletes</Header>
      <CardContainer>
        {characters.map(character => {
          return (
            <TinderCard
              key={character.name}
              onSwipe={dir => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
            >
              <Card>
                {/*
                <View
                  style={{
                    width: '100%',
                    height: 100,
                    backgroundColor: '#c4c4c4',
                  }}
                >
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      margin: 30,
                    }}
                  >
                    <Image
                      style={styles.image}
                      source={{
                        uri:
                          'https://upload.wikimedia.org/wikipedia/commons/b/b6/Justin_Fields_%28cropped%29_%28cropped%29.jpg',
                      }}
                    />
                    <View
                      style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}
                    >
                      <Text
                        numberOfLines={3}
                        style={{
                          marginLeft: 20,
                          fontSize: 24,
                          textAlign: 'center',
                        }}
                      >
                        {character.name}
                      </Text>
                    </View>
                  </View>
                    
                </View>
                      */}

                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    padding : 10,
                    marginLeft:20
                  }}
                >
                  <Image
                    source={{
                      uri:
                        'https://upload.wikimedia.org/wikipedia/commons/b/b6/Justin_Fields_%28cropped%29_%28cropped%29.jpg',
                    }}
                    style={{
                      marginLeft: 20,
                      width: 70,
                      height: 70,
                      borderRadius: 20,
                      marginBottom: 10,
                    }}
                  />
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems:"center",
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
                      <Text style={{fontSize:32, color:"#FF5959"}}>{character.name}</Text>
                    </View>
                  </View>
                </View>

                {
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      margin: 0,
                    }}
                  >
                    <Video
                      source={character.video}
                      style={{ width: 250, height: 360, margin: 20 }} // Can be a URL or a local file.
                      //ref={(ref) => {
                      //this.player = ref
                      //}}                                      // Store reference
                      onBuffer={this.onBuffer} // Callback when remote video is buffering
                      onError={this.videoError} // Callback when video cannot be loaded
                      //  style={styles.backgroundVideo}
                    />
                  </View>
                }
                {/*
                <Video
                    source={require('../calendar/test.mp4')}
                    style={{ width: 100, height: 100 }} // Can be a URL or a local file.
                    //ref={(ref) => {
                    //this.player = ref
                    //}}                                      // Store reference
                    onBuffer={this.onBuffer} // Callback when remote video is buffering
                    onError={this.videoError} // Callback when video cannot be loaded
                    //  style={styles.backgroundVideo}
                  />
                */}

                <Text
                  numberOfLines={3}
                  style={{
                    margin: 5,
                    fontSize: 18,
                    textAlign: 'center',
                  }}
                >
                  <Text> High School: </Text>
                  <Text style={{color:"#FF5959"}}> {character.highSchool} </Text>
                </Text>
                <Text
                  numberOfLines={3}
                  style={{
                    margin: 5,
                    fontSize: 18,
                    textAlign: 'center',
                  }}
                >
                  <Text> Position: </Text>
                  <Text style={{color:"#FF5959"}}> {character.position} </Text>
                </Text>
                <Text
                  numberOfLines={3}
                  style={{
                    margin: 5,
                    fontSize: 18,
                    textAlign: 'center',
                  }}
                >
                 <Text> Height: </Text>
                  <Text style={{color:"#FF5959"}}> {character.height} </Text>
                </Text>
              </Card>
            </TinderCard>
          );
        })}
      </CardContainer>
    </Container>
  );
}

export default Simple;

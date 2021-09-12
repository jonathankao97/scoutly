import React, { useState } from 'react';
import styled from 'styled-components';
import TinderCard from 'react-tinder-card';
import { Image, View, ScrollView, Text, StyleSheet } from 'react-native';

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/background.png')}
        style={styles.bgImage}
        resizeMode="cover"
      >
        <View style={styles.section}>
          <Text size={20} white>
            Home
          </Text>
        </View>
        <View style={styles.section}>
          <Text color="#19e7f7" size={15}>
            The smartest Way to build your mobile app
          </Text>
          <Text size={30} bold white style={styles.title}>
            Scout.ly
          </Text>
        </View>
        <View style={[styles.section, styles.sectionLarge]}>
          <Text color="#19e7f7" hCenter size={15} style={styles.description}>
            {' '}
            A powerful starter project that bootstraps development of your
            mobile application and saves you $20 000*
          </Text>
          <View style={styles.priceContainer}>
            <View style={{ flexDirection: 'row' }}>
              <Text white bold size={50} style={styles.price}>
                {isExtended ? '$499' : '$99'}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.priceLink}
              onPress={() =>
                isExtended ? setIsExtended(false) : setIsExtended(true)
              }
            >
              <Text white size={14}>
                {isExtended
                  ? 'Multiple Applications License'
                  : 'Single Application License'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

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
});

const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Header = styled.Text`
  color: #000;
  font-size: 30px;
  margin-bottom: 30px;
`;

const CardContainer = styled.View`
  width: 90%;
  max-width: 320px;
  height: 600px;
`;

const Card = styled.View`
  position: absolute;
  background-color: #fff;
  width: 100%;
  max-width: 3200px;
  height: 600px;
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
    img:
      'https://media.wired.com/photos/5926c635f3e2356fd800a657/master/w_2560%2Cc_limit/9ca106e4894ae453b8d3eca384ef3b13d14172c0efe88ed995266634bf7937d407033e8cc39b15eda5ec7bdb9f21ede5.jpg',
  },
  {
    name: 'Eric Chen',
    highSchool: 'Somewhere in Naperville',
    position: 'Striker',
    height: '5.11',
    img:
      'https://media.wired.com/photos/5926c635f3e2356fd800a657/master/w_2560%2Cc_limit/9ca106e4894ae453b8d3eca384ef3b13d14172c0efe88ed995266634bf7937d407033e8cc39b15eda5ec7bdb9f21ede5.jpg',
  },
  {
    name: 'J Kao',
    highSchool: 'No Idea',
    position: 'Doesnt Play',
    height: '5.10',
    img:
      'https://media.wired.com/photos/5926c635f3e2356fd800a657/master/w_2560%2Cc_limit/9ca106e4894ae453b8d3eca384ef3b13d14172c0efe88ed995266634bf7937d407033e8cc39b15eda5ec7bdb9f21ede5.jpg',
  },
  {
    name: 'Mo',
    highSchool: 'UWC Costa Rica',
    position: 'GK',
    height: '6.2',
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
                <Text
                  numberOfLines={3}
                  style={{
                    margin: 40,
                    fontSize: 24,
                    textAlign: 'center',
                  }}
                >
                  {character.name}
                </Text>
                <ScrollView>
                  <Text
                    numberOfLines={3}
                    style={{
                      margin: 20,
                      fontSize: 18,
                      textAlign: 'center',
                    }}
                  >
                    {character.highSchool}
                  </Text>
                  <Text
                    numberOfLines={3}
                    style={{
                      margin: 20,
                      fontSize: 18,
                      textAlign: 'center',
                    }}
                  >
                    {character.position}
                  </Text>
                  <Text
                    numberOfLines={3}
                    style={{
                      margin: 20,
                      fontSize: 18,
                      textAlign: 'center',
                    }}
                  >
                    {character.height}
                  </Text>
                  <Text
                    numberOfLines={4}
                    style={{
                      margin: 20,
                      fontSize: 18,
                      textAlign: 'center',
                    }}
                  >
                    {
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                    }
                  </Text>
                </ScrollView>
                {/* {
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
                } */}
                {/*
                <Video
                    source={require('./test.mp4')}
                    style={{ width: 100, height: 100 }} // Can be a URL or a local file.
                    //ref={(ref) => {
                    //this.player = ref
                    //}}                                      // Store reference
                    onBuffer={this.onBuffer} // Callback when remote video is buffering
                    onError={this.videoError} // Callback when video cannot be loaded
                    //  style={styles.backgroundVideo}
                  />
                
                */}
              </Card>
            </TinderCard>
          );
        })}
      </CardContainer>
    </Container>
  );
}

export default Simple;

import React, { useState } from 'react';
import styled from 'styled-components';
import TinderCard from 'react-tinder-card';
import { Image, Text } from 'react-native';

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
    name: 'Richard Hendricks',
    img:
      'https://media.wired.com/photos/5926c635f3e2356fd800a657/master/w_2560%2Cc_limit/9ca106e4894ae453b8d3eca384ef3b13d14172c0efe88ed995266634bf7937d407033e8cc39b15eda5ec7bdb9f21ede5.jpg',
  },
  {
    name: 'Erlich Bachman',
    img:
      'https://media.wired.com/photos/5926c635f3e2356fd800a657/master/w_2560%2Cc_limit/9ca106e4894ae453b8d3eca384ef3b13d14172c0efe88ed995266634bf7937d407033e8cc39b15eda5ec7bdb9f21ede5.jpg',
  },
  {
    name: 'Monica Hall',
    img:
      'https://media.wired.com/photos/5926c635f3e2356fd800a657/master/w_2560%2Cc_limit/9ca106e4894ae453b8d3eca384ef3b13d14172c0efe88ed995266634bf7937d407033e8cc39b15eda5ec7bdb9f21ede5.jpg',
  },
  {
    name: 'Jared Dunn',
    img:
      'https://media.wired.com/photos/5926c635f3e2356fd800a657/master/w_2560%2Cc_limit/9ca106e4894ae453b8d3eca384ef3b13d14172c0efe88ed995266634bf7937d407033e8cc39b15eda5ec7bdb9f21ede5.jpg',
  },
  {
    name: 'Dinesh Chugtai',
    img:
      'https://media.wired.com/photos/5926c635f3e2356fd800a657/master/w_2560%2Cc_limit/9ca106e4894ae453b8d3eca384ef3b13d14172c0efe88ed995266634bf7937d407033e8cc39b15eda5ec7bdb9f21ede5.jpg',
  },
];

function Simple() {
  const [characters, setCharacters] = useState(db);
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log('swiped');
    const newArr = [...characters];
    newArr.filter(item => item.name != nameToDelete);
    //rconsole.log(newArr)
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
          console.log(character);

          return (
            <TinderCard
              key={character.name}
              onSwipe={dir => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
            >
              <Card>
                <Text numberOfLines={3} style = {{
                  margin: "20px",
                  fontSize : "24px",
                  textAlign:"center"
                }}>{character.name}</Text>
              </Card>
            </TinderCard>
          );
        })}
      </CardContainer>
    </Container>
  );
}

export default Simple;

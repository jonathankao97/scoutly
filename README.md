# Scout.ly
## Inspiration
A lot of high school athletes are finding exposure on social platforms such as TikTok, Twitter, and Youtube, changing the way we view traditional paths of athletic recruitment. Our goal with Scout.ly is to make athletic recruitment more accessible by leveraging the power of social media and big data.

## What it does
The Scout.ly mobile app is a reel-based sports clip aggregator where prospective college athletes can post their highlight tapes for coaches to browse. From there, coaches would be able to demonstrate interest in players they normally never would have come across, all with low barriers and low friction.

## How we built it
The application uses a Django backend with sql database to store the data of the users and the interactions between ussr (e.g likes) and provides api endpoints to retrieve this data. The frontend is built on React Native. The application is hosted on Google Cloud and Heroku. Twilio is used to manage text notifications to inform athletes when a couch shows interest in their profile.

## Challenges we ran into
Our team members are fairly new to React native. Learning a new technology in a short time frame was challenging but rewarding. It was also difficult working with videos in contrast to static images which 1) take up less storage space 2) are easier to format. It was also a challenge to integrate Twilio into our product, but once we did so, it added a lot to the user experience.

## Accomplishments that we're proud of
We are proud of getting our mobile app running and using Google Cloud for hosting our videos. We are also pleasantly surprised by the quality of the videos on our product after uploading them to Google Cloud and rendering them.

## What we learned
We learned how to develop in React Native and also how to use buckets on Google Cloud to save videos.

## What's next for Scout.ly
We want to improve the functionality of our app by improving the UI/UX before releasing to the App Store and Google Play Store. Once we do that we will begin to onboard high school athletes to create profiles and upload highlight reels. Once we have the players, we will ask college coaches to join and start interacting with players. After that we want to add more features for interactions among players and also improve our matching algorithm.

## Built With
React Native, Django, Heroku, Google Cloud, Twilio

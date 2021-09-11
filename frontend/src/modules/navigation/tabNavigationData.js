import HomeScreen from '../home/HomeViewContainer';
// import CalendarScreen from '../calendar/CalendarViewContainer';
import GridsScreen from '../grids/GridsViewContainer';
import ProfileScreen from '../pages/ProfileViewContainer';
import ComponentsScreen from '../components/ComponentsViewContainer';

// const iconHome = require('../../../assets/images/tabbar/home.png');
// const iconCalendar = require('../../../assets/images/tabbar/calendar.png');
// const iconGrids = require('../../../assets/images/tabbar/grids.png');
// const iconPages = require('../../../assets/images/tabbar/pages.png');
const iconComponents = require('../../../assets/images/tabbar/components.png');
const iconActivity = require('../../../assets/images/tabbar/activity.png');
const iconReels = require('../../../assets/images/tabbar/reels.png');
const iconProfile = require('../../../assets/images/tabbar/profile.png');

const tabNavigationData = [
  {
    name: 'Home',
    component: HomeScreen,
    icon: iconReels,
  },
  // {
  //   name: 'Calendar',
  //   component: CalendarScreen,
  //   icon: iconCalendar,
  // },
  {
    name: 'Activity',
    component: GridsScreen,
    icon: iconActivity,
  },
  {
    name: 'Profile',
    component: ProfileScreen,
    icon: iconProfile,
  },
  {
    name: 'Components',
    component: ComponentsScreen,
    icon: iconComponents,
  },
];

export default tabNavigationData;

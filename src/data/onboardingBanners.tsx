import { OnboardingBannerProps } from '../types';

const onboardingBanners: OnboardingBannerProps[] = [
  {
    id: 1,
    image: require('../../assets/banners/onboarding1.png'),
    title: 'Manage all your orders in realtime',
    subtitle:
      'Receive and update all your orders, from all your channels in real time',
  },
  {
    id: 2,
    image: require('../../assets/banners/onboarding2.png'),
    title: 'View, update and delete your inventory',
    subtitle:
      'You can now add, update and delete products right from your mobile device',
  },
  {
    id: 3,
    image: require('../../assets/banners/onboarding3.png'),
    title: 'Understand the metrics that matter',
    subtitle:
      'Get a top down view of how you online store is performing with our actionable metrics',
  },
];

export default onboardingBanners;

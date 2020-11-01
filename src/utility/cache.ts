import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';

const prefix = 'cache';
const expiryInMinutes = 5;

interface StoreProps {
  key: string;
  value: string;
}

const store = async (key: any, value: any) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (e) {
    console.log(e);
  }
};

const isExpired = (item: any) => {
  const now = moment(Date.now());
  const storedTime = moment(item.timestamp);
  return now.diff(storedTime, 'minutes') > expiryInMinutes;
};

const get = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value ? value : '');

    if (!item) return null;

    if (isExpired(item)) {
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }

    return item.value;
  } catch (e) {
    console.log(e);
  }
};

export default {
  store,
  get,
};

import axios from 'axios';
import { Alert } from 'react-native';

//GET API
export const getAllUsers = async ()=> {
    try {
      const result = await axios.get('https://fakestoreapi.com/products');
      return result.data;
    } catch (error) {
      console.log(error)
    }
}
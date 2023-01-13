import axios from 'axios'
import { domain } from '../config/config'

const List = async()=>{
    try {
        const result = await axios.get(`${domain}/job`)
        const data = result.data
        return data
    } catch (error) {
        return await error.message
    }
}

const FindOne = async(id)=>{
  try {
      const result = await axios.get(`${domain}/job/${id}`)
      return result.data 
  } catch (error) {
      return await error.message
  }
}

const Search = async(payload)=>{
    try {
        const result = await axios.post(`${domain}/job/search`, payload)
        return result.data
    } catch (error) {
        return await error.message
    }
  }

export default {
    List, FindOne, Search
}
import axios from "axios";

export const getData=async(req,res)=>{
    const data=axios.get('https://rickandmortyapi.com/api/character/');
    return data;
}

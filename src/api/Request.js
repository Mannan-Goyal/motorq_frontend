import axios from "axios";
import { API, BASEURL } from "./api";

export const getToken = async (uname, pass) => {
    try {
      let type = 'participant';
      if(uname === 'admin'){
       type = 'admin' 
      }
      const res = await axios({
        url: `${BASEURL}/${type}/login`,
        method: "post",
        data: { uname, pass },
      }
      );
      localStorage.setItem('jwtToken', res.data);
      return res.data;
    } catch (err) {
      console.error("Error: ", err);
      return
    }
}

export const getEvents = async () => {
  let res = await API.get('/participant/events')
  return (res.data)
};

export const removeEvent = async (id) =>{
  const res = await axios({
    url: `${BASEURL}/admin/remove`,
    method: "delete",
    data: { id },
    headers: { 
      Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
    }
  });
  return res.data;
}

export const addEvent = async (title, desc, start, end, registeredParticipants, maxParticipants, lat, long) =>{
  const res = await axios({
    url: `${BASEURL}/admin/add`,
    method: "post",
    data: { title, desc, start, end, registeredParticipants, maxParticipants, lat, long},
    headers: { 
      Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
    }
  });
  return res.data;
}
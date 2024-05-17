import axios from "axios";
export const fetchEvents = async () => {
    const response = await axios.get(
      `https://eventsback-cm8g.onrender.com/api/events/`
    );
    console.log(response);
    const events = response.data;
    return events;
  
};
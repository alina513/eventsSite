import List from "../List/List" ;
import { useState, useEffect } from "react";
import { fetchEvents } from "../../helpers/helpers";
import toast from "react-hot-toast";
export default function Home () {

    const [events, setEvents] = useState([]);
  

  useEffect(() => {
    const getEventsData = async () => {
      try {
        
        const eventsData = await fetchEvents();
        setEvents(eventsData);
      } catch (error) {
        toast.error('Please, try loading page again')
      }
    };

    getEventsData(); // Виклик функції отримання фільмів один раз при завантаженні компонента
  }, []);

    return(
        <>
        <List events = {events}/>
        </>
    )
}
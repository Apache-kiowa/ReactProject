import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // Обратите внимание на добавление useSelector
import Style from "./Search.module.css";
import { addHotels, addNameSity } from "../../../store/slice/HotelsSlice";
import { dateSelector } from "../../../store/selector/selector";
import Calendar from "./Calendar/Calendar";
import { ReactComponent as Btn } from "./calendar.svg";
function Search() {
  const dispatch = useDispatch();
  const [sity, setSity] = useState("");
  const [date, setDate] = useState("");
  const [addClass, setAddClass] = useState(false);
  const fetchData = async () => {
    try {
      const link = await fetch(
        `https://engine.hotellook.com/api/v2/lookup.json?query=${sity}&lang=ru&lookFor=hotel&limit=10`
      );
      const data = await link.json();

      const modifiedHotels = data.results.hotels.map((hotel) => ({
        ...hotel,
        id: hotel.id,
      }));
      
      dispatch(addHotels(modifiedHotels));
    } catch (error) {
      console.log("Ошибка при загрузке данных:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [date]);
  const initialDate = useSelector(dateSelector);
  useEffect(() => {
    setDate(initialDate);
  }, [initialDate]);

  const handleSearchClick = () => {
    fetchData();
    dispatch(addNameSity(sity));
  };
  let dateToday = new Date();
  let options = { day: "numeric", month: "long", year: "numeric" };
  let formatDate = new Intl.DateTimeFormat("ru-RU", options).format(dateToday);

  return (
    <div className={Style.Search}>
      <div className={Style.SearchBox}>
        <h3 className={Style.locationTitle}>Локация</h3>
        <input
          placeholder="Локация или название отеля"
          type="text"
          value={sity}
          onChange={(e) => setSity(e.target.value)}
          className={Style.locationInput}
        />

        <h3 className={Style.dateTitle}>Дата заселения</h3>

        <div className={Style.calendarInputBox}>
          <input
             placeholder={formatDate}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="text"
            className={Style.dateInput}
          />
          <a onClick={() => setAddClass(!addClass)}>
            <Btn className={Style.Btn} />
          </a>
        </div>
        <h3 className={Style.daysTitle}>Количество дней</h3>
        <input type="text" className={Style.daysInput} />
        <a onClick={handleSearchClick} className={Style.searchButton}>
          Найти
        </a>
      </div>{" "}
      <Calendar addClass={addClass} />
    </div>
  );
}

export default Search;

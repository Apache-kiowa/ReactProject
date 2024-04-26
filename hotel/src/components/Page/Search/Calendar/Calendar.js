import Style from "./Calendar.module.css";
import classnames from "classnames";
import React, { Component } from "react";
import * as calendar from "./index";
import { addDate } from "../../../../store/slice/HotelsSlice";

import { connect } from "react-redux";
export class Calendar extends Component {
  static defaultProps = {
    date: new Date(),
    years: [2024, 2025, 2026, 2027, 2028, 2029],
    monthNames: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
    weekDayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    onChange: Function.prototype,
  };

  state = {
    date: this.props.date,
    currentDate: new Date(),
    selectedDate: null,
    savedDate: null, // Новая переменная для сохранения выбранной даты
  };

  get year() {
    return this.state.date.getFullYear();
  }

  get month() {
    return this.state.date.getMonth();
  }

  get day() {
    return this.state.date.getDate();
  }

  handlePrevMonthButtonClick = () => {
    const date = new Date(this.year, this.month - 1);

    this.setState({ date });
  };

  handleNextMonthButtonClick = () => {
    const date = new Date(this.year, this.month + 1);

    this.setState({ date });
  };

  handleSelectChange = () => {
    const year = this.yearSelect.value;
    const month = this.monthSelect.value;

    const date = new Date(year, month);

    this.setState({ date });
  };

  handleDayClick(date) {
    this.setState({
      selectedDate: date,
      savedDate: date,
    });

    // Форматируем дату
    const formattedDate = `${date.getDate()} ${
      this.props.monthNames[date.getMonth()]
    } ${date.getFullYear()}`;

    // Диспетчеризация действия
    this.props.formattedDate(formattedDate);
  }
  render() {
    const { years, monthNames, weekDayNames } = this.props;
    const { currentDate, selectedDate } = this.state;

    const monthData = calendar.getMonthData(this.year, this.month);
    return (
      <div
        className={
          this.props.addClass ? Style.calendarBoxflex : Style.calendarBoxNone
        }
      >
        <div className={Style.calendar}>
          <header className={Style.headSelect}>
            <div className={Style.selectBox}>
              <select
                className={Style.select}
                ref={(element) => (this.monthSelect = element)}
                value={this.month}
                onChange={this.handleSelectChange}
              >
                {monthNames.map((name, index) => (
                  <option key={name} value={index}>
                    {name}
                  </option>
                ))}
              </select>

              <select
                className={Style.selectOne}
                ref={(element) => (this.yearSelect = element)}
                value={this.year}
                onChange={this.handleSelectChange}
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year} г.
                  </option>
                ))}
              </select>
            </div>
            <div className={Style.link}>
              <a
                onClick={this.handlePrevMonthButtonClick}
                className={Style.buttonPrev}
              >
                <img className={Style.arrowPrev} src="./img/Back.svg" alt="" />
              </a>
              <a
                onClick={this.handleNextMonthButtonClick}
                className={Style.buttonNext}
              >
                <img
                  className={Style.arrowNext}
                  src="./img/Vector.svg"
                  alt=""
                />
              </a>
            </div>
          </header>

          <table>
            <thead>
              <tr className={Style.weekDays}>
                {weekDayNames.map((name) => (
                  <th className={Style.weekDay} key={name}>
                    {name}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {monthData.map((week, index) => (
                <tr key={index} className={Style.week}>
                  {week.map((date, index) =>
                    date ? (
                      <td
                        key={index}
                        className={classnames(Style.day, {
                          today: calendar.areEqual(date, currentDate),
                          selected: calendar.areEqual(date, selectedDate),
                        })}
                        onClick={() => this.handleDayClick(date)}
                      >
                        {date.getDate()}
                      </td>
                    ) : (
                      <td key={index} />
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          <button>Выход</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    formattedDate: (date) => dispatch(addDate(date)),
  };
};

export default connect(null, mapDispatchToProps)(Calendar);

/* eslint-disable import/no-extraneous-dependencies */
// import React, { useState } from "react";
// import { storiesOf } from "@storybook/react";
// import { DateCalendar } from "payly-components";

// const DatePickerComponent = () => {
//   const [initialDate, setInitialDate] = useState(null);
//   const [finalDate, setFinalDate] = useState(null);
//   const [focus, setFocus] = useState(undefined);

//   const dateChanger = ({ startDate, endDate }) => {
//     console.log(startDate);

//     setInitialDate(startDate);
//     setFinalDate(endDate);
//   };

//   return (
//     <div>
//       <DateCalendar
//         label="Data de Início"
//         startDate={initialDate}
//         startDateId="startAtdateBegin"
//         endDate={finalDate}
//         endDateId="endAtdateBegin"
//         onChange={dateChanger}
//         focusedInput={focus}
//         onFocus={setFocus}
//         disabled={false}
//         hasWeekDays={false}
//         placeholder="Selecione"
//         width="167px"
//         openDirection="down"
//       />
//     </div>
//   );
// };

// storiesOf("date calendar").add("simplest implementation", () => (
//   <DatePickerComponent />
// ));

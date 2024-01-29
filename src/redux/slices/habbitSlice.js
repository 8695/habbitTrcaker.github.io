import { createSlice } from "@reduxjs/toolkit";

let id = 1;

const currentDate = new Date();
const month = currentDate.toLocaleString("en-US", { month: "long" });
const year = currentDate.getFullYear();

const week = {
  weekLog: [
    {
      id: 0,
      day: "Sunday",
      dd: currentDate.toDateString().slice(8, 10),
      mm: month,
      yy: year,
      isDone: "",
    },
    {
      id: 1,
      day: "Monday",
      dd: new Date(currentDate.setDate(currentDate.getDate() + 1))
        .toDateString()
        .slice(8, 10),
      mm: month,
      yy: year,
      isDone: "",
    },
    {
      id: 2,
      day: "Tuesday",
      dd: new Date(currentDate.setDate(currentDate.getDate() + 1))
        .toDateString()
        .slice(8, 10),
      mm: month,
      yy: year,
      isDone: "",
    },
    {
      id: 3,
      day: "Wednesday",
      dd: new Date(currentDate.setDate(currentDate.getDate() + 1))
        .toDateString()
        .slice(8, 10),
      mm: month,
      yy: year,
      isDone: "",
    },
    {
      id: 4,
      day: "Thursday",
      dd: new Date(currentDate.setDate(currentDate.getDate() + 1))
        .toDateString()
        .slice(8, 10),
      mm: month,
      yy: year,
      isDone: "",
    },
    {
      id: 5,
      day: "Friday",
      dd: new Date(currentDate.setDate(currentDate.getDate() + 1))
        .toDateString()
        .slice(8, 10),
      mm: month,
      yy: year,
      isDone: "",
    },
    {
      id: 6,
      day: "Saturday",
      dd: new Date(currentDate.setDate(currentDate.getDate() + 1))
        .toDateString()
        .slice(8, 10),
      mm: month,
      yy: year,
      isDone: "",
    },
  ],
};



const habbitSlice = createSlice({
  name: "habbitSlice",
  initialState: {
    habbit: [
      {
        id: 1,
        name: "Workout",
        isDone: "",
        week,
      },

      {
        id: 2,
        name: "Reading Book",
        isDone: "done",
        week,
      },

      {
        id: 3,
        name: "Go To Gym",
        isDone: "notdone",
        week,
      },
    ],
  },
  reducers: {
    habbitAdd: (state, action) => {
      const habit = {
        id: id++,
        name: action.payload,
        week,
      };
      state.habbit.unshift(habit);
    },
    deleteHabbit: (state, action) => {
      state.habbit = state.habbit.filter((item) => item.id !== action.payload);
    },
    
    habitDone: (state, action) => {
      const habitId = action.payload.habitId;
      const dayIndex = action.payload.dayIndex;

      const habit = state.habbit.find((h) => h.id === habitId);

      if (habit) {
        habit.week.weekLog[dayIndex].isDone = true;
        alert("habbit Done")
      }
    },

    habitUnDone: (state, action) => {
      const habitId = action.payload.habitId;
      const dayIndex = action.payload.dayIndex;

      const habit = state.habbit.find((h) => h.id === habitId);

      if (habit) {
        habit.week.weekLog[dayIndex].isDone = false;
        alert("habbit not Done")
      }
    },

    habitNone: (state, action) => {
      const habitId = action.payload.habitId;
      const dayIndex = action.payload.dayIndex;

      const habit = state.habbit.find((h) => h.id === habitId);

      if (habit) {
        habit.week.weekLog[dayIndex].isDone = "";
      }
    },
    

  },
});

export default habbitSlice.reducer;

export const { habbitAdd, deleteHabbit,habitDone,habitUnDone,habitNone } = habbitSlice.actions;

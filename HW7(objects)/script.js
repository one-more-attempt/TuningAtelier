const openingHours = {
  dayOfWeek: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"],
  periods: [
    [
      {
        //понедельник
        from: "10:00",
        to: "14:00",
      },
      {
        from: "15:00",
        to: "18:00",
      },
      {
        from: "18:30",
        to: "22:00",
      },
    ],

    [
      //вторник
      {
        from: "10:00",
        to: "14:00",
      },
      {
        from: "15:00",
        to: "18:00",
      },
      {
        from: "18:45",
        to: "22:00",
      },
    ],

    [
      //среда
      {
        from: "10:00",
        to: "14:00",
      },
      {
        from: "15:00",
        to: "18:00",
      },
      {
        from: "18:30",
        to: "22:00",
      },
    ],

    [
      //четверг
      {
        from: "10:00",
        to: "14:00",
      },
      {
        from: "15:00",
        to: "18:00",
      },
      {
        from: "18:30",
        to: "22:00",
      },
    ],

    [
      //пятница
      {
        from: "08:00",
        to: "12:00",
      },
      {
        from: "13:00",
        to: "19:00",
      },
      {
        from: "19:30",
        to: "23:30",
      },
    ],
  ],

  checkAvailability(weekDay, time) {
    let currentDay = this.periods[weekDay - 1];

    let inputTimeNumber = time.split("-");
    inputTimeNumber = +inputTimeNumber[0] * 60 + +inputTimeNumber[1];

    console.log(inputTimeNumber);
    console.log(currentDay);
    currentDay = currentDay.map((item) => {
      return Object.values(item).join("-");
    });

    console.log(currentDay);
    const ScheduleParseToNum = {
      start: (string) => {
        outputNum = string.slice(0, 5).split(":");
        outputNum[0] = +outputNum[0] * 60;
        outputNum = outputNum[0] + +outputNum[1];
        return outputNum;
      },
      finish: (string) => {
        outputNum = string.slice(6).split(":");
        outputNum[0] = +outputNum[0] * 60;
        outputNum = outputNum[0] + +outputNum[1];
        return outputNum - 30;
      },
    };

    const currentDaySchedule = {
      firstPartStart: ScheduleParseToNum.start(currentDay[0]),
      firstPartFinish: ScheduleParseToNum.finish(currentDay[0]),
      secondPartStart: ScheduleParseToNum.start(currentDay[1]),
      secondPartFinish: ScheduleParseToNum.finish(currentDay[1]),
      thirdPartStart: ScheduleParseToNum.start(currentDay[2]),
      thirdPartFinish: ScheduleParseToNum.finish(currentDay[2]),
    };
    console.log(currentDaySchedule);
    console.log(currentDaySchedule.thirdPartFinish);

    if (
      inputTimeNumber >= currentDaySchedule.thirdPartFinish ||
      inputTimeNumber <= currentDaySchedule.firstPartStart
    ) {
      return false;
    }
    if (
      inputTimeNumber >= currentDaySchedule.firstPartStart &&
      inputTimeNumber <= currentDaySchedule.firstPartFinish
    ) {
      return true;
    }
    if (
      inputTimeNumber >= currentDaySchedule.secondPartStart &&
      inputTimeNumber <= currentDaySchedule.secondPartFinish
    ) {
      return true;
    }
    if (
      inputTimeNumber >= currentDaySchedule.thirdPartStart &&
      inputTimeNumber <= currentDaySchedule.thirdPartFinish
    ) {
      return true;
    }
  },
};

console.log(openingHours.checkAvailability(2, "01-00"));

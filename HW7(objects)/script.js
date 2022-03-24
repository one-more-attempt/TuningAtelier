const dateInput = document.querySelector(".date-input");
const timeInput = document.querySelector(".time-input");
const submitButton = document.querySelector(".submit");
const resultBlock = document.querySelector(".result");
const openingHours = {
  dayOfWeek: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"],
  periods: [
    [
      {
        //понедельник
        from: "10:08",
        to: "14:12",
      },
      {
        from: "15:02",
        to: "18:15",
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
    let inputTimeNumber = time.split(":");
    let ScheduleParseToNum = {};
    let currentDaySchedule = {};

    inputTimeNumber = +inputTimeNumber[0] * 60 + +inputTimeNumber[1];
    currentDay = currentDay.map((item) => {
      return Object.values(item).join("-");
    });

    ScheduleParseToNum = {
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

    currentDaySchedule = {
      firstPartStart: ScheduleParseToNum.start(currentDay[0]),
      firstPartFinish: ScheduleParseToNum.finish(currentDay[0]),
      secondPartStart: ScheduleParseToNum.start(currentDay[1]),
      secondPartFinish: ScheduleParseToNum.finish(currentDay[1]),
      thirdPartStart: ScheduleParseToNum.start(currentDay[2]),
      thirdPartFinish: ScheduleParseToNum.finish(currentDay[2]),
    };

    if (
      inputTimeNumber < currentDaySchedule.firstPartStart ||
      inputTimeNumber > currentDaySchedule.thirdPartFinish + 30
    ) {
      resultBlock.innerText = "Sorry, we are closed";
      return false;
    }

    if (
      inputTimeNumber >= currentDaySchedule.thirdPartFinish &&
      inputTimeNumber < currentDaySchedule.thirdPartFinish + 30
    ) {
      //время перед последним закрытием
      resultBlock.innerText =
        "We are closes soon. Sorry, but you can't make your order";
      return false;
    }

    if (
      (inputTimeNumber >= currentDaySchedule.firstPartStart &&
        inputTimeNumber <= currentDaySchedule.firstPartFinish) ||
      (inputTimeNumber >= currentDaySchedule.secondPartStart &&
        inputTimeNumber <= currentDaySchedule.secondPartFinish) ||
      (inputTimeNumber >= currentDaySchedule.thirdPartStart &&
        inputTimeNumber <= currentDaySchedule.thirdPartFinish)
    ) {
      //заказ доступен для заказа
      resultBlock.innerText = `All is fine. You can make your order.`;
      return true;
    } else {
      //недоступен потому что ушли на перерыв в 1 раз
      if (
        inputTimeNumber >= currentDaySchedule.firstPartFinish &&
        inputTimeNumber <= currentDaySchedule.firstPartFinish + 30
      ) {
        resultBlock.innerText = `Sorry, we are closing for a break soon.
          You can make your order after ${currentDay[1].slice(0, 5)}`;
        return false;
      }
    }
    //недоступен потому что ушли на перерыв в 1 раз
    if (
      inputTimeNumber >= currentDaySchedule.secondPartStart &&
      inputTimeNumber < currentDaySchedule.secondPartFinish + 30
    ) {
      resultBlock.innerText = `Sorry, we are closing for a break soon.
        You can make your order after ${currentDay[2].slice(0, 5)}`;

      return false;
    }
    //перерыв
    if (
      (inputTimeNumber >= currentDaySchedule.firstPartFinish + 30 &&
        inputTimeNumber < currentDaySchedule.secondPartStart) ||
      (inputTimeNumber >= currentDaySchedule.secondPartFinish + 30 &&
        inputTimeNumber < currentDaySchedule.thirdPartStart)
    ) {
      resultBlock.innerText = `Sorry, we are closed for a break. You can make your order a little bit later`;
      return false;
    }
  },
};

submitButton.onclick = () => {
  resultBlock.innerText = ``;
  let timeInputValue = timeInput.value;
  let dateInputValue = new Date(dateInput.value);
  dayFromDateInputValue = dateInputValue.getDay();
  switch (dayFromDateInputValue) {
    case 0:
    case 6:
      //выходные
      resultBlock.innerText = `Sorry, we are closed on weekends.`;
      break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      openingHours.checkAvailability(dayFromDateInputValue, timeInputValue);
      break;
    default:
      break;
  }
};

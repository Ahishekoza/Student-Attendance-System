<template>
  <div>
    <v-container>
      <v-snackbar v-model="snackbar"
        >{{ AddSuccessFully }}
        <v-btn color="red" variant="text" @click="snackbar = false"> Close </v-btn>
      </v-snackbar>
      <v-row>
        <v-col cols="4" offset="4">
          <v-card>
            <div class="LCD w-25 mx-auto">
              <div class="hours">{{ hours }}</div>
              <div class="divider">:</div>
              <div class="minutes">{{ minutes }}</div>
              <div class="divider">:</div>
              <div class="seconds">{{ seconds }}</div>
            </div>

            <div class="mx-auto block w-50">
              <v-btn type="button" class="my-5" @click="PunchIn">Punch_In</v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import PunchIn_OutService from "../services/PunchIn_OutService";
export default {
  name: "DigitalClock",
  data() {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
      currentDate: "",
      Student: JSON.parse(localStorage.getItem("Student")),
      PunchIn_OutInfo: {
        Date: "",
        Time: "",
        studentName: "",
        studentClassName: "",
      },
      snackbar: false,
      AddSuccessFully: "",
    };
  },
  mounted() {
    setInterval(() => this.setTime(), 1000);
    this.showDate();
  },
  methods: {
    showDate() {
      const dateObj = new Date();
      const currentDate =
        dateObj.getDate() + "/" + dateObj.getMonth() + "/" + dateObj.getFullYear();
      this.currentDate = currentDate;
    },

    setTime() {
      const date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      hours = hours <= 9 ? `${hours}`.padStart(2, 0) : hours;
      minutes = minutes <= 9 ? `${minutes}`.padStart(2, 0) : minutes;
      seconds = seconds <= 9 ? `${seconds}`.padStart(2, 0) : seconds;
      this.hours = hours;
      this.minutes = minutes;
      this.seconds = seconds;
    },

    async PunchIn() {
      this.PunchIn_OutInfo = {
        Date: this.currentDate,
        Time: this.currentTime,
        studentName: this.Student.Name,
        studentClassName: this.Student.className,
      };

      await PunchIn_OutService.AddPunchInFo(this.PunchIn_OutInfo).then((response) => {
        this.snackbar = true;
        console.log(response);
        this.AddSuccessFully = "You Have Successfully Puched In!";
      });
    },
  },
  computed: {
    currentTime() {
      return (
        this.hours.toString() +
        ":" +
        this.minutes.toString() +
        ":" +
        this.seconds.toString()
      );
    },
  },
};
</script>

<style scoped>
.LCD {
  display: flex;
}
.LCD > div {
  font-family: "alarm clock";
  font-size: x-large;
}
</style>

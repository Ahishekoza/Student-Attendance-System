<template>
  <div>
    <v-card>
      <v-row class="my-2 mx-2">
        <v-text-field placeholder="SearchName" v-model="search"></v-text-field>
        <!-- <h2 class="mx-2">SORT BY</h2>
        <v-btn color="info" @click="sortBy('studentName')">StudentName</v-btn>
        <v-btn class="mx-2" color="info" @click="sortBy('Date')">Date</v-btn> -->
      </v-row>
      <v-table>
        <thead>
          <tr>
            <th class="text-left" v-for="header in Headers" :key="header.id">
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="students in filteredName" :key="students.id">
            <td>{{ students.Date }}</td>
            <td>{{ students.Time }}</td>
            <td>{{ students.studentName }}</td>
            <td>{{ students.studentClassName }}</td>
          </tr>
        </tbody>
      </v-table>
      <div class="text-center">
        <v-pagination v-model="page" :length="2" rounded="circle"></v-pagination>
      </div>

      <div class="text-left">
        <v-btn class="mb-2" color="info" @click="download">Download-Data</v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
import PunchIn_OutService from "@/services/PunchIn_OutService";
import { excelParser } from "../excel-parser";
export default {
  name: "StudentAttendanceInfo",
  data() {
    return {
      Headers: ["Date", "Time", "Name", "Class"],
      Attendees: [],
      page: 1,
      search: "",
    };
  },
  async mounted() {
    await PunchIn_OutService.GetAllPunchInfo().then((response) => {
      this.Attendees = response.data.DataOfPunchIn_Out;
      console.log(this.Attendees.length);
    });
  },
  methods: {
    download() {
      excelParser().exportDataFromJSON(this.Attendees, null, null);
    },

    sortBy(prop) {
      thAttis.endees.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
  computed: {
    filteredName: function () {
      return this.Attendees.filter((Attendee) => {
        return Attendee.studentName.match(this.search);
      });
    },
  },
};
</script>

<style></style>

<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="4">
          <v-card class>
            <v-card-title> Slider </v-card-title>
            <v-card-text>
              <v-list-item
                link
                prepend-icon="mdi-send"
                title="Add Student"
                @click="AddStudent"
                :to="'/AdminTeacher/Content'"
              ></v-list-item>
              <v-list-item
                link
                prepend-icon="mdi-account"
                title="Student Attendance Info"
                :to="'/AdminTeacher/AttendeesPage'"
              >
              </v-list-item>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="8">
          <router-view />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "TeachersPage",
  methods: {
    AddStudent() {
      console.log("Hello");
    },
  },
  computed: {
    ...mapState(["AdminTeacher"]),
  },
};
</script>

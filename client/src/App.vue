<template>
  <v-app>
    <v-main>
      <v-toolbar
        title="Attendance Management System"
        density="comfortable"
        color="#952175"
        theme="dark"
      >
        <v-spacer></v-spacer>

        <v-btn
          :to="{ name: 'home' }"
          v-if="AdminTeacher.length == 0 && StudentLogin.length == 0"
        >
          Admin
        </v-btn>
        <v-btn
          :to="{ name: 'StudentsPage' }"
          v-if="AdminTeacher.length == 0 && StudentLogin.length == 0"
        >
          Student Login
        </v-btn>
        <v-btn
          type="button"
          @click="Logout"
          v-if="AdminTeacher.length > 0 || StudentLogin.length > 0"
        >
          Logout
        </v-btn>

        <h5 v-if="AdminTeacher.length > 0 || StudentLogin.length > 0">
          {{ AdminTeacher || StudentLogin }}
        </h5>
      </v-toolbar>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "App",
  data() {
    return {
      Teacher: JSON.parse(localStorage.getItem("Teacher")),
      Student: JSON.parse(localStorage.getItem("Sudent")),
    };
  },
  mounted() {
    this.Teacher;
  },
  methods: {
    async Logout() {
      this.$store.dispatch("setUser", ""), this.$store.dispatch("setStudent", "");

      localStorage.removeItem("Teacher");
      localStorage.removeItem("Student");
      this.$router.push({ name: "home" });
    },
  },
  computed: {
    ...mapState(["AdminTeacher", "StudentLogin"]),
  },
};
</script>

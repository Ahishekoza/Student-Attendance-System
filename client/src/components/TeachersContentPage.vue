<template>
  <div>
    <v-snackbar v-model="snackbar"
      >{{ snackbarMessage }}
      <v-btn color="red" variant="text" @click="snackbar = false"> close </v-btn>
    </v-snackbar>
    <v-card class="h-100 w-100">
      <v-card-title> Add Student </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-text-field
            label="Student Name"
            v-model="this.Student.Name"
            :rules="NameRules"
          >
          </v-text-field>
          <v-text-field
            label="Password"
            :type="show ? 'text' : 'password'"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="show = !show"
            v-model="this.Student.password"
            :rules="passwordRules"
          ></v-text-field>
          <v-text-field
            label="Email Id"
            v-model="this.Student.emailId"
            :rules="EmailRules"
          >
          </v-text-field>
          <v-text-field
            label="ClassName"
            v-model="this.Student.className"
            :rules="classNameRules"
          >
          </v-text-field>

          <v-btn type="button" @click="Add_student" color="info" class="mx-auto"
            >Add</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import StudentService from "../services/StudentService";
export default {
  data() {
    return {
      snackbar: false,
      snackbarMessage: "",
      show: false,
      Student: {
        Name: "",
        emailId: "",
        password: "",
        className: "",
      },
      NameRules: [(value) => !!value || "Name is Required"],
      EmailRules: [
        (value) => !!value || "Email is Required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [(value) => !!value || "Password is Required"],
      classNameRules: [(value) => !!value || "Class is Required"],
    };
  },
  methods: {
    async Add_student() {
      const { valid } = await this.$refs.form.validate();
      if (valid) {
        console.log("hi");
        await StudentService.AddStudent(this.Student)
          .then((response) => {
            this.snackbar = true;
            this.snackbarMessage = "Student added successfully";
            this.Student = {};
          })
          .catch((error) => {
            console.log("Failed to add student");
          });
      }
    },
  },
};
</script>

<style></style>

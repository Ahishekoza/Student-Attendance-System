<template>
  <div>
    <!-- ------------Message In snackBar will get display once Admin click's buttom without credientials ------------- -->
    <v-snackbar v-model="snackbar">{{ errorMessage }}</v-snackbar>

    <v-container>
      <v-row>
        <v-col cols="4" offset="4">
          <v-card class="mt-5" color="#1F7087" theme="dark">
            <v-card-title>
              Teacher's Login

              <v-card-text>
                <v-form @submit.prevent="Login" ref="form">
                  <v-text-field
                    v-model="Teachers.emailId"
                    label="Email Id"
                    :rules="EmailRules"
                    required
                  >
                  </v-text-field>

                  <v-text-field
                    v-model="Teachers.password"
                    label="Password"
                    :type="show ? 'text' : 'password'"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="show = !show"
                    :rules="PasswordRules"
                    required
                  >
                  </v-text-field>

                  <v-btn type="submit" block class="mt-2">Login</v-btn>
                </v-form>
              </v-card-text>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TeacherService from "../services/TeacherServiec";

export default {
  name: "HelloWorld",
  data() {
    return {
      show: false,
      Teachers: {
        emailId: "",
        password: "",
      },
      EmailRules: [
        (value) => !!value || "Email is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      PasswordRules: [(value) => !!value || "Password is required"],
      errorMessage: "",
      snackbar: false,
    };
  },
  methods: {
    async Login() {
      const { valid } = await this.$refs.form.validate();
      if (valid) {
        try {
          await TeacherService.getTeacherByEmail(
            this.Teachers.emailId,
            this.Teachers.password
          ).then((reponse) => {
            if (reponse.status === 200) {
              console.log(reponse.data.Teacher);

              // Storing Teacher's information in the store and  in the LocalStorage
              this.$store.dispatch("setUser", reponse.data.Teacher.emailId);
              localStorage.setItem("Teacher", JSON.stringify(reponse.data.Teacher));
              this.$router.push({ name: "TeachersPage" });
            }
          });
        } catch (error) {
          console.log(error.message);
        }
      } else {
        this.snackbar = true;
        this.errorMessage = "Please Fill the Information";
      }
    },
  },
};
</script>

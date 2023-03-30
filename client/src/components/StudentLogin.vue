<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="4" offset="4">
          <v-card class="mt-5" color="#1F7087" theme="dark">
            <v-card-title>
              Student Login

              <v-card-text>
                <v-form ref="form">
                  <v-text-field
                    label="Email Id"
                    v-model="this.Student.emailId"
                    :rules="EmailRules"
                    required
                  >
                  </v-text-field>

                  <v-text-field
                    v-model="this.Student.password"
                    label="Password"
                    :type="show ? 'text' : 'password'"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="show = !show"
                    :rules="PasswordRules"
                    required
                  >
                  </v-text-field>

                  <v-btn type="submit" @click.prevent="Login" block class="mt-2"
                    >Login</v-btn
                  >
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
import StudentService from "@/services/StudentService";
export default {
  name: "StudentLogin",
  data() {
    return {
      show: false,
      Student: {
        emailId: "",
        password: "",
      },
      EmailRules: [
        (value) => !!value || "Email is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      PasswordRules: [(value) => !!value || "Password is required"],
    };
  },
  methods: {
    async Login() {
      console.log("async Login");
      const { valid } = await this.$refs.form.validate();

      if (valid) {
        await StudentService.getStudentByEmail(
          this.Student.emailId,
          this.Student.password
        ).then((resposne) => {
          this.$store.dispatch("setStudent", resposne.data.student.emailId);
          localStorage.setItem("Student", JSON.stringify(resposne.data.student));
          this.$router.push({ name: "PunchInOut" });
        });
      }
    },
  },
};
</script>

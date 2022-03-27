<template>
  <div class="about">
    <input
      type="text"
      name="firstname"
      id="firstname"
      autocomplete="firstname"
      v-model="user.firstname"
      placeholder="first name"
      class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
    />
    <input
      type="text"
      name="lastname"
      id="lastname"
      autocomplete="lastname"
      v-model="user.lastname"
      placeholder="last name"
      class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
    />
    <input
      type="text"
      name="email"
      id="email"
      autocomplete="email"
      v-model="user.email"
      placeholder="email"
      class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
    />
    <input
      type="text"
      name="password"
      id="password"
      autocomplete="password"
      v-model="user.password"
      placeholder="password"
      class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
    />
    <select
      name="role"
      id="role"
      v-model="user.role"
      class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
      required
    >
    <option value="" disabled> Choose your role</option>
    <option value="studient">Studient</option>
    <option value="teacher">Teacher</option>
    </select>
    <button @click="signUp()">Sign up</button>
    <button @click="signIn">Sign in</button>
    <button @click="signOut">Sign out</button>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
        ...mapState(["user"]),
    },
  methods: {
    async signUp() {
      const { user, error } = await this.$supabase.auth.signUp({
        email: this.user.email,
        password: this.user.password,
      },
      {
        data: { 
          role: this.user.role, 
          firstname: this.user.firstname,
          lastname: this.user.lastname,
        }
      });
      if (user) {
        console.log(user);
        this.$router.push({name: "home"});
      } else {
        console.log(error);
      }
    },
    async signIn() {
      const { user, error } = await this.$supabase.auth.signIn({
        email: this.user.email,
        password: this.user.password,
      });
      if (user) {
        console.log(user);
        this.$router.push({name: "home"});
      } else {
        console.log(error);
      }
    },
    async signOut() {
      const { error } = await this.$supabase.auth.signOut();
      if (error) {
        console.log(error);
      }
    },
  },
};
</script>

<template>
  <div class="about">
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
    <button @click="signIn">Sign in</button>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
        ...mapState(["user"]),
    },
  methods: {
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
  },
};
</script>

<template>
    <nav>
      <router-link to="/">Home</router-link> |
      <button v-if="user_data" type="button" @click="signOut">
        sign Out
      </button> 
      <router-link v-else to="/about">About</router-link> 
        <div v-if="user_data" class="flex">
            <p v-if="user_data.user_metadata.firstname">Hello {{ user_data.user_metadata.firstname }} </p>
            <p v-if="user_data.user_metadata.lastname != null"> {{ user_data.user_metadata.lastname }} </p>
        </div>
    </nav>
</template>

<script>
import { mapState } from "vuex";

export default {
    data() {
        return {
        key: 0,
        };
    },
    computed: {
        ...mapState(["user_data"]),
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
      } else {
        console.log(error);
      }
    },
        async signOut() {
            const { error } = await this.$supabase.auth.signOut();
            if (error) {
                console.log(error);
            } else {
                this.$router.push({name: "about"});
            }
        },
    }

}
</script>
<template>
    <nav>
        <div  v-if="user_data">
      <router-link to="/">Home</router-link> |
      <button type="button" @click="signOut">
        sign Out
      </button> 
      </div>
      <div v-else>
      <router-link  to="/sing-up">Sign up</router-link> |
      <router-link  to="/sign-in">Sign in</router-link> 
      </div>
        <div v-if="user_data" class="flex">
            <p v-if="user_data.user_metadata.firstname"><b>Hello</b>&nbsp;<u>{{ user_data.user_metadata.firstname }} </u></p>
            <p v-if="user_data.user_metadata.lastname != null"><u>&nbsp; {{ user_data.user_metadata.lastname }}</u> </p>
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
<template>
  <div class="login-page row col-12 fit items-center justify-center">
    <q-img
      src="background.jpg"
      class="bg-image row col-12 fit absolute"
      loading="lazy"
      fit="cover"
    />
    <div class="content-container row col-12 justify-center q-px-md">
      <div
        class="content-row row col-12 col-md-8 col-sm-12 q-pa-lg z-top justify-center"
      >
        <div class="content full-width col-12 col-md-8 col-sm-12 q-pa-lg z-top">
          <div
            class="title row col-12 q-mb-lg q-pb-md text-center justify-center"
          >
            Login
          </div>
          <q-input
            class="input"
            label="Mail"
            outlined
            label-color="green-1"
            color="green-1"
            :input-style="{ color: '#fff' }"
          />
          <q-input
            class="input q-mt-md"
            label="Password"
            type="password"
            outlined
            label-color="green-1"
            color="green-1"
            :input-style="{ color: '#fff' }"
          />
          <div class="button-row row col-12 q-mt-md">
            <q-btn
              class="button col-grow"
              color="teal-10"
              label="Login"
              size="17px"
              no-caps
              @click="login"
            />
          </div>
          <div class="remember-forgot row justify-between col-12 q-mt-sm">
            <div class="remember">
              <q-toggle color="teal-8" v-model="selection" val="teal-8" />
              <span>Remember me</span>
            </div>
            <div class="forgot row items-center">
              <span>Forgotten password</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'LoginPage',

  setup() {
    const router = useRouter();

    const login = () => {
      router.push({ name: 'Dashboard' });
    };
    return {
      selection: ref(['yellow', 'black']),
      login
    };
  }
});
</script>

<style lang="scss" scoped>
.content-row {
  border-radius: 9px;
  background: rgba(4, 4, 4, 0.8);
  box-shadow: 1px 1px 50px #000;

  .content {
    .title {
      font-family: 'Open Sans Condensed', sans-serif;
      font-size: 40px;
      color: #ddd;
      text-shadow: 3px 3px 10px #000;
    }

    .input {
      background-color: rgba($color: #fff, $alpha: 0.1);
      border-radius: 4px;
    }

    .remember-forgot {
      .remember {
        color: rgba(255, 255, 255, 0.5);
      }
      .forgot {
        color: rgba(255, 255, 255, 0.4);
        cursor: pointer;
        transition: all 0.5s ease-in-out;
      }
      .forgot:hover {
        color: rgba(255, 255, 255, 0.8);
      }
    }
  }
}
</style>

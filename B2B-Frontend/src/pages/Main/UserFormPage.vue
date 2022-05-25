<template>
  <div class="users-container q-px-xl q-mt-lg row justify-center">
    <div class="users-container-inner">
      <div class="content bg-white q-py-md">
        <div class="create-user-container q-pa-md bg-white">
          <div class="close-button">
            <router-link to="/users" replace>
              <q-btn icon="close" color="blue-grey-4" size="lg" flat />
            </router-link>
          </div>
          <div class="title text-grey-5 q-px-md q-mb-md">
            {{ userId ? title : "Create User" }}
          </div>
          <div class="name-buttons row items-center justify-start q-py-md">
            <div class="name text-grey-5 col-3">
              <q-icon name="person" size="lg" class="q-mr-md" />
              <span>Name Surname</span>
            </div>
            <div class="name-input q-px-xl col-6">
              <q-input
                class="rounded-borders"
                outlined
                v-model="myUsername"
                dense
              />
            </div>
          </div>
          <div class="email q-py-md row justify-start">
            <div class="title text-grey-5 col-3">
              <q-icon name="email" size="lg" class="q-mr-md" />
              <span>Mail Address</span>
            </div>
            <div class="email-input q-px-xl col-6">
              <q-input
                class="rounded-borders"
                outlined
                v-model="myEmail"
                dense
              />
            </div>
          </div>
          <div class="password row justify-start q-py-md">
            <div class="title text-grey-5 col-3">
              <q-icon name="lock" size="lg" class="q-mr-md" />
              <span>Password</span>
            </div>
            <div class="password-input q-px-xl col-6">
              <q-input
                class="rounded-borders"
                outlined
                v-model="myPassword"
                dense
              />
            </div>
          </div>
          <div class="gender row justify-start q-py-md">
            <div class="title text-grey-5 col-3">
              <q-icon name="person" size="lg" class="q-mr-md" />
              <span>Gender</span>
            </div>
            <div
              class="gender-options row items-center justify-start col-6 q-px-xl"
            >
              <q-option-group
                v-model="myGender"
                :options="options"
                color="primary"
                inline
                size="lg"
              />
            </div>
          </div>
          <div class="buttons-container row justify-center q-mt-md">
            <div class="buttons col-6 row justify-center">
              <q-btn
                v-if="userId"
                class="button text-capitalize"
                color="blue-grey-9"
                label="Edit"
                size="18px"
                @click="editUser"
              />
              <q-btn
                v-else
                class="button text-capitalize"
                color="blue-grey-9"
                label="Create"
                size="18px"
                @click="addUser"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "CreateUserPage",

  props: {
    id: {
      type: String,
      default: null,
    },
  },

  // prefetch({ store, currentRoute }) {
  //   console.log("asdasdadsa");
  //   const userId = currentRoute.params.id;
  //   console.log("cc", currentRoute.params);
  //   if (props.id) {
  //     return store.dispatch("user/getUser", userId);
  //   } else {
  //     store.commit("user/emptyUser");
  //   }
  // },

  setup(props) {
    const store = useStore();

    const gender = ref("male");
    const title = ref("");

    const userId = Number(props.id);

    const options = [
      {
        label: "Male",
        value: "male",
      },
      {
        label: "Female",
        value: "female",
      },
    ];

    const myUsername = computed({
      get: () => store.getters["user/getUser"].name,
      set: (value) => store.commit("user/setUsername", value),
    });

    title.value = myUsername.value;

    const myPassword = computed({
      get: () => store.getters["user/getUser"].password,
      set: (value) => store.commit("user/setPassword", value),
    });

    const myEmail = computed({
      get: () => store.getters["user/getUser"].email,
      set: (value) => store.commit("user/setEmail", value),
    });

    const myGender = computed({
      get: () => store.getters["user/getUser"].gender,
      set: (value) => store.commit("user/setGender", value),
    });

    const getUserIfExist = () => {
      if (props.id) {
        store.dispatch("user/getUser", userId).catch((err) => {
          console.log(err);
        });
      } else {
        store.commit("user/emptyUser");
      }
    };
    getUserIfExist();

    const addUser = () => {
      store
        .dispatch("user/addUser", {
          name: myUsername.value,
          email: myEmail.value,
          password: myPassword.value,
          gender: myGender.value,
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const editUser = () => {
      store
        .dispatch("user/editUser", {
          id: userId,
          name: myUsername.value,
          email: myEmail.value,
          password: myPassword.value,
          gender: myGender.value,
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return {
      myUsername,
      myEmail,
      myPassword,
      myGender,
      gender,
      title,
      userId,
      options,
      addUser,
      editUser,
    };
  },
});
</script>

<style lang="scss" scoped>
.users-container-inner {
  position: relative;
  width: 100%;
  .content {
    border-radius: 30px;

    .create-user-container {
      border-radius: 30px;
      .close-button {
        position: absolute;
        top: 3%;
        right: 1%;
        z-index: 1;
      }

      .title {
        font-size: 24px;
      }

      .name-buttons {
        border-bottom: #cecece 1px solid;
        .name {
          font-size: 16px;
          font-weight: 500;
        }
      }
      .email {
        border-bottom: #cecece 1px solid;
        .title {
          font-size: 16px;
          font-weight: 500;
        }
      }
      .password {
        border-bottom: #cecece 1px solid;
        .title {
          font-size: 16px;
          font-weight: 500;
        }
      }
      .gender {
        .title {
          font-size: 16px;
          font-weight: 500;
        }
      }
      .buttons-container {
        display: flex;
        gap: 5px;
      }
    }
  }
}
</style>

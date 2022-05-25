<template>
  <div class="users-container q-px-xl q-mt-lg row justify-center">
    <div class="users-container-inner">
      <div class="content bg-white q-py-md">
        <div
          class="buttons row justify-between items-center q-mx-xl q-mt-sm q-mb-md"
        >
          <q-btn
            class="button text-capitalize"
            icon="add"
            color="blue-grey-4"
            outline
            label="Create user"
            @click="createUserWindow"
          />
          <div class="user-count row items-center">
            <span class="text-blue-grey-4">{{ userList.length }}</span>
            <q-icon class="q-ml-sm" name="person" size="md" color="grey-5" />
          </div>
        </div>

        <ul class="column">
          <li
            class="card column text-black q-px-md"
            v-for="user in userList"
            :key="user.id"
          >
            <hr class="h-line q-my-sm" />
            <div class="card-content row items-center justify-between">
              <div class="left-side row items-center">
                <div class="icon q-mr-md">
                  <div class="icon-inner text-center">
                    {{ getName(user.name) }}
                  </div>
                </div>
                <div class="name">
                  <div class="name-inner">{{ user.name }}</div>
                </div>
              </div>
              <div class="mid-side q-pa-xs row items-center justify-between">
                <div class="mail">{{ user.email }}</div>
                <div class="gender text-capitalize">{{ user.gender }}</div>
              </div>
              <div class="right-side row justify-end">
                <q-btn
                  class="button text-capitalize"
                  icon="edit"
                  color="orange"
                  outline
                  @click="editUserWindow(user.id)"
                />
                <q-btn
                  class="button text-capitalize q-ml-md"
                  icon="delete"
                  color="red"
                  outline
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  name: "UsersPage",
  setup() {
    const store = useStore();
    const router = useRouter();

    const userList = ref([]);
    const username = ref("");
    const email = ref("");
    const password = ref("");
    const gender = ref("male");

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

    const getName = (name) => {
      const nameArr = name.split(" ");
      if (nameArr.length === 1) {
        return nameArr[0][0];
      } else {
        return nameArr[0][0] + nameArr[nameArr.length - 1][0];
      }
    };

    const getUsers = async () => {
      await store.dispatch("user/getData");
      userList.value = store.getters["user/getUserList"];
    };
    getUsers();

    const createUserWindow = () => {
      router.push({ name: "User-Form-Create" });
    };

    const editUserWindow = (id) => {
      router.push({ name: "User-Form-Edit", params: { id } });
    };

    return {
      userList,
      getName,
      gender,
      options,
      username,
      email,
      password,
      editUserWindow,
      createUserWindow,
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

    .buttons {
      .button {
        border-radius: 50px;
      }
      .user-count {
        span {
          font-size: 18px;
          font-weight: 530;
        }
      }
    }

    .card {
      width: 100%;
      .h-line {
        border-top: 1px solid rgba($color: rgb(83, 83, 83), $alpha: 0.1);
        width: 100%;
      }
      .left-side {
        width: 30%;
        .icon {
          background-color: rgb(226, 226, 226);
          height: 50%;
          width: 30px;
          border-radius: 8px;
          .icon-inner {
            font-size: 1.2rem;
            font-weight: 700;
            color: #999593;
          }
        }
        .name {
          width: auto;
          .name-inner {
            font-size: 1rem;
            font-weight: 500;
          }
        }
      }
      .mid-side {
        width: 40%;
        @media screen and (max-width: 900px) {
          flex-direction: column;
          gap: 5px;
          justify-content: center;
        }

        .mail {
          width: 60%;
          @media screen and (max-width: 900px) {
            width: 100%;
          }
        }
        .gender {
          width: 40%;
          @media screen and (max-width: 900px) {
            width: 100%;
          }
        }
      }
      .right-side {
        width: 30%;
        @media screen and (max-width: 900px) {
          flex-direction: column;
          width: 56px;
        }
        .button {
          @media screen and (max-width: 900px) {
            margin: 0;
          }
        }
      }
    }
  }
}
</style>

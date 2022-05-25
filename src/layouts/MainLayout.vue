<template>
  <div class="dashboard-page row col-12 fit">
    <div
      class="side-nav-menu q-px-md q-py-md"
      :class="activeToggle ? 'active' : 'deactive'"
    >
      <div
        class="side-nav-menu-content column no-wrap items-center justify-between fit"
      >
        <div class="top-side">
          <q-btn
            icon="close"
            color="white"
            flat
            size="12px"
            class="close-btn"
            @click="switchToggles"
          />
          <div class="profile row flex-center q-mt-lg">
            <div class="profile-img q-mb-md">
              <img
                src="company-logo.png"
                alt=""
                style="height: 56px; max-width: 56px"
              />
            </div>
          </div>
          <div class="nav-menu">
            <div
              @click="toDashboardPage"
              class="link q-py-sm text-white row items-center"
              :class="$route.path === '/dashboard' ? 'active' : ''"
            >
              <q-icon name="dashboard" size="22px" />
              <span class="q-ml-sm">Dashboard</span>
            </div>
            <div
              @click="toUsersPage"
              class="link q-py-sm text-white row items-center"
              :class="$route.path === '/users' ? 'active' : ''"
            >
              <q-icon name="person" size="22px" />
              <span class="q-ml-sm">Users</span>
            </div>
            <div
              class="dropdown q-py-sm text-white row items-center"
              @click="toggleDropdown1"
            >
              <q-icon size="22px" name="pages" />
              <span class="q-ml-sm">Pages</span>
              <q-icon name="arrow_drop_down" size="22px" />
            </div>
            <div
              class="q-pa-md text-white"
              style="max-width: 350px"
              v-show="dropdown1"
            >
              <q-list dense bordered padding class="rounded-borders">
                <q-item clickable v-ripple>
                  <q-item-section> Item </q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                  <q-item-section> Item </q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                  <q-item-section> Item </q-item-section>
                </q-item>
              </q-list>
            </div>

            <div
              class="dropdown q-py-sm text-white row items-center"
              @click="toggleDropdown2"
            >
              <q-icon size="22px" name="folder" />
              <span class="q-ml-sm">Pages</span>
              <q-icon name="arrow_drop_down" size="22px" />
            </div>
            <div class="q-pa-md" style="max-width: 350px" v-show="dropdown2">
              <q-list dense bordered padding class="rounded-borders text-white">
                <q-item clickable v-ripple>
                  <q-item-section> Item </q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                  <q-item-section> Item </q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                  <q-item-section> Item </q-item-section>
                </q-item>
              </q-list>
            </div>
            <div class="dropdown q-py-sm text-white row items-center">
              <q-icon size="22px" name="settings" />
              <span class="q-ml-sm">Settings</span>
            </div>
          </div>
        </div>
        <div class="bot-side">
          <div class="logout row q-pa-md">
            <q-icon name="logout" size="md" color="red" />
          </div>
        </div>
      </div>
    </div>
    <div
      class="content-page-container col-12 col-md-8 bg-blue-grey-1"
      :class="marginToggle ? 'withMargin' : 'withoutMargin'"
    >
      <MainHeader @switchToggles="switchToggles()" />
      <div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

import MainHeader from "../components/MainHeader.vue";

export default defineComponent({
  name: "DashboardLayout",

  components: {
    MainHeader,
  },

  setup() {
    const router = useRouter();

    const activeToggle = ref(true);
    const marginToggle = ref(true);
    const dropdown1 = ref(false);
    const dropdown2 = ref(false);

    const toggleDropdown1 = () => {
      dropdown1.value = !dropdown1.value;
    };
    const toggleDropdown2 = () => {
      dropdown2.value = !dropdown2.value;
    };

    const switchToggles = () => {
      activeToggle.value = !activeToggle.value;
      marginToggle.value = !marginToggle.value;
    };

    const toDashboardPage = () => {
      router.push({ name: "Dashboard" });
    };

    const toUsersPage = () => {
      router.push({ name: "Users" });
    };
    return {
      toUsersPage,
      toDashboardPage,
      activeToggle,
      marginToggle,
      switchToggles,
      toggleDropdown1,
      dropdown1,
      toggleDropdown2,
      dropdown2,
    };
  },
});
</script>

<style lang="scss" scoped>
.dashboard-page {
  .side-nav-menu {
    position: fixed;
    background: #343a40;
    overflow-y: hidden;
    width: 230px;
    height: 100%;
    z-index: 99;
    transition: all 0.5s;

    .side-nav-menu-content {
      position: relative;
      .top-side {
        width: 100%;
        .close-btn {
          position: absolute;
          top: 0;
          right: 0;
          cursor: pointer;
        }
        .profile {
          .profile-img {
            border-radius: 50%;
          }
        }
        .nav-menu {
          width: 100%;
          .link {
            border-radius: 10px;
            transition: all 0.5s;
            padding: 10px;
            font-size: 18px;
            margin-bottom: 10px;
          }
          .link:hover:not(.active) {
            background-color: rgba(255, 255, 255, 0.2);
            cursor: pointer;
          }
          .dropdown {
            border-radius: 10px;
            transition: all 0.5s;
            padding: 10px;
            font-size: 18px;
            margin-bottom: 10px;
          }
          .dropdown:hover:not(.active) {
            background-color: rgba(255, 255, 255, 0.2);
            cursor: pointer;
          }
          .active {
            background-color: rgba(255, 255, 255, 0.5);
          }
        }
      }
      .bot-side {
        .logout {
          transition: all 0.5s;
          cursor: pointer;
        }
      }
    }
  }
  .active {
    left: 0;
  }

  .deactive {
    left: -230px;
  }

  .content-page-container {
    margin-left: 230px;
    flex: 1;
    overflow-y: auto;
    transition: all 0.5s;
  }

  .withMargin {
    margin-left: 230px;
    width: calc(100% - 230px);
    @media screen and (max-width: 991px) {
      margin-left: 0;
    }
  }

  .withoutMargin {
    margin-left: 0;
  }
}
</style>

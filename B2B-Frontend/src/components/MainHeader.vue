<template>
  <div class="content page-header-container q-px-xl">
    <div
      class="content-page-header bg-transparent q-px-lg q-py-sm q-my-md row items-center justify-between"
    >
      <div class="left-side row items-center">
        <div class="toggle cursor-pointer bg-transparent q-mr-md">
          <q-btn icon="menu" text-color="black" round @click="switchToggles" />
        </div>
        <span class="text-grey-8">
          {{ $route.meta.title }}
        </span>
      </div>
      <div class="right-side">
        <div class="avatar-name row items-center">
          <span class="name q-mr-sm text-grey-8">John Doe</span>
          <q-avatar size="xl">
            <img src="https://cdn.quasar.dev/img/avatar.png" />
          </q-avatar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "MainHeader",

  emits: ["switchToggles"],

  setup(props, { emit }) {
    const switchToggles = () => emit("switchToggles");

    return { switchToggles };
  },
});
</script>

<style lang="scss" scoped>
.content-page-header {
  width: 100%;
  border-radius: 10px;
  .left-side {
    span {
      font-size: 28px;
      font-weight: 530;
    }
  }
  .right-side {
    .avatar-name {
      .name {
        font-size: 1.4rem;
        font-weight: 700;
      }
    }
  }
}
</style>

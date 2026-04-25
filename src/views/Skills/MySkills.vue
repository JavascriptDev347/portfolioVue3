<template>
  <!--  modal-->
  <ModalComponent :open="isOpen" @close="isOpen = !isOpen">
    <div class="modalRow">
      <div>
       <div class="modal_header">
         <h1>Modal</h1>
        <v-btn icon @click="closeModal">
          <v-icon> mdi-close </v-icon>
        </v-btn>
       </div>

        <div>
          <v-text-field variant="outlined" v-model="name"></v-text-field>
        </div>
      </div>
    </div>
  </ModalComponent>
  <!--  modal end-->
  <h1 class="text-2xl font-bold text-center">My Skills</h1>
  <v-btn icon class="close_icon">
    <v-icon>mdi-plus</v-icon>
  </v-btn>
  <div class="container skills">
    <v-card
      class="mx-auto"
      v-for="(item, index) in store.state.skills"
      :key="index"
    >
      <v-card-title> {{ item.name }}</v-card-title>
      <v-card-actions class="actions_card">
        <v-progress-linear v-model="item.percent" height="25" color="teal">
          <strong class="text-[white]">{{ Math.ceil(item.percent) }}%</strong>
        </v-progress-linear>
        <v-spacer>
          <div class="btn_groups">
            <v-btn
              variant="outlined"
              size="small"
              icon
              color="info"
              @click="openModal(item._id)"
              class="edit_icon"
            >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn class="delete_icon" variant="outlined" size="small" icon color="error">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </div>
        </v-spacer>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import ModalComponent from "@/components/modal/ModalComponent";
import store from "@/store";
export default {
  components: { ModalComponent },
  setup() {
    const isOpen = ref(false);
    const name = ref("");
    const ID = ref(null);
    onMounted(() => {
      store.dispatch("getSkills");
    });

    const openModal = (id) => {
      ID.value = id;
      isOpen.value = true;
    };

    const closeModal = ()=>{
      isOpen.value = false
    }
    return { isOpen, name, store, openModal ,closeModal};
  },
};
</script>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.skills .v-card {
  margin: 20px;
}

.btn_groups {
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.actions_card {
  flex-wrap: wrap;
  padding: 20px;
}

.actions_card .v-progress-linear {
  width: 70%;
}
</style>

<template>
  <v-row justify="center" v-show="open">
    <v-dialog class="modalSelect" v-model="props.open" persistent>
      <slot></slot>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  props: {
    open: {
      type: Boolean,
    },
  },

  setup(props) {
    return { props };
  },
};
</script>
<style>
.modalSelect {
  background-color: #dce7ec;
}

.modalSelect .modalRow {
  height: auto;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 10px;
  width: 500px;
}

*,
::after,
::before {
  border-style: none !important;
}

.v-text-field .v-input__control {
  background: #eff3ff;
  border-radius: 10px;
}

.v-input__control .v-field--variant-outlined {
  border: none !important;
}

.v-input .v-input__details {
  display: none;
}

/* modal classs */
.modal_header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 14px 0;
  align-items: center;
}

.close_icon {
  
}
</style>

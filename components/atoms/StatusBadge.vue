<template>
  <span class="status-badge" :class="handleStatus"></span>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: ['status'],
  computed: {
    handleStatus(): object {
      const classes = {
        'status-online': this.status == 'online',
        'status-offline': this.status == 'offline',
        'status-busy': this.status === 'busy',
      }
      return classes
    },
  },
})
</script>

<style lang="scss" scoped>
.status-badge {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  position: absolute;
  bottom: 1px;
  right: -1px;
  border: 2px solid #18232f;
}

.status-online {
  background: color(green);
}
.status-busy {
  background: color(red);
}
.status-offline {
  background: color(gray, shade2);
}
</style>

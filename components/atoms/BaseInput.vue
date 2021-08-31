<template>
  <input
    :value="value"
    :placeholder="placeholder"
    @input="updateValue"
    :type="type"
  />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    value: {
      type: [String, Number]
    },
    placeholder: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    updateValue(event: any) {
      this.$emit('input', event.target.value)
    }
  }
})
</script>

<style lang="scss" scoped>
input {
  outline: none;
  background: color(dark, shade1);
  border-radius: 20px;
  min-height: 36px;
  width: max-content;
  color: color(white);
}
</style>

<template>
  <div class="grow-wrap">
    <textarea
      rows="1"
      @focus="$emit('focused')"
      @input="handleAutoExpand($event)"
      :placeholder="placeholder"
      :value="value"
    ></textarea>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    placeholder: {
      type: String
    },
    value: {
      type: [String, Number]
    }
  },
  methods: {
    handleAutoExpand(event: any) {
      event.target.parentNode.dataset.replicatedValue = event.target.value
      this.$emit('input', event.target.value)
    }
  }
})
</script>

<style lang="scss" scoped>
.grow-wrap {
  display: grid;
  height: max-content;
}
.grow-wrap::after {
  content: attr(data-replicated-value) ' ';
  white-space: pre-wrap;
  visibility: hidden;
}
.grow-wrap > textarea {
  resize: none;
  overflow: hidden;
  background: none;
  color: color(white);
}
.grow-wrap > textarea,
.grow-wrap::after {
  grid-area: 1 / 1 / 2 / 2;
}
</style>

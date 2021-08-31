<template>
  <form
    @submit.prevent="sendPost()"
    ref="postform"
    class="post-form"
    :class="{ 'active-form': isWritingANewPost, 'has-text': hasText }"
  >
    <div class="new-post-box">
      <img src="@/assets/img/profile-pic.jpg" alt="" />

      <ExpandableTextarea
        v-model="text"
        @focused="isWritingANewPost = true"
        placeholder="No que você está pensando?"
      />
    </div>

    <div v-show="false" class="uploaded-image-preview">
      <img src="@/assets/img/profile-pic.jpg" alt="" />
    </div>

    <div v-show="isWritingANewPost || hasText" class="form-action">
      <button class="upload-button">
        <img src="@/assets/img/camera-icon.svg" alt="" />
      </button>

      <div>
        <button @click="cancelPost()">Cancelar</button>
        <button>Enviar</button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data(): any {
    return {
      text: '',
      isWritingANewPost: false,
    }
  },
  computed: {
    hasText(): boolean {
      return this.text.trim().length > 0
    },
  },
  methods: {
    sendPost() {
      console.log(this.text)
    },
    cancelPost() {
      this.text = ''
      this.isWritingANewPost = false
    },
  },
  mounted() {
    window.addEventListener('click', (e) => {
      if (this.$refs.postform.contains(e.target)) {
        return
      } else {
        this.isWritingANewPost = false
      }
    })
  },
})
</script>

<style lang="scss" scoped>
.post-form {
  display: grid;
  align-content: start;
  grid-gap: 1.5rem;
  width: 100%;
  min-height: 2.5rem;
  background: color(dark, shade1);
  border-radius: 1.25rem;
  overflow: hidden;
  transition: all 300ms ease;
  padding-top: 0.25rem;

  .new-post-box {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    grid-gap: 0.95rem;
    height: 100%;
    img {
      width: 2.063rem;
      border-radius: 50%;
      margin-left: 0.188rem;
    }
  }
  .uploaded-image-preview {
    width: 100%;
    padding: 0 1rem;
    img {
      width: 100%;
      max-height: 51vh;
      object-fit: cover;
      box-shadow: 1px 4.6px 9px rgba(0, 0, 0, 0.35);
    }
  }
  .form-action {
    border-top: 1px solid #23354b;
    padding: 0.4rem 1rem;
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    align-self: end;
    > div {
      display: grid;
      grid-auto-flow: column;
      grid-gap: 0.5rem;
    }
    button {
      background: transparent;
      outline: one;
      color: color(blue);
      cursor: pointer;
      font-size: 0.875rem;
      padding: 0.3rem 1.2rem;
      border-radius: 1.813;
      transition: all 300ms ease;

      &:hover {
        color: #98a9bc;
        background: #112331;
        border-radius: 20px;
      }
    }
    .upload-button {
      padding: 0;
      border-radius: none;
      &:hover {
        color: unset;
        background: unset;
      }
      img {
        width: 1.25rem;
      }
    }
  }
}
.active-form {
  align-content: unset;
  min-height: 4.563rem;
  transition: all 300ms ease;
  padding-top: 0;
  .new-post-box {
    align-items: start;
    padding-top: 0.2rem;
    min-height: inherit;
    .grow-wrap {
      padding-top: 0.438rem;
      min-height: inherit;
    }
  }
}

.has-text {
  height: auto;
  .new-post-box {
    align-items: start;
    .grow-wrap {
      padding-top: 0.438rem;
    }
  }
}

[placeholder]:empty::before {
  content: attr(placeholder);
  color: #667c95;
}

[placeholder]:empty:focus::before {
  content: '';
}
</style>

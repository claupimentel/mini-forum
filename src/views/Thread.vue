<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <section class="section">
          <div class="content is-medium">
            <router-link to="/" class="is-info" data-test="voltar">Voltar</router-link>
            <h1 class="title">{{ thread.title }}</h1>
            <h1 class="subtitle is-4">{{ thread.body }} - Replies: {{ thread.total_replies}}</h1>
            <div v-for="replie in thread.replies" :key="replie.id" data-test="resposta">
              <p><strong>{{ replie.user.name }}: </strong>{{ replie.body }}</p>
              <hr/>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
import { getThread } from "@/services/api";

export default {
  props: {
    thread_slug: String,
  },
  data() {
    return {
      thread: {},
    };
  },
  created() {
    getThread(this.thread_slug)
    .then((thread) => this.thread = thread)
    .catch((error) => { 
      if(error.message === 'Request failed with status code 404') {
        this.$router.push({ name: "NotFound"});
      }
    });
  },
};
</script>

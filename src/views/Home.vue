<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <p class="title">Threads</p>
        <div class="container" v-for="thread in threads" :key="thread.id" data-test="thread">
          <p class="subtitle">
            {{ thread.title }}
          </p>
          <p>Replies: {{ thread.total_replies }} - By <strong>{{ thread.user.name }}</strong></p>
          <router-link 
            data-test="link" 
            :to="{ name: 'Thread', params: { thread_slug: thread.slug } }"
          >
            Ler mais...
          </router-link>
          <hr/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getThreads } from "@/services/api";

  export default {
    data() {
      return {
        threads: [],
      };
    },
    created() {
      getThreads().then((threads) => this.threads = threads);
    },
  };
</script>


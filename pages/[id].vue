<template>
  <div>
    <div
      v-if="!pending"
      class="cards"
    >
      <div
        v-for="post in posts"
        :key="post.id"
        class="card-wrapper"
      >
        <ItemCard
          :id="post.id"
          :url="post.urls.regular"
          :username="post.user.username"
          :name="post.user.name"
          :profile-image="post.user.profile_image.small"
          :user-page-link="post.user.links.html"
        />
      </div>
    </div>
    <div
      v-else
      class="loader"
    />
  </div>
</template>

<script setup lang="ts">
import { _AsyncData } from 'nuxt/dist/app/composables/asyncData';
import { Post } from '../types/posts';
import ItemCard from '~~/components/ItemCard.vue';
const route = useRoute();
const { pending, data: posts } = await useLazyAsyncData(`posts/${route.params.id}`, () =>
  $fetch(`https://api.unsplash.com/photos?page=${route.params.id}`, {
    headers: {
      Authorization: 'Client-ID 9FYxR5JCIokiK6oGjoCHJWWSGhBl7QNu4cljxP8EhZc',
    }
  })) as _AsyncData<Post[], unknown>;
</script>

<style>
@import '../assets/shared.css';
</style>
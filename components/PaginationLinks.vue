<template>
  <div>
    <nuxt-link
      class="page-link"
      :to="`/`"
      exact-active-class="active-link"
    >
      1
    </nuxt-link>

    <nuxt-link
      v-if="pageId !== undefined && +pageId > 3"
      class="page-link"
      :to="`${+pageId - 1}`"
    >
      ...
    </nuxt-link>

    <nuxt-link
      v-if="!(+pageId > 3)"
      class="page-link"
      :to="`${2}`"
    >
      {{ 2 }}
    </nuxt-link>

    <nuxt-link
      v-if="+pageId > 3"
      class="page-link"
      :to="`${+pageId - 1}`"
    >
      {{ +pageId - 1 }}
    </nuxt-link>

    <nuxt-link
      v-if="+pageId > 2 && +pageId < lastPage"
      class="page-link"
      :to="`${pageId}`"
      exact-active-class="active-link"
    >
      {{ pageId }}
    </nuxt-link>

    <nuxt-link
      v-if="+pageId > 2 && +pageId < lastPage - 1"
      class="page-link"
      :to="`${+pageId + 1}`"
    >
      {{ +pageId + 1 }}
    </nuxt-link>

    <nuxt-link
      v-if="+pageId < lastPage - 2"
      class="page-link"
      :to="`${+pageId + 1}`"
    >
      ...
    </nuxt-link>

    <nuxt-link
      class="page-link"
      :to="`/${lastPage}`"
      exact-active-class="active-link"
    >
      {{ lastPage }}
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
interface Props {
  pageId: string | string[]
}

const props = defineProps<Props>();
const pageId = computed(() => {
  return props.pageId === undefined ? 1 : props.pageId
});

const lastPage = 59;

</script>

<style>
.page-link {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 60px;
  text-align: center;
  color: #FFFFFF;
  text-decoration: none;
  margin: 0 6px;
}

.active-link {
  font-size: 20px;
}
</style>
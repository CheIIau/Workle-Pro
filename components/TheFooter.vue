<template>
  <div class="footer">
    <div class="footer_pages">
      <pagination-links :page-id="route.params.id" />
    </div>
    <div class="footer_cart">
      <div class="footer_cart-total">
        {{ formattedCartTotal }} руб.
      </div>
      <div>
        <img
          class="footer_cart-img"
          src="../public/cart.svg"
          alt="cart"
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ComputedRef } from 'vue'
import { numberWithSpaces } from '~~/functions';
import { useCartStore } from '~~/store';
import { PaginationLinks } from '~~/.nuxt/components';

const store = useCartStore();
const route = useRoute();

const formattedCartTotal: ComputedRef<string> = computed(() => {
  return numberWithSpaces(store.getitemsInCart)
})
</script>

<style scoped>
.footer {
  height: 60px;
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #000;
  opacity: 0.9;
}

.footer_cart-img {
  margin-right: 10px;
  display: block;
}

.footer_cart-total {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  margin-right: 6px;
  align-items: center;
  text-align: right;
  color: #FFFFFF;
}

.footer_cart {
  display: flex;
}

.footer_pages {
  display: flex;
  justify-content: center;
  margin: 0 auto;
}

@media (min-width:480px) and (max-width:767px) {
  .footer_cart {
    position: absolute;
    right: 18px;
  }
}

@media (min-width:768px) and (max-width:999px) {
  .footer_cart {
    position: absolute;
    right: 53px;
  }
}

@media (min-width:1000px) {
  .footer_cart {
    position: absolute;
    right: 169px;
  }
}
</style>
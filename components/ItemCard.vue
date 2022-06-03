<template>
  <div class="card">
    <div class="card-header">
      <div>
        <a
          :href="props.userPageLink"
          target="_blank"
        >
          <img
            class="card-header__avatar"
            :src="props.profileImage"
            alt="avatar"
          >
        </a>
      </div>
      <div class="card-header-user">
        <div class="card-header-user__name">
          {{ props.name }}
        </div>
        <div>
          <a
            class="card-header-user__link"
            :href="props.userPageLink"
            target="_blank"
          >@{{ props.username }}</a>
        </div>
      </div>
    </div>
    <div class="flex">
      <img
        class="card-image"
        :src="props.url"
        alt="img"
      >
    </div>
    <div class="card-footer">
      <div>
        <div class="flex">
          <div class="card-footer-btns">
            <button
              class="card-footer-btns__btn card-footer-btns__btn_add"
              type="button"
              @click="addToCart"
            >
              +
            </button>
            <button
              class="card-footer-btns__btn card-footer-btns__btn_del"
              type="button"
              @click="removeFromCart"
            >
              -
            </button>
          </div>
          <p class="card-footer__card-count">
            {{ itemInCartCount }}
          </p>
        </div>
      </div>
      <div class="card-footer-price-container">
        <p class="card-footer-price-container__price">
          {{ formattedRandomPrice }} руб.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, ComputedRef } from 'vue';
import { numberWithSpaces } from '~~/functions';
import { useCartStore } from '~~/store';
const store = useCartStore();

interface Props {
  id: string,
  username: string,
  name: string,
  profileImage: string;
  userPageLink: string;
  url: string
}

const props = defineProps<Props>()

const randomPrice: Ref<number> = useState(props.id, () => { return Math.floor(Math.random() * (Math.floor(60000) - Math.ceil(1000) + 1)) + Math.ceil(1000) });

const formattedRandomPrice: ComputedRef<string> = computed(() => {
  return numberWithSpaces(randomPrice.value)
});

const itemInCartCount: ComputedRef<number> = computed(() => {
  return store.getCountById(props.id)
});

function addToCart() {
  store.addItemInCart(props.id, randomPrice.value);
}

function removeFromCart() {
  if (itemInCartCount.value) {
    store.removeItemFromCart(props.id)
  }
}

</script>

<style>
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<style scoped lang="scss">
.card {
  margin-bottom: 8px;
}

.card-header {
  display: flex;
  justify-content: flex-start;
  padding: 10px;
}

.card-header-user {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 10px;
}

.card-header-user__name {
  height: 12px;
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #333333;
  margin-bottom: 3px;
}

.card-header-user__link {
  height: 12px;
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #8D8D8D;
  text-decoration: none
}

.card-header__avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: block;
}

.card-image {
  width: 320px;
  height: 230px;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  font-family: 'Roboto Condensed';
  margin-top: 10px;
}

.card-footer-btns__btn {
  background-color: transparent;
  height: 17px;
  width: 17px;
  display: inline-block;
  border: none;
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 14px;
  cursor: pointer;
}

.card-footer-btns {
  margin: 0 5px;
}

.card-footer-btns__btn_add {
  margin-right: 2px;
}

.card-footer-price-container {
  display: flex;
  align-items: center;
}

.card-footer-price-container__price {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  color: #333333;
  margin-right: 10px;
}

.card-footer__card-count {
  width: 24px;
  height: 14px;

  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 14px;
  color: #333333;
}

@media (min-width:480px) and (max-width:767px) {
  .card-image {
    width: 440px;
    height: 300px;
  }
}
</style>
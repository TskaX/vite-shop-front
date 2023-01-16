<template lang="pug">
v-app-bar(color="primary")
  v-app-bar-title
    a(:href="/#/") 購物網
  v-spacer
  v-btn(v-if="!isLogin" append-icon="mdi-account-plus" variant="text" to="/register") 註冊
  v-btn(v-if="!isLogin" append-icon="mdi-login" variant="text" to="/login") 登入
  v-btn(v-if="isLogin" variant="text" to="/cart")
    v-badge(:content="cart" color="success" floating) 購物車
      v-icon(style="paddingLeft:5px") mdi-cart
  v-btn(v-if="isLogin" append-icon="mdi-format-list-bulleted" variant="text" to="/orders") 訂單
  v-btn(v-if="isLogin && isAdmin" append-icon="mdi-cog" variant="text" to="/admin") 管理
  v-btn(v-if="isLogin" append-icon="mdi-logout" variant="text" @click="logout") 登出
v-main
  v-container
    router-view
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'

const user = useUserStore()
const { isLogin, isAdmin, cart } = storeToRefs(user)
const { logout } = user
</script>

<style>
  .v-app-bar-title a {
    text-decoration: none;
    color:white;
  }
  .v-badge__wrapper {
    line-height: 18px;
  }
  .v-badge__badge {
    line-height: 1;
  }
</style>

<script setup lang="ts">
import { ref } from 'vue'
import Button from '../../components/common/VtsButton.vue'
const email = ref('')

const checkValid = () => {
  if (email.value.includes('@') && email.value.length > 5) {
    return true
  } else {
    return false
  }
}
</script>
<template>
  <div
    class="flex h-screen justify-start items-center shadow-lg transition-all ease-in-out w-full dark:bg-gray-700 md:bg-white bg-yellow-100"
  >
    <div
      class="flex lg:w-1/2 w-full h-full justify-center bg-white md:bg-white dark:bg-gray-700 dark:md:bg-gray-500 h-auto p-8 flex-col gap-y-6"
    >
      <div class="flex flex-col gap-y-4 w-full">
        <div class="flex justify-start items-start gap-y-2 flex-col">
          <h1
            class="dark:text-white font-sans text-gray-800 font-bold md:text-3xl text-2xl"
          >
            Lupa kata sandi
          </h1>
          <span
            class="md:text-md text-sm text-left font-medium font-sans dark:text-white text-gray-500"
            >Silahkan isi email yang didaftarkan. Link untuk mereset password
            akan dikirim ke email tersebut.</span
          >
        </div>
        <form action="post">
          <div
            class="flex flex-col h-full items-center justify-center w-full gap-y-6"
          >
            <div class="flex flex-col gap-y-6 w-full items-center">
              <div class="flex flex-col w-full gap-y-6">
                <div class="flex flex-col gap-y-3">
                  <label
                    for="email"
                    class="font-sans dark:text-white text-gray-500 text-sm"
                    >Email <span class="text-red-700 font-bold">*</span>
                  </label>
                  <input
                    v-model="email"
                    type="email"
                    name="email"
                    class="px-3 py-3 bg-gray-100 border shadow-md border-blue-200 dark:border-gray-300 placeholder-slate-500 focus:outline-none focus:ring-yellow-200 dark:focus:ring-gray-400 w-auto rounded-md sm:text-sm focus:ring-1"
                    placeholder="maulana@psu.org"
                  />
                </div>
              </div>
            </div>
            <div class="flex justify-end w-full">
              <span class="dark:text-white font-sans text-gray-500 font-medium"
                >Sudah ingat akun anda? mari
                <router-link class="text-blue-400" to="/login">
                  Masuk
                </router-link>
              </span>
            </div>
            <Button
              class="w-full"
              text="Reset Kata Sandi"
              :disabled="!checkValid()"
            />
            <span class="text-gray-500 dark:text-white font-medium font-sans"
              >Belum memiliki akun?
              <router-link class="text-blue-400" to="/register"
                >Daftar</router-link
              >
            </span>
          </div>
        </form>
        <span
          class="text-gray-500 text-center dark:text-white font-medium font-sans"
          >Kembali ke
          <router-link class="text-blue-400" to="/">Home</router-link>
        </span>
      </div>
    </div>
    <div
      class="lg:flex hidden w-full justify-center bg-gradient-to-bl from-blue-700 via-blue-400 to-blue-500 dark:bg-gray-700 h-full items-center"
    >
      <div class="flex flex-col gap-y-4"></div>
    </div>
  </div>
</template>

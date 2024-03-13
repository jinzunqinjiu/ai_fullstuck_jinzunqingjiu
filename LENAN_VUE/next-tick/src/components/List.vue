<template>
    <div>
        <ul>
            <li v-for=" n in list">{{ n }}</li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const list = ref(new Array(100).fill('0'))
</script>

<style lang="scss" scoped></style>
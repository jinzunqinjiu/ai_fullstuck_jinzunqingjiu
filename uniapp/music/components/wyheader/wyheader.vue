<template>
	<!-- #ifndef H5 -->
	<view class="head" v-if="needBox"></view>
	<!-- #endif -->
	<view class="header" :style="{backgroundColor: bgColor}">
		<uni-icons type="bars" size="22" @click="showMenu"></uni-icons>
		
		<view class="content">
			<!-- 添加一个插槽 -->
			<slot name="content"></slot>
		</view>
		
		<uni-icons :type="icon" size="22"></uni-icons>

	</view>
	<view class="box" v-if="needBox"></view>
</template>

<script setup>
	import { useStore } from 'vuex';
	const store = useStore()
	
	defineProps({
		icon: {
			type: String,
			default: 'mic'
		},
		bgColor: {
			type: String,
			default: '#fff'
		},
		needBox: {
			type: Boolean,
			default: true
		},
		fontColor: String
	})
	
	const showMenu = () => {
		store.commit('changeIsShowMenu', true)
	}
</script>

<style lang="scss" scoped>
.head{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 80rpx;
	background-color: #fff;
	z-index: 9999;
}
.header{
	// background-color: #fff;
	height: 100rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 15rpx;
	position: fixed;
	// #ifdef H5
	top: 0;
	// #endif
	// #ifndef H5
	top: 80rpx;
	// #endif
	left: 0;
	width: 100%;
	box-sizing: border-box;
	z-index: 999;
	color: v-bind(fontColor);
	:deep(.uni-icons){
		color: v-bind(fontColor) !important;
	}
}
.box{
	// #ifdef H5
	height: 100rpx;
	// #endif
	// #ifndef H5
	height: 180rpx;
	// #endif
}
</style>
<template>
	<view class="btn">
		<button type="default">按钮</button>
		<view class="iconfont">&#xe606;</view>
		<view class="iconfont icon-kitty"></view>
	</view>
</template>

<script setup>
import { onMounted,onUnmounted } from 'vue';
	onMounted(()=>{
	const reqTask=	uni.request({
			url:'https://mock.mengxuegu.com/mock/65a9154ec4cd67421b34c8b7/movie/movieList',
			method:'GET',
			success: (res) => {
				console.log(res)
				
				uni.setStorage({
					key:'movieName',
					data:res.data.movieList[0].nm,
					success(){
						uni.showToast({
							title: '保存成功',
							duration: 2000,
							icon:'success'
						});
					}
				})
			}
		})
	})
	onUnmounted(()=>{//卸载时中止请求
		reqTask.abort()
	})
</script>

<style lang="scss">
	.btn{
		button{
			width: 750rpx; //根据屏幕宽度制定的响应式单位
		}
	}
	
</style>

<template>
    <div class="note-list">
        <Back />
        <ul v-if="state.noteList.length">
            <li v-for="item in state.noteList" :key="item.id" @click="goNoteDetail(item.id)" @touchstart="startTouch"
                @touchend="endTouch(item.id)">
                <div class="img">
                    <img :src="item.head_img" alt="">
                </div>
                <p class="time">{{ item.c_time }}</p>
                <p class="title">{{ item.title }}</p>
            </li>
        </ul>
        <p class="empty" v-else>当前分类下还没有文章哦~~</p>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { reactive, onMounted } from 'vue';
import axios from '@/api';
import Back from '@/components/Back.vue'

const state = reactive({
    noteList: []
})
const route = useRoute();
const router = useRouter();
onMounted(async () => {
    //请求xxxx分类的数据
    const res = await axios.post('/findNoteListByType', {
        note_type: route.query.title
    })
    state.noteList = res.data
    if (state.noteList.length) {
        showToast('点击可查看，长按可删除')
    }

})
const goNoteDetail = (id) => {
    router.push({ path: '/NoteDetail', query: { id: id } })
}

let last = 0
let now = 0
const startTouch = () => {
    last = new Date()
    console.log('开始滑动', last);
}
const endTouch = (id) => {
    now = new Date()
    if (now - last > 500) {
        showConfirmDialog({
            title: '你确定要删除嘛',
            message:
                '友友，干嘛想不开呢，这可是你美好的回忆啊。'
        })
            .then(async () => {
                // on confirm
                console.log('删除了');
                const res = await axios.post('/deleteNoteById', {
                    id: id
                })
                showToast('删除成功');
                setTimeout(() => {
                    router.back()
                }, 1000);
            })
            .catch(() => {
                // on cancel
                return
            });
        last = 0
        now = 0
    }
}
</script>

<style lang="less" scoped>
.note-list {
    width: 100%;
    padding: 1rem 0.667rem 0;
    box-sizing: border-box;

    ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 50px;
        grid-row-gap: 30px;

        li {
            img {
                width: 100%;
                height: 4rem;
                border-radius: 0.27rem;
            }

            .time {
                font-size: 0.37rem;
                color: rgba(16, 16, 16, 1);
                margin: 10px 0 5px 0;
            }

            .title {
                width: 3.5rem;
                font-size: 0.37rem;
                color: rgba(16, 16, 16, 1);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
}
</style>
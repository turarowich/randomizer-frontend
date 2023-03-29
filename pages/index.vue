<template>
    <div class="result">
        <div class="result-title">Победители</div>
        <div class="result-list">
            <div v-for="item in numList" class="result-item">
                {{item}}
            </div>
        </div>
    </div>
</template>

<script>
import { ref, reactive, useStore, useRouter,computed } from '@nuxtjs/composition-api'
import { io } from "socket.io-client";
export default {
    name: 'Index',
    setup() {
        const URL = "http://188.225.75.140:3000/:4000";
        const socket = io(URL);
        const list = ref([0,0,0,0,0,0,0,0,0])
        const numList = computed(() => list.value.map(item => {
            console.log(item);
            if(item.toString().length < 6) {
                return '0'.repeat(6 - item.toString().length) + item.toString()
            }
            return item
        }))
        const interval = ref(0)
        const random = (max) => {
            return Math.floor(Math.random() * max)
        }
        socket.on("connect", () => {});
        socket.on('start', ({size, max}) => {
            list.value = []
            for(let i = 0; i < size; i++) {
                list.value.push(0)
            }
            interval.value = setInterval(() => {
                list.value = list.value.map(i => {
                    return random(max)
                })
            }, 20)
        })
        socket.on('stop', ({result}) => {
            list.value = result
            clearInterval(interval.value)
        })
        socket.on('reset', () => {
            list.value = [0,0,0,0,0,0,0,0,0]
        })
        return {
            numList,
        }
    }
}
</script>

<style lang="scss">
.result{
    width: 100%;
    height: 100vh;
    background: url(/resbg.png) no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    &-title{
        font-weight: 500;
        font-size: 63px;
        line-height: 80px;
        color: #FFFFFF;
    }
    &-list{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 30px;
        width: 90%;
    }
    &-item{
        font-weight: 500;
        font-size: 106px;
        line-height: 134px;
        color: #FFFFFF;
    }
}
</style>
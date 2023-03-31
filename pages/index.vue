<template>
    <div class="result">
        <div class="result-title">Победители</div>
        <img src="@/assets/logo.png" alt="" class="result-logo">
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
        const URL = process.env.NODE_ENV !== 'production' ? "http://localhost:4000" : 'http://188.225.75.140:4000'
        const socket = io(URL);
        const list = ref([0,0,0,0,0,0,0,0,0,0,0,0])
        const numList = computed(() => list.value.map(item => {
            if(item.toString().length < 4) {
                return '0'.repeat(4 - item.toString().length) + item.toString()
            }
            return item
        }))
        const interval = ref(0)
        const random = (max, min) => {
            return Math.floor(Math.random() * (max - min) + min)
        }
        socket.on("connect", () => {});
        socket.on('start', ({size, max, min}) => {
            list.value = []
            for(let i = 0; i < size; i++) {
                list.value.push(0)
            }
            clearInterval(interval.value)
            interval.value = setInterval(() => {
                list.value = list.value.map(i => {
                    return random(max, min)
                })
            }, 20)
        })
        socket.on('stop', ({result, max, min}) => {
            list.value = result
            clearInterval(interval.value)
            let time = 0
            interval.value = setInterval(() => {
                time += 20
                list.value = list.value.map((i,k) => {
                    if((2500 / result.length) * k > time) {
                        return random(max, min)
                    }
                    return i
                })
            }, 20)
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
    &-logo{
        position: absolute;
        right: 20px;
        top: 20px;
        width: 100px;
    }
    &-title{
        font-weight: 500;
        font-size: 63px;
        line-height: 80px;
        color: #FFFFFF;
        font-family: 'Druk Text Wide Trial', sans-serif;
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
        text-align: center;
        font-family: 'Druk Text Wide Trial', sans-serif;
    }
    @media (max-width: 1400px) {
        &-title{
            font-size: 43px;
        }
        &-list{
            width: 100%;
        }
        &-item{
            font-size: 76px;
            line-height: 84px;
        }
    }
    @media (max-width: 960px) {
        &-title{
            font-size: 23px;
        }
        &-list{
            width: 90%;
        }
        &-item{
            font-size: 36px;
            line-height: 44px;
        }
    }
}
</style>
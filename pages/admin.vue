<template>
  <div class="index">
    <div class="default-container">
      <div class="index__content">
        <div class="index__content_header">
          <h1 class="index__content_header-title">Настройка рандомайзера</h1>
          <div class="index__content_header-settings">
            <div class="index__content_header-settings-block">
              <div>Диапазон участников </div>
              <div>
                <input v-model="min" type="text" placeholder="от 1">
                <div>-</div>
                <input v-model="max" type="text" placeholder="до 12000">
              </div>
            </div>
            <div class="index__content_header-settings-block">
              <div>Количество победителей</div>
              <div>
                <input v-model="numLength" type="text" placeholder="от 1 до 9">
              </div>
            </div>
            <div class="index__content_header-settings-block">
              <div>Опции</div>
              <div>
                <ui-checkbox v-model="doSave" >Запомнить результаты</ui-checkbox>
                <div @click="history = []">Очистить историю</div>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-title">Победители</div>
          <div class="card-winners">
            <div v-for="(item) in numList" class="card-winner">
              {{item}}
            </div>
          </div>
          <div class="card-handlar">
            <button @click="reset" outline>СБРОСИТЬ</button>
            <button @click="startStopHand">{{ isStarted ? 'СТАРТ' : 'СТОП' }}</button>
          </div>
        </div>
        <div class="cards">
          <div v-for="(card,k) in history" class="card">
            <div class="card-title">Победители #{{ k + 1 }}</div>
            <div class="card-winners">
              <div v-for="(item) in card" class="card-winner">
                {{item}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, watch, onMounted ,computed } from '@nuxtjs/composition-api'
import { io } from "socket.io-client";
export default {
  name: 'Pageindex',
  components: {
  },
  setup () {
    const interval = ref(0)
    const numLength = ref(12)
    const list = ref([0,0,0,0,0,0,0,0,0,0,0,0])
    const history = ref([])
    const numList = computed(() => list.value)
    const started = ref(true)
    const max = ref(12000)
    const min = ref(1)
    const isStarted = computed(() => started.value)
    const doSave = ref(false)
    watch(numLength, (newLength) => {
      if(!newLength) return list.value = [0];
      if(newLength > 12) {
        numLength.value = 12
      }
      list.value = []
      for(let i = 0; i < newLength; i++) {
        list.value.push(0)
      }
    })
    const URL = process.env.NODE_ENV !== 'production' ? "http://localhost:4000" : 'http://188.225.75.140:4000'
    const socket = io(URL, {
      withCredentials: true
    });
    // onMounted(() => {
    //   socket.on("connect", () => {
    //     socket.on('initHistory', ({history}) => {
    //       history.value = history
    //     })
    //   });
    //   socket.on('initHistory', ({history}) => {
    //       history.value = history
    //   })
    // })
    const random = (max, min) => {
      return Math.floor(Math.random() * (max - min) + min)
    }

    const start = () => {
      socket.emit("start", {size: numLength.value, max: max.value, min: min.value});
      interval.value = setInterval(() => {
        list.value = list.value.map(i => {
          return random(max.value, min.value)
        })
      }, 20)
    }

    const stop = () => {
      socket.emit("stop", {result: list.value,max: max.value, min: min.value});
      clearInterval(interval.value)
      if(doSave.value) {
        history.value.push(list.value)
      }
    }
    const startStopHand = () => {
      if(started.value) {
        start()
      } else {
        stop()
      }
      started.value = !started.value
    }
    const reset = () => {
      socket.emit("reset");
      list.value = [0,0,0,0,0,0,0,0,0,0,0,0]
    }
    return {
      numLength,
      numList,
      started,
      startStopHand,
      reset,
      max,
      min,
      history,
      isStarted,
      doSave
    }
  }
}
</script>

<style lang="scss" scoped>
  .index {
    &__content {
      padding: 32px;
      margin-top: 48px;
      & .cards {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      & .card{
        background: #FFFFFF;
        border: 2px solid #9155FD;
        box-shadow: 0px 2px 12px -4px rgba(58, 53, 65, 0.1), 0px 2px 12px -4px rgba(58, 53, 65, 0.08), 0px 6px 16px -4px rgba(58, 53, 65, 0.1);
        border-radius: 6px;
        padding: 20px;
        display: grid;
        grid-gap: 10px;
        &-title{
          font-family: 'Inter';
          font-weight: 500;
          font-size: 20px;
          line-height: 32px;
          letter-spacing: 0.15px;
          color: rgba(58, 53, 65, 0.87);
        }
        &-winners{
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }
        &-winner{
          padding: 10px;
          background: linear-gradient(0deg, rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.88)), #9155FD;
          border-radius: 6px;
          font-family: 'Inter';
          font-weight: 400;
          font-size: 48px;
          line-height: 116.7%;
          text-align: right;
          color: #9155FD;
        }
        &-handlar{
          display: flex;
          width: 100%;
          gap: 10px;
          button{
            background: #9155FD;
            box-shadow: 0px 4px 6px -4px rgba(58, 53, 65, 0.1), 0px 6px 10px -4px rgba(58, 53, 65, 0.08), 0px 4px 8px -4px rgba(58, 53, 65, 0.16);
            border-radius: 5px;
            width: 100%;
            padding: 8px;
            color: #fff;
          }
          button[outline]{
            border: 1px solid #9155FD;
            background: #fff;
            color: #9155FD;
          }
        }
      }
      &_header {
        margin-bottom: 32px;
        &-title{
          font-family: 'Inter';
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 32px;
          letter-spacing: 0.15px;
          color: rgba(58, 53, 65, 0.87);
        }
        &-settings{
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          margin-top: 20px;
          grid-gap: 10px;
          &-block{
            display: grid;
            grid-template-rows: .1fr 1fr;
            grid-gap: 20px;
            padding: 20px;
            background: #FFFFFF;
            box-shadow: 0px 2px 12px -4px rgba(58, 53, 65, 0.1), 0px 2px 12px -4px rgba(58, 53, 65, 0.08), 0px 6px 16px -4px rgba(58, 53, 65, 0.1);
            border-radius: 6px;
            &:first-child div{
              display: flex;
              align-items: center;
              gap: 20px;
            }
            &:last-child div{
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              align-items: flex-start;
              gap: 20px;
              div, label {
                width: 100%;
                align-items: flex-start;
                cursor: pointer;
                color: rgba(58, 53, 65, 0.6);
              }
            }
            div{
              &:first-child{
                font-family: 'Inter';
                font-weight: 500;
                font-size: 20px;
                line-height: 32px;
                letter-spacing: 0.15px;
                color: rgba(58, 53, 65, 0.6);
              }
              &:last-child{
                display: flex;
                align-items: center;
                height: 100%;
              }
            }
            input{
              border: 1px solid rgba(58, 53, 65, 0.23);
              border-radius: 6px;
              height: 56px;
              padding: 0 12px;
              width: 100%;
            }
          }
        }
      }
      &-body {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 100%;
        padding: 24px 0;
        border-top: 1px solid #D4DBEE;
        border-bottom: 1px solid #D4DBEE;
        margin-bottom: 32px;
        .win {
          display: flex;
          flex-direction: column;
          padding: 16px;
          gap: 8px;
          background: #FFFFFF;
          border-radius: 8px 8px 8px 0;
          box-shadow: 0 6px 16px rgba(171, 185, 205, 0.25);
          width: max-content;

          &__info {
            display: flex;
            gap: 8px;
            h2 {
              font-weight: 600;
              font-size: 18px;
              line-height: 22px;
              color: #000000;
            }
            p {
              font-weight: 600;
              font-size: 12px;
              line-height: 16px;
              color: #000000;
            }
          }
          &__text {
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: #000000;
          }
        }
      }
      &-body-winners{
        min-height: 90vh;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
      &-submit {
        display: grid;
        grid-template-columns: 1fr;
        gap: 16px;

        p {
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          color: #8B95AD;
          width: 100%;
        }
      }
    }
  }
</style>

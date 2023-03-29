<template>
  <label :class="['checkbox', { err: error }]">
    <input :value="modelValue" :checked="modelValue" type="checkbox" @change="changeValue">
    <span class="checkbox__span" />
    <slot />
  </label>
</template>

<script>

export default {
  name: 'UiCheckbox',
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    }
  },

  setup (props, { emit }) {
    const changeValue = (e) => {
      emit('change', !props.modelValue)
    }

    return {
      changeValue
    }
  }
}
</script>

<style lang="scss" scoped>
.checkbox {
  display: flex;
  align-items: center;
  column-gap: 11px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color:  rgba(58, 53, 65, 0.87);;

  &.err {
    color: #BA1B1B;
    .checkbox__span {
      border-color: #BA1B1B;
    }
  }

  &__span {
    position: relative;
    display: block;
    min-width: 18px;
    min-height: 18px;
    max-width: 18px;
    max-height: 18px;
    border: 1px solid #D4DBEE;
    border-radius: 3px;
    box-sizing: border-box;
    transition: 0.3s;
    cursor: pointer;

    &:before {
      content: '';
      display: block;
      width: 5px;
      height: 10px;
      border-right: 2px solid #fff;
      border-bottom: 2px solid #fff;
      position: absolute;
      top: 2px;
      left: 6px;
      transform: rotateZ(40deg);
      transition: 0.3s;
      opacity: 0;
    }
  }

  input {
    display: none;

    &:checked + span {
      border-color: #9155FD;
      background-color: #9155FD;

      &:before {
        opacity: 1;
      }
    }
  }

  a {
    text-decoration: none;
    color: #9155FD;
  }
}
</style>

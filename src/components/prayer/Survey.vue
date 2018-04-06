<template>
  <b-card class="text-center" border-variant="primary">
    <h1>How Often Do You Pray?</h1>
    <div class="text-center mid-buffer">
      <b-row><b-col>
      <h5>select below:</h5>
      </b-col></b-row>
      <b-row><b-col>
      <vue-slider v-model="value" v-bind="sliderVars"></vue-slider>
      </b-col></b-row>
    </div>
  </b-card>
</template>

<script>
import vueSlider from 'vue-slider-component'
import { trackEvent } from '../mixins/trackEvent'
import { eventBus } from '../../main'

export default {
  data () {
    return {
      value: 'daily',
      sliderVars: {
        data: [
          'none',
          'little',
          'daily',
          'always',
          'nonstop'
        ],
        tooltip: false,
        dotSize: 25,
        sliderStyle: {
          backgroundColor: '#FFC107'
        },
        piecewise: true,
        piecewiseLabel: true,
        piecewiseStyle: {
          backgroundColor: '#ccc',
          visibility: 'visible',
          width: '15px',
          height: '15px'
        },
        piecewiseActiveStyle: {
          backgroundColor: '#3498db'
        },
        labelActiveStyle: {
          color: '#3498db'
        },
        lazy: true,
        width: '80%',
        style: {
          marginLeft: '10%'
        }
      }
    }
  },
  watch: {
    value (value) {
      this.trackEvent('slideTo', value)
      eventBus.$emit('valueChanged', value)
    }
  },
  components: {
    vueSlider
  },
  mixins: [trackEvent]
}
</script>

<style scoped>
h1 {
  font-family: 'Poppins', Tahoma, Geneva, sans-serif;
  font-style: 'Semi-Bold';
  font-size: calc(2em + 3vw);
}

h2 {
  font-family: 'Copse', "Courier New", Courier, monospace;
  color: #3498db;
  font-size: calc(1.8em + 2vw);
}

.ourComment {
  font-family: 'Poppins', Tahoma, Geneva, sans-serif;
  font-style: 'Regular';
  font-size: calc(1em + 0.1vw);
  margin-top: 1vmax;
}

.mid-buffer {
  margin-top: 2vw;
}
</style>
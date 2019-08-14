<template>    
    <div class="tree-menu">
        <!-- <div class="label-wrapper" @click="toggleChildren" v-animation> -->
        <div class="label-wrapper" @focus="toggleChildren" v-animation>
            <div :style="indent" :class="labelClasses">
                <a href="#" v-if="nodes">+<strong> {{ label }} </strong></a>
                <a href="#" v-else>{{ label }}</a>
            </div>
        </div>
        <section v-if="showChildren" @mouseleave="toggleChildren">
            <tree-menu 
            v-for="node in nodes" 
            :nodes="node.children" 
            :label="node.label"
            :depth="depth + 1"   
            :key="node.id"
            >
        </tree-menu>
        </section>
    </div>
</template>

<script>
export default {
    name: 'tree-menu',
  props: [ 'nodes', 'label', 'depth' ],
  data() {
     return {
       showChildren: false,
     }
  },
  computed: {
    labelClasses() {
      return { 'has-children': this.nodes }
    },
    indent() {
      return { transform: `translate(${this.depth * 20}px)` }
    }
  },
  methods: {
    toggleChildren() {
       this.showChildren = !this.showChildren;
    }
  }
}
</script>
<style scoped>
.label-wrapper {
    display: inline-block;
    padding-left: 2em;
    padding-right: -1em;
    background-color: aquamarine;
}

.label-wrapper.v-enter {
    animation: fadein .20s;
}

.label-wrapper.v-leave {
    animation: fadeout .20s;
}

@keyframes fadein {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
}

@keyframes fadeout {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(0);
    }
}
</style>

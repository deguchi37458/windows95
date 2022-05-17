<template>
<nav 
    class="grid-container"
    :style="{height: gridHeight}"
>
    <li>
        <button class="icon" @touchstart="openWindow(windows[0].windowId)" @dblclick="openWindow(windows[0].windowId)">
            <img class="icon-image" :src="require('../assets/win95Icons/' + windows[0].iconImage)" :alt="windows[0].altText" />
            <div class="border">
            <p class="icon-text">
                {{windows[0].displayName}}
            </p>
            </div>
        </button>
    </li>
    <li>
        <button class="icon" @touchstart="openGithub()" @click="openGithub()">
            <img class="icon-image" :src="require('../assets/win95Icons/' + 'github.png')" alt="GitHub" />
            <div class="border">
            <p class="icon-text">
                GitHub
            </p>
            </div>
        </button>
    </li>
</nav>
</template>

<style scoped>
.icon-text {
    font-size: 12px;
    font-weight: 300;
}

.icon:hover {
    cursor: pointer;
}
</style>

<script>
export default {
    name: 'AppGrid',
    data: function () {
        return {
            windows: this.$store.getters.getWindows,
            gridHeight: ''
        }
    },
    methods: {
        openWindow(windowId) {
            const payload = {
                'windowState': 'open',
                'windowID': windowId
            }
            this.$store.commit('setWindowState', payload)
        },
        openGithub() {
            window.open("https://github.com/deguchi37458"); 
        }
    },
    mounted() {
        let gridH =  this.$store.getters.getFullscreenWindowHeight
        this.gridHeight = gridH.substring(0, gridH.length - 2) - 60 + 'px'
    },
}
</script>

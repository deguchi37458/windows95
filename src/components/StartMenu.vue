<template>
    <div class="menu" style="z-index: 1000000;">
        <div class="sidebar">
            <img class="sidebar-image" src="@/assets/sidebar-image.png"/>
        </div>
        <div class="socials">
            <div class="bar" @click="openWindow(windows[1].windowId)">
                <img class="social-image" src="@/assets/file.png"/>
                ﾚｼﾞｭﾒ(<u>R</u>)
            </div>
            <div class="bar" @click="openWindow(windows[2].windowId)">
                <img class="social-image" src="@/assets/run.png"/>
                制作実績(<u>W</u>)
            </div>
            <div class="bar" @click="openWindow(windows[3].windowId)">
                <img class="social-image" src="@/assets/run.png"/>
                ｵｰﾌﾟﾝｿｰｽ(<u>S</u>)
            </div>
            <div class="bar" @click="openWindow(windows[4].windowId)">
                <img class="social-image" src="@/assets/help.png"/>
                ﾍﾙﾌﾟ(<u>H</u>)
            </div>
            <div class="divider"></div>
            <div class="bar" @click="openWindow(windows[5].windowId)">
                <img class="social-image" src="@/assets/shut-down.png"/>
                Windows の終了(<u>U</u>)...
            </div>
        </div>
    </div>
</template>
<style scoped>
.menu {
    width: 250px;
    height: 282px;
    background: black;
    background: rgb(195, 195, 195);
    overflow: hidden;
    border-top: solid rgb(250, 250, 250) 2px;
    border-left: solid rgb(250, 250, 250) 2px;
    border-right: solid rgb(90, 90, 90) 1.5px;
    border-bottom: solid rgb(90, 90, 90) 1.5px;
    box-shadow: 1.5px 1.5px black;
    max-height: 100%;
    max-width: 100%;
    align-items: flex-end;
    outline: rgb(222, 222, 222) 1px solid;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    font-size: 12px;
}

a {
    color: black;
    text-decoration: none;
}

.sidebar {
    width: 25px;
    background: rgb(123, 125, 123);
    height: 100%;
    display: flex;
    align-items: flex-end;
}

.sidebar-image {
    width: 100%;
}

@media only screen and (max-width: 600px) {
    .sidebar {
        width: 25px;
        background: rgb(123, 125, 123);
        height: 100%;
        display: flex;
        align-items: flex-end;
    }
}

.divider {
    width: 100%;
    height: 1px;
    background: rgb(123, 125, 123);
    border-bottom: white solid 1px;
}

.socials {
    flex-grow: 1;
}

.social-image {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border-radius: 6px;
}

.bar {
    display: flex;
    flex-direction: row;
    padding: 5px 10px;
    align-items: center;
}

.bar:hover {
    background: rgb(0, 0, 118);
    color: white;
    cursor:pointer;
}
</style>
<script>
export default {
    name: 'StartMenu',
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
        }
    },
    mounted() {
        let gridH =  this.$store.getters.getFullscreenWindowHeight
        this.gridHeight = gridH.substring(0, gridH.length - 2) - 60 + 'px'
    },
}
</script>
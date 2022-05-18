<template>
<div>
    <div class="inner-content">
        <p>Windowsを終了しますか？</p>
    </div>
    <div class="cancel">ｷｬﾝｾﾙ</div>
</div>
</template>

<style scoped>
.heading {
    margin-bottom: 20px;
}

.inner-content {
    padding-top: 30px;
}

img {
    width: 100%;
    height: auto;
}

.cancel {
    width: 65px;
    margin: 5px;
    height: 25px;
    box-shadow: 1.5px 1.5px black;
    border-top: solid rgb(250, 250, 250) 1.5px;
    border-left: solid rgb(250, 250, 250) 1.5px;
    border-bottom: solid rgb(90, 90, 90) 1.5px;
    border-right: solid rgb(90, 90, 90) 1.5px;
    background: rgb(192, 192, 192);

    display: flex;
    /* justify-content: space-between; */
    justify-content: center;
    align-items: center;
}

.cancel:hover {
    cursor: pointer;
}

.cancel:active {
    background: rgb(192, 192, 192);
    box-shadow: none;
    border-top: solid rgb(0, 0, 0) 1.5px;
    border-left: solid rgb(0, 0, 0) 1.5px;
    border-bottom: solid rgb(250, 250, 250) 1.5px;
    border-right: solid rgb(250, 250, 250) 1.5px;
}
</style>

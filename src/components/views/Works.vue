<template>
<div>
    <h2 class="header">制作実績</h2>
    <div class="inner-content">
        <h3 class="heading"><b>ﾎﾟｰﾄﾌｫﾘｵ</b></h3>
        <img src="@/assets/Works/deguchihi.png" alt="deguchihi.net">
        <p class="paragraph">WordPressを使用したﾎﾟｰﾄﾌｫﾘｵｻｲﾄです。</p>
        <a href="https://deguchihi.net">https://deguchihi.net</a>
    </div>
</div>
</template>

<style scoped>
.badge-grid {
    display: table;
    align-items: center;
    margin-top: 20px;
}

.badge {
    width: auto;
    height: 20px;
    border-radius: 0px;
    font-size: 12px;
    padding-right: 10px;
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 6px 20px 0 rgba(0, 0, 0, 0.1); */
}

.self {
    width: 100%;
    height: auto;
    /* border-radius: 5px; */
}

.subtitle {
    font-size: 12px;
    color: gray;
}

.heading {
    padding-bottom: 5px;
}

.header {
    padding-top: 20px;
    padding-bottom: 20px;
    font-weight: normal;
}

.inner-content {
    padding-top: 30px;
}

h2, h4, h3 {
    padding: 0;
    margin: 0;
}

img {
    width: 100%;
    height: auto;
}
</style>

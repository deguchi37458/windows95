<template>
<div>
    <h2>ｵｰﾌﾟﾝｿｰｽ</h2>

    <div class="inner-content">
        
    </div>

    <div class="inner-content">
        <a href="https://main-preview-site.netlify.app/" target="_blank">
            <img src="@/assets/open-source/main.png" alt="screenshot of main preview template" />
            <h4 class="subtitle">Main Preview Page</h4>
        </a>
    </div>

    <div class="inner-content">
        <a href="https://windows-template.netlify.app/" target="_blank">
            <img src="@/assets/open-source/win95.png" alt="screenshot of windows 95 template" />
            <h4 class="subtitle">Windows 95 Theme</h4>
        </a>
    </div>

    <div class="inner-content">
        <a href="https://macos-template.netlify.app/" target="_blank">
            <img src="@/assets/open-source/macos.png" alt="screenshot of MacOS template" />
            <h4 class="subtitle">MacOS Theme</h4>
        </a>
    </div>

    <div class="inner-content">
        <a href="https://blueprint-template.netlify.app/" target="_blank">
            <img src="@/assets/open-source/blueprint.png" alt="screenshot of blueprint template" />
            <h4 class="subtitle">Blueprint Theme</h4>
        </a>
    </div>
</div>
</template>

<style scoped>
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
    padding-bottom: 20px;
}

.header {
    padding-top: 20px;
    padding-bottom: 20px;
}

.inner-content {
    padding-top: 30px;
}

h2,
h4,
h3 {
    padding: 0;
    margin: 0;
}

img {
    width: 100%;
    height: auto;
}

a, .subtitle {
    color: #FF5733 !important;
}
</style>

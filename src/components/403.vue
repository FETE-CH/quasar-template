<template>
    <q-layout id="forbidden">
        <q-page-container class="forbidden">
            <div class="forbidden-403">
                <h1>403</h1>
            </div>
            <h2>禁止访问</h2>
            <p>很抱歉，您无权访问此页面！如有需要请联系网站管理员。</p>
            <a href="/">回到主页</a>
        </q-page-container>
    </q-layout>
</template>

<script>
export default {
    name: 'Forbidden',
};
</script>

<style scoped>

#forbidden {
    position: relative;
    height: 100vh;
}

#forbidden .forbidden {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.forbidden {
    max-width: 767px;
    width: 100%;
    line-height: 1.4;
    padding: 0px 15px;
}

.forbidden .forbidden-403 {
    position: relative;
    height: 150px;
    line-height: 150px;
    margin-bottom: 25px;
}

.forbidden .forbidden-403 h1 {
    font-family: 'Titillium Web', sans-serif;
    font-size: 186px;
    font-weight: 900;
    line-height: normal;
    margin: 0;
    text-transform: uppercase;
    background: url('../assets/404.png');
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: cover;
    background-position: center;
}

.forbidden h2 {
    font-family: 'Titillium Web', sans-serif;
    font-size: 26px;
    font-weight: 700;
    margin: 0;
}

.forbidden p {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 0px;
    text-transform: uppercase;
}

.forbidden a {
    font-family: 'Titillium Web', sans-serif;
    display: inline-block;
    text-transform: uppercase;
    color: #fff;
    text-decoration: none;
    border: none;
    background: #5c91fe;
    padding: 10px 40px;
    font-size: 14px;
    font-weight: 700;
    border-radius: 1px;
    margin-top: 15px;
    -webkit-transition: 0.2s all;
    transition: 0.2s all;
}

.forbidden a:hover {
    opacity: 0.8;
}

@media only screen and (max-width: 767px) {
    .forbidden .forbidden-403 {
        height: 110px;
        line-height: 110px;
    }

    .forbidden .forbidden-403 h1 {
        font-size: 120px;
    }
}

</style>

<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <footer>
      <div class="container">
        <div class="footer-inner">
          <p>Scandiweb Test assignment</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
  * {
    font-family: "Helvetica-Roman";
    text-decoration: none;
    outline-color: none;
    box-sizing: border-box;

    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
  }
  html {
    overflow-x: hidden;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
    overflow: hidden;
  }
  body {
    margin: 0;
     -webkit-text-size-adjust:100%;
    -moz-text-size-adjust:100%;
    -ms-text-size-adjust:100%;
    text-size-adjust: 100%;
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
  }
  ul,li,ol,p,img,h1,h2,h3,h4,h5,h6,input,button,nav {
    padding: 0;
    margin: 0;
    list-style: none;
    font-weight: normal;
    font-size: unset;
    margin: unset;
  }
  input , textarea {
    outline: none;
    box-shadow: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  button {
    border: none;
    background: none;
    cursor: pointer;
    outline: none;
  }
  #app{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  footer{
    margin-top: auto;
  }
  .footer-inner{
    margin-top: 40px;
    padding: 20px 0;
    text-align: center;
    font-size: 13px;
    border-top: 1px solid #ccc;
  }
  @font-face {
    font-family: "Helvetica-Roman";
    src: url("assets/fonts/HelveticaNeueLTGEO-55Roman.otf");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Helvetica-Bold";
    src: url("assets/fonts/HelveticaNeueLTGEO-75Bold.otf");
    font-weight: normal;
    font-style: normal;
  }
  .bold {
    font-family: "Helvetica-Bold";
  }
  .f-55{
    font-size: 55px;
  }
  .container{
    max-width: 1920px;
    margin: 0 auto;
    padding: 0 89px;
  }
  @media(max-width: 1599px){
    .container{
      padding: 0 55px;
    }
    .f-55{
      font-size: 34px;
    }
  }
  @media(max-width: 1365px){
    .container{
      padding: 0 34px;
    }
  }
  @media(max-width: 1023px){
    .container{
      padding: 0 16px;
    }
    .f-55{
      font-size: 21px;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }
  .el-button{
    text-transform: uppercase;
  }
</style>

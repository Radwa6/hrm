<template>
  <div class="TheFooter" dir="rtl">
    <div class="row">
      <div class="col-sm-3" style="margin-bottom: 60px">
        <img :src="imageUrl" alt="image" />
        <p style="margin: 40px 0 20px">
          ارفع نسب الإنجاز في إدارتك الآن عبر منصتنا حيث نوفر لكم يوفر لك حلاً
          قويًا لكل ما يخص عمليـات إدارة الموارد البشرية
        </p>
        <img :src="imageUrl1" alt="image" style="margin-left: 10px" />
        <img :src="imageUrl2" alt="image" />
      </div>
      <div class="col-sm-3" style="margin-bottom: 60px">
        <h1>روابط هامة</h1>
        <ul>
          <li>الرئيسية</li>
          <li>شركاء النجاح</li>
          <li>خدماتنا</li>
          <li>عن النظام</li>
        </ul>
      </div>
      <div class="col-sm-3" style="margin-bottom: 60px">
        <h1>روابط هامة</h1>
        <ul>
          <li>إدارة الموارد البشرية</li>
          <li>إدارة فريق العمل</li>
          <li>الحضور والانصراف</li>
          <li>الخدمة الذاتية</li>
        </ul>
      </div>
      <div class="col-sm-3" style="margin-bottom: 60px">
        <h1>تواصل معانا</h1>
        <ul>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              height="1.2rem"
              fill="#DF8317"
            >
              <path
                d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
              />
            </svg>
            onest@gmail.com
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              height="1.2rem"
              fill="#DF8317"
            >
              <path
                d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
              />
            </svg>
            +502034590999
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              height="1.2rem"
              fill="#DF8317"
            >
              <path
                d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
              />
            </svg>
            الرياض- السعودية
          </li>
          <li class="social">
            <a target="_blank" href="">
              <img
                class="XNo5Ab"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAD30lEQVR4AayShW4cMRCGLQgzHArKDK9xor5KnyDMSZmZmZmZRWWuKMy8e3y7U8/KvXG6PlR+6dM3Wtv/tElYulnzHXI918HnvQZ7PNfgGfdvz1XQEJzFtz14B++y+crCO+D2XoG97ssw475swhwuGWSOK26T3zX24luWbZbehTxe1uS+YOiuCzGwOB+3mA2yAvcFU8cO7Mrsf30R3Lz4nfMcL+eglZyNkm3QGXZhJ0snzrOw3nE61uc4zQs4wmKOxC3PaIszZA4/I2On6zSsY8ni4P9Kx6loX/WJMCCOk5G47dCZ+r79HLtxR8LfueN45F318TDEORYiW4TJHBcvbf8QhT/TJoRiJkQME2bCJvRpJnwaM8TbuX24Q/k3wS82VR0JwRwOB8nSjF5xJgRvhgxIEtEj3kngLibHcQzc1YdDetWhICSj8iD5UW8MUsX+PoBGdNzJ/qXqQHBv5f4AVHCEBX4yp1LMG26EIJ2I+2hpFn18J8OsuQi5lXv9MxV7/ZAul35HIY0k7cCduJtV7tN95bt0sNgdt5g1sjR/GrX/+E9+j8DyI35xV7eh6q/cpftY2Q5tDwfSoVxYj5jwf5Yf4qV0j+bknXtY2bbZZxxIh9KtlkERfjaD52QFcgdSvl17xkq3zP4u3TwDSAlZAZ2pgmeZgrtZ6aZpraRrGpR0kuVZFTpXv1eBu1lpx5RW3DEFFu1kmWzSM21AiehC04wWc/uUxorbpn4XtU6CiuLWKcvZ5HVPxN7ZQkZwNytqnnxW1DwBSGETWSabnPsSkjuV4G5W2DC+hwPJyCZdL/22ngLJYt7DihonfAW1Y2BRR5bJJhtvaeL9OFoJ7mZrGiC3sHb8b6vlcdswFATRL2ZCDagAX12H+3DOOWe7A8d2fFQZlsRMXpzu6z8kVnGdPcDgDbRJ5InP/nFB3lFOTMlck1TVuW8gD8wzcRO3FeQfFvfeQUbeQU5M2K0yOGBJXlVjcmaO1HFTsernecPZTd/c3ZQ0CeTM7M+S3L0MNWbpT/a94abql7ebXDrburidECiZa5LsspZUZO+kzNI2Z31r9JPsmlx7M2namzHZG7J1vaQkp6qBff09csYN3FKS6jt5w1mPA2stos8sCb/b6zFzIPMcduOG+kzORjpurUaBtRKRuRwSsz8LqnpWQuaoV8MAu9V3VF/MG9Zi2DQXAxrwUlhSENeZA7aWwyY/+bc1tkKu/hOXxkLwZswHVLlTUlINNW0mjFnswC71W+FtGLOd+9ps+7k2qw/MtEmSrlNZB+c6z5jBrPo3nZNjzXQm1FTrjgSp6dYDakr3oFd9U+9y1lO9tTZT6gAAAABJRU5ErkJggg=="
                style="height: 1.6rem"
                alt=""
                data-csiid="s2CWZuq2Lbzsi-gPia6JwA8_10"
                data-atf="1"
              />
            </a>
            <a target="_blank" href="">
              <img
                class="XNo5Ab"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAF+0lEQVR4AaWXA5QkSxBFc7C2bdu2bdu2bdu2bdu2bduD31MZv1/URE1X7/TRxjl32dP3RWRkQ5XrXtliSezPCTsnMMZ2iWdc7pWA/HrH1SQMixZAoyJ+ZaaH/8As833FbPV9wRwM5rT3U+aC1xO65vWYbqg7/91R18/fV1dGw+HqtP7QJ6Gj5V/S+CxmZkTzY+mKiJ/t0lCE4J7XQ4vn6h69VFeZ5+rUl9fqYDXxWnJ3MZjsBGIAMRCpCEOTuSPyd+qEhYTgsaNzkYoYzI1v0Kr4QbQplj/tifxJxCK1ST6pOx75oS4Fc4q+qYPMF7Xt87eYS6Kp0YmMKSJ1FS+Nb2iIT1fxo/dL/Znf235T4JHf5Djzyx38O2Ps/0LGui/kP/ED+Rd4aJNLgJ9qK+MXZXF/NT2JvixSEaPrwwUD6cdNg/61OFzSi6R9TpDhu5dhuVpPv9SyIwpCkcq4IQ98HSwPMrhzdBQ04BUZXZ6S0fYxQ60f2cD/4TEAU7DqxW+itCdZrr02sFyrJRQYYe5vtTeRg9yRzhHiddaX9D7mPfoe4zr5xTjPnQDyPQzwZ09ACrlMAnIAuZPZFKimkDqf2EFMQj/mfp3fJOUuF7GMUpAwAiZBi18iAOApchXcZ8nJZ7IZ4EGiH+QKlg2FsbvKRUyRtlsYCfYCWxgIpRACHWMxUXroeUuu1ShGvU38jlyBGIUzh/hP4mMs0TE2mCTdRjT2DtHnANsZ49/wOA734IfZdctT3DE/HrXitk0e5DuQ1PfEjwh8TnIT8FVCBYx8yE/oSLyW0YkXks62luiDH3kqBEFA7cVBIQfcuQSAmLwHkfbuzShcEYBOAZZFxgUpE2ca6XyzWSAi6nOAglKvANyp/B+6x6TkrBkJsO2GyE28upBCUoAu8WT66mviYsE40imGMLT6tMg5jI47HsEEmY77WQM8lwQQMWN4tSOFDiESrAD9N5LO2MWC3n2Sf+dATMKRCCJhIJYp2M7aCrD7pk2uVUtSOk1fu+jqA7OL4YtJZ29kUqIzSelS/fhx+DlbEIBjMguhMG5gCwCxyM0AaRuTztyAdK5ajASgSc6OClYyKdqIpBBG52wtgRFEwtgDxBok48bUJICIXQJkrUw6dxmTgkWJbl4NCVC8SDBlib59J5SesRqBEALYpzdiA6FwjDp6R8FjAN4BSJliORgrwJxhpKvkNqlQiPSqxYTCLuh67RFCQBA+GtkTBNFJnPKYzRgJwLfAp4k9AIvLZDCpkILoxtmQAPUymNR1PqZ5SaKvLyWEOaG2bTgMLdlsTkgCIhCONlEjgEC2ACLnawgpUyMhQ5f2Ete6EU5p0mDSG0yPEhzCY714woF4n9LUCGEKTwBX2R4AL0RBVWI7O4zOGE3CEV1cTyi9dwLprvFD6JiSQQi9czZkNjGOSNeqg33hxTVyVSbsFwJgbyQAjkS655diR53wLNZtvEyOTiKuu1tJ9/UmPTimyYCEJgPTkO6Z0aRTdjNQk4ImtYqY+1K6BO+VLDed5b3CJBCAFxPd85uRJe+iTOHC4tYHET0nNelxPiZj44YwMjmCMBKEaZob+yKLixuEqdiuMHYCAdA9XqyUTT5UsYw+8CLyeevVzhDzvExmRzGZEhNIGFsQ7IqEwJLKzcAUcBwIgBuC1wkzQBdvf1e5nq4gtS/b6z2kr44I4fQwGzg27AzAfgC5TXIzMAnsBG4HAuCVkz+S6T4+52xydLrSl/T25DyJf66bVyHHTvBi4lVXAgTFnXtEGUO8R/0lX+9Feqs36d2K9IlMpJ+MJnq70uTDDhuYjoDFBbhJPI0R1fE6guPgfcDtwHsLXjXx0s0fyx39k8cyJnt/D1V+OJhjbsi/72b48fyzi8LLbvCN4WsrO8FLWZZfI/iFKt3QN/zFBF+PHLMjVccP2+QiPunkTCiclDAeQuDqyuuHTIGvZyUzQPZOxeDmABLC2OT90ZKL+KJHJIh7CNwUz1MoUfmNyCWAYB7H9vCD9FGfY/qEr78luuqO5xA8RfcpIEC9rIeNqgWHweHq/B9sW3RsnCHSAQAAAABJRU5ErkJggg=="
                style="height: 26px; width: 26px"
                alt=""
                data-csiid="HmGWZrmGIMCfi-gPoeiY6AE_10"
                data-atf="1"
              />
            </a>

            <a target="_blank" href="">
              <img
                class="XNo5Ab"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABDUlEQVR4AWP4////gOLB44D6nTcsGIo33QHi/zTGd0B2YTiAPpYjHIHNAf/piQk6wGPW8f/rLz8HYRCbXg5AWI4GQGJ0cwDY12gAJDbcHUA4CkZAIqQUK7Ts/m/SfxBMs5RupswBaACr+P47b/5zlG/5DyzZ/r/+8hNF7vuvP//nn3r0X6JhJ+0ccPrR+/+H7735jw9cf/n5v0D1Nuo5gBxQve06zR0AjoL7b7/+//zjN4bc+ScfaOeA33///k9Yfg4mDw7u/Xdeo6uhnQP6D93FMNxlxjF0ZbRzgMXEQ9iyI90cALIMJoccDXRzAK6CZog6YNQBow6gIx54Bwx4x2RAu2bAysoEZu9o7xgAQrvkxt3WZi0AAAAASUVORK5CYII="
                style="height: 26px; width: 26px"
                alt=""
                data-csiid="mmGWZtmQMJ6Ai-gPvtqVGA_10"
                data-atf="1"
              />
            </a>

            <a target="_blank" href="">
              <img
                class="XNo5Ab"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAAAAABWESUoAAAA3ElEQVR4Ac2SGQDFMBBE1ylOcYpTner0neK0TnGpU53iFKc6xWl+p+f25D7InZ295Cv0mGjFUOzWDVVVa/WykaBiaBBFfsiyory3JASRjs8mInqxUGRw47CIBIy7Ew0Sh0nED4OXCwkNh8h7GrrgCkVK9a7w6Q2BjoVa6Oo9EZEDVJ7I1M4UeMDXzIEhvoukFxNMaP8o4gpon1l9qnqc7DcPIgpd7Ce0t/fJVO0q0qIsVeuY1XwNYK1gwm8J2GAqvHRF5mD7BcG0Rl6yegjw0BqdakE8Bni0RyjyDf4Y1Y0n0wNT4wAAAABJRU5ErkJggg=="
                style="height: 25px; width: 25px"
                alt=""
                data-csiid="cWGWZouJHZuni-gPm9S7-Ao_10"
                data-atf="1"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <p style="color: #0a142f; text-align: center">
      Hash Studio inc 2024 جميع الحقوق محفوظة لدي©
    </p>
  </div>
</template>

<script>
export default {
  name: 'TheFooter',
  data() {
    return {
      imageUrl: require('@/assets/WhatsApp_Image_2024-05-12_at_3.29 2.png'),
      imageUrl1: require('@/assets/image 1.png'),
      imageUrl2: require('@/assets/image 2.png'),
    }
  },
}
</script>
<style scoped>
.TheFooter {
  font-family: Cairo;

  text-align: right;
  margin-top: 40px;
}

.logo {
  width: 40%;
  margin-bottom: 20px;
}
p {
  font-size: 18px;
  color: #757095;
}
h1 {
  color: #111c55;
  margin-bottom: 30px;
  font: Cairo;
  font-weight: 700;
  size: 20.28px;
}
ul {
  list-style: none;
  display: inline-block;
  margin: 0;
  padding: 0;
  font-size: 24px;
}
li {
  margin-right: 20px;
  color: #111c55;
  font-size: 18px;
  line-height: 40px;
}
.social img {
  margin-top: 10px;
  margin-left: 10px;
}
</style>

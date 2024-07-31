<template>
  <div id="app" dir="rtl">
    <header class="header-area">
      <div class="containers">
        <div class="row">
          <div class="col-12">
            <nav class="navigation">
              <a href="#" class="logo">
                <router-link to="/ThePage">
                  <img :src="imageUrl" alt="image" />
                </router-link>
              </a>
              <button class="mobilebtn" @click="toggleMenu()">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="27"
                  viewbox="0 0 30 27"
                >
                  <g fill="none" fill-rule="evenodd">
                    <g fill="#df8317" style="fill: #df8317">
                      <g>
                        <path
                          d="M0 17H30V19H0zM0 25H30V27H0z"
                          transform="translate(-1376 -48) translate(1376 48)"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
              <div class="menu-area" :class="{ show: mobileMenu }">
                <ul>
                  <router-link to="/ThePage" active-class="active-link">
                    <li>الرئيسية</li>
                  </router-link>

                  <router-link
                    :to="{ path: '/ThePage', hash: '#system-section' }"
                    active-class="active-link"
                  >
                    <li>النظام</li>
                  </router-link>

                  <router-link
                    :to="{ path: '/ThePage', hash: '#servies-section' }"
                    active-class="active-link"
                  >
                    <li>خدماتنا</li>
                  </router-link>

                  <router-link
                    :to="{ path: '/ThePage', hash: '#advantages-section' }"
                    active-class="active-link"
                  >
                    <li>المزايا</li>
                  </router-link>

                  <router-link to="/ThePrice" active-class="active-link">
                    <li>الاسعار</li>
                  </router-link>

                  <router-link
                    :to="{ path: '/ThePage', hash: '#sucess-section' }"
                    active-class="active-link"
                  >
                    <li>شركاء النجاح</li>
                  </router-link>
                </ul>
                <router-link to="/Contact">
                  <button>تواصل معنا</button>
                </router-link>

                <router-link to="/logIn" style="padding-right: 18px">
                  تسجيل الدخول
                </router-link>

                <a
                  href="#"
                  @click.prevent="toggleLanguage"
                  style="padding-right: 18px"
                >
                  <svg
                    width="35"
                    height="36"
                    viewBox="0 0 35 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 31.125C15.6936 31.125 13.9922 30.7799 12.3958 30.0896C10.7995 29.3983 9.40917 28.4601 8.22501 27.275C7.04084 26.0899 6.10265 24.6996 5.41042 23.1042C4.7182 21.5087 4.37306 19.8074 4.37501 18C4.37501 16.1878 4.72015 14.4849 5.41042 12.8915C6.10167 11.297 7.03987 9.90819 8.22501 8.725C9.41015 7.54181 10.8004 6.60361 12.3958 5.91042C13.9922 5.22014 15.6936 4.875 17.5 4.875C19.3122 4.875 21.0151 5.22014 22.6085 5.91042C24.203 6.60167 25.5923 7.53986 26.7765 8.725C27.9606 9.91014 28.8983 11.299 29.5896 12.8915C30.2799 14.4859 30.625 16.1887 30.625 18C30.625 19.8064 30.2799 21.5078 29.5896 23.1042C28.8983 24.7006 27.9601 26.0908 26.775 27.275C25.5899 28.4592 24.201 29.3974 22.6085 30.0896C21.0161 30.7818 19.3132 31.1269 17.5 31.125ZM17.5 29.6783C18.3556 28.5787 19.0614 27.4991 19.6175 26.4394C20.1726 25.3797 20.6242 24.1935 20.9723 22.881H14.0277C14.4137 24.2674 14.8745 25.4905 15.4102 26.5502C15.9469 27.6099 16.6435 28.6526 17.5 29.6783ZM15.6435 29.4596C14.963 28.6575 14.3417 27.6658 13.7798 26.4846C13.2179 25.3043 12.7998 24.1026 12.5256 22.8796H6.93292C7.76904 24.6928 8.95369 26.1803 10.4869 27.3421C12.021 28.5029 13.7399 29.2087 15.6435 29.4596ZM19.3565 29.4596C21.2601 29.2087 22.979 28.5029 24.5131 27.3421C26.0463 26.1803 27.231 24.6928 28.0671 22.8796H22.4758C22.1064 24.1211 21.6412 25.332 21.0802 26.5123C20.5183 27.6935 19.9437 28.6769 19.3565 29.4596ZM6.33792 21.4227H12.2223C12.1115 20.8238 12.0337 20.2405 11.989 19.6727C11.9423 19.1059 11.919 18.5483 11.919 18C11.919 17.4517 11.9418 16.8941 11.9875 16.3273C12.0332 15.7605 12.111 15.1772 12.2208 14.5773H6.33938C6.18091 15.0828 6.05695 15.6336 5.96751 16.2296C5.87806 16.8246 5.83334 17.4147 5.83334 18C5.83334 18.5853 5.87758 19.1759 5.96605 19.7719C6.05452 20.3678 6.17848 20.9176 6.33792 21.4212M13.6806 21.4212H21.3194C21.4302 20.8233 21.508 20.2497 21.5527 19.7004C21.5994 19.1521 21.6227 18.5853 21.6227 18C21.6227 17.4147 21.5999 16.8479 21.5542 16.2996C21.5085 15.7512 21.4307 15.1776 21.3208 14.5787H13.6792C13.5693 15.1767 13.4915 15.7503 13.4458 16.2996C13.4001 16.8479 13.3773 17.4147 13.3773 18C13.3773 18.5853 13.4001 19.1521 13.4458 19.7004C13.4915 20.2487 13.5708 20.8224 13.6806 21.4212ZM22.7792 21.4212H28.6621C28.8206 20.9167 28.9445 20.3669 29.034 19.7719C29.1224 19.1759 29.1667 18.5853 29.1667 18C29.1667 17.4147 29.1224 16.8241 29.034 16.2281C28.9455 15.6322 28.8215 15.0824 28.6621 14.5787H22.7777C22.8885 15.1767 22.9663 15.7595 23.011 16.3273C23.0577 16.8951 23.081 17.4526 23.081 18C23.081 18.5474 23.0582 19.1049 23.0125 19.6727C22.9668 20.2405 22.889 20.8238 22.7792 21.4227M22.4758 13.1204H28.0671C27.2125 11.2693 26.042 9.78181 24.5554 8.65792C23.0689 7.53403 21.3359 6.81896 19.3565 6.51271C20.037 7.40813 20.649 8.43236 21.1925 9.58542C21.736 10.7375 22.1638 11.9158 22.4758 13.1204ZM14.0277 13.1204H20.9723C20.5873 11.7515 20.1124 10.5139 19.5475 9.4075C18.9826 8.30111 18.3001 7.2725 17.5 6.32167C16.6999 7.27153 16.0174 8.30014 15.4525 9.4075C14.8876 10.5149 14.4117 11.7525 14.0277 13.1204ZM6.93438 13.1204H12.5256C12.8377 11.9168 13.2655 10.7385 13.809 9.58542C14.3524 8.43236 14.9645 7.40813 15.645 6.51271C13.6481 6.81993 11.9107 7.53938 10.4329 8.67104C8.95515 9.80465 7.78848 11.2873 6.93292 13.119"
                      fill="#111C55"
                    />
                  </svg>

                  {{ currentLanguage }}
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenu = ref(false)
const subItem1 = ref(false)
const megaItem1 = ref(false)

function toggleMenu() {
  mobileMenu.value = !mobileMenu.value
  subItem1.value = false
  megaItem1.value = false
}

function toggleSub1() {
  subItem1.value = !subItem1.value
}

function toggleMega1() {
  megaItem1.value = !megaItem1.value
}
</script>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      currentLanguage: 'English',
      imageUrl: require('@/assets/WhatsApp_Image_2024-05-12_at_3.29 2.png'),
    }
  },
  methods: {
    toggleLanguage() {
      this.currentLanguage =
        this.currentLanguage === 'English' ? 'العربية' : 'English'
    },
  },
}
</script>

<style scoped>
#app {
  font-family: 'Poppins', sans-serif;
  width: 100%;
  background-image: url('/src/assets/Headeeer bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
a:hover {
  text-decoration: none;
}
ul,
li {
  margin: 0;
  padding: 0;
  padding-inline-start: 0;
  color: #111c55;
}
a :hover {
  text-decoration: none;
}
.header-area {
  padding: 10px 60px 10px 100px;
}
.logo {
  width: 300px;
  font-size: 30px;
  font-weight: 600;
}
.navigation {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.menu-area {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-preferred-size: auto;
  flex-basis: auto;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  position: relative;
}
.marginauto {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: end;
}
.menu-area ul {
  width: 100%;
}
.menu-area button {
  color: white;
  background-color: #e89739;
  padding: 5px;
  width: 160px;

  height: 46px;
  border-radius: 80px;
  border: none;
}
.menu-area li {
  display: inline-block;
  color: #605895;
}
.menu-area li a {
  display: inline-block;
  padding: 10px 15px;
  color: #605895;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 500;
  color: #000;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.menu-area a {
  color: #605895;
  font-size: 18px;
}
.subIocn {
  position: relative;
  display: inline-block;
}
.subIocn::before {
  position: absolute;
  display: block;
  content: '';
  left: -12px;
  top: -10px;
  width: 6px;
  height: 6px;
  border: solid #000;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.sub li {
  display: block;
}
.sub li a {
  display: block;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  padding: 8px 15px;
}
.sub li a:hover {
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.sub {
  display: none;
  -webkit-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
  position: absolute;
  top: 100%;
  width: 100%;
  min-width: 10rem;
  max-width: 12rem;
  border-radius: 6px;
  -webkit-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}
.mega {
  display: none;
  -webkit-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
  position: absolute;
  top: 100%;
  width: auto;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 90%;
  border-radius: 6px;
  -webkit-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}
.menu-area li:hover .sub {
  display: block;
  -webkit-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}
.menu-area li:hover .mega {
  display: block;
  -webkit-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}
.mega-menu {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 15px;
}
.mega li {
  display: block;
}
.mega-item {
  width: 25%;
}
.mega-item h3 {
  font-size: 18px;
  line-height: 1.3;
  font-weight: 600;
}
.mega-menu li {
  display: block;
}
.mega-menu li a {
  display: inline-block;
  padding: 8px 0;
}
.mobilebtn {
  display: none;
  background-color: rgba(255, 255, 255, 0.472);
}
.navigation button {
  border: none;
}
@media (max-width: 1199.98px) {
  .logo {
    margin-right: -60px;
    width: auto;
    font-size: 20px;
    font-weight: 600;
  }
  .header-area {
    padding: 10px 40px;
  }
  .mobilebtn {
    display: block;
    background-color: rgba(229, 228, 228, 0);
  }
  .menu-area {
    display: none;
    -webkit-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }
  .menu-area.show button {
    width: 100%;
  }
  .menu-area.show a {
    width: 100%;
  }
  .menu-area.show {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
    -webkit-box-flex: 100% !important;
    -ms-flex-positive: 100% !important;
    flex-grow: 100% !important;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .marginauto {
    display: block;
  }
  .menu-area li {
    display: block;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    position: relative;
  }
  .sub,
  .mega {
    position: static;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    display: none !important;
  }

  .sub.active {
    display: block !important;
    -webkit-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }
  .mega.active {
    display: block !important;
    -webkit-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }
  .menu-area li a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 10px 0;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 500;
    color: #000;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    position: relative;
    border-top: 1px solid #ccc;
  }
  .menu-area li:first-child a {
    border-top: 1px solid transparent;
  }
  .sub li a {
    padding: 8px 15px !important;
  }
  .mega-menu li a {
    padding: 8px 0 !important;
  }
  .subIocn {
    position: absolute;
    top: 6px;
    right: 4px;
    z-index: 9;
    display: inline-block;
    border: 1px solid #ccc;
    padding: 5px;
    height: 22px;
    width: 22px;
  }
  .subIocn::before {
    left: 0;
    right: 0;
    top: 9px;
    margin: 1px auto;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  .subIocn.active::before {
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    top: 9px;
    -webkit-transform: rotate(225deg);
    -ms-transform: rotate(225deg);
    transform: rotate(225deg);
  }

  .mega-item {
    width: 33.33%;
  }
}
@media (max-width: 991.98px) {
  .header-area {
    padding: 10px 40px;
  }
  .mega-item {
    width: 50%;
  }
  .mega {
    height: 300px;
    overflow-y: scroll;
  }
}
@media (max-width: 767.98px) {
  .header-area {
    padding: 10px 40px;
  }
  .mega-item {
    width: 100%;
  }
}
a {
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  margin: 0 5px;
  cursor: pointer;
  width: 20%;
  color: #111c55;
}
.logo img {
  max-width: 100%;
  height: auto;
}
.overlay-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 60%;
  height: 80%;
  z-index: -10;
}
.active-link li {
  color: #df8317;
}
</style>

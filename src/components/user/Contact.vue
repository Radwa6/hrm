<template>
  <div class="row logIn" dir="rtl">
    <div class="col-sm-4" style="background-color: #111c55; z-index: 10">
      <div
        style="
          background-color: white;
          border-radius: 10px;
          z-index: 10;
          height: 80%;
          width: 90%;
          margin: 20%;
        "
      >
        <img :src="imageUrl" alt="image" class="imageUrl" />
      </div>
    </div>

    <div
      class="col-sm-8"
      style="background-color: white; padding: 20px; z-index: 1"
    >
      <div class="row navlogo d-flex justify-content-between">
        <div class="nav">
          <a href="">
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
          </a>
        </div>

        <div class="logo">
          <router-link to="/ThePage">
            <img :src="imageUrl0" alt="image" />
          </router-link>
        </div>
      </div>
      <div class="row" style="text-align: right; margin-right: 26%">
        <div>
          <h1>تواصل معانا ؟!</h1>
          <p>نحن علي اتم الاستعداد لمساعدتك دائما</p>
        </div>
        <form @submit.prevent="handleSubmit" class="login-form">
          <div class="form-group">
            <label for="text"
              >الاسم بالكامل <span style="color: red">*</span></label
            >
            <input
              type="text"
              id="text"
              v-model="text"
              placeholder=" أدخل اسمك بالكامل "
              required
            />
            <label for="email" style="margin-top: 10px"
              >البريد الإلكتروني<span style="color: red">*</span></label
            >
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="أدخل بريدك الالكتروني"
              required
            />

            <label for="text" style="margin-top: 10px"> نص الرسالة</label>
            <textarea
              v-model="text"
              placeholder="أدخل بريدك الالكتروني"
              rows="3"
            />
          </div>

          <button type="submit">ارسال</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactP',

  data() {
    return {
      imageUrl: require('@/assets/header_img.png'),
      imageUrl0: require('@/assets/WhatsApp_Image_2024-05-12_at_3.29 2.png'),
      email: '',
      text: '',
    }
  },
  methods: {
    handleSubmit() {
      console.log('Email:', this.email)
    },
  },
}
</script>
<style scoped>
.logIn {
  margin-top: 0;
}
.imageUrl {
  width: 120%;
  margin-top: 30%;
  z-index: 200;
  margin-left: -40%;
}

.nav {
  margin-bottom: 60px;
}

h1 {
  color: #000842;
  font-weight: bold;
}
p {
  color: #637381;
  font-size: 20px;
}

label {
  width: 100%;
}
input {
  width: 80%;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 40px;

  border: 1px solid #9898984a;
  border-radius: 10px;
}
textarea {
  width: 80%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #9898984a;
  border-radius: 10px;
}
button {
  width: 80%;
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  border: none;
  background-color: #111c55;
  color: white;
}
.navlogo {
  padding: 0 40px 0 160px;
}
@media (max-width: 768px) {
  .col-sm-4,
  .col-sm-8 {
    width: 100% !important;
    padding: 0 !important;
  }

  .imageUrl {
    width: 100%;
    margin-left: 0;
  }

  .logo img {
    width: 60%;
  }

  input,
  textarea,
  button {
    width: 70%;
    margin: 10px auto;
  }

  .nav {
    margin-right: 0;
    text-align: center;
  }

  .nav svg {
    width: 25px;
    height: 25px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    font-size: 18px;
    margin-top: 5px;
  }
  .navlogo {
    padding: 30px 60px 0 40px;
  }
}
</style>

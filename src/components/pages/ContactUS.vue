<template>
  <div class="ContactUS" dir="rtl">
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
      </div>
      <div class="form-group">
        <label for="email" style="margin-top: 10px"
          >البريد الإلكتروني<span style="color: red">*</span></label
        >
        <input
          type="email"
          id="email"
          v-model="email"
          placeholder="company@gmail.com"
          required
        />
      </div>
      <div class="form-group">
        <label for="number" style="margin-top: 10px">
          رقم الهاتف <span style="color: red">*</span></label
        >
        <input
          dir="rtl"
          type="number"
          id="number"
          v-model="number"
          placeholder=" 2012340578+"
          required
        />
      </div>
      <div class="form-group">
        <label for="text" style="margin-top: 10px">
          هل لديك أي أسئلة أو ملاحظات أخرى؟</label
        >
        <textarea
          v-model="text"
          placeholder=" يمكنك كتابة رسالتك هنا........ "
          rows="8"
        />
      </div>
      <router-link to="/Contact">
        <button type="submit">ارسال الطلب</button>
      </router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactUS',
}
</script>

<style scoped>
.ContactUS {
  width: 100%;
  background-color: #ffff;
  padding: 50px 0 200px;
  padding-right: 14%;
  text-align: right;
  color: #111c55;
}
.form-group label {
  display: block;
}

input {
  width: 50%;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 20px;

  border: 1px solid #9898984a;
  border-radius: 10px;
}
textarea {
  width: 50%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #9898984a;
  border-radius: 10px;
}
button {
  width: 50%;
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  border: none;
  background-color: #111c55;
  color: white;
}
</style>

<template>
  <div
    class="TeamManagement justify-content-center"
    dir="rtl"
    data-aos-easing="ease-in-out"
    data-aos-duration="1000"
    data-aos-delay="0"
  >
    <div class="header row">
      <div
        class="col-sm-6 animate__animated animate__fadeInDown"
        data-il8n="task"
      >
        <p style="color: #df8317">قطاعات العمل</p>
        <h1>تبسيط مهام الموارد البشرية</h1>
        <span
          ><svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.1056 21.3513C14.1878 21.3513 16.2055 20.6293 17.8151 19.3084C19.4246 17.9874 20.5264 16.1493 20.9326 14.1071C21.3388 12.0649 21.0243 9.94501 20.0427 8.10869C19.0612 6.27236 17.4733 4.83319 15.5496 4.03638C13.6259 3.23957 11.4854 3.13443 9.49286 3.73888C7.50033 4.34332 5.77902 5.61995 4.62222 7.35124C3.46543 9.08253 2.94472 11.1614 3.14883 13.2335C3.35293 15.3057 4.26922 17.243 5.74156 18.7153"
              stroke="#DF8317"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M16.1055 10.3513L12.5075 14.6693C11.8525 15.4553 11.5245 15.8493 11.0835 15.8693C10.6435 15.8893 10.2805 15.5263 9.55647 14.8023L8.10547 13.3513"
              stroke="#DF8317"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <p>مهام سير عمل الموارد البشرية</p></span
        >
        <span
          ><svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.1056 21.3513C14.1878 21.3513 16.2055 20.6293 17.8151 19.3084C19.4246 17.9874 20.5264 16.1493 20.9326 14.1071C21.3388 12.0649 21.0243 9.94501 20.0427 8.10869C19.0612 6.27236 17.4733 4.83319 15.5496 4.03638C13.6259 3.23957 11.4854 3.13443 9.49286 3.73888C7.50033 4.34332 5.77902 5.61995 4.62222 7.35124C3.46543 9.08253 2.94472 11.1614 3.14883 13.2335C3.35293 15.3057 4.26922 17.243 5.74156 18.7153"
              stroke="#DF8317"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M16.1055 10.3513L12.5075 14.6693C11.8525 15.4553 11.5245 15.8493 11.0835 15.8693C10.6435 15.8893 10.2805 15.5263 9.55647 14.8023L8.10547 13.3513"
              stroke="#DF8317"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <p>تحسين مهارات التواصل في العمل</p></span
        >
        <span
          ><svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.1056 21.3513C14.1878 21.3513 16.2055 20.6293 17.8151 19.3084C19.4246 17.9874 20.5264 16.1493 20.9326 14.1071C21.3388 12.0649 21.0243 9.94501 20.0427 8.10869C19.0612 6.27236 17.4733 4.83319 15.5496 4.03638C13.6259 3.23957 11.4854 3.13443 9.49286 3.73888C7.50033 4.34332 5.77902 5.61995 4.62222 7.35124C3.46543 9.08253 2.94472 11.1614 3.14883 13.2335C3.35293 15.3057 4.26922 17.243 5.74156 18.7153"
              stroke="#DF8317"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M16.1055 10.3513L12.5075 14.6693C11.8525 15.4553 11.5245 15.8493 11.0835 15.8693C10.6435 15.8893 10.2805 15.5263 9.55647 14.8023L8.10547 13.3513"
              stroke="#DF8317"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <p>متابعة التقارير الخاصة بالموظفين</p>
        </span>
        <router-link to="/Contact">
          <button
            data-v-2645c328=""
            style="margin-top: 40px; padding: 12px 10px"
          >
            أبدا نسختك التجريبة الان
          </button>
        </router-link>
      </div>
      <div
        class="col-sm-6 animate__animated animate__fadeInLeft"
        data-il8n="task"
      >
        <img :src="imageUrl" alt="" style="width: 90%; height: auto" />
      </div>
    </div>

    <div class="join" data-il8n="join">
      <img :src="imageUrl1" alt="" style="width: 100%; height: auto" />

      <h1>
        حسّن مستويات الأداء في إدارتك
        <a href="" style="color: #df8317">
          فورًا
          <svg
            width="10"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.49992 1.70834L9.66659 5.93751M5.43742 10.1667L1.20825 9.00001M18.4166 4.47918L15.4999 7.25001M6.74992 16L3.97909 18.9167M11.1249 11.625L18.4166 29.125L21.0416 21.5417L28.6249 18.9167L11.1249 11.625Z"
              stroke="#DF8317"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </h1>
      <p style="color: #696984; padding-top: 20px; padding: 0 460px">
        نساعد الشركات على إدارة أعمالها بفعالية وتقديم تجربة مميزة لجميع عملائنا
        عبر برنامجنا الأفضل والأكثر سهولة في الاستخدام.
      </p>
      <div class="row">
        <div class="row data justify-content-center">
          <div class="col-sm-3 center-content">
            <div
              class="svg"
              style="
                background-color: #111c55;
                padding: 10px;
                border-radius: 50%;
                width: 60px;
                height: 60px;
                color: #ffffff;
                font-size: 36px;
                margin-bottom: 20px;
              "
            >
              1
            </div>
            <h3>إدارة الحضور و الانصراف</h3>
            <p>تتبع الوقت من خلال تسجيل الحضور والانصراف</p>
          </div>
          <div class="col-sm-1.5 center-content">
            <svg
              class="due"
              style="
                padding: 10px;
                border-radius: 50%;
                width: 160px;
                height: 160px;
                color: #ffffff;
                font-size: 36px;
                margin-top: -14%;
              "
              viewBox="0 0 152 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 9.89108C1 9.89108 33.6087 -11.0778 73.332 11.3889C113.055 33.8555 151 9.89108 151 9.89108"
                stroke="#111C55"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="4 8"
              />
            </svg>
          </div>

          <div class="col-sm-3 center-content">
            <div
              class="svg"
              style="
                background-color: #df8317;
                padding: 10px;
                border-radius: 50%;
                width: 60px;
                height: 60px;
                color: #ffffff;
                font-size: 36px;
                margin-bottom: 20px;
              "
            >
              2
            </div>
            <h3>إدارة الاجازات</h3>
            <p>قم بالموافقة على طلبات الإجازة أو رفضها</p>
          </div>
          <div class="col-sm-1.5 center-content">
            <svg
              class="due"
              style="
                padding: 10px;
                border-radius: 50%;
                width: 160px;
                height: 160px;
                color: #ffffff;
                font-size: 36px;
                margin-top: -14%;
              "
              viewBox="0 0 152 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 9.89108C1 9.89108 33.6087 -11.0778 73.332 11.3889C113.055 33.8555 151 9.89108 151 9.89108"
                stroke="#111C55"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="4 8"
              />
            </svg>
          </div>

          <div class="col-sm-3 center-content">
            <div
              class="svg"
              style="
                background-color: #111c55;
                padding: 10px;
                border-radius: 50%;
                width: 60px;
                height: 60px;
                color: #ffffff;
                font-size: 36px;
                margin-bottom: 20px;
              "
            >
              3
            </div>
            <h3>جدولة العمل والورديات</h3>
            <p>قم بتخطيط وجدولة ورديات فريقك بدقة</p>
          </div>
        </div>
      </div>

      <div class="row" style="margin-top: 6%">
        <div class="col-sm-6" style="margin-top: 60px">
          <p style="color: #df8317; text-align: right">إدارة قطاع العمل</p>
          <h1
            style="
              color: #111c55;
              text-align: right;
              font-size: 46px;
              margin-top: 0;
            "
          >
            إدارة قطاع العمل لفريق فعّال
          </h1>
          <p
            style="
              color: #493f87;
              font-size: 30px;
              text-align: right;
              margin-top: 30px;
            "
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8009 21.8613C14.8831 21.8613 16.9008 21.1393 18.5104 19.8184C20.1199 18.4974 21.2217 16.6593 21.6279 14.6171C22.0341 12.5749 21.7196 10.455 20.7381 8.6187C19.7565 6.78237 18.1686 5.3432 16.2449 4.54639C14.3212 3.74958 12.1807 3.64444 10.1882 4.24889C8.19564 4.85333 6.47433 6.12996 5.31754 7.86125C4.16074 9.59254 3.64003 11.6714 3.84414 13.7435C4.04824 15.8157 4.96453 17.753 6.43687 19.2253"
                stroke="#DF8317"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M16.8008 10.8613L13.2028 15.1793C12.5478 15.9653 12.2198 16.3593 11.7788 16.3793C11.3388 16.3993 10.9758 16.0363 10.2518 15.3123L8.80078 13.8613"
                stroke="#DF8317"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            متابعة مهام فريق العمل يوميا
          </p>
          <p style="color: #493f87; font-size: 30px; text-align: right">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8009 21.8613C14.8831 21.8613 16.9008 21.1393 18.5104 19.8184C20.1199 18.4974 21.2217 16.6593 21.6279 14.6171C22.0341 12.5749 21.7196 10.455 20.7381 8.6187C19.7565 6.78237 18.1686 5.3432 16.2449 4.54639C14.3212 3.74958 12.1807 3.64444 10.1882 4.24889C8.19564 4.85333 6.47433 6.12996 5.31754 7.86125C4.16074 9.59254 3.64003 11.6714 3.84414 13.7435C4.04824 15.8157 4.96453 17.753 6.43687 19.2253"
                stroke="#DF8317"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M16.8008 10.8613L13.2028 15.1793C12.5478 15.9653 12.2198 16.3593 11.7788 16.3793C11.3388 16.3993 10.9758 16.0363 10.2518 15.3123L8.80078 13.8613"
                stroke="#DF8317"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            بيانات موظفيك محدّثة عبر الإشعارات.
          </p>
          <p style="color: #493f87; font-size: 30px; text-align: right">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8009 21.8613C14.8831 21.8613 16.9008 21.1393 18.5104 19.8184C20.1199 18.4974 21.2217 16.6593 21.6279 14.6171C22.0341 12.5749 21.7196 10.455 20.7381 8.6187C19.7565 6.78237 18.1686 5.3432 16.2449 4.54639C14.3212 3.74958 12.1807 3.64444 10.1882 4.24889C8.19564 4.85333 6.47433 6.12996 5.31754 7.86125C4.16074 9.59254 3.64003 11.6714 3.84414 13.7435C4.04824 15.8157 4.96453 17.753 6.43687 19.2253"
                stroke="#DF8317"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M16.8008 10.8613L13.2028 15.1793C12.5478 15.9653 12.2198 16.3593 11.7788 16.3793C11.3388 16.3993 10.9758 16.0363 10.2518 15.3123L8.80078 13.8613"
                stroke="#DF8317"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            توفير نتائج دقيقة لعملية دفع الرواتب.
          </p>
          <router-link to="/Contact">
            <button
              data-v-2645c328=""
              style="margin-top: 40px; padding: 12px 28px"
            >
              تواصل معانا
            </button>
          </router-link>
        </div>

        <div class="col-sm-6">
          <img :src="imageUrl3" alt="" style="width: 86%" />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <img :src="imageUrl2" alt="" style="width: 86%" />
        </div>

        <div class="col-sm-6" style="margin-top: 140px">
          <p style="color: #df8317; text-align: right">إدارة المستندات</p>
          <h1
            style="
              color: #111c55;
              text-align: right;
              font-size: 46px;
              margin-top: 0;
            "
          >
            قم بإدارة المستندات بكفاءة
          </h1>
          <p
            style="
              color: #493f87;
              font-size: 30px;
              text-align: right;
              margin-top: 30px;
            "
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8009 21.8613C14.8831 21.8613 16.9008 21.1393 18.5104 19.8184C20.1199 18.4974 21.2217 16.6593 21.6279 14.6171C22.0341 12.5749 21.7196 10.455 20.7381 8.6187C19.7565 6.78237 18.1686 5.3432 16.2449 4.54639C14.3212 3.74958 12.1807 3.64444 10.1882 4.24889C8.19564 4.85333 6.47433 6.12996 5.31754 7.86125C4.16074 9.59254 3.64003 11.6714 3.84414 13.7435C4.04824 15.8157 4.96453 17.753 6.43687 19.2253"
                stroke="#DF8317"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M16.8008 10.8613L13.2028 15.1793C12.5478 15.9653 12.2198 16.3593 11.7788 16.3793C11.3388 16.3993 10.9758 16.0363 10.2518 15.3123L8.80078 13.8613"
                stroke="#DF8317"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            جميع المستندات في مكان واحد
          </p>
          <p style="color: #493f87; font-size: 30px; text-align: right">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8009 21.8613C14.8831 21.8613 16.9008 21.1393 18.5104 19.8184C20.1199 18.4974 21.2217 16.6593 21.6279 14.6171C22.0341 12.5749 21.7196 10.455 20.7381 8.6187C19.7565 6.78237 18.1686 5.3432 16.2449 4.54639C14.3212 3.74958 12.1807 3.64444 10.1882 4.24889C8.19564 4.85333 6.47433 6.12996 5.31754 7.86125C4.16074 9.59254 3.64003 11.6714 3.84414 13.7435C4.04824 15.8157 4.96453 17.753 6.43687 19.2253"
                stroke="#DF8317"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M16.8008 10.8613L13.2028 15.1793C12.5478 15.9653 12.2198 16.3593 11.7788 16.3793C11.3388 16.3993 10.9758 16.0363 10.2518 15.3123L8.80078 13.8613"
                stroke="#DF8317"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            التحكم في رؤية ملفات الموظفين والشركة.
          </p>
          <p style="color: #493f87; font-size: 30px; text-align: right">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8009 21.8613C14.8831 21.8613 16.9008 21.1393 18.5104 19.8184C20.1199 18.4974 21.2217 16.6593 21.6279 14.6171C22.0341 12.5749 21.7196 10.455 20.7381 8.6187C19.7565 6.78237 18.1686 5.3432 16.2449 4.54639C14.3212 3.74958 12.1807 3.64444 10.1882 4.24889C8.19564 4.85333 6.47433 6.12996 5.31754 7.86125C4.16074 9.59254 3.64003 11.6714 3.84414 13.7435C4.04824 15.8157 4.96453 17.753 6.43687 19.2253"
                stroke="#DF8317"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M16.8008 10.8613L13.2028 15.1793C12.5478 15.9653 12.2198 16.3593 11.7788 16.3793C11.3388 16.3993 10.9758 16.0363 10.2518 15.3123L8.80078 13.8613"
                stroke="#DF8317"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            إدارة فعالة لحالات الموظفين
          </p>
          <router-link to="/Contact">
            <button data-v-2645c328="" style="margin-top: 40px">
              انضم الينا الان
            </button>
          </router-link>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6" style="margin-top: 60px">
          <p style="color: #df8317; text-align: right">
            إدارة الحضور والانصراف
          </p>
          <h1
            style="
              color: #111c55;
              text-align: right;
              font-size: 46px;
              margin-top: 0;
            "
          >
            متابعة لبيانات الحضور والانصراف
          </h1>
          <p
            style="
              color: #493f87;
              font-size: 30px;
              text-align: right;
              margin-top: 30px;
            "
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8009 21.8613C14.8831 21.8613 16.9008 21.1393 18.5104 19.8184C20.1199 18.4974 21.2217 16.6593 21.6279 14.6171C22.0341 12.5749 21.7196 10.455 20.7381 8.6187C19.7565 6.78237 18.1686 5.3432 16.2449 4.54639C14.3212 3.74958 12.1807 3.64444 10.1882 4.24889C8.19564 4.85333 6.47433 6.12996 5.31754 7.86125C4.16074 9.59254 3.64003 11.6714 3.84414 13.7435C4.04824 15.8157 4.96453 17.753 6.43687 19.2253"
                stroke="#DF8317"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M16.8008 10.8613L13.2028 15.1793C12.5478 15.9653 12.2198 16.3593 11.7788 16.3793C11.3388 16.3993 10.9758 16.0363 10.2518 15.3123L8.80078 13.8613"
                stroke="#DF8317"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            الحصول على تقارير الموظفين الشهرية
          </p>
          <p style="color: #493f87; font-size: 30px; text-align: right">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8009 21.8613C14.8831 21.8613 16.9008 21.1393 18.5104 19.8184C20.1199 18.4974 21.2217 16.6593 21.6279 14.6171C22.0341 12.5749 21.7196 10.455 20.7381 8.6187C19.7565 6.78237 18.1686 5.3432 16.2449 4.54639C14.3212 3.74958 12.1807 3.64444 10.1882 4.24889C8.19564 4.85333 6.47433 6.12996 5.31754 7.86125C4.16074 9.59254 3.64003 11.6714 3.84414 13.7435C4.04824 15.8157 4.96453 17.753 6.43687 19.2253"
                stroke="#DF8317"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M16.8008 10.8613L13.2028 15.1793C12.5478 15.9653 12.2198 16.3593 11.7788 16.3793C11.3388 16.3993 10.9758 16.0363 10.2518 15.3123L8.80078 13.8613"
                stroke="#DF8317"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            مراجعة الجداول الزمنية والورديات
          </p>
          <p style="color: #493f87; font-size: 30px; text-align: right">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8009 21.8613C14.8831 21.8613 16.9008 21.1393 18.5104 19.8184C20.1199 18.4974 21.2217 16.6593 21.6279 14.6171C22.0341 12.5749 21.7196 10.455 20.7381 8.6187C19.7565 6.78237 18.1686 5.3432 16.2449 4.54639C14.3212 3.74958 12.1807 3.64444 10.1882 4.24889C8.19564 4.85333 6.47433 6.12996 5.31754 7.86125C4.16074 9.59254 3.64003 11.6714 3.84414 13.7435C4.04824 15.8157 4.96453 17.753 6.43687 19.2253"
                stroke="#DF8317"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M16.8008 10.8613L13.2028 15.1793C12.5478 15.9653 12.2198 16.3593 11.7788 16.3793C11.3388 16.3993 10.9758 16.0363 10.2518 15.3123L8.80078 13.8613"
                stroke="#DF8317"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            تتبع حضور فريقك في الوقت المناسب
          </p>
          <router-link to="/Contact">
            <button
              data-v-2645c328=""
              style="margin-top: 40px; padding: 12px 10px"
            >
              أحصل عل عرض تجريبي
              <svg
                width="10"
                height="15"
                viewBox="0 0 10 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.52795 3.28634L1.60542 7.43987C1.5849 7.5501 1.54378 7.65119 1.48451 7.73711C1.42525 7.82304 1.34906 7.89203 1.26048 7.93999C1.1719 7.98795 1.07276 8.01388 0.968958 8.01624C0.865158 8.0186 0.758829 7.99734 0.656316 7.95373C0.553803 7.91012 0.457204 7.84505 0.372285 7.76241C0.287366 7.67977 0.215864 7.58124 0.162045 7.4727C0.108227 7.36417 0.0731927 7.24785 0.0590357 7.1307C0.0448782 7.01354 0.0518867 6.89794 0.0796428 6.79079L1.43631 0.682652C1.4841 0.468099 1.61022 0.296532 1.78697 0.205634C1.96372 0.114737 2.17663 0.111942 2.37896 0.197866L8.1366 2.64724C8.2399 2.68698 8.33801 2.74852 8.42508 2.82819C8.51214 2.90785 8.58638 3.00401 8.64336 3.11091C8.70034 3.21782 8.73889 3.33329 8.75672 3.45044C8.77455 3.56759 8.77129 3.68401 8.74713 3.79277C8.72298 3.90152 8.67842 4.00038 8.61613 4.08344C8.55383 4.1665 8.47507 4.23206 8.38453 4.27621C8.294 4.32037 8.19356 4.34221 8.08919 4.34044C7.98483 4.33867 7.87868 4.31331 7.77708 4.26589L3.86189 2.60032L9.19257 12.9656C9.302 13.1784 9.33667 13.4186 9.28897 13.6334C9.24126 13.8481 9.11509 14.0199 8.9382 14.1109C8.76131 14.2019 8.54819 14.2046 8.34573 14.1184C8.14328 14.0323 7.96806 13.8644 7.85864 13.6516L2.52795 3.28634Z"
                  fill="white"
                />
              </svg>
            </button>
          </router-link>
        </div>

        <div class="col-sm-6">
          <img :src="imageUrl5" alt="" style="width: 100%" />
        </div>
      </div>
      <div class="row" style="margin-top: 40px">
        <div class="col-sm-6">
          <img :src="imageUrl4" alt="" style="width: 85%" />
        </div>

        <div class="col-sm-6" style="margin-top: 60px">
          <p style="color: #df8317; text-align: right">إدارة التوظيف</p>
          <h1
            style="
              color: #111c55;
              text-align: right;
              font-size: 46px;
              margin-top: 0;
            "
          >
            عمليات التوظيف أصبحت أسهل
          </h1>
          <p
            style="
              color: #493f87;
              font-size: 30px;
              text-align: right;
              margin-top: 30px;
            "
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8009 21.8613C14.8831 21.8613 16.9008 21.1393 18.5104 19.8184C20.1199 18.4974 21.2217 16.6593 21.6279 14.6171C22.0341 12.5749 21.7196 10.455 20.7381 8.6187C19.7565 6.78237 18.1686 5.3432 16.2449 4.54639C14.3212 3.74958 12.1807 3.64444 10.1882 4.24889C8.19564 4.85333 6.47433 6.12996 5.31754 7.86125C4.16074 9.59254 3.64003 11.6714 3.84414 13.7435C4.04824 15.8157 4.96453 17.753 6.43687 19.2253"
                stroke="#DF8317"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M16.8008 10.8613L13.2028 15.1793C12.5478 15.9653 12.2198 16.3593 11.7788 16.3793C11.3388 16.3993 10.9758 16.0363 10.2518 15.3123L8.80078 13.8613"
                stroke="#DF8317"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            اختر الخيار الفردي أو الجماعي لتبسيط عملية التوظيف.
          </p>
          <p style="color: #493f87; font-size: 30px; text-align: right">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8009 21.8613C14.8831 21.8613 16.9008 21.1393 18.5104 19.8184C20.1199 18.4974 21.2217 16.6593 21.6279 14.6171C22.0341 12.5749 21.7196 10.455 20.7381 8.6187C19.7565 6.78237 18.1686 5.3432 16.2449 4.54639C14.3212 3.74958 12.1807 3.64444 10.1882 4.24889C8.19564 4.85333 6.47433 6.12996 5.31754 7.86125C4.16074 9.59254 3.64003 11.6714 3.84414 13.7435C4.04824 15.8157 4.96453 17.753 6.43687 19.2253"
                stroke="#DF8317"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M16.8008 10.8613L13.2028 15.1793C12.5478 15.9653 12.2198 16.3593 11.7788 16.3793C11.3388 16.3993 10.9758 16.0363 10.2518 15.3123L8.80078 13.8613"
                stroke="#DF8317"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            جدولة عمليات التوظيف و الاجتماعات
          </p>
          <p style="color: #493f87; font-size: 30px; text-align: right">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8009 21.8613C14.8831 21.8613 16.9008 21.1393 18.5104 19.8184C20.1199 18.4974 21.2217 16.6593 21.6279 14.6171C22.0341 12.5749 21.7196 10.455 20.7381 8.6187C19.7565 6.78237 18.1686 5.3432 16.2449 4.54639C14.3212 3.74958 12.1807 3.64444 10.1882 4.24889C8.19564 4.85333 6.47433 6.12996 5.31754 7.86125C4.16074 9.59254 3.64003 11.6714 3.84414 13.7435C4.04824 15.8157 4.96453 17.753 6.43687 19.2253"
                stroke="#DF8317"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M16.8008 10.8613L13.2028 15.1793C12.5478 15.9653 12.2198 16.3593 11.7788 16.3793C11.3388 16.3993 10.9758 16.0363 10.2518 15.3123L8.80078 13.8613"
                stroke="#DF8317"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            إدارة فعالة لجميع الموظفين
          </p>
          <router-link to="/Contact">
            <button
              data-v-2645c328=""
              style="margin-top: 40px; padding: 12px 34px"
            >
              انضم الينا الان
            </button>
          </router-link>
        </div>
      </div>

      <div class="All">
        <p style="color: #df8317; font-size: 20px">
          إدارة جميع الموارد البشرية
        </p>
        <h1 style="color: #111c55">
          هل ترغب بتسهيل عمليات الموارد البشرية اليومية للموظفين في منشأتك؟
        </h1>
        <p>
          ارفع نسب الإنجاز في إدارتك الآن عبر منصتنا حيث نوفر لكم يوفر لك حلاً
          قويًا لكل ما يخص عمليـات إدارة الموارد البشرية
        </p>
        <div class="button">
          <router-link to="/Contact">
            <button data-v-2645c328="" style="margin-top: 40px">
              تواصل معانا
            </button>
          </router-link>
          <router-link to="/ThePrice">
            <button
              data-v-2645c328=""
              style="
                margin-top: 40px;
                background-color: #df8317;
                margin-right: 10px;
                text-align: center;
              "
            >
              اشترك الان
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamManagement',
  data() {
    return {
      imageUrl: require('@/assets/Group 1261152736.png'),
      imageUrl1: require('@/assets/Frame 2147223568.png'),
      imageUrl2: require('@/assets/Frame 2147223674.png'),
      imageUrl3: require('@/assets/Frame 2147223630.png'),
      imageUrl4: require('@/assets/Frame 2147223654.png'),
      imageUrl5: require('@/assets/Frame 2147223649.png'),
    }
  },
}
</script>

<style scoped>
.row.justify-content-center {
  display: flex;
  justify-content: center;
}
.TeamManagement {
  background-color: #ffff;
  width: 100%;
}
.header {
  padding: 40px 120px;
  text-align: right;
}
.header h1 {
  color: #111c55;
  font-weight: bold;
  margin-bottom: 40px;
}
.header span {
  display: flex;
  align-items: right;
  text-align: right;
  margin-top: 10px;
}
.header span p {
  font-size: 18px;
  color: #757095;
}
button {
  display: flex;
  background-color: #111c55;
  color: #e5e7f2;
  padding: 12px 48px;
  border-radius: 80px;
  border: none;
  margin-top: 30px;
  box-shadow: 8px 8px 8px rgba(205, 205, 205, 0.409);
}
.header button svg {
  background-color: none;
  width: 24px;
  margin-top: 4%;
}
.join {
  background-color: #fbfdff;
}
.join h1 {
  margin-top: 80px;
}
.join p {
  color: #696984;
  font-size: 20px;
}
.join svg {
  width: 50px;
}
.join .row {
  padding: 0 80px;
}

.center-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 40px;
}

.All {
  align-items: center;
  padding: 80px 300px 40px;
}
.All h1 {
  text-align: center;
  font-weight: bold;
  margin-top: 0;
}

.All p {
  text-align: center;
  color: #757095;
  font-size: 20px;
  margin-top: 20px;
}
.All .button {
  text-align: center;
  margin-right: 30%;
  padding-bottom: 40px;
  width: 40%;
  display: flex;
}
</style>

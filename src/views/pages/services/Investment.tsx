import { useTranslation } from "react-i18next";
import WalletImg from "../../../assets/wallets.webp";
import WalletImg2 from "../../../assets/wallets01.webp";
import WalletImg3 from "../../../assets/wallets02.webp";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

const InvestmentPage = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section
      id="investment"
      className={`flex flex-col gap-12 justify-between items-center pt-32 pb-12 text-center bg-invest`}
      dir={`${i18n.language === "ar" ? "ltr" : "rtl"}`}
    >
      <div className="overlayInvest bg-[#e7e7e74d] dark:bg-[#000000cc]" />
      <div className="mb-10">
        <img className="w-56 cursor-pointer" src={WalletImg} alt="wallet" />
      </div>

      <div className="w-full flex flex-col justify-between items-center gap-y-20">
        <div className="w-full flex flex-row justify-between items-center gap-10">
          <div className="text-right">
            <h2 className="text-bhover text-4xl mb-10">{t("شرح الخدمة")}</h2>
            <p className="text-white text-lg max-w-[550px]">
              نقوم بربط حساب المستثمر بحساب الشركه وعند فتح أي صفقة في حساب
              الشركه، تفتح الصفقة تلقائيا في حساب المستثمر بنفس قيمة الصفقة
              الرئيسية من إجمالي رأس المال فمثلا لو فتحنا في حساب الشركه صفقة
              على عملة بإجمالي ٢٠٪ من رأس المال، تفتح تلقائيا عند كل المستثمرين
              صفقة على نفس العملة بقيمة ٢٠٪ من راس مال المستثمر وعند حدوث أي
              تغيير على الصفقة يتم ايضا تلقائيا في الصفقات المفتوحة عند
              المستثمرين.
            </p>
          </div>
          <img className="w-64 cursor-pointer" src={WalletImg2} alt="wallet" />
        </div>
        <div className="w-full flex flex-row-reverse justify-between items-center gap-10">
          <div className="text-right">
            <h2 className="text-bhover text-4xl mb-10">{t("طريقة العمل")}</h2>
            <p className="text-white text-lg max-w-[550px] flex flex-row justify-start items-center gap-3">
              <CheckCircleIcon className="w-6 h-6 text-bhover" />
              انشاء حساب في موقع الشركه ENG MONEY وتوثيقه
            </p>
            <p className="text-white text-lg max-w-[550px] flex flex-row justify-start items-center gap-3">
              <CheckCircleIcon className="w-6 h-6 text-bhover" />
              اختيار الاشتراك المناسب
            </p>
            <p className="text-white text-lg max-w-[550px] flex flex-row justify-start items-center gap-3">
              <CheckCircleIcon className="w-6 h-6 text-bhover" />
              التواصل مع صاحب المشروع على حساب التليجرام
              <span className="text-bhover">@Eng_Money</span>
            </p>
          </div>
          <img className="w-72 cursor-pointer" src={WalletImg3} alt="wallet" />
        </div>
        <div className="w-full flex flex-col justify-between items-center gap-10">
          <h2 className="text-bhover text-center text-4xl mb-10">
            {t("الباقات")}
          </h2>
          <div className="flex flex-row justify-between">
            <div className="border-2 border-bhover p-3 rounded-md">
              <h4 className="text-2xl text-bhover mb-8">كريبتو</h4>
              <div className="flex flex-col justify-between items-start">
                <p className="text-white text-lg max-w-[550px] flex flex-row justify-start items-center gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-bhover" />
                  اختيار الاشتراك المناسب
                </p>
                <p className="text-white text-lg max-w-[550px] flex flex-row justify-start items-center gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-bhover" />
                  اختيار الاشتراك المناسب
                </p>
                <p className="text-white text-lg max-w-[550px] flex flex-row justify-start items-center gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-bhover" />
                  اختيار الاشتراك المناسب
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPage;

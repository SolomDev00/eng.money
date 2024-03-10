import { useTranslation } from "react-i18next";
import WalletImg from "../../../assets/wallets.webp";
import WalletImg2 from "../../../assets/wallets01.webp";

const InvestmentPage = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section
      id="investment"
      className={`flex flex-col gap-12 justify-between items-center pt-32 pb-12 text-center bg-image`}
      dir={`${i18n.language === "ar" ? "ltr" : "rtl"}`}
    >
      <div className="overlayFaq bg-[#e7e7e74d] dark:bg-[#000000cc]" />
      <div className="mb-10">
        <img className="w-56 cursor-pointer" src={WalletImg} alt="wallet" />
      </div>
      <div className="w-full flex flex-row justify-between items-center gap-10">
        <div className="text-right">
          <h2 className="text-bhover text-4xl mb-10">شرح الخدمة</h2>
          <p className="text-white text-lg max-w-[550px]">
            نقوم بربط حساب المستثمر بحساب الشركه وعند فتح أي صفقة في حساب
            الشركه، تفتح الصفقة تلقائيا في حساب المستثمر بنفس قيمة الصفقة
            الرئيسية من إجمالي رأس المال فمثلا لو فتحنا في حساب الشركه صفقة على
            عملة بإجمالي ٢٠٪ من رأس المال، تفتح تلقائيا عند كل المستثمرين صفقة
            على نفس العملة بقيمة ٢٠٪ من راس مال المستثمر وعند حدوث أي تغيير على
            الصفقة يتم ايضا تلقائيا في الصفقات المفتوحة عند المستثمرين.
          </p>
        </div>
        <img className="w-64 cursor-pointer" src={WalletImg2} alt="wallet" />
      </div>
    </section>
  );
};

export default InvestmentPage;

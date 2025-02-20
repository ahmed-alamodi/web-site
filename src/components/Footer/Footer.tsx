const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 p-10 shadow-lg animate-fade-in-up">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
        <div>
          <h2 className="text-xl font-bold text-green-600 hover:text-green-700 transition-colors duration-300">
            موقعنا
          </h2>
          <div className="flex space-x-4 mt-4">
            <i className="fab fa-tiktok hover:text-gray-500 transition-colors duration-300"></i>
            <i className="fab fa-instagram hover:text-gray-500 transition-colors duration-300"></i>
            <i className="fab fa-facebook hover:text-gray-500 transition-colors duration-300"></i>
            <i className="fab fa-youtube hover:text-gray-500 transition-colors duration-300"></i>
            <i className="fab fa-pinterest hover:text-gray-500 transition-colors duration-300"></i>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-6 md:mt-0">
          <div>
            <h3 className="font-semibold">اكتشف</h3>
            <ul className="mt-2 space-y-2">
              <li className="hover:underline cursor-pointer">عن موقعنا</li>
              <li className="hover:underline cursor-pointer">خططنا وأسعارنا</li>
              <li className="hover:underline cursor-pointer">فيديوهات مخزنة</li>
              <li className="hover:underline cursor-pointer">الخطوط</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">الرخص والشروط</h3>
            <ul className="mt-2 space-y-2">
              <li className="hover:underline cursor-pointer">شروط الترخيص</li>
              <li className="hover:underline cursor-pointer">سياسة الخصوصية</li>
              <li className="hover:underline cursor-pointer">الكوكيز</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">الموارد</h3>
            <ul className="mt-2 space-y-2">
              <li className="hover:underline cursor-pointer">التصميم</li>
              <li className="hover:underline cursor-pointer">التسويق</li>
              <li className="hover:underline cursor-pointer">مركز المساعدة</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">معلومات عنا</h3>
            <ul className="mt-2 space-y-2">
              <li className="hover:underline cursor-pointer">من نحن</li>
              <li className="hover:underline cursor-pointer">انضم لفريقنا</li>
              <li className="hover:underline cursor-pointer">مدونة الشركة</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm border-t pt-4">
        <p>&copy; {new Date().getFullYear()} موقعنا. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
};

export default Footer;
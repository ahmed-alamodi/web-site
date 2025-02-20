'use client';
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Globe, Twitter, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">
        <span className="text-black">تواصل</span>{" "}
        <span className="text-[#27519c]">معنا</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div>
          <p className="text-gray-600 mb-6">
            يرجى ملء النموذج في هذا القسم للتواصل معنا. أو اتصل بين الساعة 9:00 صباحًا و 8:00 مساءً بالتوقيت الشرقي، من الاحد إلى الخميس
          </p>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center">
              <MapPin className="text-[#27519c] me-2" /> <strong>العنوان:</strong>{" "}
              بروك 103، نيويورك، الولايات المتحدة الأمريكية
            </li>
            <li className="flex items-center">
              <Mail className="text-[#27519c] me-2" /> <strong>البريد الإلكتروني:</strong>{" "}
              amodi.ahmedaziz@gmail.com
            </li>
            <li className="flex items-center">
              <Phone className="text-[#27519c] me-2" /> <strong>الهاتف:</strong>{" "}
              +967 770969833
            </li>
            <li className="flex items-center">
              <Globe className="text-[#27519c] me-2" /> <strong>الموقع الإلكتروني:</strong>{" "}
              www.myaddress.com
            </li>
            <li className="flex items-center">
              <Twitter className="text-[#27519c] me-2" />{" "}
              <strong>تويتر:</strong> a_amodi_96@
            </li>
            <li className="flex items-center">
              <Facebook className="text-[#27519c] me-2" />{" "}
              <strong>فيسبوك:</strong> a_amodi_96@
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="الاسم"
            className="w-full p-3 border rounded-md"
          />
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            className="w-full p-3 border rounded-md"
          />
          <textarea
            placeholder="الرسالة"
            className="w-full p-3 border rounded-md h-32"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-[#27519c] text-white py-3 rounded-md"
          >
            إرسال الرسالة
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;

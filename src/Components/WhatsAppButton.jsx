// // WhatsAppButton.js
// import React from 'react';
// const WhatsAppButton = () => {
//     const phoneNumber = "0990677029"; // Reemplaza con tu número de WhatsApp
//     const message = "Quiero más información sobre un arreglo. Mi número es 0990677029.";
//     const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
// const WhatsAppButton = () => {
//   return (
//     <a
//       href="https://wa.me/1234567890" 
//       
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <WhatsAppIcon size={24} />
//     </a>
//   );
// };

// export default WhatsAppButton;

// WhatsAppButton.js
import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppButton = () => {
  const phoneNumber = "593983579034"; // Reemplaza con tu número de WhatsApp
  const message = "Quiero más información";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
     className="fixed lg:bottom-20 lg:right-20 xspeque:bottom-4 xspeque:right-2 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
      target="_blank"
      rel="noopener noreferrer"
    >
      <WhatsAppIcon size={24} />
    </a>
  );
};

export default WhatsAppButton;


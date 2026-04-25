// // Footer.jsx
// import React from "react";

// const footerData = {
//   company: [
//     "About Us",
//     "Swiggy Corporate",
//     "Careers",
//     "Team",
//     "Swiggy One",
//     "Swiggy Instamart",
//     "Swiggy Dineout",
//     "Minis",
//     "Pyng",
//   ],
//   contact: [
//     "Help & Support",
//     "Partner with us",
//     "Ride with us",
//   ],
//   legal: [
//     "Terms & Conditions",
//     "Cookie Policy",
//     "Privacy Policy",
//   ],
//   cities: [
//     "Bangalore",
//     "Gurgaon",
//     "Hyderabad",
//     "Delhi",
//     "Mumbai",
//     "Pune",
//     "685+ Cities",
//   ],
//   lifeAtSwiggy: [
//     "Explore with Swiggy",
//     "Swiggy News",
//     "Snackables",
//   ],
//   socialLinks: [
//     "LinkedIn",
//     "Instagram",
//     "Facebook",
//     "Pinterest",
//     "Twitter",
//   ],
// };

// function FooterSection({ title, items }) {
//   return (
//     <div>
//       <h3 className="font-semibold text-lg mb-4 text-white">{title}</h3>
//       <ul className="space-y-2">
//         {items.map((item, index) => (
//           <li
//             key={index}
//             className="text-gray-300 hover:text-white cursor-pointer transition"
//           >
//             {item}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function Footer() {
//   return (
//     <footer className="bg-[#02060C] text-white px-6 md:px-16 py-12">
//       <div className="max-w-[1200px] mx-auto">
        
//         {/* Top Section */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 border-b border-gray-700 pb-10">
          
//           {/* Logo + Copyright */}
//           <div>
//             <img
//               src="/images/logo.svg"
//               alt="Swiggy Logo"
//               className="w-32 mb-4"
//             />
//             <p className="text-gray-400 text-sm">
//               © 2025 Swiggy Limited
//             </p>
//           </div>

//           <FooterSection title="Company" items={footerData.company} />
//           <FooterSection title="Contact us" items={footerData.contact} />
//           <FooterSection title="Legal" items={footerData.legal} />
//           <FooterSection title="Available in" items={footerData.cities} />
//           <FooterSection title="Life at Swiggy" items={footerData.lifeAtSwiggy} />
//         </div>

//         {/* Bottom Section */}
//         <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-6">
          
//           <h3 className="font-semibold text-lg">Social Links</h3>

//           <div className="flex gap-6">
//             {footerData.socialLinks.map((social, index) => (
//               <span
//                 key={index}
//                 className="text-gray-300 hover:text-white cursor-pointer transition"
//               >
//                 {social}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
import React from "react";

const footerData = {
  company: [
    "About Us",
    "Swiggy Corporate",
    "Careers",
    "Team",
    "Swiggy One",
    "Swiggy Instamart",
    "Swiggy Dineout",
    "Minis",
    "Pyng",
  ],
  contact: [
    "Help & Support",
    "Partner with us",
    "Ride with us",
  ],
  legal: [
    "Terms & Conditions",
    "Cookie Policy",
    "Privacy Policy",
  ],
  cities: [
    "Bangalore",
    "Gurgaon",
    "Hyderabad",
    "Delhi",
    "Mumbai",
    "Pune",
    "685+ Cities",
  ],
  lifeAtSwiggy: [
    "Explore with Swiggy",
    "Swiggy News",
    "Snackables",
  ],
  socialLinks: [
    "LinkedIn",
    "Instagram",
    "Facebook",
    "Pinterest",
    "Twitter",
  ],
};

function FooterSection({ title, items }) {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-4 text-gray-900">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="text-gray-600 hover:text-gray-900 cursor-pointer transition"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#f0f0f5] text-gray-900 px-6 md:px-16 py-12">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 border-b border-gray-300 pb-10">
          
          {/* Logo + Copyright */}
          <div>
            <img
              src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png"
              alt="Swiggy Logo"
              className="w-32 mb-4"
            />
            <p className="text-gray-500 text-sm">
              © 2025 Swiggy Limited
            </p>
          </div>

          <FooterSection title="Company" items={footerData.company} />
          <FooterSection title="Contact us" items={footerData.contact} />
          <FooterSection title="Legal" items={footerData.legal} />
          <FooterSection title="Available in" items={footerData.cities} />
          <FooterSection title="Life at Swiggy" items={footerData.lifeAtSwiggy} />
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-6">
          
          <h3 className="font-semibold text-lg text-gray-900">Social Links</h3>

          <div className="flex gap-6">
            {footerData.socialLinks.map((social, index) => (
              <span
                key={index}
                className="text-gray-600 hover:text-gray-900 cursor-pointer transition"
              >
                {social}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
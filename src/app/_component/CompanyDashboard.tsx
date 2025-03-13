// import { FaSackDollar } from "react-icons/fa6";
// import { LuBrain } from "react-icons/lu";
// import { HiOutlineLocationMarker } from "react-icons/hi";
// import { PiBag } from "react-icons/pi";

// export default function Dashboard() {
//     return (
//         <div>
//             <div>
//                 <p className="text-l font-semibold">Full stack expertise with UI UX</p>
//                 <p className="text-gray-500 text-xs mt-2">Posted 58 minutes ago</p>
//             </div>
//             <div>
//                 <p className="text-l font-semibold mt-6">Description</p>
//                 <div className="text-xs mt-2">
//                     <div>
//                         Job Title: Full-Stack Developer with UI/UX Expertise for Website Integration Project​
//                     </div>
//                     <div>Note : ChatGPT and AI replies will not be seen or responded to</div>
//                     <div className="mt-5 w-[50%]">
//                         Description:
//                         We are seeking a skilled Full-Stack Developer with strong UI/UX design sensibilities to enhance our WordPress website (built with Elementor) by 
//                         integrating a virtual workspace prototype. The goal is to streamline user sign-ups and attract both clients and freelancers. This role requires collaboration 
//                         with the owner to audit current designs, implement necessary changes, and provide expert perspectives on improving the landing page and user 
//                         experience. 
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 <p className="text-l font-semibold mt-6">Freelancer will need to deliver</p>
//                 <p className="text-xs mt-2">
//                 Responsibilities:
//                 Prototype Integration: Seamlessly incorporate our virtual workspace prototype into the existing website.
//                 </p>
//             </div>
//             <div>
//                 <p className="text-l font-semibold mt-4">Qualities needed to be successful</p>
//                 <p className="text-xs mt-2">UI/UX Enhancements: Revise the landing page design and make minor refinements to other pages, focusing on user-centric design to facilitate easy 
//                 sign-ups.</p>
//             </div>


//             <div className="flex text-xs w-[50%] flex-wrap justify-around items-start">
//                 <div>
//                     <div className="flex">
//                         <FaSackDollar />
//                         <p className="font-medium">$500.00</p>
//                     </div> 
//                     <p className="text-gray-500">Fixed-price</p>
//                 </div>
//                 <div>
//                     <div className="flex">
//                         <LuBrain />
//                         <p className="font-medium">Intermediate</p>
//                     </div> 
//                     <p className="text-gray-500">Experience</p>
//                 </div>
//                 <div>
//                     <div className="flex">
//                         <HiOutlineLocationMarker />
//                         <p className="font-medium">Remote Job</p>
//                     </div> 
//                 </div>
//                 <div>
//                     <div className="flex">
//                         <PiBag />
//                         <p className="font-medium">One-time project</p>
//                     </div> 
//                     <p className="text-gray-500">Project Type</p>
//                 </div>
//             </div>
//         </div>
//     )
// }


import React from "react";

const Card = ({ title, description, imgSrc }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center">
      <img src={imgSrc} alt={title} className="w-24 h-24 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      title: "Create your free profile",
      description:
        "Highlight your skills and experience, show your portfolio, and set your ideal pay rate.",
      imgSrc: "cardimage1.png",
    },
    {
      title: "Work the way you want",
      description:
        "Apply for jobs, create easy-to-by projects, or access exclusive opportunities that come to you.",
      imgSrc: "cardimage2.png",
    },
    {
      title: "Get paid securely",
      description:
        "From contract to payment, we help you work safely and get paid securely.",
      imgSrc: "cardimage3.png",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">How it works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              title={step.title}
              description={step.description}
              imgSrc={step.imgSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Dashboard = () => {
  return (
    <div>
      <HowItWorks />
    </div>
  );
};

export default Dashboard;

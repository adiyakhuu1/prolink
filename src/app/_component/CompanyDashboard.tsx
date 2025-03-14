import { FaSackDollar } from "react-icons/fa6";
import { LuBrain } from "react-icons/lu";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { PiBag } from "react-icons/pi";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function Dashboard() {
    return (
        <div className="w-full px-55 py-5 "> 
            <div>
                <p className="text-l font-semibold">UI/UX-тэй бүрэн Fullstack хөгжүүлэгч</p>
                <p className="text-gray-500 text-sm mt-2">58 минутын өмнө нийтлэгдсэн</p>
            </div>
            <div>
                <p className="text-l font-semibold mt-6">Тайлбар</p>
                <div className="text-sm mt-2">
                    <div>
                        Ажлын нэр: Вэбсайт нэгтгэх төсөлд UI/UX мэдлэгтэй Fullstack хөгжүүлэгч​
                    </div>
                    <div>Анхаар: ChatGPT болон AI хариултуудыг харахгүй, хариу өгөхгүй</div>
                    <div className="mt-5 w-[50%]">
                        Тайлбар:
                        Бид WordPress вэбсайтыг (Elementor ашиглан бүтээсэн) сайжруулахын тулд UI/UX-ийн мэдрэмжтэй, чадварлаг бүрэн стек хөгжүүлэгч хайж байна.
                        Үндсэн зорилго нь хэрэглэгчдийн бүртгэлийг хялбарчлах, үйлчлүүлэгчид болон чөлөөт ажилтнуудыг татах явдал юм. Энэ ажил нь одоогийн загварын 
                        аудит хийх, шаардлагатай өөрчлөлтийг хэрэгжүүлэх, эхлэл хуудас болон хэрэглэгчийн туршлагыг сайжруулах мэргэжлийн санал өгөх үүрэгтэй.
                    </div>
                </div>
            </div>
            <div>
                <p className="text-l font-semibold mt-6">Чөлөөт ажилтан дараахыг хүргэх шаардлагатай</p>
                <p className="text-sm mt-2">
                Хариуцлага:
                Прототип нэгтгэх: Манай виртуал ажлын орчны загварыг вэбсайттайгаа төгс нэгтгэх.
                </p>
            </div>
            <div>
                <p className="text-l font-semibold mt-4">Амжилттай ажиллахад шаардлагатай чанарууд</p>
                <p className="text-sm mt-2">UI/UX сайжруулалт: Эхлэл хуудасны загварыг шинэчлэх, бусад хуудасны нарийн сайжруулалтыг хийх. Хэрэглэгчийн төвтэй 
                загварыг бий болгож, бүртгэлийн үйл явцыг хялбарчлах.</p>
            </div>

            <div className="flex text-sm flex-wrap mt-6 px-5">
                <div>
                    <div className="flex mr-60">
                        <FaSackDollar />
                        <p className="font-medium">$500.00</p>
                    </div> 
                    <p className="text-gray-500">Тогтмол үнэ</p>
                </div>
                <div>
                    <div className="flex mr-60">
                        <LuBrain />
                        <p className="font-medium">Дунд түвшин</p>
                    </div> 
                    <p className="text-gray-500">Туршлага</p>
                </div>
                <div>
                    <div className="flex mr-60">
                        <HiOutlineLocationMarker />
                        <p className="font-medium">Алсаас ажиллах</p>
                    </div> 
                </div>
                <div>
                    <div className="flex mt-6">
                        <PiBag />
                        <p className="font-medium">Нэг удаагийн төсөл</p>
                    </div> 
                    <p className="text-gray-500">Төслийн төрөл</p>
                </div>
            </div>

            <div>
              <p className="mt-6 font-semibold text-lg">Ур чадвар ба Мэргэжил</p>
              <div className="flex gap-30 mt-2">
                <div>
                  <p>Full Stack хөгжүүлэлтийн нийлүүлэлт</p>
                  <div className="flex gap-3 mt-3">
                    <Badge className="px-3 bg-[#f1f1f1] rounded rounded-full text-[#676767] text-sm font-normal">Вэб програм</Badge>
                    <Badge className="px-3 bg-[#f1f1f1] rounded rounded-full text-[#676767] text-sm font-normal">Вэбсайтын шинэчлэлт</Badge>
                    <Badge className="px-3 py-2 border-[#61D161] bg-[#ffffff] rounded rounded-full text-[#61D161] text-sm font-normal">+ 1 нэмэлт</Badge>
                  </div>
                </div>
                <div>
                  <p>Бусад</p>
                  <div className="flex gap-3 mt-3">
                    <Badge className="px-3 bg-[#f1f1f1] rounded rounded-full text-[#676767] text-sm font-normal">Вэб дизайн</Badge>
                    <Badge className="px-3 bg-[#f1f1f1] rounded rounded-full text-[#676767] text-sm font-normal">Уян хатан дизайн</Badge>
                    <Badge className="px-3 py-2 border-[#61D161] bg-[#ffffff] rounded rounded-full text-[#61D161] text-sm font-normal">+ 4 нэмэлт</Badge>
                  </div>
                </div>
              <div>
            </div>
          </div>
          </div>
        </div>
    )
}



// import React from "react";

// const JobPost = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen p-6">
      
//       {/* Job Post Content */}
//       <main className="max-w-4xl mx-auto bg-white p-6 mt-6 shadow-lg rounded-lg">
//         <h2 className="text-2xl font-bold">Бүтэн стек хөгжүүлэгч UI/UX туршлагатай</h2>
//         <p className="text-gray-500">58 минутын өмнө нийтлэгдсэн - Дэлхий даяар</p>
        
//         <section className="mt-4">
//           <h3 className="text-lg font-semibold">Тодорхойлолт</h3>
//           <p className="mt-2 text-gray-700">
//             Бид UI/UX дизайны мэдрэмж сайтай бүтэн стек хөгжүүлэгч хайж байна...
//           </p>
//         </section>
        
//         <section className="mt-4">
//           <h3 className="text-lg font-semibold">Гүйцэтгэгчээс шаардагдах зүйлс</h3>
//           <ul className="list-disc pl-5 mt-2 text-gray-700">
//             <li>Прототип интеграци: Виртуал ажлын орчныг саадгүй нэгтгэх.</li>
//             <li>UI/UX сайжруулалт: Нүүр хуудасны дизайныг шинэчлэх...</li>
//           </ul>
//         </section>
        
//         <div className="mt-6 flex justify-between items-center border-t pt-4">
//           <span className="text-lg font-semibold">$500.00</span>
//           <span className="text-gray-500">Дунд түвшний ажил</span>
//           <span className="text-gray-500">Алсаас ажиллах</span>
//         </div>
//       </main>
      
//       {/* Similar Jobs */}
//       <section className="max-w-4xl mx-auto bg-white p-6 mt-6 shadow-lg rounded-lg">
//         <h3 className="text-lg font-semibold">Upwork дээрх ижил төстэй ажлууд</h3>
//         <div className="mt-4 grid grid-cols-2 gap-4">
//           <div className="border p-4 rounded-lg shadow-md">
//             <h4 className="text-green-600 font-semibold">Junior Fullstack хөгжүүлэгч</h4>
//             <p className="text-sm text-gray-500">Цагийн - 5 минутын өмнө нийтлэгдсэн</p>
//           </div>
//           <div className="border p-4 rounded-lg shadow-md">
//             <h4 className="text-green-600 font-semibold">Bet365 автомат бооцооны бот</h4>
//             <p className="text-sm text-gray-500">Цагийн - 6 минутын өмнө нийтлэгдсэн</p>
//           </div>
//         </div>
//       </section>
      
//       {/* How it Works */}
//       <section className="max-w-4xl mx-auto bg-white p-6 mt-6 shadow-lg rounded-lg">
//         <h3 className="text-lg font-semibold">Хэрхэн ажилладаг вэ?</h3>
//         <div className="grid grid-cols-3 gap-4 mt-4">
//           <div className="p-4 border rounded-lg shadow-md">
//             <p className="text-center">Өөрийн үнэгүй профайлаа үүсгэ</p>
//           </div>
//           <div className="p-4 border rounded-lg shadow-md">
//             <p className="text-center">Өөрийн хүссэнээрээ ажилла</p>
//           </div>
//           <div className="p-4 border rounded-lg shadow-md">
//             <p className="text-center">Аюулгүй төлбөр хүлээн ав</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default JobPost;


// import React from "react";

// const Card = ({ title, description, imgSrc }) => {
//   return (
//     <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center">
//       <img src={imgSrc} alt={title} className="w-24 h-24 mb-4" />
//       <h3 className="text-xl font-semibold mb-2">{title}</h3>
//       <p className="text-gray-600">{description}</p>
//     </div>
//   );
// };

// const HowItWorks = () => {
//   const steps = [
//     {
//       title: "Create your free profile",
//       description:
//         "Highlight your skills and experience, show your portfolio, and set your ideal pay rate.",
//       imgSrc: "cardimage1.png",
//     },
//     {
//       title: "Work the way you want",
//       description:
//         "Apply for jobs, create easy-to-by projects, or access exclusive opportunities that come to you.",
//       imgSrc: "cardimage2.png",
//     },
//     {
//       title: "Get paid securely",
//       description:
//         "From contract to payment, we help you work safely and get paid securely.",
//       imgSrc: "cardimage3.png",
//     },
//   ];

//   return (
//     <section className="py-12 bg-gray-100">
//       <div className="max-w-5xl mx-auto px-6 text-center">
//         <h2 className="text-3xl font-bold mb-8">How it works</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {steps.map((step, index) => (
//             <Card
//               key={index}
//               title={step.title}
//               description={step.description}
//               imgSrc={step.imgSrc}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const Dashboard = () => {
//   return (
//     <div>
//       <HowItWorks />
//     </div>
//   );
// };

// export default Dashboard;

import Image from "next/image";

export default function Agents() {
  const agents = [
    {
      name: "Biologiyes",
      skill: "Expert on cell biology",
      imgSrc:
        "https://www.advancedsciencenews.com/wp-content/uploads/2018/01/butterfly_robot_hanD_001.jpg",
    },
    {
      name: "Mathematica",
      skill: "Specialist in algebra and calculus",
      imgSrc:
        "https://as1.ftcdn.net/v2/jpg/01/01/27/08/1000_F_101270840_fpP2jgWBoWxTCfmO2RWOfUsQUAtpc1t7.jpg",
    },
    {
      name: "Physica",
      skill: "Expert in quantum mechanics",
      imgSrc: "https://gamma.cs.unc.edu/PROBOT/naorobot.png",
    },
    {
      name: "Chemistra",
      skill: "Organic chemistry specialist",
      imgSrc:
        "https://d2cbg94ubxgsnp.cloudfront.net/Pictures/2000xAny/1/3/3/132133_robot_chemist_shutterstock_645091624.jpg",
    },
    {
      name: "Informatica",
      skill: "Data science and AI expert",
      imgSrc:
        "https://astroninformatica.es/wp-content/uploads/2021/03/robot-foto_0.jpg",
    },
    {
      name: "Historians",
      skill: "Medieval history expert",
      imgSrc:
        "https://ecorobotics.com/wp-content/uploads/2021/05/adobestock_192033032.jpg",
    },
    {
      name: "Literatura",
      skill: "Shakespearean literature expert",
      imgSrc:
        "https://img.freepik.com/premium-photo/robot-studying-with-books-outdoors_582637-6704.jpg",
    },
    {
      name: "Economica",
      skill: "Macroeconomics specialist",
      imgSrc:
        "https://img.freepik.com/fotos-premium/ai-generado-ilustracion-hombres-robot-pie-moneda-economica-grafico-ascendente-luz-neon-lleno_961747-369.jpg",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Explore Agents That Best Swite Your Need
        </h1>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {agents.map((agent, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:border-gray-700 dark:bg-gray-900"
            >
              <div className="h-40 overflow-hidden rounded-lg">
                <Image
                  src={agent.imgSrc}
                  alt={`${agent.name} Cover`}
                  width={240}
                  height={160}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">{agent.name}</h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {agent.skill}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

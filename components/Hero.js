import Image from 'next/image';
import { hero } from '@/data/config';

export default function Hero() {
  const handleDownloadCV = () => {
    window.open('https://drive.google.com/uc?export=download&id=1h4AC51mN0CU5fv2gV7YYf0QJFPAasXXT', '_blank');
  };

  return (
    <div className="mb-20">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="border border-gray-300 w-20 h-20 rounded-full relative overflow-hidden transition delay-115 animated-background bg-gradient-to-r from-purple-500 via-blue-700 to-indigo-500 hover:scale-110 hover:bg-indigo-500 duration-300">
          <Image
            src="/static/profile.png"
            layout="fill"
            objectFit="contain"
            alt="Viktor"
          />
        </div>
      </div>
      <h1 className="mt-5 mb-4">{hero.title}</h1>
      <p className="text-lg">{hero.desc}</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300 font-bold"
        onClick={handleDownloadCV}
      >
        Download CV
      </button>
    </div>
  );
}

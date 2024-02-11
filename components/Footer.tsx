import Image from 'next/image';

export default function Footer({}) {
  return (
    <div className="relative py-2">
      {/* Next.js Image component for the background image */}
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/footer-bg.jpg" // Update the image path accordingly
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col items-center justify-center my-6 text-center text-white">
        <p>
          Open for contributions {" "}
          <a
            href="https://github.com/SachinD6/code2snap"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400"
          >
           @Code2Snap
          </a>
        </p>
      </div>
    </div>
  );
}

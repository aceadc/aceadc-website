import React from "react";

export default function Testimonial({
  name,
  batch,
  university,
  testimony,
  imageSrc,
}) {
  return (
    <div className="flex flex-col items-center md:items-start md:flex-row gap-3 bg-gray-800 p-6 rounded-lg w-full md:w-5/6">
      <img
        className="ml-0 md:-ml-16 w-32 h-32 rounded-full object-contain border-8 border-gray-800 bg-gray-700"
        src={imageSrc}
        alt={"Photo of" + name}
      />

      <div className="flex gap-4 items-start">
        <svg
          width="54"
          height="44"
          viewBox="0 0 54 44"
          fill="none"
          className="w-8 h-8 flex-shrink-0 opacity-50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.84275 6.77875C8.58408 2.72275 14.2454 0.666748 21.6667 0.666748H24.3334V8.18408L22.1894 8.61342C18.5361 9.34408 15.9948 10.7814 14.6348 12.8907C13.9251 14.0271 13.5227 15.3282 13.4668 16.6667H21.6667C22.374 16.6667 23.0523 16.9477 23.5524 17.4478C24.0525 17.9479 24.3334 18.6262 24.3334 19.3334V38.0001C24.3334 40.9414 21.9414 43.3334 19.0001 43.3334H3.00008C2.29284 43.3334 1.61456 43.0525 1.11447 42.5524C0.614369 42.0523 0.333418 41.374 0.333418 40.6667V27.3334L0.341418 19.5494C0.317418 19.2534 -0.189249 12.2401 4.84275 6.77875ZM48.3334 43.3334H32.3334C31.6262 43.3334 30.9479 43.0525 30.4478 42.5524C29.9477 42.0523 29.6667 41.374 29.6667 40.6667V27.3334L29.6747 19.5494C29.6507 19.2534 29.1441 12.2401 34.1761 6.77875C37.9174 2.72275 43.5788 0.666748 51.0001 0.666748H53.6667V8.18408L51.5227 8.61342C47.8694 9.34408 45.3281 10.7814 43.9681 12.8907C43.2585 14.0271 42.856 15.3282 42.8001 16.6667H51.0001C51.7073 16.6667 52.3856 16.9477 52.8857 17.4478C53.3858 17.9479 53.6667 18.6262 53.6667 19.3334V38.0001C53.6667 40.9414 51.2748 43.3334 48.3334 43.3334Z"
            fill="#A1A1AA"
          />
        </svg>

        <div className="text-white">
          <p className="text-lg md:text-xl text-gray-300">{testimony}</p>
          <p className="font-semibold mt-4 text-gray-200">{name}</p>
          <p className="text-sm text-gray-400">{batch},</p>
          <p className="text-sm text-gray-400">{university}</p>
        </div>
      </div>
    </div>
  );
}

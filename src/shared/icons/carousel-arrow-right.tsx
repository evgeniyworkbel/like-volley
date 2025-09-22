import { IconProps } from "../types";

export function CarouselArrowRight({
  className,
  width = 48,
  height = 48,
}: IconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 48 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_765_4711)">
        <foreignObject x="-18.5" y="-18.199" width="85" height="85">
          <div
            style={{
              backdropFilter: "blur(12px)",
              clipPath: "url(#bgblur_1_765_4711_clip_path)",
              height: "100%",
              width: "100%",
            }}
          ></div>
        </foreignObject>
        <path
          data-figma-bg-blur-radius="24"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.1221 40.3912C12.7508 42.301 16.5005 42.301 24 42.301C31.4995 42.301 35.2492 42.301 37.8779 40.3912C38.7268 39.7744 39.4734 39.0278 40.0902 38.1789C42 35.5502 42 31.8005 42 24.301C42 16.8016 42 13.0518 40.0902 10.4232C39.4734 9.57423 38.7268 8.82765 37.8779 8.21085C35.2492 6.30102 31.4995 6.30102 24 6.30102C16.5005 6.30102 12.7508 6.30102 10.1221 8.21085C9.2732 8.82765 8.52663 9.57422 7.90983 10.4232C6 13.0518 6 16.8016 6 24.301C6 31.8005 6 35.5502 7.90983 38.1789C8.52663 39.0278 9.2732 39.7744 10.1221 40.3912Z"
          fill="#FC5C15"
          stroke="white"
          strokeLinecap="round"
        />
        <g filter="url(#filter1_d_765_4711)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.0559 13.2356C20.4675 12.6525 19.5178 12.6567 18.9346 13.2451C18.3515 13.8335 18.3557 14.7832 18.9441 15.3664L22.47 18.861C23.901 20.2793 24.8826 21.2554 25.5468 22.0824C26.192 22.8858 26.4134 23.4019 26.4723 23.864C26.5093 24.1542 26.5093 24.4478 26.4723 24.738C26.4134 25.2002 26.192 25.7162 25.5468 26.5196C24.8826 27.3467 23.901 28.3227 22.47 29.741L18.9441 33.2356C18.3557 33.8188 18.3515 34.7685 18.9346 35.3569C19.5178 35.9453 20.4675 35.9496 21.0559 35.3664L24.6454 31.8088C25.9973 30.469 27.1023 29.3738 27.8859 28.3981C28.7007 27.3835 29.2906 26.3536 29.4482 25.1173C29.5173 24.5753 29.5173 24.0268 29.4482 23.4847C29.2906 22.2485 28.7007 21.2186 27.8859 20.2039C27.1023 19.2282 25.9973 18.1331 24.6454 16.7932L21.0559 13.2356Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <clipPath
          id="bgblur_1_765_4711_clip_path"
          transform="translate(18.5 18.199)"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.1221 40.3912C12.7508 42.301 16.5005 42.301 24 42.301C31.4995 42.301 35.2492 42.301 37.8779 40.3912C38.7268 39.7744 39.4734 39.0278 40.0902 38.1789C42 35.5502 42 31.8005 42 24.301C42 16.8016 42 13.0518 40.0902 10.4232C39.4734 9.57423 38.7268 8.82765 37.8779 8.21085C35.2492 6.30102 31.4995 6.30102 24 6.30102C16.5005 6.30102 12.7508 6.30102 10.1221 8.21085C9.2732 8.82765 8.52663 9.57422 7.90983 10.4232C6 13.0518 6 16.8016 6 24.301C6 31.8005 6 35.5502 7.90983 38.1789C8.52663 39.0278 9.2732 39.7744 10.1221 40.3912Z"
          />
        </clipPath>
        <filter
          id="filter1_d_765_4711"
          x="15.5"
          y="9.80103"
          width="27"
          height="39"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="5" dy="5" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.176471 0 0 0 0 0.556863 0 0 0 0 0.678431 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_765_4711"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_765_4711"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_765_4711">
          <rect
            width="48"
            height="48"
            fill="white"
            transform="translate(0 0.301025)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

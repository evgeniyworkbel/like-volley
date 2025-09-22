import { IconProps } from "../types";

export function CarouselArrowLeft({
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
      <g clipPath="url(#clip0_765_2945)">
        <foreignObject x="-18.5" y="-18.199" width="85" height="85">
          <div
            style={{
              backdropFilter: "blur(12px)",
              clipPath: "url(#bgblur_1_765_2945_clip_path)",
              height: "100%",
              width: "100%",
            }}
          ></div>
        </foreignObject>
        <path
          data-figma-bg-blur-radius="24"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M37.8779 40.3912C35.2492 42.301 31.4995 42.301 24 42.301C16.5005 42.301 12.7508 42.301 10.1221 40.3912C9.2732 39.7744 8.52662 39.0278 7.90983 38.1789C6 35.5502 6 31.8005 6 24.301C6 16.8016 6 13.0518 7.90983 10.4232C8.52662 9.57423 9.2732 8.82765 10.1221 8.21086C12.7508 6.30103 16.5005 6.30103 24 6.30103C31.4995 6.30103 35.2492 6.30103 37.8779 8.21086C38.7268 8.82765 39.4734 9.57423 40.0902 10.4232C42 13.0518 42 16.8016 42 24.301C42 31.8005 42 35.5502 40.0902 38.1789C39.4734 39.0278 38.7268 39.7744 37.8779 40.3912Z"
          fill="#FC5C15"
          stroke="white"
          strokeLinecap="round"
        />
        <g filter="url(#filter1_d_765_2945)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.9441 13.2356C27.5325 12.6525 28.4822 12.6567 29.0654 13.2451C29.6485 13.8335 29.6443 14.7832 29.0559 15.3664L25.53 18.861C24.099 20.2793 23.1174 21.2554 22.4532 22.0824C21.808 22.8858 21.5866 23.4019 21.5277 23.864C21.4908 24.1542 21.4908 24.4478 21.5277 24.738C21.5866 25.2002 21.808 25.7162 22.4532 26.5196C23.1174 27.3467 24.099 28.3228 25.53 29.741L29.0559 33.2356C29.6443 33.8188 29.6485 34.7685 29.0654 35.3569C28.4822 35.9453 27.5325 35.9496 26.9441 35.3664L23.3546 31.8088C22.0027 30.469 20.8977 29.3738 20.1141 28.3981C19.2993 27.3835 18.7094 26.3536 18.5518 25.1173C18.4827 24.5753 18.4827 24.0268 18.5518 23.4847C18.7094 22.2485 19.2993 21.2186 20.1141 20.2039C20.8977 19.2282 22.0027 18.1331 23.3546 16.7932L26.9441 13.2356Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <clipPath
          id="bgblur_1_765_2945_clip_path"
          transform="translate(18.5 18.199)"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M37.8779 40.3912C35.2492 42.301 31.4995 42.301 24 42.301C16.5005 42.301 12.7508 42.301 10.1221 40.3912C9.2732 39.7744 8.52662 39.0278 7.90983 38.1789C6 35.5502 6 31.8005 6 24.301C6 16.8016 6 13.0518 7.90983 10.4232C8.52662 9.57423 9.2732 8.82765 10.1221 8.21086C12.7508 6.30103 16.5005 6.30103 24 6.30103C31.4995 6.30103 35.2492 6.30103 37.8779 8.21086C38.7268 8.82765 39.4734 9.57423 40.0902 10.4232C42 13.0518 42 16.8016 42 24.301C42 31.8005 42 35.5502 40.0902 38.1789C39.4734 39.0278 38.7268 39.7744 37.8779 40.3912Z"
          />
        </clipPath>
        <filter
          id="filter1_d_765_2945"
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
            result="effect1_dropShadow_765_2945"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_765_2945"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_765_2945">
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

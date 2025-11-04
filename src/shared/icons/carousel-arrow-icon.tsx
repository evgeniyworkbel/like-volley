import { IconProps } from "../types";

export function CarouselArrowIcon({
  className,
  width = 48,
  height = 48,
}: IconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 43 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <foreignObject x="-2.5" y="-2.5" width="48" height="48">
        <div
          style={{
            clipPath: "url(#bgblur_0_895_568_clip_path)",
            height: "100%",
            width: "100%",
          }}
        ></div>
      </foreignObject>
      <g transform="translate(2.5, 2.5)">
        <path
          data-figma-bg-blur-radius="24"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.12215 34.8221C7.7508 36.7319 11.5005 36.7319 19 36.7319C26.4995 36.7319 30.2492 36.7319 32.8779 34.8221C33.7268 34.2053 34.4734 33.4587 35.0902 32.6098C37 29.9811 37 26.2314 37 18.7319C37 11.2325 37 7.48274 35.0902 4.85408C34.4734 4.00514 33.7268 3.25855 32.8779 2.64176C30.2492 0.731931 26.4995 0.731931 19 0.731931C11.5005 0.73193 7.75081 0.73193 5.12215 2.64176C4.2732 3.25855 3.52663 4.00513 2.90983 4.85408C1 7.48274 1 11.2325 1 18.7319C1 26.2314 1 29.9811 2.90983 32.6098C3.52663 33.4587 4.2732 34.2053 5.12215 34.8221Z"
          fill="#FC5C15"
          stroke="white"
          strokeLinecap="round"
        />
      </g>
      <g transform="translate(2.5, 2.5)" filter="url(#filter1_d_895_568)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.0559 7.66655C15.4675 7.08338 14.5178 7.08762 13.9346 7.67601C13.3515 8.26441 13.3557 9.21415 13.9441 9.79731L17.47 13.2919C18.901 14.7102 19.8826 15.6863 20.5468 16.5133C21.192 17.3167 21.4134 17.8328 21.4723 18.2949C21.5093 18.5851 21.5093 18.8787 21.4723 19.1689C21.4134 19.6311 21.192 20.1471 20.5468 20.9505C19.8826 21.7776 18.901 22.7537 17.47 24.1719L13.9441 27.6666C13.3557 28.2497 13.3515 29.1995 13.9346 29.7879C14.5178 30.3762 15.4675 30.3805 16.0559 29.7973L19.6454 26.2397C20.9973 24.8999 22.1023 23.8047 22.8859 22.829C23.7007 21.8144 24.2906 20.7845 24.4482 19.5483C24.5173 19.0062 24.5173 18.4577 24.4482 17.9156C24.2906 16.6794 23.7007 15.6495 22.8859 14.6349C22.1023 13.6591 20.9973 12.564 19.6454 11.2241L16.0559 7.66655Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath
          id="bgblur_0_895_568_clip_path"
          transform="translate(2.5 2.5)"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.12215 34.8221C7.7508 36.7319 11.5005 36.7319 19 36.7319C26.4995 36.7319 30.2492 36.7319 32.8779 34.8221C33.7268 34.2053 34.4734 33.4587 35.0902 32.6098C37 29.9811 37 26.2314 37 18.7319C37 11.2325 37 7.48274 35.0902 4.85408C34.4734 4.00514 33.7268 3.25855 32.8779 2.64176C30.2492 0.731931 26.4995 0.731931 19 0.731931C11.5005 0.73193 7.75081 0.73193 5.12215 2.64176C4.2732 3.25855 3.52663 4.00513 2.90983 4.85408C1 7.48274 1 11.2325 1 18.7319C1 26.2314 1 29.9811 2.90983 32.6098C3.52663 33.4587 4.2732 34.2053 5.12215 34.8221Z"
          />
        </clipPath>
        <filter
          id="filter1_d_895_568"
          x="10.5"
          y="4.23193"
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
            result="effect1_dropShadow_895_568"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_895_568"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

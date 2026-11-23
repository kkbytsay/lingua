import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export const ICONS = {
  home: (props: IconProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <g>
        <path
          transform="matrix(1 0 0 1 0 0)"
          d="M8 20L8 12.941L12 12.941L12 20L17 20L17 10.588L20 10.588L10 0L0 10.588L3 10.588L3 20L8 20Z"
        />
      </g>
    </svg>
  ),
  schedule: (props: IconProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <g>
        <path
          transform="matrix(1 0 0 1 0 0)"
          d="M15.556 0L13.333 0L13.333 2L6.667 2L6.667 0L4.444 0L4.444 2L2.222 2C1 2 0 2.9 0 4L0 18C0 19.1 1 20 2.222 20L17.778 20C19 20 20 19.1 20 18L20 4C20 2.9 19 2 17.778 2L15.556 2L15.556 0Z"
        />
      </g>
    </svg>
  ),
  lessonsLibrary: (props: IconProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <g>
        <path
          transform="matrix(1 0 0 1 0 0)"
          d="M17.5 0L2.5 0C1.125 0 0 0.9 0 2L0 18C0 19.1 1.125 20 2.5 20L17.5 20C18.875 20 20 19.1 20 18L20 2C20 0.9 18.875 0 17.5 0ZM2.5 2L8.75 2L8.75 10L5.625 8.5L2.5 10L2.5 2Z"
        />
      </g>
    </svg>
  ),
  rewardShop: (props: IconProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <g>
        <path
          transform="matrix(1 0 0 1 0 0)"
          d="M18 4.211L15.82 4.211C15.93 3.884 16 3.526 16 3.158C16 1.411 14.66 0 13 0C11.95 0 11.04 0.568 10.5 1.421L10 2.126L9.5 1.411C8.96 0.568 8.05 0 7 0C5.34 0 4 1.411 4 3.158C4 3.526 4.07 3.884 4.18 4.211L2 4.211C0.89 4.211 0.01 5.147 0.01 6.316L0 17.895C0 19.063 0.89 20 2 20L18 20C19.11 20 20 19.063 20 17.895L20 6.316C20 5.147 19.11 4.211 18 4.211Z"
        />
      </g>
    </svg>
  ),
  achievement: (props: IconProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <g>
        <path
          transform="matrix(1 0 0 1 0 0)"
          d="M17.778 2.222L15.556 2.222L15.556 0L4.444 0L4.444 2.222L2.222 2.222C1 2.222 0 3.222 0 4.444L0 5.556C0 8.389 2.133 10.7 4.878 11.044C5.578 12.711 7.078 13.967 8.889 14.333L8.889 17.778L4.444 17.778L4.444 20L15.556 20L15.556 17.778L11.111 17.778L11.111 14.333C12.922 13.967 14.422 12.711 15.122 11.044C17.867 10.7 20 8.389 20 5.556L20 4.444C20 3.222 19 2.222 17.778 2.222ZM2.222 5.556L2.222 4.444L4.444 4.444L4.444 8.689C3.156 8.222 2.222 7 2.222 5.556ZM17.778 5.556C17.778 7 16.844 8.222 15.556 8.689L15.556 4.444L17.778 4.444L17.778 5.556Z"
        />
      </g>
    </svg>
  ),
} as const;

export type IconName = keyof typeof ICONS;

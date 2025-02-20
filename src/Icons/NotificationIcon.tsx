import type { ComponentProps, FC } from 'react';

export const NotificationIcon: FC<ComponentProps<'svg'>> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.3399 14.49L18.3399 12.83C18.1299 12.46 17.9399 11.76 17.9399 11.35V8.82C17.9399 6.47 16.5599 4.44 14.5699 3.49C14.0499 2.57 13.0899 2 11.9899 2C10.8999 2 9.91994 2.59 9.39994 3.52C7.44994 4.49 6.09994 6.5 6.09994 8.82V11.35C6.09994 11.76 5.90994 12.46 5.69994 12.82L4.68994 14.49C4.28994 15.16 4.19994 15.9 4.44994 16.58C4.68994 17.25 5.25994 17.77 5.99994 18.02C7.93994 18.68 9.97994 19 12.0199 19C14.0599 19 16.0999 18.68 18.0399 18.03C18.7399 17.8 19.2799 17.27 19.5399 16.58C19.7999 15.89 19.7299 15.13 19.3399 14.49Z"
        fill="#596780"
      />
      <path
        d="M14.8299 20.01C14.4099 21.17 13.2999 22 11.9999 22C11.2099 22 10.4299 21.68 9.87993 21.11C9.55993 20.81 9.31993 20.41 9.17993 20C9.30993 20.02 9.43993 20.03 9.57993 20.05C9.80993 20.08 10.0499 20.11 10.2899 20.13C10.8599 20.18 11.4399 20.21 12.0199 20.21C12.5899 20.21 13.1599 20.18 13.7199 20.13C13.9299 20.11 14.1399 20.1 14.3399 20.07C14.4999 20.05 14.6599 20.03 14.8299 20.01Z"
        fill="#596780"
      />
    </svg>
  );
};

export const ProfileIcon: FC<ComponentProps<'svg'>> = () => {
  return (
    <svg
      // class="seo-pages-1xdhyk6"
      data-testid="IconAvatar224"
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M5.368 18.847a9.57 9.57 0 0 0 6.592 2.624 9.57 9.57 0 0 0 6.488-2.527c-2.387-3.465-6.419-3.5-6.485-3.5a4.957 4.957 0 0 1-4.954-4.951 4.957 4.957 0 0 1 4.95-4.951 4.956 4.956 0 0 1 4.193 7.587.625.625 0 0 1-1.058-.666 3.705 3.705 0 0 0-3.134-5.671 3.705 3.705 0 0 0-3.701 3.701 3.705 3.705 0 0 0 3.7 3.701c.183-.022 4.597.018 7.369 3.83a9.57 9.57 0 0 0 2.242-6.164c0-5.298-4.311-9.61-9.61-9.61s-9.61 4.312-9.61 9.61c0 2.292.807 4.4 2.151 6.054.887-1.178 2.042-1.989 2.909-2.483a.625.625 0 0 1 .62 1.085c-.807.459-1.892 1.225-2.662 2.33m14.38.575a.6.6 0 0 1-.104.106 10.83 10.83 0 0 1-7.684 3.193c-5.988 0-10.86-4.872-10.86-10.861C1.1 5.872 5.972 1 11.96 1s10.86 4.872 10.86 10.86c0 2.937-1.172 5.605-3.072 7.562"
        fill="#121214"
        fillRule="evenodd"
      ></path>
    </svg>
  );
};

export const HamburgerMenuIcon: FC<ComponentProps<'svg'>> = () => {
  return (
    <svg
      // class="seo-pages-1xdhyk6"
      data-testid="IconHamburgerMenu24"
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.15 6.85H4.85a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h14.3c.41 0 .75.34.75.75s-.34.75-.75.75m0 5.76H4.85a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h14.3c.41 0 .75.34.75.75s-.34.75-.75.75m0 6.01H4.85a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h14.3c.41 0 .75.34.75.75s-.34.75-.75.75"
        fill="#121214"
      ></path>
    </svg>
  );
};
export const HostIcon: FC<ComponentProps<'svg'>> = () => {
  return (
    <svg
      data-testid="IconCar24"
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.86 7.3c.1.24.33.38.57.38q.135 0 .24-.06c.32-.14.47-.5.33-.82l-1.42-3.29a2.29 2.29 0 0 0-2.1-1.38H7.51c-.92 0-1.74.54-2.1 1.38L3.99 6.8c-.13.32.02.68.33.82s.68 0 .82-.32l1.42-3.29c.16-.37.54-.62.95-.62h8.98c.41 0 .79.24.95.62zM19.49 13.92a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0M6.11 15.52a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2"
        fill="#121214"
      ></path>
      <path
        clipRule="evenodd"
        d="M15.43 18.69H8.55v2.4c.02.69-.54 1.25-1.23 1.25H4.91c-.69 0-1.25-.56-1.25-1.25v-2.413a2.545 2.545 0 0 1-2.28-2.527V11.7c0-1.4 1.14-2.54 2.54-2.54h16.17c1.4 0 2.54 1.14 2.54 2.54v4.45a2.55 2.55 0 0 1-2.3 2.528v2.412c.02.69-.54 1.25-1.24 1.25h-2.41c-.69 0-1.25-.56-1.25-1.25zm3.66 0h-2.42v2.4h2.42zm-14.19 0h2.41v2.4H4.9zm-2.27-7c0-.71.58-1.29 1.29-1.29v.01h16.17c.71 0 1.29.58 1.29 1.29v4.44c0 .71-.58 1.29-1.29 1.29H3.92c-.71 0-1.29-.58-1.29-1.29z"
        fill="#121214"
        fillRule="evenodd"
      ></path>
    </svg>
  );
};

export const CancelIcon: FC<ComponentProps<'svg'>> = () => {
  return (
    <svg
      data-testid="IconClose24"
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m12.98 12 5.23-5.23c.27-.27.27-.7 0-.97a.68.68 0 0 0-.97 0l-5.23 5.23L6.78 5.8a.68.68 0 0 0-.97 0c-.27.27-.27.7 0 .97L11.04 12l-5.23 5.23c-.27.27-.27.7 0 .97a.697.697 0 0 0 .98 0l5.23-5.23 5.23 5.23a.697.697 0 0 0 .98 0c.27-.27.27-.7 0-.97L13 12z"
        fill="#121214"
      ></path>
    </svg>
  );
};

export const OpenEyeIcon: FC<ComponentProps<'svg'>> = () => {
  return (
    <svg
      width="24"
      height="17"
      viewBox="0 0 24 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.4578 8.5001C15.4578 10.3937 13.9094 11.9287 11.9995 11.9287C10.0895 11.9287 8.54114 10.3937 8.54114 8.5001C8.54114 6.6065 10.0895 5.07153 11.9995 5.07153C13.9094 5.07153 15.4578 6.6065 15.4578 8.5001Z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 8.5C2.46895 3.86329 6.8383 0.5 12 0.5C17.1617 0.5 21.531 3.86333 23 8.5C21.531 13.1367 17.1617 16.5 12 16.5C6.83828 16.5 2.46892 13.1367 1 8.5Z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CloseEyeIcon: FC<ComponentProps<'svg'>> = () => {
  return (
    <svg
      width="24"
      height="20"
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.1609 17.2037C13.4609 17.3253 12.7386 17.3889 12.0001 17.3889C6.83831 17.3889 2.46894 14.2825 1 10C1.3999 8.83414 2.01474 7.75548 2.802 6.80291M9.5541 7.76083C10.18 7.18778 11.0445 6.83333 11.9995 6.83333C13.9095 6.83333 15.4578 8.25105 15.4578 10C15.4578 10.8744 15.0707 11.6661 14.4449 12.2392M9.5541 7.76083L14.4449 12.2392M9.5541 7.76083L5.76202 4.28856M14.4449 12.2392L18.2374 15.7118M5.76202 4.28856L1.62452 0.5M5.76202 4.28856C7.56014 3.22707 9.70156 2.61111 12 2.61111C17.1618 2.61111 21.5311 5.71752 23 10C22.1851 12.3757 20.4776 14.3895 18.2374 15.7118M18.2374 15.7118L22.3745 19.5"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const GoogleIcon: FC<ComponentProps<'svg'>> = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.18356 3.47999C10.908 3.47999 12.0712 4.20999 12.7345 4.82004L15.3264 2.34001C13.7346 0.890008 11.6631 0 9.18356 0C5.59171 0 2.48967 2.01999 0.979492 4.95998L3.94885 7.22002C4.69382 5.05002 6.75501 3.47999 9.18356 3.47999Z"
        fill="#EB4335"
      />
      <path
        d="M3.95913 10.7799C3.76525 10.2199 3.65305 9.61982 3.65305 8.99985C3.65305 8.37981 3.76525 7.77983 3.94893 7.21983L3.94379 7.10057L1.07348 4.91602L0.979564 4.95979C0.357145 6.17981 0 7.54985 0 8.99985C0 10.4499 0.357145 11.8198 0.979564 13.0398L3.95913 10.7799Z"
        fill="#FBBC05"
      />
      <path
        d="M9.18356 17.9993C11.6631 17.9993 13.7447 17.1993 15.2652 15.8193L12.3672 13.6193C11.5917 14.1493 10.5509 14.5193 9.18356 14.5193C6.75501 14.5193 4.69381 12.9493 3.95905 10.7793L3.85136 10.7883L1.01656 12.9383L0.979492 13.0393C2.48967 15.9793 5.59171 17.9993 9.18356 17.9993Z"
        fill="#34A853"
      />
      <path
        d="M17.9999 9.19937C17.9999 8.45937 17.9386 7.91937 17.806 7.35938H9.18359V10.6994H14.2448C14.1428 11.5294 13.5917 12.7794 12.3672 13.6193L12.3501 13.7312L15.0763 15.8009L15.2652 15.8194C16.9998 14.2494 17.9999 11.9394 17.9999 9.19937Z"
        fill="#4285F4"
      />
    </svg>
  );
};

export const AppleIcon: FC<ComponentProps<'svg'>> = () => {
  return (
    <svg
      width="15"
      height="18"
      viewBox="0 0 15 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5265 9.55986C12.5533 12.2789 14.9732 13.1945 15 13.2069C14.9732 13.2716 14.6085 14.5047 13.7246 15.7625C12.9558 16.8569 12.1619 17.9483 10.8991 17.9745C9.66311 17.9991 9.27322 17.2623 7.85258 17.2623C6.44772 17.2623 6.00574 17.9483 4.83292 17.9991C3.63642 18.0377 2.71142 16.8045 1.93165 15.7117C0.356311 13.4751 -0.854394 9.39493 0.773033 6.64813C1.57806 5.27627 3.02397 4.41153 4.58667 4.39766C5.77055 4.373 6.9039 5.18687 7.63317 5.18687C8.36085 5.18687 9.72783 4.2204 11.1595 4.36067C11.7594 4.38533 13.4515 4.60267 14.5312 6.13946C14.4396 6.19033 12.5139 7.28473 12.5265 9.55986ZM10.2093 2.8732C10.847 2.1102 11.2905 1.05433 11.1722 0C10.2487 0.0385354 9.12958 0.598069 8.45241 1.36107C7.85258 2.03467 7.33168 3.1152 7.47532 4.14487C8.5045 4.22194 9.57156 3.62387 10.2093 2.8732Z"
        fill="#616B74"
      />
    </svg>
  );
};
export const EmailIcon: FC<ComponentProps<'svg'>> = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 8L9.7812 10.5208C11.1248 11.4165 12.8752 11.4165 14.2188 10.5208L18 8M6 21H18C20.2091 21 22 19.2091 22 17V7C22 4.79086 20.2091 3 18 3H6C3.79086 3 2 4.79086 2 7V17C2 19.2091 3.79086 21 6 21Z"
        stroke="#28303F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const PhoneIcon: FC<ComponentProps<'svg'>> = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 19V17.3541C21 16.5363 20.5021 15.8008 19.7428 15.4971L17.7086 14.6835C16.7429 14.2971 15.6422 14.7156 15.177 15.646L15 16C15 16 12.5 15.5 10.5 13.5C8.5 11.5 8 9 8 9L8.35402 8.82299C9.28438 8.35781 9.70285 7.25714 9.31654 6.29136L8.50289 4.25722C8.19916 3.4979 7.46374 3 6.64593 3H5C3.89543 3 3 3.89543 3 5C3 13.8366 10.1634 21 19 21C20.1046 21 21 20.1046 21 19Z"
        stroke="#28303F"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CircleIcon: FC<ComponentProps<'svg'>> = () => {
  return (
    <svg
      width="100%"
      height="100vh"
      viewBox="0 0 640 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-4 300L-29 240H-4H21L46 300L21 360H-4H-29L-4 300Z"
        fill="white"
        fillOpacity="0.06"
      />
      <path
        d="M87 300L62 240H87H112L137 300L112 360H87H62L87 300Z"
        fill="white"
        fillOpacity="0.06"
      />
      <path
        d="M178 300L153 240H178H203L228 300L203 360H178H153L178 300Z"
        fill="white"
        fillOpacity="0.06"
      />
      <path
        d="M269 300L244 240H269H294L319 300L294 360H269H244L269 300Z"
        fill="white"
        fillOpacity="0.06"
      />
      <path
        d="M360 300L335 240H360H385L410 300L385 360H360H335L360 300Z"
        fill="white"
        fillOpacity="0.06"
      />
      <path
        d="M451 300L426 240H451H476L501 300L476 360H451H426L451 300Z"
        fill="white"
        fillOpacity="0.06"
      />
      <path
        d="M542 300L517 240H542H567L592 300L567 360H542H517L542 300Z"
        fill="white"
        fillOpacity="0.06"
      />
      <path
        d="M633 300L608 240H633H658L683 300L658 360H633H608L633 300Z"
        fill="white"
        fillOpacity="0.06"
      />
      <path
        d="M41 180L16 120H41H66L91 180L66 240H41H16L41 180Z"
        fill="white"
        fillOpacity="0.06"
      />
      <path
        d="M132 180L107 120H132H157L182 180L157 240H132H107L132 180Z"
        fill="white"
        fillOpacity="0.06"
      />
      <path
        d="M223 180L198 120H223H248L273 180L248 240H223H198L223 180Z"
        fill="white"
        fillOpacity="0.06"
      />
      <path
        d="M314 180L289 120H314H339L364 180L339 240H314H289L314 180Z"
        fill="white"
        fillOpacity="0.06"
      />
      <path
        d="M405 180L380 120H405H430L455 180L430 240H405H380L405 180Z"
        fill="white"
        fillOpacity="0.06"
      />
      <path
        d="M496 180L471 120H496H521L546 180L521 240H496H471L496 180Z"
        fill="white"
        fillOpacity="0.06"
      />
      <path
        d="M587 180L562 120H587H612L637 180L612 240H587H562L587 180Z"
        fill="white"
        fillOpacity="0.06"
      />
      <path
        d="M-5 60L-30 0H-5H20L45 60L20 120H-5H-30L-5 60Z"
        fill="white"
        fillOpacity="0.06"
      />
      <path
        d="M86 60L61 0H86H111L136 60L111 120H86H61L86 60Z"
        fill="white"
        fillOpacity="0.06"
      />
      <path
        d="M177 60L152 0H177H202L227 60L202 120H177H152L177 60Z"
        fill="white"
        fillOpacity="0.06"
      />
      <path
        d="M268 60L243 0H268H293L318 60L293 120H268H243L268 60Z"
        fill="white"
        fillOpacity="0.06"
      />
      <path
        d="M359 60L334 0H359H384L409 60L384 120H359H334L359 60Z"
        fill="white"
        fillOpacity="0.06"
      />
      <path
        d="M450 60L425 0H450H475L500 60L475 120H450H425L450 60Z"
        fill="white"
        fillOpacity="0.06"
      />
      <path
        d="M541 60L516 0H541H566L591 60L566 120H541H516L541 60Z"
        fill="white"
        fillOpacity="0.06"
      />
      <path
        d="M632 60L607 0H632H657L682 60L657 120H632H607L632 60Z"
        fill="white"
        fillOpacity="0.06"
      />
    </svg>
  );
};

export const LeftRowIcon: FC<ComponentProps<'svg'>> = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 12L10 8L6 4"
        stroke="#1d4ed8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export const FacebookIcon: FC<ComponentProps<'svg'>> = () => {
  return (
    <svg
      className="h-5 w-5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 8 19"
    >
      <path
        fillRule="evenodd"
        d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export const TwitterIcon: FC<ComponentProps<'svg'>> = () => {
  return (
    <svg
      className="h-5 w-5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 17"
    >
      <path
        fillRule="evenodd"
        d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const InstagramIcon: FC<ComponentProps<'svg'>> = () => {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 19 19"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.49475 19C6.89948 19 6.59354 18.9863 5.58077 18.9421C4.79099 18.9161 4.01145 18.7558 3.27567 18.468C2.00265 17.9733 0.996036 16.9678 0.501109 15.6964C0.22398 14.959 0.0745017 14.1799 0.0590781 13.3925C-7.86011e-09 12.3833 0 12.0525 0 9.48104C0 6.88218 0.0137146 6.57879 0.0590781 5.57274C0.0748393 4.78638 0.224307 4.00838 0.501109 3.27201C0.995498 1.99895 2.00375 0.992538 3.27884 0.499335C4.01589 0.221445 4.79519 0.0717924 5.58288 0.0568861C6.59038 -1.05959e-07 6.92164 0 9.49475 0C12.1111 0 12.4117 0.0136947 13.4087 0.0568861C14.1983 0.0719188 14.9797 0.221551 15.7191 0.499335C16.9938 0.993097 18.0018 1.99932 18.4968 3.27201C18.7786 4.01912 18.9288 4.80927 18.9409 5.60751C19 6.61671 19 6.94645 19 9.51685C19 12.0873 18.9852 12.4244 18.9409 13.422C18.9252 14.2102 18.7753 14.9899 18.4978 15.728C18.0016 17.0002 16.9935 18.0062 15.7191 18.5007C14.9808 18.7769 14.2011 18.9262 13.4129 18.9421C12.4054 19 12.0752 19 9.49475 19ZM9.45888 1.66761C6.87838 1.66761 6.61042 1.68025 5.60293 1.72555C5.00159 1.73351 4.40605 1.84433 3.84219 2.05317C3.00957 2.37132 2.35071 3.02656 2.0287 3.85668C1.81794 4.42585 1.70695 5.02704 1.70061 5.63384C1.64469 6.65463 1.64469 6.92221 1.64469 9.48104C1.64469 12.0093 1.65419 12.3159 1.70061 13.3303C1.71006 13.931 1.82098 14.5258 2.0287 15.0896C2.35118 15.9192 3.00993 16.5739 3.84219 16.892C4.40567 17.1023 5.00144 17.2131 5.60293 17.2197C6.62414 17.2787 6.89315 17.2787 9.45888 17.2787C12.0467 17.2787 12.3147 17.266 13.3137 17.2197C13.9155 17.2124 14.5114 17.1016 15.0755 16.892C15.903 16.5712 16.5576 15.9179 16.8795 15.0917C17.0899 14.5221 17.2008 13.9206 17.2076 13.3135H17.2192C17.2646 12.3064 17.2646 12.0378 17.2646 9.46418C17.2646 6.89062 17.253 6.61987 17.2076 5.61383C17.1981 5.01385 17.0871 4.41976 16.8795 3.85668C16.5584 3.02928 15.9037 2.37479 15.0755 2.05317C14.5115 1.84327 13.9155 1.73243 13.3137 1.72555C12.2936 1.66761 12.0267 1.66761 9.45888 1.66761ZM9.49475 14.3469C7.52186 14.3482 5.74263 13.1625 4.98669 11.343C4.23074 9.52339 4.64703 7.42818 6.0414 6.03465C7.43577 4.64107 9.53357 4.22357 11.3565 4.97685C13.1793 5.73013 14.3682 7.50582 14.3687 9.47577C14.3657 12.1632 12.186 14.3417 9.49475 14.3469ZM9.49475 6.31332C7.74678 6.31332 6.3298 7.72831 6.3298 9.47366C6.3298 11.2191 7.74678 12.634 9.49475 12.634C11.2426 12.634 12.6597 11.2191 12.6597 9.47366C12.6555 7.72989 11.2409 6.31737 9.49475 6.31332ZM14.5586 5.56222C13.9313 5.55989 13.4244 5.05085 13.4256 4.42449C13.4267 3.79814 13.9355 3.29098 14.5628 3.29098C15.19 3.29098 15.6988 3.79812 15.7001 4.42448C15.7003 4.72669 15.58 5.01655 15.3659 5.23004C15.1517 5.44353 14.8612 5.56305 14.5586 5.56222Z" />
    </svg>
  );
};

export const MapIcon: FC<ComponentProps<'svg'>> = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 18.8344C6.58869 18.9924 4.94575 19.9153 3.73627 20.7281C3.0279 21.2041 2 20.7092 2 19.8557V10.1863C2 9.60113 2.25538 9.04442 2.72215 8.69148C3.73204 7.92788 5.63599 6.62248 7.35696 6.19245M8 18.8344C11.3183 18.463 12.6817 22.3959 16 22.0245M8 18.8344V9.37845M16 22.0245C17.8673 21.8155 20.14 20.2674 21.2778 19.407C21.7446 19.0541 22 18.4974 22 17.9122V8.24279C22 7.38934 20.9721 6.89443 20.2637 7.37046C19.2688 8.03903 17.9806 8.78215 16.7693 9.11271M16 22.0245V11.2114"
        stroke="#28303F"
        strokeWidth="1.5"
      />
      <path
        d="M17.4619 6.86343C17.4619 9.5144 14.9619 14.0634 12.4619 14.0634C9.96191 14.0634 7.46191 9.5144 7.46191 6.86343C7.46191 4.21247 9.70049 2.06343 12.4619 2.06343C15.2233 2.06343 17.4619 4.21247 17.4619 6.86343Z"
        stroke="#28303F"
        strokeWidth="1.5"
      />
      <path
        d="M13.9619 6.56343C13.9619 7.39186 13.2903 8.06343 12.4619 8.06343C11.6335 8.06343 10.9619 7.39186 10.9619 6.56343C10.9619 5.73501 11.6335 5.06343 12.4619 5.06343C13.2903 5.06343 13.9619 5.73501 13.9619 6.56343Z"
        stroke="#28303F"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export const FilterIcon: FC<ComponentProps<'svg'>> = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 5H10M10 5C10 6.10457 10.8954 7 12 7C13.1046 7 14 6.10457 14 5M10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5M3 12H12M19 12H21M19 12C19 13.1046 18.1046 14 17 14C15.8954 14 15 13.1046 15 12C15 10.8954 15.8954 10 17 10C18.1046 10 19 10.8954 19 12ZM14 5H21M12 19H21M3 19H5M5 19C5 20.1046 5.89543 21 7 21C8.10457 21 9 20.1046 9 19C9 17.8954 8.10457 17 7 17C5.89543 17 5 17.8954 5 19Z"
        stroke="#28303F"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const SearchIcon: FC<ComponentProps<'svg'>> = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.5 16.7076L21.4217 18.6292C22.1928 19.4004 22.1928 20.6506 21.4217 21.4217C20.6506 22.1928 19.4004 22.1928 18.6293 21.4217L16.7076 19.5M2 10.5C2 5.80558 5.80558 2 10.5 2C15.1944 2 19 5.80558 19 10.5C19 15.1944 15.1944 19 10.5 19C5.80558 19 2 15.1944 2 10.5Z"
        stroke="#28303F"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const DoorsIcon: FC<ComponentProps<'svg'>> = () => {
  return (
    <svg
      xmlns="https://www.w3.org/2000/svg"
      width="30px"
      height="30px"
      fill="none"
      viewBox="0 0 24 24"
      role="img"
      version="1.1"
    >
      <path
        fill="#121214"
        d="M19.67 21.45H7.27c-1.33 0-2.5-.85-2.91-2.1l-2.2-6.68c-.38-1.14-.05-2.4.83-3.21l6.08-5.63c.8-.75 2.28-1.33 3.38-1.33h8.92c.35 0 .62.28.62.62s-.28.62-.62.62h-8.92c-.78 0-1.96.46-2.53.99l-6.09 5.64c-.52.48-.71 1.23-.49 1.9l2.2 6.68c.25.75.94 1.25 1.72 1.25h12.4c.59 0 1.07-.48 1.07-1.07V5.51c0-.34.28-.62.62-.62s.62.28.62.62v13.61a2.3 2.3 0 0 1-2.3 2.33"
      ></path>
      <path
        fill="#121214"
        fillRule="evenodd"
        d="M18.15 11.33H6.92c-.7 0-.93-.39-1-.56-.06-.17-.16-.62.35-1.1l4.27-4.03c.46-.43 1.27-.76 1.9-.76h5.71c.81 0 1.47.66 1.47 1.47v3.51c0 .81-.66 1.47-1.47 1.47m-10.5-1.25h10.5c.13 0 .22-.1.22-.22v-3.5c0-.12-.1-.22-.22-.22h-5.71c-.31 0-.82.2-1.04.42z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#121214"
        d="M17.04 13.72h1.95c.35 0 .62-.28.62-.62s-.27-.62-.62-.62h-1.95c-.34 0-.62.28-.62.62s.27.62.62.62"
      ></path>
    </svg>
  );
};

export const SeatsIcon: FC<ComponentProps<'svg'>> = () => {
  return (
    <svg
      xmlns="https://www.w3.org/2000/svg"
      width="30px"
      height="30px"
      fill="none"
      viewBox="0 0 24 24"
      role="img"
      version="1.1"
    >
      <path
        fill="#121214"
        fillRule="evenodd"
        d="M14.32 5.75h1.16c.45 0 .86-.23 1.11-.6s.3-.84.13-1.25l-.35-.86a1.83 1.83 0 0 0-1.7-1.14H9.29c-.75 0-1.42.45-1.7 1.15l-.35.86c-.17.41-.12.88.13 1.25s.66.59 1.11.59h1.16v.992A3.484 3.484 0 0 0 6.34 9.6l-.89 4.85q-.12.615-.03 1.2a2.88 2.88 0 0 0-1.92 2.7v.8c0 1.58 1.28 2.87 2.86 2.87h11.21a2.88 2.88 0 0 0 2.87-2.86v-.8c0-1.48-1.16-2.73-2.63-2.85-.28-.02-.55.17-.65.44a2.44 2.44 0 0 1-2.68 1.59l-.92-.15c-.63-.1-1.26-.13-1.88-.11-.03 0-.69.01-1.3.11l-.91.15c-.79.13-1.57-.13-2.13-.7-.25-.25-.43-.54-.55-.85a.4.4 0 0 0-.04-.11 2.5 2.5 0 0 1-.07-1.19l.89-4.86A2.24 2.24 0 0 1 9.77 8h4.39c1.08 0 2 .77 2.2 1.83l.68 3.71a.626.626 0 0 0 1.23-.23l-.68-3.71a3.484 3.484 0 0 0-3.27-2.856zm-1.24 0h-2.2v.99h2.2zm-3.79-2.6c-.24 0-.45.14-.54.37l-.35.86.08.12h7c.01 0 .05 0 .07-.04l-.34-.94a.58.58 0 0 0-.54-.36H9.29zM5.81 16.84c-.62.23-1.06.83-1.06 1.51v.8c0 .89.72 1.61 1.61 1.61h11.2c.89 0 1.61-.72 1.61-1.61v-.8c0-.69-.44-1.29-1.07-1.52-.75 1.4-2.28 2.18-3.84 1.93l-.91-.15c-.54-.09-1.1-.12-1.64-.1-.01 0-.61.01-1.14.1l-.91.15c-1.2.19-2.37-.2-3.22-1.07-.26-.25-.47-.54-.63-.85"
        clipRule="evenodd"
      ></path>
      <path
        fill="#121214"
        fillRule="evenodd"
        d="M13.87 16.27a1.558 1.558 0 0 0 1.37-.46c.36-.37.51-.89.42-1.4l-.58-3.19a2.05 2.05 0 0 0-2.01-1.68h-2.19c-.99 0-1.83.71-2.01 1.68l-.58 3.18c-.09.51.07 1.03.43 1.4s.87.54 1.39.46l1.23-.2c.4-.06.81-.06 1.21 0zm-1.14-1.44q-.39-.06-.78-.06-.42 0-.81.06l-1.23.2a.35.35 0 0 1-.3-.1.34.34 0 0 1-.09-.3l.58-3.18c.07-.38.4-.65.78-.65h2.2c.38 0 .71.27.78.65l.58 3.19c.03.15-.04.25-.09.3a.35.35 0 0 1-.3.1z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const PersonIcon: FC<ComponentProps<'svg'>> = () => {
  return (
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M5.368 18.847a9.57 9.57 0 0 0 6.592 2.624 9.57 9.57 0 0 0 6.488-2.527c-2.387-3.465-6.419-3.5-6.485-3.5a4.957 4.957 0 0 1-4.954-4.951 4.957 4.957 0 0 1 4.95-4.951 4.956 4.956 0 0 1 4.193 7.587.625.625 0 0 1-1.058-.666 3.705 3.705 0 0 0-3.134-5.671 3.705 3.705 0 0 0-3.701 3.701 3.705 3.705 0 0 0 3.7 3.701c.183-.022 4.597.018 7.369 3.83a9.57 9.57 0 0 0 2.242-6.164c0-5.298-4.311-9.61-9.61-9.61s-9.61 4.312-9.61 9.61c0 2.292.807 4.4 2.151 6.054.887-1.178 2.042-1.989 2.909-2.483a.625.625 0 0 1 .62 1.085c-.807.459-1.892 1.225-2.662 2.33m14.38.575a.6.6 0 0 1-.104.106 10.83 10.83 0 0 1-7.684 3.193c-5.988 0-10.86-4.872-10.86-10.861C1.1 5.872 5.972 1 11.96 1s10.86 4.872 10.86 10.86c0 2.937-1.172 5.605-3.072 7.562"
        fill="#121214"
        fillRule="evenodd"
      ></path>
    </svg>
  );
};

export const FuelIcon: FC<ComponentProps<'svg'>> = () => {
  return (
    <svg
      xmlns="https://www.w3.org/2000/svg"
      width="30px"
      height="30px"
      fill="none"
      viewBox="0 0 24 24"
      role="img"
      version="1.1"
    >
      <path
        fill="#121214"
        fillRule="evenodd"
        d="M12.633 7.274a3.683 3.683 0 0 0 3.679 3.678 3.68 3.68 0 0 0 3.678-3.678c0-1.846-2.857-5.608-3.183-6.031a.625.625 0 0 0-.99 0c-.326.423-3.184 4.185-3.184 6.03m1.25 0c0-.926 1.336-3.084 2.429-4.602 1.092 1.517 2.428 3.675 2.428 4.602a2.43 2.43 0 0 1-2.428 2.428 2.43 2.43 0 0 1-2.43-2.428"
        clipRule="evenodd"
      ></path>
      <path
        fill="#121214"
        d="M4.078 17.644c.455 3.205 2.64 5.359 5.44 5.359.975 0 1.92-.265 2.736-.766a.623.623 0 0 0-.127-1.124l-.061-.013c-2.347-1.196-3.368-4.316-3.177-6.015a.624.624 0 1 0-1.242-.141c-.208 1.85.699 4.93 2.936 6.669q-.511.14-1.064.14c-2.483 0-3.901-2.152-4.203-4.285-.21-1.482-.18-5.25 4.174-9.596.324 2.243 1.436 3.753 2.436 5.11v.002c1.053 1.429 1.963 2.664 1.792 4.515a5.4 5.4 0 0 1-.325 1.455l-.167.396a.626.626 0 0 0 1.152.486l.174-.412a6.7 6.7 0 0 0 .41-1.811c.215-2.325-.926-3.875-2.03-5.373l-.002-.002c-1.126-1.53-2.291-3.111-2.284-5.722a.63.63 0 0 0-.368-.573.63.63 0 0 0-.673.104c-5.747 5.119-5.78 9.815-5.527 11.597"
      ></path>
    </svg>
  );
};

export const CartIcon: FC<ComponentProps<'svg'>> = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 21L6 21C3.79086 21 2 19.2091 2 17L2 7C2 4.79086 3.79086 3 6 3L18 3C20.2091 3 22 4.79086 22 7L22 13"
        stroke="#28303F"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle
        cx="6"
        cy="17"
        r="1"
        fill="#28303F"
      />
      <path
        d="M19 15V21"
        stroke="#28303F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 18L16 18"
        stroke="#28303F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 7L22 7L22 11L2 11L2 7Z"
        stroke="#28303F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const PlayIcon: FC<ComponentProps<'svg'>> = () => {
  return (
    <svg
      xmlns="https://www.w3.org/2000/svg"
      width="30px"
      height="30px"
      fill="none"
      viewBox="0 0 24 24"
      role="img"
      version="1.1"
    >
      <path
        fill="#121214"
        d="M8.05 16.88c0 .34.28.62.62.62s.62-.28.64-.62V7.76l7.28 4.2-5.57 3.22a.621.621 0 1 0 .62 1.08l5.71-3.3c.36-.21.58-.58.58-1s-.22-.79-.58-1L9.79 6.59c-.36-.21-.8-.21-1.16 0s-.58.58-.58 1z"
      ></path>
      <path
        fill="#121214"
        fillRule="evenodd"
        d="M1 11.97c0 6.04 4.92 10.96 10.97 10.96 6.04 0 10.97-4.91 10.97-10.96S18.02 1 11.97 1 1 5.93 1 11.97m1.25 0c0-5.36 4.36-9.72 9.72-9.72 5.35 0 9.72 4.36 9.72 9.72s-4.36 9.72-9.72 9.72-9.72-4.36-9.72-9.72"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const BackCameraIcon: FC<ComponentProps<'svg'>> = () => {
  return (
    <svg
      xmlns="https://www.w3.org/2000/svg"
      width="30px"
      height="30px"
      fill="none"
      viewBox="0 0 24 24"
      role="img"
      version="1.1"
    >
      <path
        fill="#121214"
        fillRule="evenodd"
        d="M14.45 7.5h-4.8c-.4 0-.6-.3-.6-.7V4.5c0-.3.3-.6.6-.6h4.8c.3 0 .6.3.6.6v2.3c0 .4-.3.7-.6.7m-4.2-1.3h3.5v-1h-3.5z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#121214"
        d="M9.65 13h4.8c.3 0 .6-.3.6-.6s-.3-.6-.6-.6h-4.8c-.3 0-.6.3-.6.6s.3.6.6.6"
      ></path>
      <path
        fill="#121214"
        fillRule="evenodd"
        d="M9.35 15.1h5.3c1.3 0 2.3-1 2.3-2.3V6.9h.7c.4 0 .6-.3.6-.6s-.3-.6-.6-.6h-.7V3.8c0-1.3-1-2.3-2.3-2.3h-5.3c-1.3 0-2.3 1-2.3 2.3v1.8h-.7c-.3 0-.6.2-.6.6s.3.7.6.7h.7v5.9c0 1.3 1 2.3 2.3 2.3m-1-11.3c0-.6.4-1.1 1-1.1h5.4c.6 0 1.1.5 1.1 1.1v9c0 .6-.5 1.1-1.1 1.1h-5.3c-.6 0-1.1-.5-1.1-1.1z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#121214"
        d="M11.85 19.1c-1 0-2-.4-2.8-1.1-.2-.2-.2-.6 0-.9.2-.2.6-.2.9 0 1.1 1.1 2.8 1 3.8 0 .2-.2.6-.2.9 0 .2.2.2.6 0 .9-.7.7-1.8 1.1-2.8 1.1M11.95 22.4c-1.8 0-3.6-.7-5-2.1-.2-.2-.2-.6 0-.9.2-.2.6-.2.9 0 2.3 2.3 6.1 2.3 8.4-.1.2-.2.6-.2.9 0 .2.2.2.6 0 .9-1.5 1.5-3.3 2.2-5.2 2.2"
      ></path>
    </svg>
  );
};

export const BluetoothIcon: FC<ComponentProps<'svg'>> = () => {
  return (
    <svg
      xmlns="https://www.w3.org/2000/svg"
      width="30px"
      height="30px"
      fill="none"
      viewBox="0 0 24 24"
      role="img"
      version="1.1"
    >
      <path
        fill="#121214"
        d="M6.25 17.869a.626.626 0 0 0 .882.002l4.992-4.963 4.545 4.522-3.905 3.894v-5.94a.625.625 0 0 0-1.25 0v6.439c0 .422.253.8.644.962q.197.082.4.081c.27 0 .536-.105.736-.305l4.258-4.246c.238-.237.369-.552.369-.887s-.131-.65-.37-.888l-4.54-4.514 4.568-4.542c.237-.236.37-.551.37-.886s-.13-.65-.368-.888l-4.288-4.275a1.04 1.04 0 0 0-1.136-.223c-.39.162-.643.54-.643.962V8.65a.626.626 0 0 0 1.25 0V2.674l3.934 3.923-4.573 4.548-5.02-4.991a.625.625 0 1 0-.881.886l5.014 4.987-4.986 4.958a.623.623 0 0 0-.003.884"
      ></path>
    </svg>
  );
};

export const HeatedSeatsIcon: FC<ComponentProps<'svg'>> = () => {
  return (
    <svg
      xmlns="https://www.w3.org/2000/svg"
      width="30px"
      height="30px"
      fill="none"
      viewBox="0 0 24 24"
      role="img"
      version="1.1"
    >
      <path
        fill="#121214"
        d="M4.757 21.614h12.162a.624.624 0 0 0 .604-.466l4.42-16.782a1.89 1.89 0 0 0-1.34-2.304 1.88 1.88 0 0 0-1.43.194c-.435.253-.745.66-.874 1.146l-3.081 11.621H14.11a.625.625 0 0 0-.001 1.25l1.586.001h.002c.284 0 .532-.19.604-.465l3.206-12.088a.63.63 0 0 1 .294-.385.636.636 0 0 1 .932.712l-4.298 16.316H5.181L3.547 16.26l1.587.001a.625.625 0 1 0 .001-1.25l-2.51-.002a.626.626 0 0 0-.58.856l2.132 5.356a.625.625 0 0 0 .58.394"
      ></path>
      <path
        fill="#121214"
        d="M5.95 18.204a.623.623 0 0 0 .882.071c1.2-1.021 1.678-3.176.204-5.159-1.092-1.468-.759-2.934-.173-3.505a.625.625 0 0 0-.873-.895c-1.063 1.037-1.409 3.193.043 5.146 1.02 1.373.756 2.808-.012 3.461a.626.626 0 0 0-.07.881"
      ></path>
      <path
        fill="#121214"
        d="M8.7 18.424a.626.626 0 0 1-.406-1.101c.769-.653 1.033-2.088.013-3.461-1.452-1.953-1.106-4.109-.043-5.146a.625.625 0 0 1 .873.895c-.586.571-.92 2.037.173 3.505 1.474 1.983.995 4.138-.204 5.159a.63.63 0 0 1-.405.149"
      ></path>
      <path
        fill="#121214"
        d="M10.497 18.204a.623.623 0 0 0 .882.071c1.2-1.021 1.678-3.176.203-5.159-1.09-1.468-.758-2.934-.172-3.505a.625.625 0 0 0-.873-.895c-1.063 1.037-1.409 3.193.042 5.146 1.021 1.373.757 2.808-.01 3.461a.626.626 0 0 0-.072.881"
      ></path>
    </svg>
  );
};

export const UsbChargeIcon: FC<ComponentProps<'svg'>> = () => {
  return (
    <svg
      xmlns="https://www.w3.org/2000/svg"
      width="30px"
      height="30px"
      fill="none"
      viewBox="0 0 24 24"
      role="img"
      version="1.1"
    >
      <path
        fill="#121214"
        d="M10.4 6.3c-.3 0-.6-.3-.6-.6V4c0-.3.3-.6.6-.6s.6.3.6.6v1.7c0 .3-.3.6-.6.6M13.1 5.7c0 .3.3.6.6.6.4 0 .7-.3.6-.6V4c0-.3-.3-.6-.6-.6s-.6.3-.6.6z"
      ></path>
      <path
        fill="#121214"
        fillRule="evenodd"
        d="M6.7 8.9h10.7v7.9c0 1.6-1.3 2.8-2.8 2.8h-2.5c-.3 0-.6.3-.6.6v2.4c0 .3.3.6.6.6s.6-.3.6-.6v-1.8h1.9c2.2 0 4-1.8 4-4V8.3c0-.3-.3-.6-.6-.6h-.9V1.4c0-.3-.3-.6-.6-.6H7.6c-.4 0-.6.3-.6.6v6.3h-.9c-.3 0-.6.3-.6.6v8.5c0 1.5.9 2.9 2.3 3.6.056.056.144.08.245.11.08.021.167.046.255.09.3.1.7-.1.8-.4s-.1-.7-.4-.8c-.2 0-.3 0-.4-.1-1-.5-1.6-1.4-1.6-2.5zm1.5-1.3h7.7V2H8.2z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#121214"
        d="M12.8 13.7h1.6l-3.1 4.5v-3.4H9.7l3.1-4.6z"
      ></path>
    </svg>
  );
};

export const USBIcon: FC<ComponentProps<'svg'>> = () => {
  return (
    <svg
      xmlns="https://www.w3.org/2000/svg"
      width="30px"
      height="30px"
      fill="none"
      viewBox="0 0 24 24"
      role="img"
      version="1.1"
    >
      <path
        fill="#121214"
        d="M9.868 5.767a.625.625 0 0 0 1.25 0V4.046a.626.626 0 0 0-1.25 0zM13.493 6.392a.625.625 0 0 1-.625-.625V4.046a.626.626 0 0 1 1.25 0v1.72c0 .346-.28.626-.625.626"
      ></path>
      <path
        fill="#121214"
        fillRule="evenodd"
        d="M7.358 7.563V1.625c0-.344.28-.625.625-.625h8.02c.345 0 .625.281.625.625v5.938h.683c.346 0 .625.28.625.625v7.198a3.66 3.66 0 0 1-3.658 3.658h-1.66v3.302a.625.625 0 0 1-1.25 0v-3.927c0-.344.28-.625.625-.625h2.285a2.41 2.41 0 0 0 2.408-2.408V8.813H7.3v6.573a2.42 2.42 0 0 0 1.699 2.302.625.625 0 0 1-.369 1.195 3.676 3.676 0 0 1-2.58-3.497V8.188c0-.345.28-.625.625-.625zm8.02-5.312v5.312h-6.77V2.251z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const ShowMoreImageIcon: FC<ComponentProps<'svg'>> = () => {
  return (
    <svg
      data-testid="IconGallery24"
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
    >
      <path
        d="M2.62 19.17h.96c.34 0 .62-.29.62-.63s-.28-.62-.62-.62h-.33V3.25h14.68v.32c0 .34.28.62.62.62s.62-.28.62-.62v-.95c0-.34-.28-.62-.62-.62H2.62c-.34 0-.62.28-.62.62v15.93c0 .34.28.62.62.62"
        fill="#121214"
      ></path>
      <path
        d="M21.25 21.87H5.32c-.34 0-.62-.28-.62-.62V5.32c0-.34.28-.62.62-.62h15.93c.34 0 .62.28.62.62v10.2c0 .34-.28.62-.62.62s-.62-.28-.62-.62V5.94H5.95v14.68h14.68v-2.57H7.24c-.34 0-.62-.28-.62-.62s.28-.63.62-.63h14c.34 0 .62.28.62.62v3.82a.61.61 0 0 1-.61.63"
        fill="#121214"
      ></path>
      <path
        d="M10.33 14.56a.503.503 0 0 1-.25-.94c.1-.06.21-.2.18-.39a.37.37 0 0 0-.28-.28.34.34 0 0 0-.31.08c-.08.07-.13.17-.13.28 0 .28-.22.5-.5.5h-.67c-.05 0-.2 0-.9-.19-.46-.16-.75-.57-.75-1.02v-1.25c0-.64.48-1.18 1.12-1.25l.29-.08c.19-.02.32-.05.43-.1l1.46-.82c.27-.12.52-.2.78-.23.14-.02.27-.03.38-.03h2.18c.5 0 .98.14 1.41.39l1.65 1 2.41.48c.63.12 1.02.79 1.02 1.35v.77c0 .26-.1.5-.29.69-.19.18-.43.28-.69.28h-.39c-.28 0-.5-.23-.5-.5s.23-.5.5-.5h.39l-.03-.75c0-.17-.13-.35-.21-.37l-2.35-.46q-.21-.045-.39-.15l-1.65-1c-.27-.16-.57-.25-.89-.25h-2.17q-.095.002-.227.017l-.033.003c-.15.02-.3.07-.45.14l-1.48.84c-.25.11-.46.16-.68.19l-.29.07c-.2.03-.3.14-.3.27v1.25c.01.05.51.19.67.21h.25a1.35 1.35 0 0 1 1.53-.83c.53.1.96.53 1.07 1.07.11.58-.16 1.17-.67 1.46-.08.03-.16.05-.24.05"
        fill="#121214"
      ></path>
      <path
        d="M16.5 14.53c-.16 0-.32-.08-.42-.22a.5.5 0 0 1 .14-.69c.1-.07.16-.18.16-.3 0-.2-.16-.36-.36-.36s-.36.16-.36.36c0 .13-.05.26-.15.35s-.22.15-.35.15h-2.75c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2.34c.2-.5.69-.86 1.26-.86a1.361 1.361 0 0 1 .76 2.49.53.53 0 0 1-.27.08"
        fill="#121214"
      ></path>
    </svg>
  );
};

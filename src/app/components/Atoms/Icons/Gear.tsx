import React from 'react';
import { BaseIconProps } from './types';

export const Gear = ({ size = 24, color = '#7A8FAD' }: BaseIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.0836 9.24894C20.6824 9.19298 20.2994 9.05084 19.9633 8.83309C19.6272 8.61535 19.3466 8.32761 19.1424 7.99131C18.9382 7.65501 18.8156 7.27882 18.7839 6.89073C18.7521 6.50265 18.8119 6.11268 18.9588 5.74987C19.0522 5.51267 19.066 5.25336 18.9982 5.00828C18.9303 4.7632 18.7843 4.54464 18.5806 4.38325C17.6812 3.65813 16.6575 3.08849 15.5551 2.69974C15.304 2.6102 15.0299 2.59901 14.7719 2.66777C14.5139 2.73652 14.285 2.88171 14.1179 3.08265C13.8664 3.3914 13.545 3.64111 13.1781 3.81284C12.8111 3.98458 12.4082 4.07383 12 4.07383C11.5918 4.07383 11.1889 3.98458 10.822 3.81284C10.455 3.64111 10.1336 3.3914 9.88211 3.08265C9.71503 2.88171 9.48616 2.73652 9.22811 2.66777C8.97007 2.59901 8.696 2.6102 8.44496 2.69974C7.42704 3.05865 6.47531 3.57125 5.62568 4.2182C5.41151 4.38098 5.25725 4.60532 5.18549 4.85836C5.11372 5.11141 5.12822 5.37987 5.22685 5.62443C5.38553 5.99684 5.45109 6.39978 5.41827 6.80091C5.38546 7.20204 5.25518 7.59021 5.03789 7.93427C4.82061 8.27833 4.52236 8.56871 4.16707 8.78211C3.81179 8.99552 3.40936 9.12601 2.99206 9.16311C2.72114 9.19092 2.46668 9.30151 2.26614 9.4786C2.0656 9.65569 1.92957 9.88993 1.8781 10.1468C1.75006 10.7553 1.68556 11.3746 1.68556 11.9954C1.68462 12.5151 1.72832 13.034 1.81621 13.5469C1.85995 13.812 1.99345 14.0559 2.19604 14.2408C2.39864 14.4258 2.65907 14.5415 2.93705 14.5702C3.36351 14.6086 3.77419 14.7445 4.1347 14.9666C4.49521 15.1887 4.79506 15.4905 5.00917 15.8467C5.22328 16.2028 5.34541 16.6031 5.36534 17.0139C5.38526 17.4247 5.30241 17.8341 5.12371 18.2079C5.00676 18.451 4.97775 18.7246 5.04129 18.9854C5.10483 19.2461 5.25726 19.479 5.4744 19.6471C6.3684 20.3591 7.38228 20.9195 8.47247 21.3042C8.61188 21.3506 8.75815 21.3751 8.90567 21.3768C9.10795 21.3764 9.30718 21.3294 9.48665 21.2398C9.66611 21.1502 9.82059 21.0206 9.93712 20.8619C10.1822 20.5191 10.5107 20.2388 10.8942 20.0455C11.2776 19.8523 11.7044 19.7518 12.1375 19.7527C12.5572 19.7533 12.9709 19.8478 13.3457 20.0289C13.7206 20.21 14.0462 20.4726 14.2967 20.7959C14.4633 21.0109 14.6993 21.167 14.968 21.2398C15.2366 21.3127 15.5228 21.2982 15.782 21.1986C16.7788 20.8134 17.7069 20.281 18.5325 19.6207C18.7399 19.4561 18.8876 19.2325 18.9543 18.9822C19.021 18.7319 19.0033 18.4677 18.9038 18.2277C18.7421 17.8601 18.6716 17.4614 18.6978 17.0631C18.7241 16.6649 18.8464 16.2779 19.0551 15.9328C19.2638 15.5877 19.5533 15.2939 19.9005 15.0746C20.2478 14.8553 20.6434 14.7165 21.0561 14.6692C21.3237 14.6337 21.5726 14.5173 21.7667 14.3368C21.9608 14.1564 22.09 13.9213 22.1357 13.6657C22.2461 13.115 22.3059 12.5561 22.3145 11.9954C22.3146 11.4039 22.257 10.8138 22.1425 10.2326C22.0961 9.98262 21.9688 9.75301 21.7787 9.57642C21.5886 9.39983 21.3454 9.28524 21.0836 9.24894ZM15.4382 11.9954C15.4382 12.6483 15.2365 13.2865 14.8587 13.8293C14.4809 14.3722 13.944 14.7953 13.3157 15.0451C12.6875 15.295 11.9962 15.3603 11.3293 15.233C10.6623 15.1056 10.0497 14.7912 9.56887 14.3295C9.08804 13.8679 8.76058 13.2797 8.62792 12.6394C8.49526 11.999 8.56335 11.3353 8.82357 10.7321C9.0838 10.129 9.52447 9.61341 10.0899 9.25069C10.6553 8.88797 11.32 8.69437 12 8.69437C12.9119 8.69437 13.7864 9.04215 14.4311 9.66121C15.0759 10.2803 15.4382 11.1199 15.4382 11.9954Z"
        fill={color}
      />
    </svg>
  );
};

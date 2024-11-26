import React from 'react';
import Text from '../Atoms/Text';
import TextWithIcon from './TextWithIcon';

const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.59669 1.91675C3.36085 1.91675 1.91669 3.27925 1.91669 5.38758V12.6117C1.91669 14.7201 3.36085 16.0834 5.59669 16.0834H12.4034C14.6392 16.0834 16.0834 14.7201 16.0834 12.6117V5.38758C16.0834 3.27925 14.6392 1.91675 12.4034 1.91675H5.59669ZM12.4034 17.3334H5.59669C2.64835 17.3334 0.666687 15.4359 0.666687 12.6117V5.38758C0.666687 2.56341 2.64835 0.666748 5.59669 0.666748H12.4034C15.3517 0.666748 17.3334 2.56341 17.3334 5.38758V12.6117C17.3334 15.4359 15.3517 17.3334 12.4034 17.3334Z"
      fill="#5E626F"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.4049 9.625H5.59491C5.24991 9.625 4.96991 9.345 4.96991 9C4.96991 8.655 5.24991 8.375 5.59491 8.375H12.4049C12.7499 8.375 13.0299 8.655 13.0299 9C13.0299 9.345 12.7499 9.625 12.4049 9.625Z"
      fill="#5E626F"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.26858 12.7484C9.10858 12.7484 8.94775 12.6876 8.82608 12.5642C8.58275 12.3192 8.58358 11.9242 8.82775 11.6809L11.5194 9.00008L8.82775 6.31925C8.58358 6.07591 8.58275 5.68091 8.82608 5.43591C9.06942 5.19091 9.46442 5.19091 9.70942 5.43425L12.8461 8.55758C12.9644 8.67425 13.0303 8.83425 13.0303 9.00008C13.0303 9.16591 12.9644 9.32591 12.8461 9.44258L9.70942 12.5659C9.58775 12.6876 9.42775 12.7484 9.26858 12.7484Z"
      fill="#5E626F"
    />
  </svg>
);

const FooterTopRightItem = ({ Icon, title, subtitle }: { Icon: JSX.ElementType; title: string; subtitle: string }) => {
  return (
    <div>
      <div className="rounded-lg p-2 bg-slate-100 inline-block">
        <Icon color="#7388A9" />
      </div>
      <Text className="text-sm text-zinc-700 mt-2" content={title} />

      <TextWithIcon Icon={ArrowRight} textContent={subtitle} className="text-gray-600 mt-3" />
    </div>
  );
};

export default FooterTopRightItem;

import classNames from 'classnames';
import { FC } from 'react';

interface AButtonProps {
  onClick: (e: any) => void;
  busy?: boolean;
  btnText: any;
  btnClassName?: any;
  prohibit?: boolean;
}

const AButton: FC<AButtonProps> = ({ onClick, busy, btnText, btnClassName, prohibit }) => {
  return (
    <div
      onClick={!prohibit ? onClick : undefined}
      className={classNames(
        'flex hover:border-[#29953A] hover:text-[#29953A] border text-[#000000] rounded-[2px] leading-4 text-[14px]  w-[100px] h-[24px]  text-center items-center justify-center ',
        busy ? 'cursor-not-allowed' : 'cursor-pointer',
        prohibit
          ? ' border bg-[#F5F5F5] text-[#00000040] cursor-no-drop hover:border-[#F5F5F5] hover:text-[#00000040]  '
          : 'cursor-pointer',
        btnClassName,
      )}
    >
      {btnText}
    </div>
  );
};

export default AButton;

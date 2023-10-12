import { useOn } from '@/lib/hooks/useOn';
import classNames from 'classnames';
import React, {
  Fragment,
  HTMLAttributes,
  MouseEvent,
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { FiX } from 'react-icons/fi';

export const modalRootRef: MutableRefObject<HTMLDivElement | null> = {
  current: null,
};
modalRootRef.current = document.body as any;

export function ModalHeader(p: {
  title?: string;
  titleClassName?: string;
  containerClassName?: string;
  onClose?: () => void;
}) {
  const { title, onClose, titleClassName, containerClassName } = p;
  return (
    <>
      <div className={classNames('flex items-center justify-between mt-5 text-xl font-bold mx-5', containerClassName)}>
        <div className={classNames('max-w-[70%] overflow-hidden text-ellipsis whitespace-nowrap', titleClassName)}>
          {title}
        </div>
        <FiX
          onClick={(e) => {
            e.stopPropagation();
            onClose && onClose();
          }}
          className="text-2xl cursor-pointer"
        />
      </div>
      <div className="mt-5 border-b "></div>
    </>
  );
}

export function ModalFooter() {
  return <div></div>;
}

export type ModalProps = {
  title?: string;
  onClose?: () => void;
  outClose?: boolean;
  titleClassName?: string;
  containerClassName?: string;
  bottomBtn?: ReactNode;
  line?: boolean;
  chilrenClassName?: string;
} & HTMLAttributes<HTMLDivElement>;

export function Modal(p: ModalProps) {
  const {
    className,
    title,
    onClose,
    outClose = false,
    titleClassName,
    containerClassName,
    chilrenClassName,
    bottomBtn,
    children,
    line = false,
    ...other
  } = p;
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(true);
  const wrapClose = () => {
    if (!onClose) return;
    setStart(true);
    setTimeout(() => onClose(), 300);
  };
  const onClickOut = useOn((e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const isChild = ref.current && ref.current !== e.target && ref.current.contains(e.target as any);
    !isChild && outClose && wrapClose();
  });
  useEffect(() => {
    setStart(false);
  }, []);
  if (!modalRootRef.current) return null;
  return createPortal(
    <div
      {...other}
      ref={ref}
      className={classNames(
        'fixed left-0  top-0 w-full h-full overflow-auto z-[500] flex justify-center items-center',
        {
          'transition-[background_ease_300ms]': true,
          'bg-black/0': start,
          'bg-black/25': !start,
        },
        className,
      )}
      onClick={onClickOut}
    >
      <div
        id="mo"
        className={classNames('bg-white rounded min-w-[20rem]  min-h-[150]', {
          'transition-[all_ease_300ms]': true,
          'scale-0': start,
          'scale-100': !start,
        })}
      >
        <ModalHeader
          title={title}
          containerClassName={containerClassName}
          titleClassName={titleClassName}
          onClose={wrapClose}
        />
        <div className={classNames('mt-5', chilrenClassName)}>{children}</div>
        {line && <div className={`p-6 border-t mt-5`}>{bottomBtn}</div>}
      </div>
    </div>,
    modalRootRef.current,
  );
}

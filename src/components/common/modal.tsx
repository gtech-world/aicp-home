import { useOn } from '@/lib/hooks/useOn';
import classNames from 'classnames';
import { HTMLAttributes, MouseEvent, MutableRefObject, useEffect, useRef, useState } from 'react';
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
    <div
      className={classNames(
        'flex items-center justify-between pb-6 mb-6 text-xl font-bold border-b mt-2.5 mx-5',
        containerClassName,
      )}
    >
      <span className={classNames('max-w-[70%] overflow-hidden text-ellipsis whitespace-nowrap', titleClassName)}>
        {title}
      </span>
      <FiX
        onClick={(e) => {
          e.stopPropagation();
          onClose && onClose();
        }}
        className="text-2xl cursor-pointer"
      />
    </div>
  );
}

export function ModalFooter() {
  return <div></div>;
}

// function useModalAnim(el?: Element | null) {
//   useEffect(() => {
//     if (!el) return () => {};
//     const modalEl = el;
//     const modalParent = modalEl.parentElement;
//     new Animation(
//       new KeyframeEffect(modalEl as any, [{ opacity: 0 }, { opacity: 1 }], {
//         duration: 300,
//         fill: 'auto',
//       }),
//       document.timeline,
//     ).play();
//     let firstRemove = true;
//     const ob = new MutationObserver((mutation) => {
//       const muta = mutation.find((m) => m.type === 'childList');
//       if (!muta || !muta.removedNodes) return;
//       muta.removedNodes.forEach((item) => {
//         if (item === modalEl && firstRemove) {
//           ob.disconnect();
//           modalParent?.appendChild(modalEl);
//           const anim = new Animation(
//             new KeyframeEffect(modalEl as any, [{ opacity: 1 }, { opacity: 0 }], {
//               duration: 300,
//               fill: 'auto',
//             }),
//             document.timeline,
//           );
//           anim.addEventListener('finish', () => modalParent?.removeChild(modalEl));
//           anim.play();
//         }
//       });
//     });
//     ob.observe(modalParent as any, { childList: true });
//     return () => {};
//   }, [el]);
// }

export type ModalProps = {
  title?: string;
  onClose?: () => void;
  outClose?: boolean;
  titleClassName?: string;
  containerClassName?: string;
} & HTMLAttributes<HTMLDivElement>;

export function Modal(p: ModalProps) {
  const { className, title, onClose, outClose = false, titleClassName, containerClassName, children, ...other } = p;
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
        className={classNames('bg-white rounded p-5 min-w-[20rem] min-h-[150]', {
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
        {children}
      </div>
    </div>,
    modalRootRef.current,
  );
}

import { memo, ReactNode } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
  children: ReactNode;
};

function Portal({ children }: PortalProps) {
  const element = document.getElementById('portal');

  return createPortal(children, element!);
}

export default memo(Portal);

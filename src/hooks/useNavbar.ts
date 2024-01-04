import { useEffect, useState } from 'preact/hooks';

export default function useNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu(isOpenCheck: boolean) {
    if (!isOpenCheck) document.body.classList.add('no-scroll');
    else document.body.classList.remove('no-scroll');

    setIsOpen(!isOpenCheck);
  }

  return { isOpen, toggleMenu };
}

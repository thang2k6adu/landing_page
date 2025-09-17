// components/MobileMenu.jsx
import Logo from '../Logo';
import NavItems from '../NavItems';

export default function MobileMenu({ isOpen, onClose, navItems }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm">
        <div className="flex items-center justify-between">
          <Logo />
          <button
            type="button"
            onClick={onClose}
            className="-m-2.5 rounded-md p-2.5 text-gray-400"
          >
            <span className="sr-only">Close menu</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="size-6"
              aria-hidden="true"
            >
              <path
                d="M6 18 18 6M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-white/10">
            <div className="space-y-2 py-6">
              <NavItems 
                items={navItems} 
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 hover:bg-white/5" 
              />
            </div>
            
            <div className="py-6">
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";

import { useEffect, useRef, useState } from "react";

// Stands in for the Divi Supreme modal popups on the WordPress home page:
// clicking a trigger opens its list of criteria in a dialog.
export function Popup({
  trigger,
  label,
  children,
}: {
  trigger: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className="cursor-pointer text-left"
      >
        {trigger}
      </button>
      <dialog
        ref={ref}
        aria-label={label}
        onClose={() => setOpen(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
        className="m-auto w-[367px] max-w-[calc(100vw-2rem)] rounded bg-white p-0 shadow-2xl backdrop:bg-black/60 open:animate-[popup-in_0.4s_ease-out]"
      >
        <div className="relative p-8 pt-10 text-[15px] leading-relaxed text-[#333]">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white"
          >
            <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 stroke-current" fill="none" strokeWidth="2.5">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
          {children}
        </div>
      </dialog>
    </>
  );
}

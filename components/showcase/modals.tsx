"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react";

// Placeholder components for 15 different modals
export function ModalBasic() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)} className="px-6 py-3 bg-emerald-500 text-white rounded-lg">Open Modal</button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} onClick={(e) => e.stopPropagation()} className="bg-white/10 backdrop-blur-md rounded-lg p-6 max-w-md w-full">
              <h3 className="text-white text-xl font-bold mb-4">Modal Title</h3>
              <p className="text-white/70 mb-4">This is a basic modal dialog.</p>
              <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-emerald-500 text-white rounded">Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function ModalCentered() {
  const [isOpen, setIsOpen] = useState(false);
  return (<><button onClick={() => setIsOpen(true)} className="px-6 py-3 bg-emerald-500 text-white rounded-lg">Centered Modal</button>
    <AnimatePresence>{isOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center" onClick={() => setIsOpen(false)}>
      <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }} onClick={(e) => e.stopPropagation()} className="bg-white/10 backdrop-blur-md rounded-lg p-8 max-w-lg text-center">
        <h3 className="text-white text-2xl font-bold mb-4">Centered Modal</h3>
        <p className="text-white/70 mb-6">Content perfectly centered</p>
        <button onClick={() => setIsOpen(false)} className="px-6 py-2 bg-emerald-500 text-white rounded-lg">Got it</button>
      </motion.div></motion.div>}</AnimatePresence></>);
}

export function ModalSlideUp() {
  const [isOpen, setIsOpen] = useState(false);
  return (<><button onClick={() => setIsOpen(true)} className="px-6 py-3 bg-emerald-500 text-white rounded-lg">Slide Up Modal</button>
    <AnimatePresence>{isOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 z-50 flex items-end" onClick={() => setIsOpen(false)}>
      <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} onClick={(e) => e.stopPropagation()} className="bg-white/10 backdrop-blur-md rounded-t-2xl p-6 w-full">
        <div className="w-12 h-1 bg-white/30 rounded-full mx-auto mb-4"></div>
        <h3 className="text-white text-xl font-bold mb-4">Bottom Sheet</h3>
        <p className="text-white/70 mb-4">Slides up from bottom</p>
        <button onClick={() => setIsOpen(false)} className="w-full py-3 bg-emerald-500 text-white rounded-lg">Close</button>
      </motion.div></motion.div>}</AnimatePresence></>);
}

export function ModalAlert() {
  const [isOpen, setIsOpen] = useState(false);
  return (<><button onClick={() => setIsOpen(true)} className="px-6 py-3 bg-red-500 text-white rounded-lg">Alert Modal</button>
    <AnimatePresence>{isOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
      <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} onClick={(e) => e.stopPropagation()} className="bg-white/10 backdrop-blur-md rounded-lg p-6 max-w-sm text-center">
        <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h3 className="text-white text-xl font-bold mb-2">Warning!</h3>
        <p className="text-white/70 mb-6">Are you sure you want to proceed?</p>
        <div className="flex gap-3"><button onClick={() => setIsOpen(false)} className="flex-1 py-2 bg-white/10 text-white rounded-lg">Cancel</button>
          <button onClick={() => setIsOpen(false)} className="flex-1 py-2 bg-red-500 text-white rounded-lg">Confirm</button></div>
      </motion.div></motion.div>}</AnimatePresence></>);
}

export function ModalSuccess() {
  const [isOpen, setIsOpen] = useState(false);
  return (<><button onClick={() => setIsOpen(true)} className="px-6 py-3 bg-green-500 text-white rounded-lg">Success Modal</button>
    <AnimatePresence>{isOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center" onClick={() => setIsOpen(false)}>
      <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} exit={{ scale: 0.5 }} onClick={(e) => e.stopPropagation()} className="bg-white/10 backdrop-blur-md rounded-lg p-8 max-w-sm text-center">
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
        <h3 className="text-white text-2xl font-bold mb-2">Success!</h3>
        <p className="text-white/70 mb-6">Your action was completed successfully</p>
        <button onClick={() => setIsOpen(false)} className="px-6 py-2 bg-green-500 text-white rounded-lg">Great!</button>
      </motion.div></motion.div>}</AnimatePresence></>);
}

export function ModalInfo() {
  const [isOpen, setIsOpen] = useState(false);
  return (<><button onClick={() => setIsOpen(true)} className="px-6 py-3 bg-blue-500 text-white rounded-lg">Info Modal</button>
    <AnimatePresence>{isOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
      <motion.div initial={{ y: -100 }} animate={{ y: 0 }} exit={{ y: -100 }} onClick={(e) => e.stopPropagation()} className="bg-white/10 backdrop-blur-md rounded-lg p-6 max-w-md">
        <Info className="w-12 h-12 text-blue-400 mb-4" />
        <h3 className="text-white text-xl font-bold mb-2">Information</h3>
        <p className="text-white/70 mb-4">Here's some important information for you.</p>
        <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-blue-500 text-white rounded">Understood</button>
      </motion.div></motion.div>}</AnimatePresence></>);
}

export function ModalConfirm() {
  const [isOpen, setIsOpen] = useState(false);
  return (<><button onClick={() => setIsOpen(true)} className="px-6 py-3 bg-orange-500 text-white rounded-lg">Confirm Modal</button>
    <AnimatePresence>{isOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center" onClick={() => setIsOpen(false)}>
      <motion.div initial={{ rotate: -10, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 10, opacity: 0 }} onClick={(e) => e.stopPropagation()} className="bg-white/10 backdrop-blur-md rounded-lg p-6 max-w-md">
        <AlertTriangle className="w-12 h-12 text-orange-400 mb-4" />
        <h3 className="text-white text-xl font-bold mb-2">Confirm Action</h3>
        <p className="text-white/70 mb-6">This action cannot be undone. Continue?</p>
        <div className="flex gap-3 justify-end"><button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-white/10 text-white rounded">Cancel</button>
          <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-orange-500 text-white rounded">Yes, Continue</button></div>
      </motion.div></motion.div>}</AnimatePresence></>);
}

export function ModalFullScreen() {
  const [isOpen, setIsOpen] = useState(false);
  return (<><button onClick={() => setIsOpen(true)} className="px-6 py-3 bg-purple-500 text-white rounded-lg">Fullscreen Modal</button>
    <AnimatePresence>{isOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-forest-green/95 backdrop-blur-md z-50 p-8">
      <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-white"><X className="w-8 h-8" /></button>
      <div className="h-full flex items-center justify-center"><div className="max-w-2xl text-center"><h2 className="text-white text-4xl font-bold mb-4">Fullscreen Modal</h2>
        <p className="text-white/70 text-lg">Takes up the entire viewport</p></div></div>
    </motion.div>}</AnimatePresence></>);
}

export function ModalSidePanel() {
  const [isOpen, setIsOpen] = useState(false);
  return (<><button onClick={() => setIsOpen(true)} className="px-6 py-3 bg-indigo-500 text-white rounded-lg">Side Panel</button>
    <AnimatePresence>{isOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 z-50" onClick={() => setIsOpen(false)}>
      <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} onClick={(e) => e.stopPropagation()} className="absolute top-0 right-0 h-full w-96 bg-white/10 backdrop-blur-md p-6">
        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-white"><X /></button>
        <h3 className="text-white text-2xl font-bold mb-4 mt-12">Side Panel</h3>
        <p className="text-white/70">Slides in from the right side</p>
      </motion.div></motion.div>}</AnimatePresence></>);
}

export function ModalDialog() {
  const [isOpen, setIsOpen] = useState(false);
  return (<><button onClick={() => setIsOpen(true)} className="px-6 py-3 bg-teal-500 text-white rounded-lg">Dialog</button>
    <AnimatePresence>{isOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} onClick={(e) => e.stopPropagation()} className="bg-white/10 backdrop-blur-md rounded-xl p-6 max-w-lg">
        <h3 className="text-white text-xl font-bold mb-3">Dialog Title</h3>
        <p className="text-white/70 mb-6">This is a dialog component with smooth animations.</p>
        <div className="flex gap-3 justify-end"><button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-white/10 text-white rounded">Cancel</button>
          <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-teal-500 text-white rounded">Accept</button></div>
      </motion.div></motion.div>}</AnimatePresence></>);
}

export function ModalVideo() {
  const [isOpen, setIsOpen] = useState(false);
  return (<><button onClick={() => setIsOpen(true)} className="px-6 py-3 bg-pink-500 text-white rounded-lg">Video Modal</button>
    <AnimatePresence>{isOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
      <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} onClick={(e) => e.stopPropagation()} className="relative max-w-4xl w-full aspect-video bg-white/10 rounded-lg flex items-center justify-center">
        <span className="text-white text-2xl">Video Player Placeholder</span>
        <button onClick={() => setIsOpen(false)} className="absolute -top-12 right-0 text-white"><X className="w-8 h-8" /></button>
      </motion.div></motion.div>}</AnimatePresence></>);
}

export function ModalImage() {
  const [isOpen, setIsOpen] = useState(false);
  return (<><button onClick={() => setIsOpen(true)} className="px-6 py-3 bg-cyan-500 text-white rounded-lg">Image Modal</button>
    <AnimatePresence>{isOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-8" onClick={() => setIsOpen(false)}>
      <motion.div initial={{ scale: 0.5, rotate: -10 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0.5, rotate: 10 }} className="relative max-w-3xl bg-white/10 rounded-lg p-4">
        <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded flex items-center justify-center">
          <span className="text-white text-xl">Image Placeholder</span>
        </div>
        <button onClick={() => setIsOpen(false)} className="absolute -top-10 right-0 text-white"><X className="w-8 h-8" /></button>
      </motion.div></motion.div>}</AnimatePresence></>);
}

export function ModalForm() {
  const [isOpen, setIsOpen] = useState(false);
  return (<><button onClick={() => setIsOpen(true)} className="px-6 py-3 bg-violet-500 text-white rounded-lg">Form Modal</button>
    <AnimatePresence>{isOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
      <motion.div initial={{ y: 50 }} animate={{ y: 0 }} exit={{ y: 50 }} onClick={(e) => e.stopPropagation()} className="bg-white/10 backdrop-blur-md rounded-lg p-6 max-w-md w-full">
        <h3 className="text-white text-xl font-bold mb-4">Contact Form</h3>
        <form className="space-y-3"><input type="email" placeholder="Email" className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded text-white placeholder:text-white/60" />
          <textarea placeholder="Message" rows={3} className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded text-white placeholder:text-white/60 resize-none"></textarea>
          <div className="flex gap-3"><button type="button" onClick={() => setIsOpen(false)} className="flex-1 py-2 bg-white/10 text-white rounded">Cancel</button>
            <button type="submit" className="flex-1 py-2 bg-violet-500 text-white rounded">Send</button></div></form>
      </motion.div></motion.div>}</AnimatePresence></>);
}

export function ModalTooltip() {
  const [isOpen, setIsOpen] = useState(false);
  return (<div className="relative inline-block">
    <button onClick={() => setIsOpen(!isOpen)} className="px-6 py-3 bg-amber-500 text-white rounded-lg">Tooltip Modal</button>
    <AnimatePresence>{isOpen && <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2 bg-black/90 text-white text-sm rounded whitespace-nowrap">
      This is a tooltip modal<div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black/90"></div>
    </motion.div>}</AnimatePresence></div>);
}

export function ModalMultiStep() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  return (<><button onClick={() => setIsOpen(true)} className="px-6 py-3 bg-lime-500 text-white rounded-lg">Multi-Step Modal</button>
    <AnimatePresence>{isOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
      <motion.div key={step} initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -100, opacity: 0 }} onClick={(e) => e.stopPropagation()} className="bg-white/10 backdrop-blur-md rounded-lg p-6 max-w-md w-full">
        <h3 className="text-white text-xl font-bold mb-4">Step {step} of 3</h3>
        <p className="text-white/70 mb-6">Content for step {step}</p>
        <div className="flex gap-3">{step > 1 && <button onClick={() => setStep(step - 1)} className="flex-1 py-2 bg-white/10 text-white rounded">Back</button>}
          {step < 3 ? <button onClick={() => setStep(step + 1)} className="flex-1 py-2 bg-lime-500 text-white rounded">Next</button> :
            <button onClick={() => setIsOpen(false)} className="flex-1 py-2 bg-lime-500 text-white rounded">Finish</button>}</div>
      </motion.div></motion.div>}</AnimatePresence></>);
}

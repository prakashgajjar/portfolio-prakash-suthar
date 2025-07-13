import React, { useState } from "react";
import { X } from "lucide-react"; // Or your close icon
import responseSend from "../api/response.api";

export default function GetInTouchPopup({ show, onClose , onSent }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Name:", name);
    // console.log("Message:", message);
    responseSend(name, message).then(()=>{
      onSent();
    }).catch((error)=>{
      console.log(error);
    })
    onClose();
    setName("");
    setMessage("");
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-black border border-white/10 rounded-2xl p-8 w-[90%] max-w-md shadow-2xl animate-scaleIn z-[210]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-purple-400 hover:text-white transition"
        >
          <X />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-purple-400">Get in Touch</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-md bg-black border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition"
            required
          />

          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full px-4 py-3 rounded-md bg-black border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition resize-none"
            required
          ></textarea>

          <button
            type="submit"
            className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-full transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

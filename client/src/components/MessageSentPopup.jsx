import { CheckCircle } from "lucide-react"; // Or any success icon!

export default function MessageSentPopup({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      ></div>

      <div className="relative bg-black border border-white/10 rounded-2xl p-8 w-[90%] max-w-sm shadow-2xl animate-scaleIn z-[310] text-center">
        <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
        <h2 className="text-2xl font-bold text-purple-400 mb-2">Message Sent!</h2>
        <p className="text-gray-300 mb-4">Thank you for reaching out — I’ll get back to you soon 🫶</p>
        <button
          onClick={onClose}
          className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-full transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}

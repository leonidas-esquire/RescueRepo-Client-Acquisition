import React from "react";
import { motion } from "framer-motion";

export default function DataViewer({ data }: { data: Record<string, any> }) {
  if (!data) return <p className="text-gray-400 text-center mt-8">No data available.</p>;

  return (
    <div className="p-8 grid gap-8">
      {Object.entries(data).map(([key, value]: [string, any]) => (
        <motion.div
          key={key}
          className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-2xl font-bold mb-2 text-white/90">{key}</h2>
          <p className="text-gray-400 mb-4 italic">{value.description}</p>
          <ul className="space-y-1">
            {value.files?.map((file: string) => (
              <li key={file} className="text-gray-300 bg-white/10 px-3 py-1 rounded-md inline-block mr-2 mb-2 hover:bg-white/20 transition-all">
                {file}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}

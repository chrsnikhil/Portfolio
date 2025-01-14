"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ui/animated-modal";
import { motion } from "framer-motion";

export function ResumeModal() {
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger>
          <div className="group/btn relative overflow-hidden px-8 py-3 rounded-xl font-goldman text-sm tracking-wider min-w-[180px] h-[45px]"
            style={{
              background: "linear-gradient(145deg, rgba(26, 27, 36, 0.95), rgba(40, 41, 54, 0.98))",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)"
            }}>
            <div className="relative flex items-center justify-center w-full text-white overflow-hidden">
              <span className="transform transition-transform duration-300 group-hover/btn:translate-x-[150%]">
                Resume
              </span>
              <span className="absolute inset-0 flex items-center justify-center transform -translate-x-[150%] transition-transform duration-300 group-hover/btn:translate-x-0">
                📄
              </span>
            </div>
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-200 font-bold text-center mb-8 font-goldman tracking-wider">
              Download My Resume 📄
            </h4>
            <div className="flex flex-col gap-6 items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full max-w-sm p-4 rounded-xl border border-white/20"
                style={{
                  background: "linear-gradient(145deg, rgba(26, 27, 36, 0.98), rgba(40, 41, 54, 0.98))",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.4)",
                  willChange: "transform"
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-red-900/50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-red-400 h-5 w-5"
                      >
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-medium text-neutral-200 font-golos tracking-wide">Resume.pdf</h5>
                      <p className="text-sm text-neutral-400 font-golos tracking-wide">PDF Format</p>
                    </div>
                  </div>
                  <a 
                    href="/about/resume.pdf" 
                    download 
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-neutral-300 h-5 w-5"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full max-w-sm p-4 rounded-xl border border-white/20"
                style={{
                  background: "linear-gradient(145deg, rgba(26, 27, 36, 0.98), rgba(40, 41, 54, 0.98))",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.4)",
                  willChange: "transform"
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-900/50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-400 h-5 w-5"
                      >
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-medium text-neutral-200 font-golos tracking-wide">Resume.docx</h5>
                      <p className="text-sm text-neutral-400 font-golos tracking-wide">Word Format</p>
                    </div>
                  </div>
                  <a 
                    href="/about/resume.docx" 
                    download 
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-neutral-300 h-5 w-5"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
} 
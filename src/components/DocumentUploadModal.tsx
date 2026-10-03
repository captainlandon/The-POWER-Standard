import React, { useState } from 'react';
import { FeedbackSubmission } from '../types/power';
import { X, Upload, CheckCircle2, FileText, ShieldCheck, MessageSquare } from 'lucide-react';

interface DocumentUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  recordId: string;
  stageName: string;
  onSubmitSuccess: (submission: FeedbackSubmission) => void;
}

export const DocumentUploadModal: React.FC<DocumentUploadModalProps> = ({
  isOpen,
  onClose,
  recordId,
  stageName,
  onSubmitSuccess
}) => {
  const [feedbackText, setFeedbackText] = useState('');
  const [documentTitle, setDocumentTitle] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackText.trim() && !selectedFile) return;

    const newFeedback: FeedbackSubmission = {
      id: `fb-${Date.now().toString().slice(-4)}`,
      timestamp: new Date().toISOString().replace('T', ' ').slice(0, 19),
      recordId,
      stageName,
      feedbackText,
      uploadedDocumentTitle: selectedFile ? selectedFile.name : (documentTitle || undefined),
      verificationBadge: 'Community Submitted'
    };

    onSubmitSuccess(newFeedback);
    setIsSuccess(true);
  };

  const handleClose = () => {
    setIsSuccess(false);
    setFeedbackText('');
    setDocumentTitle('');
    setSelectedFile(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="w-full max-w-lg bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        <div className="bg-slate-900 text-white p-5 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-indigo-400 text-xs font-mono font-bold uppercase tracking-wider mb-1">
              <Upload className="w-3.5 h-3.5" />
              <span>Contribute Evidence or Feedback</span>
            </div>
            <h3 className="text-base font-serif font-bold">
              Upload Document for {stageName}
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">
              Attach primary government documents, FOIA disclosures, budget receipts, or independent audits.
            </p>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center space-y-4 text-xs">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-base font-serif font-bold text-slate-900">
              Evidence & Feedback Received
            </h4>
            <p className="text-slate-600 max-w-sm mx-auto leading-relaxed">
              Prototype submission recorded locally for stage <strong>{stageName}</strong>. In a production deployment, contributions would enter a documented verification pipeline checked against authoritative primary records.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2 font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Evidence Stage Association
              </label>
              <div className="p-2 bg-slate-100 border border-slate-200 rounded text-slate-800 font-mono">
                {stageName} (Target Record: {recordId})
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Document File (PDF, CSV, TXT, DOCX)
              </label>
              <div className="border border-dashed border-slate-300 rounded-lg p-4 text-center bg-slate-50">
                <input
                  type="file"
                  id="stage-file"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setSelectedFile(e.target.files[0]);
                    }
                  }}
                  className="hidden"
                />
                <label htmlFor="stage-file" className="cursor-pointer">
                  {selectedFile ? (
                    <div className="flex items-center justify-center gap-2 text-indigo-700 font-medium">
                      <FileText className="w-4 h-4 text-emerald-600" />
                      <span>{selectedFile.name} ({(selectedFile.size / 1024).toFixed(1)} KB)</span>
                    </div>
                  ) : (
                    <div>
                      <Upload className="w-6 h-6 text-slate-400 mx-auto mb-1" />
                      <span className="text-slate-700 font-medium block">Click to select document</span>
                      <span className="text-slate-400 text-[10px]">
                        Production concept: submitted evidence would be checked against authoritative repositories where technically and legally feasible.
                      </span>
                    </div>
                  )}
                </label>
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Or Document Citation Title / Locator URL
              </label>
              <input
                type="text"
                value={documentTitle}
                onChange={(e) => setDocumentTitle(e.target.value)}
                placeholder="e.g. DC Auditor Report No. 24-08 / dcr.dc.gov/notice/1234"
                className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-1.5 text-slate-800 focus:outline-hidden focus:ring-1 focus:ring-slate-900"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Contextual Notes or Verification Feedback
              </label>
              <textarea
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                rows={3}
                placeholder="Describe how this document corroborates or questions this specific milestone..."
                className="w-full bg-slate-50 border border-slate-300 rounded p-2.5 text-slate-800 focus:outline-hidden focus:ring-1 focus:ring-slate-900"
              />
            </div>

            <div className="pt-3 border-t border-slate-200 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={handleClose}
                className="px-3 py-1.5 text-slate-700 hover:bg-slate-100 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 font-bold text-white bg-slate-900 hover:bg-slate-800 rounded transition-colors"
              >
                Attach & Verify
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

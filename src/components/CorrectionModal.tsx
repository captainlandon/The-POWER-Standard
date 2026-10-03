import React, { useState } from 'react';
import { CorrectionSubmission } from '../types/power';
import { X, Send, AlertTriangle, Upload, CheckCircle2, ShieldCheck, FileCheck } from 'lucide-react';

interface CorrectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRecordTitle?: string;
  defaultRecordId?: string;
  defaultRecordType?: CorrectionSubmission['recordType'];
  onSubmitSuccess: (submission: CorrectionSubmission) => void;
}

export const CorrectionModal: React.FC<CorrectionModalProps> = ({
  isOpen,
  onClose,
  defaultRecordTitle = '',
  defaultRecordId = '',
  defaultRecordType = 'Commitment',
  onSubmitSuccess
}) => {
  const [recordType, setRecordType] = useState<CorrectionSubmission['recordType']>(defaultRecordType);
  const [recordTitle, setRecordTitle] = useState(defaultRecordTitle);
  const [issueType, setIssueType] = useState<CorrectionSubmission['issueType']>('Incorrect fact');
  const [explanation, setExplanation] = useState('');
  const [supportingSource, setSupportingSource] = useState('');
  const [submitterEmail, setSubmitterEmail] = useState('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!explanation.trim()) return;

    const newCorrection: CorrectionSubmission = {
      id: `corr-${Date.now().toString().slice(-4)}`,
      timestamp: new Date().toISOString().replace('T', ' ').slice(0, 19),
      recordType,
      recordId: defaultRecordId || `custom-${Date.now()}`,
      recordTitle: recordTitle || 'General Public Record Challenge',
      issueType,
      explanation,
      supportingSourceUrlOrDoc: supportingSource || (uploadedFile ? `Uploaded Document: ${uploadedFile.name}` : 'Not provided'),
      submitterEmail: submitterEmail || undefined,
      documentName: uploadedFile ? uploadedFile.name : undefined,
      status: 'Pending review',
    };

    onSubmitSuccess(newCorrection);
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setExplanation('');
    setSupportingSource('');
    setUploadedFile(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="w-full max-w-xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="correction-modal-title"
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-1">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Public Audit & Dispute System</span>
            </div>
            <h3 id="correction-modal-title" className="text-lg font-serif font-bold">
              Suggest a Correction or Challenge a Record
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">
              POWER is designed to be challenged. Submit documentation to correct errors, update records, or challenge classifications.
            </p>
          </div>
          <button
            type="button"
            onClick={handleResetAndClose}
            className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {isSubmitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-serif font-bold text-slate-900">
              Audit Challenge Logged Successfully
            </h4>
            <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
              Prototype submission recorded locally. In a production deployment, corrections would enter a documented verification queue. POWER requires double-verification against primary sources before adjusting the epistemic state of a published record.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs font-mono text-left max-w-md mx-auto text-slate-700 space-y-1">
              <div><strong>Record:</strong> {recordTitle || 'Current Record'}</div>
              <div><strong>Issue Type:</strong> {issueType}</div>
              <div><strong>Source Reference:</strong> {supportingSource || uploadedFile?.name || 'Attached citation'}</div>
            </div>
            <div className="pt-3">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-5 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
              >
                Return to Record
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
            {/* Record Identification */}
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Record Being Challenged / Corrected
              </label>
              <div className="flex gap-2">
                <select
                  value={recordType}
                  onChange={(e) => setRecordType(e.target.value as any)}
                  className="bg-slate-50 border border-slate-300 rounded px-2.5 py-1.5 text-slate-800 focus:ring-1 focus:ring-slate-900 focus:outline-hidden"
                >
                  <option value="Problem">Public Problem</option>
                  <option value="Institution">Institution</option>
                  <option value="Actor">Public Actor</option>
                  <option value="Commitment">Commitment</option>
                  <option value="Evidence">Evidence Item</option>
                </select>
                <input
                  type="text"
                  value={recordTitle}
                  onChange={(e) => setRecordTitle(e.target.value)}
                  placeholder="Record name or ID"
                  required
                  className="flex-1 bg-slate-50 border border-slate-300 rounded px-3 py-1.5 text-slate-800 focus:ring-1 focus:ring-slate-900 focus:outline-hidden font-medium"
                />
              </div>
            </div>

            {/* Issue Type */}
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Classification of Issue
              </label>
              <select
                value={issueType}
                onChange={(e) => setIssueType(e.target.value as any)}
                className="w-full bg-slate-50 border border-slate-300 rounded px-2.5 py-2 text-slate-800 focus:ring-1 focus:ring-slate-900 focus:outline-hidden"
              >
                <option value="Incorrect fact">Incorrect fact (Data error or misquotation)</option>
                <option value="Missing source">Missing source (Uncited claim)</option>
                <option value="Outdated information">Outdated information (Newer official data released)</option>
                <option value="Misclassified authority">Misclassified authority (Incorrect legal power or limit)</option>
                <option value="Missing implementation evidence">Missing implementation evidence (Documented milestone omitted)</option>
                <option value="Unwarranted causal claim">Unwarranted causal claim (Correlation falsely framed as causation)</option>
                <option value="Other">Other systemic discrepancy</option>
              </select>
            </div>

            {/* Explanation */}
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Explanation of Discrepancy <span className="text-rose-500">*</span>
              </label>
              <textarea
                value={explanation}
                onChange={(e) => setExplanation(e.target.value)}
                placeholder="Explain precisely what is inaccurate, omitted, or misclassified based on public records..."
                rows={4}
                required
                className="w-full bg-slate-50 border border-slate-300 rounded p-2.5 text-slate-800 focus:ring-1 focus:ring-slate-900 focus:outline-hidden leading-relaxed"
              />
            </div>

            {/* Supporting Evidence link */}
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Supporting Public Document URL or Citation
              </label>
              <input
                type="text"
                value={supportingSource}
                onChange={(e) => setSupportingSource(e.target.value)}
                placeholder="e.g. D.C. Law number, Agency Audit link, Census Table ID, Mayor's Order"
                className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-1.5 text-slate-800 focus:ring-1 focus:ring-slate-900 focus:outline-hidden"
              />
            </div>

            {/* Document Upload Option */}
            <div className="bg-slate-50 border border-dashed border-slate-300 rounded-lg p-3 text-center">
              <input
                type="file"
                id="doc-upload"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setUploadedFile(e.target.files[0]);
                  }
                }}
                className="hidden"
              />
              <label htmlFor="doc-upload" className="cursor-pointer block">
                {uploadedFile ? (
                  <div className="flex items-center justify-center gap-2 text-indigo-700 font-semibold">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>{uploadedFile.name} ({(uploadedFile.size / 1024).toFixed(1)} KB)</span>
                    <span className="text-slate-400 text-[10px] underline ml-2">Change</span>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <Upload className="w-5 h-5 text-slate-400 mx-auto" />
                    <span className="text-slate-600 font-medium">
                      Upload supporting PDF / audit document / dataset
                    </span>
                    <span className="text-[10px] text-slate-400 block">
                      Production concept: submitted evidence would be checked against authoritative repositories where technically and legally feasible.
                    </span>
                  </div>
                )}
              </label>
            </div>

            {/* Submitter Email */}
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Your Contact Email <span className="text-slate-400 font-normal">(Optional, for audit tracking)</span>
              </label>
              <input
                type="email"
                value={submitterEmail}
                onChange={(e) => setSubmitterEmail(e.target.value)}
                placeholder="researcher@organization.org"
                className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-1.5 text-slate-800 focus:ring-1 focus:ring-slate-900 focus:outline-hidden"
              />
            </div>

            {/* Transparency Note */}
            <div className="bg-indigo-50/70 border border-indigo-200 p-2.5 rounded text-[11px] text-indigo-900 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-indigo-700 shrink-0 mt-0.5" />
              <span>
                All accepted corrections are recorded in the public record changelog with clear attribution to the primary source.
              </span>
            </div>

            {/* Actions */}
            <div className="pt-3 border-t border-slate-200 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-4 py-2 font-semibold text-slate-700 hover:bg-slate-100 rounded transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-4 py-2 font-bold text-white bg-slate-900 hover:bg-slate-800 rounded transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                Record Audit Challenge (Prototype)
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export const sampleOrder = {
  serviceType: "transcription",
  sourceLanguage: "English",
  targetLanguage: "English",
  files: [
    {
      url: "https://example.com/audio1.mp3",
      duration: 300,
      format: "mp3",
      transcriptionText: "",
      status: "pending",
      verbatim: false,
      timestamps: false,
    },
  ],
  amount: 100,
  status: "pending",
  turnaroundTime: "48 hours",
  additionalNotes: "Please handle with care.",
  paymentStatus: "unpaid",
};

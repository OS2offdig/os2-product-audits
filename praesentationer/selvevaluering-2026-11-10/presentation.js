// Præsentationens indstillinger. Tider angives i sekunder.
Reveal.initialize({
  width: 1200,
  height: 700,
  margin: 0.06,
  hash: true,
  controls: true,
  progress: true,
  slideNumber: 'c/t',
  transition: 'none',
  center: false,
  totalTime: 900,
  history: true,
  plugins: [RevealNotes],
  pdfSeparateFragments: false
});

// Kopiér AI-prompten på slide 12.
document.getElementById('copy-prompt').addEventListener('click', async () => {
  const prompt = document.getElementById('ai-prompt').innerText;
  const status = document.getElementById('copy-status');

  try {
    await navigator.clipboard.writeText(prompt);
    status.textContent = 'Prompt kopieret.';
  } catch {
    // Hvis browseren afviser kopiering, markeres teksten til manuel kopiering.
    status.textContent = 'Markér teksten og kopiér med Ctrl+C eller ⌘C.';
    const range = document.createRange();
    range.selectNodeContents(document.getElementById('ai-prompt'));
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }
});

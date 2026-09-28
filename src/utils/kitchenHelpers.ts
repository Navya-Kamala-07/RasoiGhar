// Kitchen audio and helper utilities

// Synthesize pleasant kitchen timer chime using Web Audio API
export function playKitchenChime() {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();

    const now = ctx.currentTime;
    // Pleasant two-tone chime (E5 -> G#5 -> B5)
    const tones = [659.25, 830.61, 987.77];

    tones.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.12);

      gain.gain.setValueAtTime(0, now + idx * 0.12);
      gain.gain.linearRampToValueAtTime(0.25, now + idx * 0.12 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.12 + 0.8);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.12);
      osc.stop(now + idx * 0.12 + 0.85);
    });
  } catch (err) {
    console.warn('AudioContext not allowed or supported yet', err);
  }
}

// Speak step text aloud with Web Speech API
export function speakInstruction(text: string, onEnd?: () => void) {
  if (!('speechSynthesis' in window)) return false;

  window.speechSynthesis.cancel(); // Stop any ongoing speech

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.95; // Slightly slower, clear conversational pace
  utterance.pitch = 1.0;

  // Try to pick an English voice with good natural inflection
  const voices = window.speechSynthesis.getVoices();
  const naturalVoice = voices.find(
    (v) => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha'))
  );
  if (naturalVoice) {
    utterance.voice = naturalVoice;
  }

  if (onEnd) {
    utterance.onend = onEnd;
  }

  window.speechSynthesis.speak(utterance);
  return true;
}

export function stopSpeaking() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

// Scale ingredient quantity by ratio
export function formatScaledAmount(baseAmount: number, baseServings: number, targetServings: number): string {
  const scaled = (baseAmount / baseServings) * targetServings;
  if (scaled <= 0) return '0';

  // Common fraction rendering for cooking elegance
  const whole = Math.floor(scaled);
  const remainder = scaled - whole;

  if (remainder > 0.125 && remainder < 0.375) {
    return whole > 0 ? `${whole} ¼` : '¼';
  } else if (remainder >= 0.375 && remainder < 0.625) {
    return whole > 0 ? `${whole} ½` : '½';
  } else if (remainder >= 0.625 && remainder < 0.875) {
    return whole > 0 ? `${whole} ¾` : '¾';
  } else if (remainder >= 0.875) {
    return `${whole + 1}`;
  }

  return whole > 0 ? `${whole}` : scaled.toFixed(1).replace(/\.0$/, '');
}

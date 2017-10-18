export default () => {
    const audioContext = new AudioContext();
    const kFreq = 660;
    const kDecayTime = 0.2;
    const kStartTime = 1;
    const kGain = 40;
    const oscNode = audioContext.createOscillator();
    oscNode.frequency.value = kFreq;
    const gainNode = audioContext.createGain();
    gainNode.gain.value = kGain;
    gainNode.gain.setTargetAtTime(0.0, audioContext.currentTime, kDecayTime);
    oscNode.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscNode.start(audioContext.currentTime + kStartTime); // Start a little into the future.
    oscNode.stop(audioContext.currentTime + kStartTime + 12 * kDecayTime); // Stop when the sound decays by enough.
};

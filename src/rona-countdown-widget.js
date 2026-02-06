import { LitElement, html, css } from 'lit';

const getDesktopSDK = () => {
  if (window.WxccDesktopSDK) {
    return window.WxccDesktopSDK;
  }
  if (window.Desktop) {  // Sometimes aliased
    return window.Desktop;
  }
  throw new Error('WxCC Desktop SDK not available - running in demo mode?');
};

class RonaCountdownWidget extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    .widget-container {
      width: 220px;
      height: 80px;
      background: rgba(30, 30, 50, 0.85);
      border-radius: 12px;
      border: 1px solid #3a3a5c;
      color: white;
      overflow: hidden;
      position: relative;
      box-shadow: 0 4px 15px rgba(0,0,0,0.4);
      transition: all 0.3s ease;
    }

    .widget-container.rona-active {
      background: linear-gradient(135deg, #8b0000, #ff0a0a);
      animation: pulse 2s infinite;
    }

    .widget-container.shake {
      animation: shake 0.5s;
    }

    .widget-container.recovery {
      background: linear-gradient(135deg, #006400, #00ff88);
      animation: successPulse 1.5s;
    }

    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.03); }
      100% { transform: scale(1); }
    }

    @keyframes shake {
      0% { transform: translate(1px, 1px) rotate(0deg); }
      10% { transform: translate(-1px, -2px) rotate(-1deg); }
      20% { transform: translate(-3px, 0px) rotate(1deg); }
      30% { transform: translate(3px, 2px) rotate(0deg); }
      40% { transform: translate(1px, -1px) rotate(1deg); }
      50% { transform: translate(-1px, 2px) rotate(-1deg); }
      60% { transform: translate(-3px, 1px) rotate(0deg); }
      70% { transform: translate(3px, 1px) rotate(-1deg); }
      80% { transform: translate(-1px, -1px) rotate(1deg); }
      90% { transform: translate(1px, 2px) rotate(0deg); }
      100% { transform: translate(1px, -2px) rotate(-1deg); }
    }

    @keyframes successPulse {
      0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0,255,136,0.7); }
      70% { transform: scale(1.05); box-shadow: 0 0 0 15px rgba(0,255,136,0); }
      100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0,255,136,0); }
    }

    .scanlines {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: repeating-linear-gradient(
        to bottom,
        transparent 0%,
        rgba(255,255,255,0.03) 1px,
        transparent 2px
      );
      pointer-events: none;
      animation: scan 8s linear infinite;
    }

    @keyframes scan {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(100%); }
    }

    .alert-icon {
      position: absolute;
      top: 12px;
      left: 16px;
      width: 48px;
      height: 48px;
    }

    .warning-triangle {
      width: 0;
      height: 0;
      border-left: 24px solid transparent;
      border-right: 24px solid transparent;
      border-bottom: 42px solid #ffff00;
      position: relative;
    }

    .warning-triangle::after {
      content: "!";
      position: absolute;
      top: 8px;
      left: -8px;
      font-size: 28px;
      color: #000;
      font-weight: bold;
    }

    .recovery-check {
      font-size: 48px;
      color: #00ff88;
      animation: checkFade 1.2s;
    }

    @keyframes checkFade {
      0% { opacity: 0; transform: scale(0.5); }
      60% { opacity: 1; transform: scale(1.2); }
      100% { opacity: 1; transform: scale(1); }
    }

    .status-dot {
      width: 48px;
      height: 48px;
      background: #00bceb;
      border-radius: 50%;
      box-shadow: 0 0 15px #00bceb;
    }

    .countdown-section {
      position: absolute;
      top: 10px;
      left: 70px;
      font-size: 32px;
      font-weight: bold;
    }

    .countdown-number {
      color: #ffff00;
    }

    .countdown-number.danger {
      color: #ff0a0a;
      animation: flash 0.8s infinite;
    }

    .countdown-number.critical {
      color: #ff6600;
      animation: flash 0.6s infinite;
    }

    @keyframes flash {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.4; }
    }

    .countdown-unit {
      font-size: 16px;
      vertical-align: super;
    }

    .status-label {
      position: absolute;
      bottom: 12px;
      left: 70px;
      font-size: 16px;
      font-weight: 600;
    }

    .status-label.rona {
      color: #ffff00;
    }

    .status-label.recovery {
      color: #00ff88;
      font-size: 20px;
    }

    .drama-meter {
      position: absolute;
      bottom: 8px;
      right: 12px;
      display: flex;
      gap: 4px;
    }

    .drama-dot {
      width: 8px;
      height: 8px;
      background: #444;
      border-radius: 50%;
      transition: all 0.3s;
    }

    .drama-dot.active {
      background: #ffff00;
      box-shadow: 0 0 8px #ffff00;
    }

    .drama-dot.critical {
      background: #ff0a0a;
      box-shadow: 0 0 12px #ff0a0a;
    }

    .progress-bar {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: rgba(0,0,0,0.5);
    }

    .progress-fill {
      height: 100%;
      background: #ffff00;
      transition: width 1s linear;
    }

    .progress-fill.critical {
      background: #ff0a0a;
    }
  `;

  static properties = {
    _isRona: { type: Boolean },
    _countdown: { type: Number },
    _isShaking: { type: Boolean },
    _dramaMeter: { type: Number },
    _showRecoveryMessage: { type: Boolean },
    _currentAgentState: { type: String },
    _isDemo: { type: Boolean },
  };

  constructor() {
    super();
    this._isRona = false;
    this._countdown = 0;
    this._isShaking = false;
    this._dramaMeter = 0;
    this._showRecoveryMessage = false;
    this._currentAgentState = 'Loading...';
    this._isDemo = false;
    this._countdownInterval = null;
    this._sdkLogger = null;
  }

  connectedCallback() {
    super.connectedCallback();
    this._initSDK();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._countdownInterval) clearInterval(this._countdownInterval);
    // Cleanup SDK listeners if needed
  }

async _initSDK() {
  try {
    const SDK = getDesktopSDK();  // Get the global
    this._sdkLogger = SDK.logger.createLogger('rona-countdown-widget');

    // Initialize the SDK
    await SDK.config.init();
    this._sdkLogger.info('Desktop SDK initialized successfully');

    // Get initial agent state
    const initialState = SDK.agentStateInfo.latestData?.state || 'Unknown';
    this._currentAgentState = initialState;
    this._sdkLogger.info(`Initial agent state: ${initialState}`);

    // Check if already in RONA
    if (this._isRonaState(initialState)) {
      this._triggerRona();
    }

    // Listen for state changes
    SDK.agentStateInfo.addEventListener('eAgentStateChange', (event) => {
      const newState = event.data?.state || 'Unknown';
      this._currentAgentState = newState;
      this._sdkLogger.info(`Agent state changed to: ${newState}`);

      if (this._isRonaState(newState)) {
        this._triggerRona();
      } else if (this._isRona) {
        this._cancelRona();
      }

      this.requestUpdate();
    });

  } catch (err) {
    console.error('[RONA Widget] SDK error:', err);
    this._enterDemoMode();
  }

  // Safety fallback...
  setTimeout(() => {
    if (this._currentAgentState === 'Loading...') {
      this._enterDemoMode();
    }
  }, 10000);
}

  _enterDemoMode() {
    this._isDemo = true;
    this._currentAgentState = 'Available (Demo)';
    this.requestUpdate();
    console.warn('[RONA Widget] Entered demo mode - SDK not detected');
  }

  _isRonaState(state) {
    // WxCC SDK reports 'NotResponding' for RONA (Redirection on No Answer)
    // UI may show "RONA" or "Idle - RONA", but backend state is 'NotResponding'
    return state?.toUpperCase() === 'NOTRESPONDING';
  }

  _triggerRona() {
    if (this._isRona) return;

    this._isRona = true;
    this._countdown = 30;
    this._dramaMeter = 0;
    this._isShaking = true;
    this._showRecoveryMessage = false;

    this._playAlertSound();

    this._countdownInterval = setInterval(() => {
      this._countdown--;

      // Escalate drama
      this._dramaMeter = Math.min(this._dramaMeter + 1, 10);

      if (this._countdown <= 10 && this._countdown > 0) {
        this._playTickSound();
      }

      if (this._countdown <= 0) {
        clearInterval(this._countdownInterval);
        this._recoverFromRona();
      }

      this.requestUpdate();
    }, 1000);

    this.requestUpdate();
  }

  async _recoverFromRona() {
  try {
    const SDK = getDesktopSDK();
    await SDK.agentStateInfo.stateChange({
      state: 'Available',
      auxCodeId: null,
    });
    this._sdkLogger?.info('Auto-recovered from RONA to Available');
  } catch (err) {
    this._sdkLogger?.error(`Auto-recovery failed: ${err.message}`);
    console.error('[RONA Widget] Recovery error:', err);
  }

    this._isRona = false;
    this._isShaking = false;
    this._showRecoveryMessage = true;

    setTimeout(() => {
      this._showRecoveryMessage = false;
      this.requestUpdate();
    }, 4000);

    this.requestUpdate();
  }

  _cancelRona() {
    if (this._countdownInterval) {
      clearInterval(this._countdownInterval);
      this._countdownInterval = null;
    }
    this._isRona = false;
    this._isShaking = false;
    this._dramaMeter = 0;
    this._showRecoveryMessage = false;
    this.requestUpdate();
  }

  _playAlertSound() {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      oscillator.frequency.setValueAtTime(1200, audioCtx.currentTime);
      gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.05);
      oscillator.start(audioCtx.currentTime);
      oscillator.stop(audioCtx.currentTime + 0.05);
    } catch (e) {
      console.warn('Audio context error:', e);
    }
  }

  _playTickSound() {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
      gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
      oscillator.start(audioCtx.currentTime);
      oscillator.stop(audioCtx.currentTime + 0.08);
    } catch (e) {}
  }

  _getCountdownClass() {
    if (this._countdown <= 5) return 'danger';
    if (this._countdown <= 10) return 'critical';
    return '';
  }

  _getWarningMessage() {
    if (this._countdown <= 5) return '⚠️ FINAL WARNING ⚠️';
    if (this._countdown <= 10) return 'TIME IS RUNNING OUT!';
    if (this._countdown <= 20) return 'RETURN TO AVAILABLE STATE';
    return 'MISSED CALL DETECTED';
  }

  render() {
    const progress = this._isRona ? (30 - this._countdown) / 30 * 100 : 0;

    return html`
      <div class="widget-container 
        ${this._isRona ? 'rona-active' : ''} 
        ${this._isShaking ? 'shake' : ''} 
        ${this._showRecoveryMessage ? 'recovery' : ''}">

        ${this._isRona ? html`<div class="scanlines"></div>` : ''}

        <div class="alert-icon">
          ${this._isRona 
            ? html`<div class="warning-triangle"></div>`
            : this._showRecoveryMessage 
              ? html`<div class="recovery-check">✓</div>`
              : html`<div class="status-dot"></div>`}
        </div>

        ${this._isRona ? html`
          <div class="countdown-section">
            <span class="countdown-number ${this._getCountdownClass()}">${this._countdown}</span>
            <span class="countdown-unit">sec</span>
          </div>
          <span class="status-label rona">RONA</span>

          <div class="drama-meter">
            ${[...Array(5)].map((_, i) => html`
              <div class="drama-dot 
                ${i < Math.ceil(this._dramaMeter / 2) ? 'active' : ''} 
                ${this._countdown <= 10 ? 'critical' : ''}">
              </div>
            `)}
          </div>
        ` : this._showRecoveryMessage ? html`
          <span class="status-label recovery">RECOVERED!</span>
        ` : html`
          <span class="status-label">${this._currentAgentState}</span>
        `}

        ${this._isRona ? html`
          <div class="progress-bar">
            <div class="progress-fill ${this._countdown <= 10 ? 'critical' : ''}" 
                 style="width: ${progress}%"></div>
          </div>
        ` : ''}
      </div>
    `;
  }
}

customElements.define('rona-countdown-widget', RonaCountdownWidget);
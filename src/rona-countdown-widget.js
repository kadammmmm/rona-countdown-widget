import { LitElement, html, css } from 'lit';

/**
 * RONA Countdown Widget for Webex Contact Center
 * 
 * A dramatically over-the-top countdown timer that activates when an agent
 * enters RONA (Redirection on No Answer) state. Designed to fit within the
 * 48px Advanced Header constraint while still being dramatic and attention-grabbing.
 * 
 * @element rona-countdown-widget
 */
class RonaCountdownWidget extends LitElement {
  static properties = {
    _isRona: { state: true },
    _countdown: { state: true },
    _isShaking: { state: true },
    _dramaMeter: { state: true },
    _currentAgentState: { state: true },
    _showRecoveryMessage: { state: true }
  };

  static styles = css`
    :host {
      display: block;
      font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
      --danger-red: #ff0a0a;
      --danger-red-dark: #8b0000;
      --warning-orange: #ff6600;
      --warning-yellow: #ffcc00;
      --safe-green: #00ff88;
      --background-dark: #1a1a2e;
      --text-glow: 0 0 8px currentColor, 0 0 16px currentColor;
      height: 100%;
      max-height: 48px;
    }

    /* Main container - fits within 48px header */
    .widget-container {
      position: relative;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 12px;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      border-radius: 6px;
      border: 1px solid #2a2a4e;
      height: 36px;
      max-height: 36px;
      box-sizing: border-box;
      transition: all 0.3s ease;
      overflow: hidden;
    }

    /* RONA Active State - Dramatic but contained */
    .widget-container.rona-active {
      background: linear-gradient(135deg, #4a0a0a 0%, #2a0505 100%);
      border-color: var(--danger-red);
      box-shadow: 
        0 0 15px rgba(255, 10, 10, 0.6),
        0 0 30px rgba(255, 10, 10, 0.3),
        inset 0 0 15px rgba(255, 10, 10, 0.2);
      animation: containerPulse 0.5s ease-in-out infinite alternate;
    }

    .widget-container.rona-active.shake {
      animation: containerPulse 0.5s ease-in-out infinite alternate, shake 0.1s linear infinite;
    }

    .widget-container.recovery {
      background: linear-gradient(135deg, #0a2a0a 0%, #051a05 100%);
      border-color: var(--safe-green);
      box-shadow: 0 0 15px rgba(0, 255, 136, 0.5);
    }

    @keyframes containerPulse {
      from {
        border-color: var(--danger-red);
        box-shadow: 
          0 0 15px rgba(255, 10, 10, 0.6),
          0 0 30px rgba(255, 10, 10, 0.3);
      }
      to {
        border-color: var(--warning-orange);
        box-shadow: 
          0 0 20px rgba(255, 102, 0, 0.7),
          0 0 40px rgba(255, 10, 10, 0.4);
      }
    }

    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-2px); }
      75% { transform: translateX(2px); }
    }

    /* Alert Icon */
    .alert-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      flex-shrink: 0;
    }

    .status-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--safe-green);
      box-shadow: 0 0 6px var(--safe-green);
      transition: all 0.3s ease;
    }

    .status-dot.rona {
      width: 12px;
      height: 12px;
      background: var(--danger-red);
      animation: dotPulse 0.3s ease-in-out infinite alternate;
    }

    .status-dot.recovery {
      background: var(--safe-green);
      animation: dotGlow 0.5s ease-in-out infinite;
    }

    @keyframes dotPulse {
      from {
        box-shadow: 0 0 4px var(--danger-red), 0 0 8px var(--danger-red);
        transform: scale(1);
      }
      to {
        box-shadow: 0 0 8px var(--danger-red), 0 0 16px var(--danger-red), 0 0 24px var(--danger-red);
        transform: scale(1.15);
      }
    }

    @keyframes dotGlow {
      0%, 100% { box-shadow: 0 0 6px var(--safe-green); }
      50% { box-shadow: 0 0 12px var(--safe-green), 0 0 20px var(--safe-green); }
    }

    /* Warning Triangle for RONA */
    .warning-triangle {
      width: 0;
      height: 0;
      border-left: 12px solid transparent;
      border-right: 12px solid transparent;
      border-bottom: 20px solid var(--warning-yellow);
      position: relative;
      animation: trianglePulse 0.4s ease-in-out infinite alternate;
      filter: drop-shadow(0 0 6px var(--warning-yellow));
    }

    .warning-triangle::after {
      content: '!';
      position: absolute;
      top: 5px;
      left: -3px;
      font-size: 11px;
      font-weight: 900;
      color: #000;
    }

    @keyframes trianglePulse {
      from { 
        filter: drop-shadow(0 0 4px var(--warning-yellow));
        transform: scale(1);
      }
      to { 
        filter: drop-shadow(0 0 10px var(--warning-orange));
        transform: scale(1.1);
      }
    }

    /* Countdown Display */
    .countdown-section {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .countdown-number {
      font-family: 'Consolas', 'Monaco', monospace;
      font-size: 22px;
      font-weight: 900;
      color: var(--danger-red);
      text-shadow: var(--text-glow);
      min-width: 28px;
      text-align: center;
      animation: numberPulse 1s ease-in-out infinite;
    }

    .countdown-number.critical {
      color: var(--warning-yellow);
      font-size: 24px;
      animation: numberCritical 0.2s ease-in-out infinite alternate;
    }

    .countdown-number.danger {
      color: #ff0000;
      animation: numberDanger 0.15s linear infinite;
    }

    @keyframes numberPulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.85; }
    }

    @keyframes numberCritical {
      from { 
        transform: scale(1);
        text-shadow: 0 0 8px var(--warning-yellow), 0 0 16px var(--warning-orange);
      }
      to { 
        transform: scale(1.08);
        text-shadow: 0 0 12px var(--warning-yellow), 0 0 24px var(--danger-red);
      }
    }

    @keyframes numberDanger {
      0%, 100% { transform: scale(1); filter: brightness(1); }
      50% { transform: scale(1.05); filter: brightness(1.3); }
    }

    .countdown-unit {
      font-size: 10px;
      font-weight: 600;
      color: rgba(255, 100, 100, 0.9);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    /* Status Label */
    .status-label {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #8a8aaa;
      white-space: nowrap;
    }

    .status-label.rona {
      color: var(--danger-red);
      text-shadow: 0 0 8px rgba(255, 10, 10, 0.8);
      animation: labelBlink 0.5s ease-in-out infinite alternate;
    }

    .status-label.recovery {
      color: var(--safe-green);
      text-shadow: 0 0 8px rgba(0, 255, 136, 0.8);
    }

    @keyframes labelBlink {
      from { opacity: 0.7; }
      to { opacity: 1; }
    }

    /* Progress Bar (fits at bottom of container) */
    .progress-bar {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: rgba(255, 255, 255, 0.1);
      overflow: hidden;
    }

    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--danger-red), var(--warning-orange), var(--warning-yellow));
      transition: width 1s linear;
      box-shadow: 0 0 8px var(--danger-red);
    }

    .progress-fill.critical {
      background: linear-gradient(90deg, var(--warning-yellow), var(--danger-red));
      animation: progressPulse 0.3s ease-in-out infinite alternate;
    }

    @keyframes progressPulse {
      from { box-shadow: 0 0 8px var(--warning-yellow); }
      to { box-shadow: 0 0 16px var(--danger-red); }
    }

    /* Drama Meter - Small dots */
    .drama-meter {
      display: flex;
      gap: 2px;
      margin-left: 4px;
    }

    .drama-dot {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: #333;
      transition: all 0.3s ease;
    }

    .drama-dot.active {
      background: var(--danger-red);
      box-shadow: 0 0 4px var(--danger-red);
    }

    .drama-dot.active.critical {
      background: var(--warning-yellow);
      box-shadow: 0 0 6px var(--warning-yellow);
    }

    /* Recovery checkmark */
    .recovery-check {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: var(--safe-green);
      color: #000;
      font-size: 12px;
      font-weight: 900;
      animation: checkPop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 0 10px var(--safe-green);
    }

    @keyframes checkPop {
      from { transform: scale(0); }
      to { transform: scale(1); }
    }

    /* Scanline effect overlay - subtle */
    .scanlines {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: repeating-linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.03) 0px,
        rgba(0, 0, 0, 0.03) 1px,
        transparent 1px,
        transparent 2px
      );
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .widget-container.rona-active .scanlines {
      opacity: 1;
      animation: scanMove 0.1s linear infinite;
    }

    @keyframes scanMove {
      from { transform: translateY(0); }
      to { transform: translateY(2px); }
    }

    /* Hidden state */
    .hidden {
      display: none !important;
    }
  `;

  constructor() {
    super();
    this._isRona = false;
    this._countdown = 30;
    this._isShaking = false;
    this._dramaMeter = 0;
    this._currentAgentState = 'Unknown';
    this._showRecoveryMessage = false;
    this._countdownInterval = null;
    this._recoveryTimeout = null;
    this._desktop = null;
  }

  connectedCallback() {
    super.connectedCallback();
    this._initializeDesktopSDK();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._cleanup();
  }

  async _initializeDesktopSDK() {
    try {
      // Wait for Desktop SDK to be available
      if (typeof window.WCC === 'undefined' || typeof window.WCC.Desktop === 'undefined') {
        console.log('[RONA Widget] Waiting for Desktop SDK...');
        await this._waitForDesktopSDK();
      }

      this._desktop = window.WCC.Desktop;
      
      // Initialize the Desktop SDK
      await this._desktop.agentContact.init();
      console.log('[RONA Widget] Desktop SDK initialized');

      // Subscribe to agent state changes
      this._desktop.agentStateInfo.addEventListener('updated', (data) => {
        this._handleAgentStateChange(data);
      });

      // Get initial agent state
      const initialState = await this._desktop.agentStateInfo.latestData;
      if (initialState) {
        this._currentAgentState = initialState.subStatus || initialState.status || 'Unknown';
        console.log('[RONA Widget] Initial state:', this._currentAgentState);
      }

    } catch (error) {
      console.error('[RONA Widget] SDK initialization error:', error);
      // Fallback for testing - demo mode
      this._setupDemoMode();
    }
  }

  _waitForDesktopSDK(timeout = 10000) {
    return new Promise((resolve, reject) => {
      const startTime = Date.now();
      const checkSDK = () => {
        if (typeof window.WCC !== 'undefined' && typeof window.WCC.Desktop !== 'undefined') {
          resolve();
        } else if (Date.now() - startTime > timeout) {
          reject(new Error('Desktop SDK not available'));
        } else {
          setTimeout(checkSDK, 100);
        }
      };
      checkSDK();
    });
  }

  _setupDemoMode() {
    console.log('[RONA Widget] Running in demo mode');
    // Add click handler for demo purposes
    this.addEventListener('dblclick', () => {
      if (!this._isRona) {
        this._triggerRona();
      }
    });
  }

  _handleAgentStateChange(data) {
    const newState = data.subStatus || data.status || 'Unknown';
    console.log('[RONA Widget] State changed:', this._currentAgentState, '->', newState);
    
    this._currentAgentState = newState;

    // Check if entering RONA state
    if (newState.toUpperCase() === 'RONA' && !this._isRona) {
      this._triggerRona();
    }
    // Check if leaving RONA state manually
    else if (this._isRona && newState.toUpperCase() !== 'RONA') {
      this._cancelRona();
    }
  }

  _triggerRona() {
    console.log('[RONA Widget] RONA TRIGGERED! Starting countdown...');
    this._isRona = true;
    this._countdown = 30;
    this._dramaMeter = 0;
    this._isShaking = false;

    // Play alert sound if available
    this._playAlertSound();

    // Start countdown
    this._countdownInterval = setInterval(() => {
      this._countdown--;
      
      // Increase drama as time runs out
      this._dramaMeter = Math.floor((30 - this._countdown) / 3);
      
      // Start shaking at 10 seconds
      if (this._countdown <= 10) {
        this._isShaking = true;
      }

      // Play tick sound for last 10 seconds
      if (this._countdown <= 10 && this._countdown > 0) {
        this._playTickSound();
      }

      if (this._countdown <= 0) {
        this._autoRecover();
      }

      this.requestUpdate();
    }, 1000);
  }

  async _autoRecover() {
    console.log('[RONA Widget] Auto-recovering to Available state...');
    this._cleanup();
    
    try {
      // Attempt to set agent state to Available
      if (this._desktop) {
        await this._desktop.agentStateInfo.stateChange({
          state: 'Available',
          auxCodeId: null
        });
        console.log('[RONA Widget] Successfully set state to Available');
      }
    } catch (error) {
      console.error('[RONA Widget] Failed to auto-recover:', error);
    }

    // Show recovery animation
    this._showRecoveryMessage = true;
    this._isRona = false;
    this.requestUpdate();

    // Hide recovery message after 3 seconds
    this._recoveryTimeout = setTimeout(() => {
      this._showRecoveryMessage = false;
      this.requestUpdate();
    }, 3000);
  }

  _cancelRona() {
    console.log('[RONA Widget] RONA cancelled - agent changed state manually');
    this._cleanup();
    this._isRona = false;
    this._showRecoveryMessage = false;
    this.requestUpdate();
  }

  _cleanup() {
    if (this._countdownInterval) {
      clearInterval(this._countdownInterval);
      this._countdownInterval = null;
    }
    if (this._recoveryTimeout) {
      clearTimeout(this._recoveryTimeout);
      this._recoveryTimeout = null;
    }
  }

  _playAlertSound() {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(880, audioContext.currentTime);
      oscillator.frequency.setValueAtTime(440, audioContext.currentTime + 0.1);
      oscillator.frequency.setValueAtTime(880, audioContext.currentTime + 0.2);
      
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.3);
    } catch (e) {
      console.log('[RONA Widget] Audio not available');
    }
  }

  _playTickSound() {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(1200, audioContext.currentTime);
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.05);
    } catch (e) {
      // Audio not available
    }
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
    const progressWidth = this._isRona ? ((30 - this._countdown) / 30) * 100 : 0;
    
    return html`
      <div class="widget-container ${this._isRona ? 'rona-active' : ''} ${this._isShaking ? 'shake' : ''} ${this._showRecoveryMessage ? 'recovery' : ''}">
        
        <!-- Scanlines overlay for RONA state -->
        <div class="scanlines"></div>
        
        <!-- Icon Section -->
        <div class="alert-icon">
          ${this._isRona ? html`
            <div class="warning-triangle"></div>
          ` : this._showRecoveryMessage ? html`
            <div class="recovery-check">✓</div>
          ` : html`
            <div class="status-dot"></div>
          `}
        </div>

        <!-- Content Section -->
        ${this._isRona ? html`
          <!-- RONA Active: Show countdown -->
          <div class="countdown-section">
            <span class="countdown-number ${this._getCountdownClass()}">${this._countdown}</span>
            <span class="countdown-unit">sec</span>
          </div>
          <span class="status-label rona">RONA</span>
          
          <!-- Drama meter dots -->
          <div class="drama-meter">
            ${[...Array(5)].map((_, i) => html`
              <div class="drama-dot ${i < Math.ceil(this._dramaMeter / 2) ? 'active' : ''} ${this._countdown <= 10 ? 'critical' : ''}"></div>
            `)}
          </div>
        ` : this._showRecoveryMessage ? html`
          <!-- Recovery: Show success -->
          <span class="status-label recovery">RECOVERED!</span>
        ` : html`
          <!-- Normal: Show current state -->
          <span class="status-label">${this._currentAgentState}</span>
        `}

        <!-- Progress bar at bottom -->
        ${this._isRona ? html`
          <div class="progress-bar">
            <div class="progress-fill ${this._countdown <= 10 ? 'critical' : ''}" style="width: ${progressWidth}%"></div>
          </div>
        ` : ''}
      </div>
    `;
  }
}

customElements.define('rona-countdown-widget', RonaCountdownWidget);

export default RonaCountdownWidget;

import { LitElement, html, css } from 'lit';
import { Desktop } from '@wxcc-desktop/sdk';

class RonaCountdownWidget extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      height: 100%;
      max-height: 48px;
    }

    /* Main container - fits within 48px header */
    .widget-container {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 4px 12px;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      border-radius: 6px;
      border: 1px solid #3a3a5c;
      height: 48px;
      max-height: 48px;
      box-sizing: border-box;
      color: white;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
    }

    .widget-container.rona-active {
      background: linear-gradient(135deg, #4a0a0a 0%, #2a0505 100%);
      border-color: #ff0a0a;
      box-shadow: 0 0 12px rgba(255, 10, 10, 0.5);
      animation: containerPulse 0.5s ease-in-out infinite alternate;
    }

    .widget-container.recovery {
      background: linear-gradient(135deg, #0a2a0a 0%, #051a05 100%);
      border-color: #00ff88;
      box-shadow: 0 0 12px rgba(0, 255, 136, 0.5);
    }

    @keyframes containerPulse {
      from { border-color: #ff0a0a; box-shadow: 0 0 12px rgba(255, 10, 10, 0.5); }
      to { border-color: #ff6600; box-shadow: 0 0 18px rgba(255, 102, 0, 0.6); }
    }

    /* Status dot */
    .status-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #00bceb;
      box-shadow: 0 0 6px #00bceb;
      flex-shrink: 0;
    }

    .status-dot.rona {
      background: #ff0a0a;
      animation: dotPulse 0.3s ease-in-out infinite alternate;
    }

    .status-dot.recovery {
      background: #00ff88;
      box-shadow: 0 0 8px #00ff88;
    }

    @keyframes dotPulse {
      from { box-shadow: 0 0 4px #ff0a0a; transform: scale(1); }
      to { box-shadow: 0 0 10px #ff0a0a; transform: scale(1.2); }
    }

    /* Warning triangle for RONA */
    .warning-icon {
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 14px solid #ffff00;
      position: relative;
      flex-shrink: 0;
      filter: drop-shadow(0 0 4px #ffff00);
      animation: trianglePulse 0.4s ease-in-out infinite alternate;
    }

    .warning-icon::after {
      content: '!';
      position: absolute;
      top: 2px;
      left: -3px;
      font-size: 9px;
      font-weight: 900;
      color: #000;
    }

    @keyframes trianglePulse {
      from { filter: drop-shadow(0 0 4px #ffff00); }
      to { filter: drop-shadow(0 0 8px #ff6600); }
    }

    /* Recovery checkmark */
    .recovery-check {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #00ff88;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      font-weight: 900;
      color: #000;
      flex-shrink: 0;
      box-shadow: 0 0 8px #00ff88;
    }

    /* Countdown number */
    .countdown-number {
      font-family: 'Consolas', 'Monaco', monospace;
      font-size: 18px;
      font-weight: 900;
      color: #ffff00;
      text-shadow: 0 0 8px #ffff00;
      min-width: 24px;
      text-align: center;
    }

    .countdown-number.critical {
      color: #ff6600;
      animation: numberPulse 0.3s ease-in-out infinite alternate;
    }

    .countdown-number.danger {
      color: #ff0a0a;
      animation: numberPulse 0.15s linear infinite;
    }

    @keyframes numberPulse {
      from { transform: scale(1); }
      to { transform: scale(1.1); }
    }

    .countdown-unit {
      font-size: 10px;
      color: rgba(255, 255, 0, 0.8);
      margin-left: -4px;
    }

    /* Status label */
    .status-label {
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #8a8aaa;
      white-space: nowrap;
    }

    .status-label.rona {
      color: #ff0a0a;
      text-shadow: 0 0 6px rgba(255, 10, 10, 0.6);
    }

    .status-label.recovery {
      color: #00ff88;
      text-shadow: 0 0 6px rgba(0, 255, 136, 0.6);
    }

    /* Drama meter dots */
    .drama-meter {
      display: flex;
      gap: 2px;
      margin-left: auto;
    }

    .drama-dot {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: #333;
      transition: all 0.3s ease;
    }

    .drama-dot.active {
      background: #ffff00;
      box-shadow: 0 0 4px #ffff00;
    }

    .drama-dot.critical {
      background: #ff0a0a;
      box-shadow: 0 0 4px #ff0a0a;
    }

    /* Progress bar at bottom */
    .progress-bar {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: rgba(0, 0, 0, 0.3);
    }

    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #ffff00, #ff6600);
      transition: width 1s linear;
    }

    .progress-fill.critical {
      background: linear-gradient(90deg, #ff6600, #ff0a0a);
    }

    /* Scanlines effect */
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
    }

    .widget-container.rona-active .scanlines {
      opacity: 1;
    }
  `;

  static properties = {
    _isRona: { type: Boolean },
    _countdown: { type: Number },
    _dramaMeter: { type: Number },
    _showRecoveryMessage: { type: Boolean },
    _currentAgentState: { type: String },
    _isDemo: { type: Boolean },
  };

  constructor() {
    super();
    this._isRona = false;
    this._countdown = 0;
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
  }

  async _initSDK() {
    try {
      this._sdkLogger = Desktop.logger.createLogger('rona-countdown-widget');

      await Desktop.config.init({
        widgetName: 'rona-countdown-widget',
        widgetProvider: 'bucher-suter'
      });
      this._sdkLogger.info('WxCC Desktop SDK initialized successfully');

      // Get initial agent state - try multiple properties
      const latestData = Desktop.agentStateInfo.latestData;
      this._sdkLogger.info('Initial latestData: ' + JSON.stringify(latestData));
      
      const initialState = latestData?.subStatus || latestData?.status || latestData?.state || 'Available';
      this._currentAgentState = initialState;
      this._sdkLogger.info(`Initial agent state: ${initialState}`);

      if (this._isRonaState(initialState)) {
        this._triggerRona();
      }

      // Listen for state changes - the event data is an array of changes
      Desktop.agentStateInfo.addEventListener('updated', (event) => {
        this._sdkLogger.info('State update event received: ' + JSON.stringify(event));
        
        // Event is an array of change objects like [{name: "subStatus", value: "Idle"}, {name: "idleCode", value: {name: "RONA"}}]
        let newState = null;
        let idleCodeName = null;
        
        if (Array.isArray(event)) {
          // Find the subStatus change
          const stateChange = event.find(item => item.name === 'subStatus' || item.name === 'status' || item.name === 'state');
          if (stateChange) {
            newState = stateChange.value;
          }
          // Find the idleCode change - this tells us if it's RONA
          const idleCodeChange = event.find(item => item.name === 'idleCode');
          if (idleCodeChange?.value?.name) {
            idleCodeName = idleCodeChange.value.name;
          }
        } else if (event?.data && Array.isArray(event.data)) {
          const stateChange = event.data.find(item => item.name === 'subStatus' || item.name === 'status' || item.name === 'state');
          if (stateChange) {
            newState = stateChange.value;
          }
          const idleCodeChange = event.data.find(item => item.name === 'idleCode');
          if (idleCodeChange?.value?.name) {
            idleCodeName = idleCodeChange.value.name;
          }
        } else {
          // Fallback to old parsing method
          const data = event?.data || event;
          newState = data?.subStatus || data?.status || data?.state;
          idleCodeName = data?.idleCode?.name;
        }
        
        // Use idleCode name if available, otherwise use state
        const displayState = idleCodeName || newState;
        
        if (displayState) {
          this._currentAgentState = displayState;
          this._sdkLogger.info(`Agent state changed to: ${displayState} (idleCode: ${idleCodeName}, subStatus: ${newState})`);

          if (this._isRonaState(displayState)) {
            this._triggerRona();
          } else if (this._isRona) {
            this._cancelRona();
          }

          this.requestUpdate();
        }
      });

      // Also try eAgentStateChange event as backup
      Desktop.agentStateInfo.addEventListener('eAgentStateChange', (event) => {
        this._sdkLogger.info('eAgentStateChange event received: ' + JSON.stringify(event));
        
        let newState = null;
        let idleCodeName = null;
        
        if (Array.isArray(event)) {
          const stateChange = event.find(item => item.name === 'subStatus' || item.name === 'status' || item.name === 'state');
          if (stateChange) {
            newState = stateChange.value;
          }
          const idleCodeChange = event.find(item => item.name === 'idleCode');
          if (idleCodeChange?.value?.name) {
            idleCodeName = idleCodeChange.value.name;
          }
        } else if (event?.data && Array.isArray(event.data)) {
          const stateChange = event.data.find(item => item.name === 'subStatus' || item.name === 'status' || item.name === 'state');
          if (stateChange) {
            newState = stateChange.value;
          }
          const idleCodeChange = event.data.find(item => item.name === 'idleCode');
          if (idleCodeChange?.value?.name) {
            idleCodeName = idleCodeChange.value.name;
          }
        } else {
          const data = event?.data || event;
          newState = data?.subStatus || data?.status || data?.state;
          idleCodeName = data?.idleCode?.name;
        }
        
        const displayState = idleCodeName || newState;
        
        if (displayState) {
          this._currentAgentState = displayState;
          this._sdkLogger.info(`Agent state changed (eAgentStateChange) to: ${displayState}`);

          if (this._isRonaState(displayState)) {
            this._triggerRona();
          } else if (this._isRona) {
            this._cancelRona();
          }

          this.requestUpdate();
        }
      });

      this.requestUpdate();

    } catch (err) {
      this._sdkLogger?.error(`SDK initialization failed: ${err.message}`);
      console.error('[RONA Widget] SDK error:', err);
      this._enterDemoMode();
    }

    // Fallback to demo if no SDK activity after 10 seconds
    setTimeout(() => {
      if (this._currentAgentState === 'Loading...') {
        this._enterDemoMode();
      }
    }, 10000);
  }

  _enterDemoMode() {
    this._isDemo = true;
    this._currentAgentState = 'Demo Mode';
    this.requestUpdate();
    console.warn('[RONA Widget] Entered demo mode - SDK not detected');
  }

  _isRonaState(state) {
    if (!state) return false;
    const upper = String(state).toUpperCase();
    // Check for RONA, NotResponding, and Idle variations that might indicate RONA
    return upper === 'RONA' || upper === 'NOTRESPONDING' || upper === 'NOT_RESPONDING' || upper === 'NOT RESPONDING';
  }

  _triggerRona() {
    if (this._isRona) return;

    this._isRona = true;
    this._countdown = 30;
    this._dramaMeter = 0;
    this._showRecoveryMessage = false;

    this._playAlertSound();

    this._countdownInterval = setInterval(() => {
      this._countdown--;
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
      // The SDK stateChange requires specific format
      // auxCodeId '0' is typically used for Available state
      this._sdkLogger?.info('Attempting auto-recovery to Available state...');
      
      await Desktop.agentStateInfo.stateChange({
        state: 'Available',
        auxCodeId: '0'
      });
      
      this._sdkLogger?.info('Successfully auto-recovered from RONA to Available');
    } catch (err) {
      this._sdkLogger?.error(`Auto-recovery failed: ${err.message}`);
      console.error('[RONA Widget] Recovery error:', err);
      
      // If state change fails, just reset the widget UI
      // The agent will need to manually change state
      this._sdkLogger?.info('Agent will need to manually change state to Available');
    }

    this._isRona = false;
    this._showRecoveryMessage = true;

    setTimeout(() => {
      this._showRecoveryMessage = false;
      this.requestUpdate();
    }, 3000);

    this.requestUpdate();
  }

  _cancelRona() {
    if (this._countdownInterval) {
      clearInterval(this._countdownInterval);
      this._countdownInterval = null;
    }
    this._isRona = false;
    this._dramaMeter = 0;
    this._showRecoveryMessage = false;
    this.requestUpdate();
  }

  _playAlertSound() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.setValueAtTime(1200, ctx.currentTime);
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.05);
    } catch (e) {}
  }

  _playTickSound() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.08);
    } catch (e) {}
  }

  _getCountdownClass() {
    if (this._countdown <= 5) return 'danger';
    if (this._countdown <= 10) return 'critical';
    return '';
  }

  render() {
    const progress = this._isRona ? ((30 - this._countdown) / 30) * 100 : 0;

    return html`
      <div class="widget-container 
        ${this._isRona ? 'rona-active' : ''} 
        ${this._showRecoveryMessage ? 'recovery' : ''}">

        <div class="scanlines"></div>

        <!-- Icon -->
        ${this._isRona 
          ? html`<div class="warning-icon"></div>`
          : this._showRecoveryMessage 
            ? html`<div class="recovery-check">✓</div>`
            : html`<div class="status-dot ${this._showRecoveryMessage ? 'recovery' : ''}"></div>`}

        <!-- Content -->
        ${this._isRona ? html`
          <span class="countdown-number ${this._getCountdownClass()}">${this._countdown}</span>
          <span class="countdown-unit">s</span>
          <span class="status-label rona">RONA</span>
          <div class="drama-meter">
            ${[...Array(5)].map((_, i) => html`
              <div class="drama-dot 
                ${i < Math.ceil(this._dramaMeter / 2) ? 'active' : ''} 
                ${this._countdown <= 10 ? 'critical' : ''}"></div>
            `)}
          </div>
        ` : this._showRecoveryMessage ? html`
          <span class="status-label recovery">RECOVERED!</span>
        ` : html`
          <span class="status-label">${this._currentAgentState}</span>
        `}

        <!-- Progress bar -->
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
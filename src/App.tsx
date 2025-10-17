import React, { useState } from 'react';
import { Mic, Settings, Copy, Circle, Minimize2, Maximize2, Moon, Sun } from 'lucide-react';

const App = () => {
  const [selectedScreen, setSelectedScreen] = useState<'main' | 'settings'>('main');
  const [selectedVariation, setSelectedVariation] = useState(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-slate-900 tracking-tight">QuickSpeak Design System</h1>
              <p className="text-slate-600 mt-1">Modern macOS app design guidelines</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setSelectedScreen('main')}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                  selectedScreen === 'main'
                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/25'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                Main Screen
              </button>
              <button
                onClick={() => setSelectedScreen('settings')}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                  selectedScreen === 'settings'
                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/25'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                Settings
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-12">
        {selectedScreen === 'main' ? <MainScreenDesigns selectedVariation={selectedVariation} setSelectedVariation={setSelectedVariation} /> : <SettingsDesigns selectedVariation={selectedVariation} setSelectedVariation={setSelectedVariation} />}
      </main>
    </div>
  );
};

const MainScreenDesigns = ({ selectedVariation, setSelectedVariation }: { selectedVariation: number; setSelectedVariation: (v: number) => void }) => {
  return (
    <div className="space-y-12">
      {/* Variation Selector */}
      <div className="flex gap-3 justify-center">
        {[1, 2, 3].map((v) => (
          <button
            key={v}
            onClick={() => setSelectedVariation(v)}
            className={`px-5 py-2 rounded-lg font-medium transition-all ${
              selectedVariation === v
                ? 'bg-slate-900 text-white'
                : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            Variation {v}
          </button>
        ))}
      </div>

      {/* Variation 1: Minimal & Clean */}
      {selectedVariation === 1 && (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">Variation 1: Minimal & Clean</h2>
            <p className="text-slate-600">Linear-inspired with subtle gradients and clean typography</p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200/50 overflow-hidden max-w-3xl mx-auto border border-slate-200">
            {/* macOS Window Controls */}
            <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200 px-4 py-3 flex items-center">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-sm font-medium text-slate-600">QuickSpeak</span>
              </div>
            </div>

            {/* App Content */}
            <div className="p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Mic className="w-5 h-5 text-white" />
                  </div>
                  <h1 className="text-2xl font-semibold text-slate-900">QuickSpeak</h1>
                </div>
                <button className="w-10 h-10 rounded-lg hover:bg-slate-100 flex items-center justify-center transition-colors">
                  <Settings className="w-5 h-5 text-slate-600" />
                </button>
              </div>

              {/* Status Badge */}
              <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-sm font-medium text-emerald-700">Ready to record</span>
              </div>

              {/* Record Button */}
              <button className="w-full mb-6 py-4 rounded-xl bg-gradient-to-r from-slate-900 to-slate-700 text-white font-medium text-lg hover:from-slate-800 hover:to-slate-600 transition-all shadow-lg shadow-slate-900/20 hover:shadow-xl hover:shadow-slate-900/30">
                Start Recording
              </button>

              {/* Audio Level */}
              <div className="mb-8 p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-slate-700">Audio Level</span>
                  <span className="text-xs text-slate-500">-12 dB</span>
                </div>
                <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                </div>
              </div>

              {/* Transcription Area */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-slate-700">Transcription</h3>
                  <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium transition-colors">
                    <Copy className="w-4 h-4" />
                    Copy
                  </button>
                </div>
                <div className="min-h-[200px] p-4 rounded-xl bg-white border border-slate-200 text-slate-600 text-sm leading-relaxed">
                  Your transcription will appear here...
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Variation 2: Arc-inspired with Bold Gradients */}
      {selectedVariation === 2 && (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">Variation 2: Arc-Inspired</h2>
            <p className="text-slate-600">Bold gradients and vibrant colors</p>
          </div>

          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl shadow-slate-900/50 overflow-hidden max-w-3xl mx-auto">
            {/* macOS Window Controls */}
            <div className="bg-slate-800/50 backdrop-blur-xl border-b border-white/10 px-4 py-3 flex items-center">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-sm font-medium text-slate-300">QuickSpeak</span>
              </div>
            </div>

            {/* App Content */}
            <div className="p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/50">
                    <Mic className="w-6 h-6 text-white" />
                  </div>
                  <h1 className="text-2xl font-semibold text-white">QuickSpeak</h1>
                </div>
                <button className="w-10 h-10 rounded-xl hover:bg-white/10 flex items-center justify-center transition-colors border border-white/10">
                  <Settings className="w-5 h-5 text-slate-300" />
                </button>
              </div>

              {/* Status Badge */}
              <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 backdrop-blur-xl">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50"></div>
                <span className="text-sm font-medium text-emerald-300">Ready to record</span>
              </div>

              {/* Record Button */}
              <button className="w-full mb-6 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all shadow-xl shadow-blue-500/30 hover:scale-[1.02]">
                Start Recording
              </button>

              {/* Audio Level */}
              <div className="mb-8 p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-slate-200">Audio Level</span>
                  <span className="text-xs text-slate-400">-12 dB</span>
                </div>
                <div className="h-2.5 bg-slate-700/50 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full shadow-lg shadow-blue-500/50"></div>
                </div>
              </div>

              {/* Transcription Area */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-slate-200">Transcription</h3>
                  <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 text-sm font-medium transition-colors border border-white/10">
                    <Copy className="w-4 h-4" />
                    Copy
                  </button>
                </div>
                <div className="min-h-[200px] p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-slate-300 text-sm leading-relaxed">
                  Your transcription will appear here...
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Variation 3: Ultra Minimal */}
      {selectedVariation === 3 && (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">Variation 3: Ultra Minimal</h2>
            <p className="text-slate-600">Maximum simplicity and focus</p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200/50 overflow-hidden max-w-3xl mx-auto border border-slate-100">
            {/* macOS Window Controls */}
            <div className="bg-white border-b border-slate-100 px-4 py-3 flex items-center">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-sm font-medium text-slate-500">QuickSpeak</span>
              </div>
            </div>

            {/* App Content */}
            <div className="p-12">
              {/* Header */}
              <div className="flex items-center justify-between mb-12">
                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">QuickSpeak</h1>
                <button className="w-9 h-9 rounded-lg hover:bg-slate-100 flex items-center justify-center transition-colors">
                  <Settings className="w-5 h-5 text-slate-400" />
                </button>
              </div>

              {/* Status */}
              <div className="mb-8 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="text-slate-600 font-medium">Ready</span>
              </div>

              {/* Record Button */}
              <button className="w-full mb-12 py-5 rounded-2xl bg-slate-900 text-white font-medium text-base hover:bg-slate-800 transition-all">
                Start Recording
              </button>

              {/* Audio Level */}
              <div className="mb-12">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3 block">Audio Level</span>
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-slate-900 rounded-full"></div>
                </div>
              </div>

              {/* Transcription Area */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Transcription</span>
                  <button className="flex items-center gap-2 text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors">
                    <Copy className="w-4 h-4" />
                    Copy
                  </button>
                </div>
                <div className="min-h-[220px] p-6 rounded-xl border border-slate-200 text-slate-400 text-sm leading-relaxed">
                  Your transcription will appear here...
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Design Notes */}
      <div className="mt-16 p-8 bg-white rounded-xl border border-slate-200 max-w-3xl mx-auto">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Design Guidelines</h3>
        <div className="space-y-4 text-sm text-slate-600">
          <div>
            <h4 className="font-medium text-slate-900 mb-1">Typography</h4>
            <p>Use system fonts with clear hierarchy. Headings: 24-32px semi-bold, Body: 14-16px regular, Labels: 12-14px medium</p>
          </div>
          <div>
            <h4 className="font-medium text-slate-900 mb-1">Spacing</h4>
            <p>8px base unit. Use multiples (8, 16, 24, 32, 48) for consistent rhythm</p>
          </div>
          <div>
            <h4 className="font-medium text-slate-900 mb-1">Colors</h4>
            <p>Variation 1: Slate grays with blue accents. Variation 2: Dark mode with vibrant gradients. Variation 3: Pure black & white</p>
          </div>
          <div>
            <h4 className="font-medium text-slate-900 mb-1">Interactions</h4>
            <p>Subtle hover states, smooth transitions (200-300ms), micro-animations for feedback</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SettingsDesigns = ({ selectedVariation, setSelectedVariation }: { selectedVariation: number; setSelectedVariation: (v: number) => void }) => {
  return (
    <div className="space-y-12">
      {/* Variation Selector */}
      <div className="flex gap-3 justify-center">
        {[1, 2, 3].map((v) => (
          <button
            key={v}
            onClick={() => setSelectedVariation(v)}
            className={`px-5 py-2 rounded-lg font-medium transition-all ${
              selectedVariation === v
                ? 'bg-slate-900 text-white'
                : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            Variation {v}
          </button>
        ))}
      </div>

      {/* Variation 1: Minimal Settings */}
      {selectedVariation === 1 && (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">Variation 1: Minimal Settings</h2>
            <p className="text-slate-600">Clean and organized settings panel</p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200/50 overflow-hidden max-w-3xl mx-auto border border-slate-200">
            {/* macOS Window Controls */}
            <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200 px-4 py-3 flex items-center">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-sm font-medium text-slate-600">Settings</span>
              </div>
            </div>

            {/* Settings Content */}
            <div className="p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-semibold text-slate-900">Settings</h1>
                <button className="text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors">
                  Done
                </button>
              </div>

              {/* Settings Sections */}
              <div className="space-y-6">
                {/* Model Section */}
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-sm font-medium text-slate-900 mb-1">Transcription Model</h3>
                      <p className="text-xs text-slate-500">OpenAI Whisper running locally</p>
                    </div>
                  </div>
                  <div className="mt-4 p-3 rounded-lg bg-white border border-slate-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700">Turbo Model</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 font-medium">Active</span>
                    </div>
                  </div>
                </div>

                {/* Appearance Section */}
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="text-sm font-medium text-slate-900 mb-4">Appearance</h3>
                  <div className="flex gap-3">
                    <button className="flex-1 p-4 rounded-lg bg-white border-2 border-slate-900 hover:border-slate-700 transition-colors">
                      <Sun className="w-5 h-5 text-slate-900 mb-2 mx-auto" />
                      <span className="text-sm font-medium text-slate-900 block">Light</span>
                    </button>
                    <button className="flex-1 p-4 rounded-lg bg-slate-800 border-2 border-transparent hover:border-slate-600 transition-colors">
                      <Moon className="w-5 h-5 text-white mb-2 mx-auto" />
                      <span className="text-sm font-medium text-white block">Dark</span>
                    </button>
                  </div>
                </div>

                {/* System Info Section */}
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="text-sm font-medium text-slate-900 mb-4">System Information</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Processing</span>
                      <span className="font-medium text-slate-900">Local</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Model Type</span>
                      <span className="font-medium text-slate-900">Whisper Turbo</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Version</span>
                      <span className="font-medium text-slate-900">1.0.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Variation 2: Arc-inspired Settings */}
      {selectedVariation === 2 && (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">Variation 2: Arc-Inspired Settings</h2>
            <p className="text-slate-600">Bold and vibrant settings interface</p>
          </div>

          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl shadow-slate-900/50 overflow-hidden max-w-3xl mx-auto">
            {/* macOS Window Controls */}
            <div className="bg-slate-800/50 backdrop-blur-xl border-b border-white/10 px-4 py-3 flex items-center">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-sm font-medium text-slate-300">Settings</span>
              </div>
            </div>

            {/* Settings Content */}
            <div className="p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-semibold text-white">Settings</h1>
                <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors border border-white/10">
                  Done
                </button>
              </div>

              {/* Settings Sections */}
              <div className="space-y-6">
                {/* Model Section */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-sm font-medium text-white mb-1">Transcription Model</h3>
                      <p className="text-xs text-slate-400">OpenAI Whisper running locally</p>
                    </div>
                  </div>
                  <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-600/20 border border-cyan-500/30">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-white">Turbo Model</span>
                      <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/30 text-emerald-300 font-medium border border-emerald-500/50">Active</span>
                    </div>
                  </div>
                </div>

                {/* Appearance Section */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10">
                  <h3 className="text-sm font-medium text-white mb-4">Appearance</h3>
                  <div className="flex gap-3">
                    <button className="flex-1 p-4 rounded-xl bg-white/5 border-2 border-white/10 hover:border-white/30 transition-colors">
                      <Sun className="w-5 h-5 text-slate-300 mb-2 mx-auto" />
                      <span className="text-sm font-medium text-slate-300 block">Light</span>
                    </button>
                    <button className="flex-1 p-4 rounded-xl bg-gradient-to-br from-cyan-500/30 via-blue-500/30 to-purple-600/30 border-2 border-blue-500/50 hover:border-blue-500/70 transition-colors">
                      <Moon className="w-5 h-5 text-white mb-2 mx-auto" />
                      <span className="text-sm font-medium text-white block">Dark</span>
                    </button>
                  </div>
                </div>

                {/* System Info Section */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10">
                  <h3 className="text-sm font-medium text-white mb-4">System Information</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Processing</span>
                      <span className="font-medium text-white">Local</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Model Type</span>
                      <span className="font-medium text-white">Whisper Turbo</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Version</span>
                      <span className="font-medium text-white">1.0.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Variation 3: Ultra Minimal Settings */}
      {selectedVariation === 3 && (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">Variation 3: Ultra Minimal Settings</h2>
            <p className="text-slate-600">Maximum simplicity and clarity</p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200/50 overflow-hidden max-w-3xl mx-auto border border-slate-100">
            {/* macOS Window Controls */}
            <div className="bg-white border-b border-slate-100 px-4 py-3 flex items-center">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-sm font-medium text-slate-500">Settings</span>
              </div>
            </div>

            {/* Settings Content */}
            <div className="p-12">
              {/* Header */}
              <div className="flex items-center justify-between mb-12 pb-6 border-b border-slate-100">
                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Settings</h1>
                <button className="text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors">
                  Done
                </button>
              </div>

              {/* Settings Sections */}
              <div className="space-y-10">
                {/* Model Section */}
                <div>
                  <h3 className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-4">Model</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between py-3">
                      <span className="text-sm text-slate-600">Name</span>
                      <span className="text-sm font-medium text-slate-900">Whisper Turbo</span>
                    </div>
                    <div className="flex justify-between py-3">
                      <span className="text-sm text-slate-600">Processing</span>
                      <span className="text-sm font-medium text-slate-900">Local</span>
                    </div>
                    <div className="flex justify-between py-3">
                      <span className="text-sm text-slate-600">Status</span>
                      <span className="text-sm font-medium text-emerald-600">Active</span>
                    </div>
                  </div>
                </div>

                {/* Appearance Section */}
                <div>
                  <h3 className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-4">Appearance</h3>
                  <div className="flex gap-4">
                    <button className="flex-1 py-3 px-4 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors">
                      Light
                    </button>
                    <button className="flex-1 py-3 px-4 rounded-xl border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-50 transition-colors">
                      Dark
                    </button>
                  </div>
                </div>

                {/* About Section */}
                <div>
                  <h3 className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-4">About</h3>
                  <div className="flex justify-between py-3">
                    <span className="text-sm text-slate-600">Version</span>
                    <span className="text-sm font-medium text-slate-900">1.0.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Design Notes for Settings */}
      <div className="mt-16 p-8 bg-white rounded-xl border border-slate-200 max-w-3xl mx-auto">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Settings Design Guidelines</h3>
        <div className="space-y-4 text-sm text-slate-600">
          <div>
            <h4 className="font-medium text-slate-900 mb-1">Organization</h4>
            <p>Group related settings together. Use clear section headers with proper hierarchy</p>
          </div>
          <div>
            <h4 className="font-medium text-slate-900 mb-1">Information Display</h4>
            <p>Show current model status clearly. Use badges for active states. Keep technical details minimal but accessible</p>
          </div>
          <div>
            <h4 className="font-medium text-slate-900 mb-1">Theme Switching</h4>
            <p>Provide visual preview of light/dark modes. Make the active selection obvious</p>
          </div>
          <div>
            <h4 className="font-medium text-slate-900 mb-1">Simplicity</h4>
            <p>Only show essential settings. Avoid overwhelming users with too many options</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
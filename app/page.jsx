'use client';

import InstallButtonsGroup from './components/InstallButtonsGroup';

export default function Page() {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Type / and instantly insert your saved text snippets. No lag, no waiting.',
    },
    {
      icon: '🔒',
      title: 'Privacy First',
      description: 'Your snippets stay on your device. No cloud storage, no tracking and no account needed.',
    },
    {
      icon: '🎨',
      title: 'Fully Customizable',
      description: 'Create unlimited slash commands for any text snippets you need.',
    },
    {
      icon: '🌐',
      title: 'Works Everywhere',
      description: 'Use your text commands on any website - GitHub, Slack, Twitter, and more.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-zinc-950 dark:via-neutral-900 dark:to-stone-950 text-gray-900 dark:text-white overflow-hidden">
      {/* Warm ambient background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-200/30 dark:bg-red-900/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-orange-200/30 dark:bg-orange-900/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-amber-200/20 dark:bg-amber-900/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative">
        {/* Hero Section */}
        <div className="container mx-auto px-6 pt-20 pb-32">
          <div className="max-w-7xl mx-auto">
            {/* Announcement Badge */}
            <a href="http://github.com/slasher-app/slasher">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/50 backdrop-blur-sm mb-8 hover:border-red-500/50 transition-colors cursor-pointer group">
                <span className="text-sm text-gray-700 dark:text-zinc-300">
                  🚀 Slasher is currently in Alpha - There might be bugs!
                </span>
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-zinc-400 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </a>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div>
                {/* Main Heading */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 text-transparent bg-clip-text animate-gradient">
                    Slash commands
                  </span>
                  <br />
                  everywhere!
                </h1>

                {/* Subheading */}
                <p className="text-xl md:text-2xl text-gray-600 dark:text-zinc-400 mb-4 max-w-2xl leading-relaxed">
                  A powerful <span className="text-gray-900 dark:text-white font-semibold">web extension</span> that
                  lets you create custom slash commands to insert text snippets anywhere.
                </p>

                <p className="text-lg text-gray-500 dark:text-zinc-500 mb-8 max-w-2xl">
                  Type <code className="px-2 py-1 bg-gray-200 dark:bg-zinc-800 rounded text-red-600 dark:text-red-400 font-mono">/</code>
                  {' '}to instantly insert emails, addresses, links, code snippets, or any text you use frequently.
                  Works on GitHub, Slack, Twitter, Notion, and (almost) everywhere else.
                </p>

                {/* CTA Buttons */}
                <div className="mb-8">
                  <InstallButtonsGroup />
                </div>

                <p className="text-sm text-gray-500 dark:text-zinc-500">
                  ✓ Free forever &nbsp;•&nbsp; ✓ No account needed &nbsp;•&nbsp; ✓ Privacy-first
                </p>
              </div>

              {/* Right Column - Command Demo */}
              <div className="relative">
                <div className="relative bg-white/80 dark:bg-zinc-900/50 backdrop-blur-sm border border-gray-300 dark:border-zinc-800 rounded-3xl p-8">
                  {/* Command Demo */}
                  <div className="space-y-4">
                    <div className="bg-gray-50 dark:bg-zinc-950 rounded-xl p-4 border border-gray-300 dark:border-zinc-800">
                      <div className="font-mono text-lg text-gray-900 dark:text-white mb-4">
                        <span className="text-red-500">/</span>mail
                      </div>
                      <div className="h-px bg-gray-300 dark:bg-zinc-800 mb-4" />
                      <div className="text-gray-700 dark:text-zinc-300">
                        john.doe@example.com
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-zinc-950 rounded-xl p-4 border border-gray-300 dark:border-zinc-800">
                      <div className="font-mono text-lg text-gray-900 dark:text-white mb-4">
                        <span className="text-red-500">/</span>note
                      </div>
                      <div className="h-px bg-gray-300 dark:bg-zinc-800 mb-4" />
                      <div className="text-gray-700 dark:text-zinc-300">
                        {"> [!note]"}<br />
                        {"> "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="container mx-auto px-6 pb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why users love{' '}
              <span className="bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">
                Slasher
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="bg-white/80 dark:bg-zinc-900/50 backdrop-blur-sm border border-gray-300 dark:border-zinc-800 rounded-2xl p-6 hover:border-red-500/50 transition-all hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-zinc-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Camera, Mic, MonitorSmartphone, Images, Upload, PhoneCall, MapPin, ShieldAlert, Route } from 'lucide-react';

const features = [
  {
    group: 'Remote Monitoring',
    items: [
      { icon: Camera, title: 'Remote Camera Access', desc: 'Access live camera streams from anywhere, anytime. See the world around your device in real-time with our intuitive interface.' },
      { icon: Mic, title: 'One-Way Audio Streaming', desc: 'Immerse yourself in real-time audio. Hear conversations and ambient sounds from any remote location instantly.' },
      { icon: MonitorSmartphone, title: 'Live Screen Sharing & Control', desc: "Watch and interact with your device's screen in real-time. Full remote access for troubleshooting or guidance." },
    ],
  },
  {
    group: 'Content Access',
    items: [
      { icon: Images, title: 'Photo Gallery Access', desc: 'Explore and relive your photo and video gallery remotely. Your cherished memories at your fingertips, anytime, anywhere.' },
      { icon: Upload, title: 'Real-Time File Transfer', desc: 'Effortlessly share and explore files in real-time. Transfer photos, videos, and documents with ease.' },
      { icon: PhoneCall, title: 'Call Recording', desc: 'Never miss important details. Record and review phone calls effortlessly to capture crucial information.' },
    ],
  },
  {
    group: 'Location Services',
    items: [
      { icon: MapPin, title: 'Live Location Tracking', desc: 'Stay connected with real-time GPS tracking. Share journeys with loved ones and ensure safety wherever life takes you.' },
      { icon: ShieldAlert, title: 'Geofencing & Alerts', desc: 'Set virtual boundaries and receive instant alerts when devices move beyond predefined areas.' },
      { icon: Route, title: 'Route History', desc: 'Track past movements and journeys. Get complete visibility of location activities over time.' },
    ],
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Powerful Features at Your Fingertips</h2>
          <p className="mt-3 text-zinc-300 max-w-2xl mx-auto">A complete toolkit for remote monitoring, tuned for privacy and control.</p>
        </div>

        <div className="mt-12 grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.flatMap((group) => group.items).map((f, idx) => (
            <div key={idx} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:bg-white/10 transition shadow-lg shadow-black/30">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-zinc-900 border border-white/10 text-cyan-400">
                  <f.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-zinc-300">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

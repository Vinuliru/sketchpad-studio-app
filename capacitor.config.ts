import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.652e112384d744ef85e33b222c59a887',
  appName: 'WineSense - Wine Logistics',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    url: 'https://652e1123-84d7-44ef-85e3-3b222c59a887.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#4a5d23',
      androidSplashResourceName: 'splash',
      showSpinner: false,
    },
  },
};

export default config;
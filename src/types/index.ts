export interface Artist {
  id: string;
  name: string;
  email: string;
  profileImage: string;
  socialLinks: {
    spotify?: string;
    instagram?: string;
    youtube?: string;
    tiktok?: string;
  };
}

export interface PlatformMetrics {
  platform: string;
  followers: number;
  engagement: number;
  views: number;
  timestamp: Date;
}

export interface GeoMetrics {
  country: string;
  region: string;
  listeners: number;
  engagement: number;
}

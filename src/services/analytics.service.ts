class AnalyticsService {
  trackEvent(event: string, data?: Record<string, any>): void {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", event, data);
    }
  }

  trackPageView(page: string): void {
    this.trackEvent("page_view", { page_path: page });
  }
}

export const analyticsService = new AnalyticsService();
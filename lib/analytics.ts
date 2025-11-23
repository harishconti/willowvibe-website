export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Predefined events
export const analytics = {
  contactForm: (location: string) =>
    trackEvent('submit', 'Contact', location),

  downloadGuide: (guideName: string) =>
    trackEvent('download', 'Lead Magnet', guideName),

  scheduleConsultation: (source: string) =>
    trackEvent('click', 'CTA', `Schedule - ${source}`),

  viewPricing: () =>
    trackEvent('view', 'Pricing', 'Pricing Page'),

  viewCaseStudy: (caseStudy: string) =>
    trackEvent('view', 'Case Study', caseStudy),

  chatInitiated: () =>
    trackEvent('engage', 'Chat', 'Widget Opened'),

  serviceClick: (service: string) =>
    trackEvent('click', 'Service', service),
}

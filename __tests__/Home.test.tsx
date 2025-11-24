import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

// Mock the components used in Home to isolate the test
jest.mock('@/components/TrustedBy', () => () => <div data-testid="trusted-by">TrustedBy</div>)
jest.mock('@/components/Testimonials', () => () => <div data-testid="testimonials">Testimonials</div>)
jest.mock('@/components/FAQ', () => () => <div data-testid="faq">FAQ</div>)
jest.mock('@/components/ExitIntentPopup', () => () => <div data-testid="exit-popup">ExitIntentPopup</div>)
jest.mock('@/components/TrackedLink', () => ({ href, children, ...props }: any) => <a href={href} {...props}>{children}</a>)
jest.mock('@/components/StructuredData', () => () => null)
jest.mock('@/lib/images', () => ({
  getOptimizedImage: (src: string) => ({ src, width: 100, height: 100, blurDataURL: '' })
}))

describe('Home Page', () => {
  it('renders the hero heading', () => {
    render(<Home />)
    const heading = screen.getByRole('heading', {
      name: /Transforming Ideas Into/i
    })
    expect(heading).toBeInTheDocument()
  })

  it('renders the services section', () => {
    render(<Home />)
    const serviceHeading = screen.getByText('Custom SaaS Development')
    expect(serviceHeading).toBeInTheDocument()
  })
})

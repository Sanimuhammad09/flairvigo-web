import { createRootRoute, Outlet } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export const Route = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/2349114105173"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 z-[100] flex items-center justify-center"
        aria-label="Contact us on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path d="M12.012 2C6.48 2 2 6.48 2 12.013c0 1.768.461 3.491 1.336 5.011L2 22l5.127-1.346a9.962 9.962 0 0 0 4.885 1.272c5.532 0 10.012-4.48 10.012-10.013S17.544 2 12.012 2zm5.495 14.542c-.225.642-1.295 1.205-1.782 1.242-.485.037-1.127.135-3.666-.913-3.056-1.265-5.015-4.423-5.166-4.628-.152-.206-1.233-1.642-1.233-3.136 0-1.493.776-2.228 1.054-2.528.277-.3.596-.376.792-.376.195 0 .393 0 .565.008.181.009.421-.067.66.505.247.59 .845 2.062.923 2.219.077.158.128.341.026.544-.103.203-.153.327-.306.508-.153.18-.322.392-.46.541-.153.167-.312.35-.13.665.18.315.8 1.328 1.725 2.152 1.196 1.066 2.203 1.393 2.518 1.543.315.15.502.128.694-.09.191-.219.822-1.02 1.042-1.37.22-.35.437-.291.734-.18.297.112 1.884.887 2.206 1.046.321.157.535.236.613.367.078.131.078.761-.147 1.403z"/>
        </svg>
      </a>
    </QueryClientProvider>
  ),
})

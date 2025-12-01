const Banner = () => {
  return (
    <div class="h-[calc(100vh-3.5rem)] flex items-center justify-center relative">
      <img
        src="/images/banner.png"
        alt="Banner Background"
        class="w-full h-full object-cover brightness-75"
      />
      <div class="px-4 lg:px-8 absolute top-0 left-0 w-full h-full py-8">
        <div class="flex flex-col items-center justify-center gap-12">
          <div class="space-y-4">
            <h2 class="text-3xl font-bold font-heading text-white">
              TRAVEL PLANNING, MADE EFFORTLESS
            </h2>
            <p class="text-sm text-white">
              Tell us where you're going and what you love - we'll take care of
              the plan. Simple, personal, and stress-free from start to finish.
            </p>
            <div class="flex items-center justify-center gap-4">
              <a
                href="https://apps.apple.com/us/app/journeemate/id6754534126"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/app-store.svg"
                  alt="Apple Store"
                  class="h-10"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.duynguyen.journeemate"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/google-play.svg"
                  alt="Google Play"
                  class="h-10"
                />
              </a>
            </div>
          </div>
          <div>
            <img
              src="/images/app-screenshot.png"
              alt="App Screenshot"
              class="animate-float"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

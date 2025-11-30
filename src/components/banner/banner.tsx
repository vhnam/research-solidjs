const Banner = () => {
  return (
    <div class="min-h-screen flex items-center justify-center bg-[url('/images/banner.png')] bg-cover bg-center">
      <div class="px-4 lg:px-8">
        <div class="flex flex-col items-center justify-center gap-20">
          <div class="space-y-4">
            <h2 class="text-3xl font-bold font-heading text-white">
              TRAVEL PLANNING, MADE EFFORTLESS
            </h2>
            <p class="text-sm text-white">
              Tell us where you're going and what you love - we'll take care of
              the plan. Simple, personal, and stress-free from start to finish.
            </p>
            <div class="flex items-center justify-center gap-4">
              <a href="#" class="btn btn-primary">
                <img
                  src="/images/app-store.svg"
                  alt="Apple Store"
                  class="h-10"
                />
              </a>
              <a href="#" class="btn btn-secondary">
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
              class="animate-[bounce_10s_ease-in-out_infinite]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

const Nav = () => {
  return (
    <header class="p-4 shadow-md bg-white fixed top-0 left-0 right-0 z-50">
      <div class="flex justify-between items-center ">
        <div class="flex items-center gap-4">
          <img src="/images/logo.png" alt="Logo" class="size-6" />
          <img src="/images/brand.png" alt="JourneeMate" class="h-6" />
        </div>
        {/* <nav>
        <ul class="flex gap-4">
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#how-it-works">How it works</a>
          </li>
        </ul>
      </nav> */}
      </div>
    </header>
  );
};

export default Nav;

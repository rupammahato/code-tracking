export default function BackgroundPattern() {
    return (
      <div className="absolute inset-0 z-0 overflow-hidden bg-gray-100">
        <svg
          className="absolute left-[calc(50%-11rem)] top-[calc(50%-20rem)] -z-10 h-[21.1875rem] max-w-none transform-gpu blur-3xl sm:left-[calc(50%-30rem)] sm:top-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6366f1" />
              <stop offset={1} stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    )
  }
  
  
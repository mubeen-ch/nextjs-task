
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      {/* <section className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center py-48 mx-10 bg-opacity-80 rounded-lg shadow-lg mt-5">
          <h1 className="text-5xl font-semibold tracking-tight text-black sm:text-7xl">
            Data to enrich your online business
          </h1>
          <p className="mt-8 text-lg font-medium text-black sm:text-xl">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. 
            Elit sunt amet fugiat veniam occaecat.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <a href="#" className="text-lg font-bold text-white">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
      </section> */}
      <section className="relative py-12 sm:py-16 lg:pb-40">
      <div className="absolute bottom-0 right-0 overflow-hidden">
        <img
          className="w-full h-auto origin-bottom-right transform scale-150 lg:w-auto lg:mx-auto lg:object-cover lg:scale-75"
          src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png"
          alt="Background Pattern"
        />
      </div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-4 lg:items-center lg:grid-cols-2 xl:grid-cols-2">
          <div className="text-center xl:col-span-1 lg:text-left md:px-16 lg:px-0 xl:pr-20">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">
              An editor that helps you write clean codes.
            </h1>
            <p className="mt-2 text-lg sm:mt-6 font-inter">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.
            </p>

            <a
              href="#"
              className="inline-flex px-8 py-4 mt-8 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded sm:mt-10 font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Try our free editor
            </a>

            <div className="mt-8 sm:mt-16">
              <div className="flex items-center justify-center lg:justify-start">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-5 h-5 text-[#FDB241]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="mt-6">
                <p className="text-lg font-bold  font-pj">Best code editor in market!</p>
                <p className="mt-3 text-base leading-7 text-gray-600 font-inter">
                  Consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu, aliquam nulla tincidunt gravida.
                  Cursus convallis dolor semper pretium ornare.
                </p>
              </blockquote>

              <div className="flex items-center justify-center mt-3 lg:justify-start">
                <img
                  className="flex-shrink-0 object-cover w-6 h-6 overflow-hidden rounded-full"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/avatar-female.png"
                  alt="Denny Jones"
                />
                <p className="ml-2 text-base font-bold  font-pj">Denny Jones</p>
              </div>
            </div>
          </div>

          <div className="xl:col-span-1">
            <img
              className="w-full mx-auto"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/illustration.png"
              alt="Illustration"
            />
          </div>
        </div>
      </div>
    </section>
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Pricing Plans</h2>
        <p className="mt-2 text-gray-600">Choose a plan that suits your needs.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Basic Plan */}
        <Card className="border border-gray-300 shadow-md p-6 text-center">
          <CardContent>
            <h3 className="text-xl font-semibold ">Basic</h3>
            <p className="mt-2 ">$19/month</p>
            <ul className="mt-4 space-y-2 ">
              <li>✅ 10GB Storage</li>
              <li>✅ Basic Support</li>
              <li>✅ Limited Access</li>
            </ul>
            <Button className="mt-6 w-full bg-gray-600 hover:bg-gray-700 text-white">
              Choose Plan
            </Button>
          </CardContent>
        </Card>

        {/* Standard Plan - Highlighted */}
        <Card className="border-2 border-indigo-500 shadow-lg p-8 text-center bg-white scale-105">
          <CardContent>
            <h3 className="text-2xl font-bold text-indigo-600">Standard</h3>
            <p className="mt-2 text-gray-800 text-lg">$49/month</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>✅ 100GB Storage</li>
              <li>✅ Priority Support</li>
              <li>✅ Full Access</li>
            </ul>
            <Button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white">
              Choose Plan
            </Button>
          </CardContent>
        </Card>

        {/* Premium Plan */}
        <Card className="border border-gray-300 shadow-md p-6 text-center">
          <CardContent>
            <h3 className="text-xl font-semibold ">Premium</h3>
            <p className="mt-2 ">$99/month</p>
            <ul className="mt-4 space-y-2 ">
              <li>✅ Unlimited Storage</li>
              <li>✅ 24/7 Support</li>
              <li>✅ Advanced Features</li>
            </ul>
            <Button className="mt-6 w-full bg-gray-600 hover:bg-gray-700 text-white">
              Choose Plan
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
    </main>
  );
}

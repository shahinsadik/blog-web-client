import React from 'react';

const About = () => {
    return (
        <div>
            <div>
      <div>
        <div className="mx-5 md:mx-10 lg:mx-20">
          <div className="  ">
            <div className="min-h-screen lg:gap-16 md:gap-10 gap-5 grid md:grid-cols-2 grid-cols-1 items-center justify-center">
              <img
                src="https://static.live.templately.com/woocommerce/2022/01/Group-322.png"
                className=" "
              />
              <div>
                <h1 className="text-5xl font-bold text-[#6243d1]">About Us</h1>
                <p className="py-6 text-justify">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, consequuntur
                  magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                  porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                  consectetur
                </p>
                <button className="btn btn-primary bg-[#6243d1] mb-5">
                  Explore more...
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-200 pb-5 py-10">
        <div>
          <h1 className="text-5xl font-bold text-center text-[#6243d1]">
            Reason to choose us
          </h1>
          <p className="text-center text-[#6243d1] mt-3">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam,
          </p>
        </div>
        <div className="lg:my-10 my-5 lg:mx-20 md:mx-10 mx-5">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            <div className="card bg-base-100 shadow-2xl my-5">
              <figure className="px-10 pt-10">
                <img
                  src="https://static.live.templately.com/woocommerce/2022/01/balance-icon-07.png"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">One Free week</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-2xl my-5">
              <figure className="px-10 pt-10">
                <img
                  src="https://static.live.templately.com/woocommerce/2022/01/balance-icon-07.png"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">One Free week</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-2xl my-5">
              <figure className="px-10 pt-10">
                <img
                  src="https://static.live.templately.com/woocommerce/2022/01/balance-icon-07.png"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">One Free week</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default About;
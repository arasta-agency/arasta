/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import founderImg from '../assets/founder.jpg';
import studyInPolandImg from '../assets/studyinPoland.svg'
import manHoldsPlImg from '../assets/manholdspl.png'

//components
import Newsletter from './Newsletter'

const BlogPost = () => {
  return (
    <>
      <main className="mt-44 mb-36 p-6 mx-auto max-w-sm sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-2xl">
            <header className="mb-4 lg:mb-6">
              <address className="flex items-center mb-10 not-italic justify-center">
                {/* px-10 mx-auto py-36 sm:px-20 sm:py-16 lg:py-28 */}
                <div className="inline-flex items-center mr-3 text-sm text-gray-900">
                  <img
                    className="mr-4 w-16 h-16 rounded-full shadow-xl"
                    src={founderImg}
                    alt="Founder"
                  />
                  <div>
                    <span className="text-base lg:text-xl font-semibold text-gray-700">
                      Hedi Hassan
                    </span>
                    <p className="text-sm lg:text-base text-gray-600">
                      Founder, Educator & CEO Arasta
                    </p>
                    <p className="text-sm lg:text-base font-light text-gray-500">
                      <time dateTime="2026-02-08" title="February 8th, 2026">
                        Feb. 8, 2026
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              <hr className='shadow-xl' />
              {/* mt-2 text-3xl font-semibold tracking-tight text-primary sm:text-4xl */}
              <h1 className="mt-12 mb-8 title text-center">How to Finance Your Studies in Poland?</h1>
            </header>

            <p className='text'>Studying in Poland is an excellent opportunity for international students thanks to its high-quality education and affordable costs. However, proper financial planning is still essential to cover tuition fees and living expenses. At Arasta, we understand the challenges students face, so here are some practical tips to help you manage and finance your studies and stay in Poland.</p>

            <figure><img src="https://dl.dropboxusercontent.com/scl/fi/k78g1gtiaw3ugk2tru4bk/finance.jpg?rlkey=fv0aygrwtncb360tbw4oo0w3c&dl=0" className='mt-14 rounded-2xl shadow-2xl' alt="" />
              {/* <figcaption>Digital art by Anonymous</figcaption> */}
            </figure>
            {/* mt-16 text-justify text-base text-gray-600 space-y-8 */}
            <ol className='mt-16 space-y-5 text'>
                  <li>
                  <strong>Start Saving Early:</strong> Even though studying in Poland is generally more affordable than many other European countries, it’s still important to start saving early. Planning your finances in advance helps you comfortably cover tuition fees, accommodation, and daily living expenses once you arrive in Poland.
                </li>

                <li>
                  <strong>Proof of Financial Means:</strong> When applying for a Polish student visa or temporary residence permit, you must show proof of sufficient financial resources. This can include personal savings, a sponsor letter, or bank statements demonstrating that you can support yourself during your studies in Poland.
                </li>

                <li>
                  <strong>Family Support:</strong> Many international students in Poland receive financial support from their families, especially during their first year. Combined with Poland’s relatively low cost of living, family support can make studying more manageable and stress-free.
                </li>

                <li>
                  <strong>Part-Time Job Opportunities:</strong> Poland offers a wide range of part-time job opportunities for international students, especially in cities like Warsaw, Kraków, Wrocław, and Gdańsk. Common jobs include working in cafés, restaurants, customer service, tutoring, IT support, and university-related roles. Finding a job related to your field of study can also boost your career prospects.
                </li>

                <li>
                  <strong>Legal Work Regulations:</strong> International students studying full-time in Poland are generally allowed to work without a separate work permit. However, balancing work and studies is important, as part-time income should be considered a support source rather than the main financial foundation.
                </li>

                <li>
                  <strong>Student Loans:</strong> Student loans can help finance your education in Poland, especially for EU students who may have access to public loan programs. Some private banks and international institutions also offer education loans for non-EU students. Loans should be used wisely and as a supplementary option.
                </li>

                <li>
                  <strong>Scholarships:</strong> Poland offers various scholarships for international students based on academic excellence, research potential, or bilateral agreements. Programs such as NAWA scholarships, Erasmus+, university-specific scholarships, and government-funded initiatives can significantly reduce tuition and living costs.
                </li>
            </ol>
            <h3 className='mt-14 font-semibold text-xl text-gray-700'>Conclusion</h3>
            <p className='mt-4 text'>
             Financing your studies in Poland requires smart financial planning and awareness of the available options. Starting to save early, receiving family support, working part-time, considering student loans, and applying for scholarships can all help cover your living and study expenses. At Arasta, we understand how important financial stability is for students, and we guide you through the best opportunities to ensure a smooth and successful educational journey in Poland.            </p>
          </article>
        </div>
      </main>

                <aside aria-label="Related articles" className="py-8 lg:py-24 bg-gray-50 max-w-none">
            <div className="px-4 mx-auto max-w-screen-xl">
              <h2 className="mb-8 text-2xl font-bold text-gray-700 text-center">
                Related articles
              </h2>

              <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 justify-center">

                {/* ✅ FIRST – Poland */}
                <article className="max-w-xs">
                  <a href="#">
                    <img
                      src={studyInPolandImg}
                      className="mb-5 rounded-lg shadow-xl"
                      alt="Study in Poland"
                    />
                  </a>
                  <h2 className="mb-2 text-xl font-bold leading-tight text-gray-800">
                    <a href="#">Study in Poland as a Foreign Student</a>
                  </h2>
                  <p className="mb-4 font-light text-gray-500">
                    Learn about affordable tuition, top universities, and student life in Poland.
                  </p>
                  <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-gray-700 hover:no-underline">
                    Read in 3 minutes
                  </a>
                </article>

                {/* ✅ SECOND – Poland */}
                <article className="max-w-xs">
                  <a href="#">
                    <img
                      src={manHoldsPlImg}
                      className="mb-5 rounded-lg shadow-xl"
                      alt="Why choose Poland"
                    />
                  </a>
                  <h2 className="mb-2 text-xl font-bold leading-tight text-gray-800">
                    <a href="#">Why Choose Poland for Your Studies?</a>
                  </h2>
                  <p className="mb-4 font-light text-gray-500">
                    Discover why Poland is becoming a top destination for international students.
                  </p>
                  <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-gray-700 hover:no-underline">
                    Read in 4 minutes
                  </a>
                </article>
            <article className="max-w-xs">
              <a href="#">
                <img src="https://dl.dropboxusercontent.com/scl/fi/m5x4r8gk0mqr2p0iizup6/confusion.png?rlkey=27pk3xae634nr47jofcrilvz3&dl=0" className="mb-5 rounded-lg shadow-xl" alt="confused" />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-800 ">
                <a href="#">Master’s & PhD Programs: Which Path Should You Choose?</a>
              </h2>
              <p className="mb-4 font-light text-gray-500 ">Choosing between a Master’s and a PhD can shape your academic and professional future. This guide helps you understand the differences, benefits, and which option suits your goals best.
...</p>
              <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-gray-700  hover:no-underline">
                Read in 8 minutes
              </a>
            </article>
            <article className="max-w-xs">
              <a href="#">
                <img src="https://dl.dropboxusercontent.com/scl/fi/4lcca8ifiqvl9iy0jw6nv/coaching.png?rlkey=fb8dteocr4eal3t3b83lqeh7x&dl=0" className="mb-5 rounded-lg shadow-xl" alt="coaching" />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-800 ">
                <a href="#">Study in Poland: With or Without an Agency?</a>
              </h2>
              <p className="mb-4 font-light text-gray-500 ">Planning to study in Poland can feel overwhelming. This article explores whether applying independently or through an education agency is the right choice for your academic journey.
...</p>
              <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-gray-700  hover:no-underline">
                Read in 4 minutes
              </a>
            </article>
          </div>
        </div>
      </aside>

      <Newsletter />

    </>
  )
}

export default BlogPost
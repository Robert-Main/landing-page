import { ICONS } from '@/assets/icons'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

// eslint-disable-next-line @typescript-eslint/naming-convention
const hero_items = [
  {
    image: ICONS.clock,
    title: 'Our Mission',
    description:
      'To innovate and deliver high-quality solutions that empower businesses to achieve their goals.'
  },
  {
    image: ICONS.saving,
    title: 'Our Vision',
    description:
      'To be a global leader in technology, fostering growth and success for our clients worldwide.'
  },
  {
    image: ICONS.person,
    title: 'Our Values',
    description:
      'Commitment to excellence, integrity, and continuous improvement in everything we do.'
  },
  {
    image: ICONS.brokenArrow,
    title: 'Our Team',
    description:
      'A diverse group of professionals dedicated to driving innovation and delivering results.'
  },
  {
    image: ICONS.human,
    title: 'Our Approach',
    description:
      'Collaborative, client-focused, and driven by a passion for solving complex problems.'
  },
  {
    image: ICONS.check,
    title: 'Our Promise',
    description:
      'To always put our clients first and deliver exceptional service and support.'
  }
]

const cards = [
  {
    image: '/assets/images/construction.png',
    title: 'Our History',
    description:
      'Over a decade of experience in the tech industry.'
  },
  {
    image: '/assets/images/healthcare.png',
    title: 'Our Achievements',
    description:
      'Award-winning solutions and satisfied clients.'
  },
  {
    image: '/assets/images/logistics.png',
    title: 'Our Future',
    description:
      'Continued innovation and expansion into new markets.'
  },
  {
    image: '/assets/images/insurance.png',
    title: 'Join Us',
    description: 'Be a part of a dynamic and growing team.'
  }
]
const page = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1120px] mx-auto w-full p-4 pb-10 hero-bg">
        <div className="flex justify-center flex-col items-center pt-[60px]">
          <h1 className="text-white hero-medium w-full md:max-w-[732px] text-center">
            About Us
          </h1>
          <p
            className="text-white header-normal w-full max-w-[] sm:max-w-[544px]
              text-center mt-5"
          >
            Learn more about our journey, our team, and our
            commitment to excellence.
          </p>
          <div className="flex items-center gap-4 mt-7">
            <Button variant={'ghost'}>
              Get to Know Us
            </Button>
            <Button variant={'outline'}>Contact Us</Button>
          </div>
        </div>

        {/* <Suspense fallback={null}> */}
        <div
          className="my-5 md:my-20 rounded-[8px] sm:rounded-[20px] video-shadow
            sm:p-[16px] bg-[#cfd6dd] overflow-hidden"
        >
          <video
            src="/assets/videos/video_hero.mp4"
            width={1120}
            autoPlay
            loop
            muted
            height={600}
            className="w-full h-auto video-shadow sm:rounded-[20px]"
          />
        </div>
        {/* </Suspense> */}
      </div>

      <div className="py-10 px-4 mx-auto">
        <h2 className="hero-medium text-center">
          Who We Are
        </h2>
        <p className=" max-w-[544px] mx-auto text-center p-4 mt-3 body-large">
          Discover the people and the story behind our
          company.
        </p>
      </div>

      <div className="max-w-[1120px] py-10 px-4 mx-auto ">
        <div className="flex gap-6 flex-col lg:flex-row">
          <div className="flex-1 border-[1px] bg-grey p-4 lg:w-[640px] rounded-[20px]">
            <div className="flex justify-between gap-5 mt-4 flex-col gap-y-8 sm:flex-row">
              <div className="flex items-start flex-1 flex-col gap-4">
                <span className="text-grey-500 body-small">
                  01
                </span>

                <p className="text-grey-600 body-normal w-full mt-1">
                  <span className="font-semibold">
                    Our Beginning
                  </span>{' '}
                  Started with a small team of passionate
                  individuals, we have grown exponentially
                  over the years.
                </p>
                <Image
                  src="/assets/images/document-automation-1.png"
                  alt="Our beginning"
                  width={600}
                  height={400}
                  className="w-full h-[300px] sm:h-full max-sm:object-left object-top
                    object-contain"
                />
              </div>
            </div>
          </div>
          <div
            className="flex-1 lg:flex-none lg:w-[488px] h-auto border-[1px] flex
              flex-col sm:flex-row lg:flex-col bg-grey p-4 rounded-[20px]"
          >
            <div className="flex justify-between gap-5 mt-4 flex-col gap-y-8 sm:flex-row">
              <div className="flex items-start flex-1 flex-col gap-4">
                <span className="text-grey-500 body-small">
                  02
                </span>

                <p className="text-grey-600 body-normal w-full mt-1">
                  <span className="font-semibold">
                    Our Growth
                  </span>
                  Over the years, we have expanded our team,
                  our capabilities, and our impact on the
                  industry.
                </p>
                <Image
                  src="/assets/images/automation-2.png"
                  alt="Our growth"
                  width={600}
                  height={400}
                  className="w-full !h-[312px] sm:h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1120px] py-10 mx-auto flex gap-6 flex-col lg:flex-row">
          <div
            className="flex-1 lg:flex-none lg:w-[488px] h-[344px] pb-0
              overflow-hidden border-[1px] flex flex-col sm:flex-row
              lg:flex-col bg-grey p-4 rounded-[20px]"
          >
            <div className="flex justify-between gap-5 mt-4 flex-col gap-y-8 sm:flex-row">
              <div className="flex items-start flex-1 flex-col gap-4">
                <span className="text-grey-500 body-small">
                  03
                </span>

                <p className="text-grey-600 body-normal w-full mt-1">
                  <span className=" font-semibold">
                    Our Team
                  </span>{' '}
                  A diverse group of professionals dedicated
                  to innovation, excellence, and customer
                  satisfaction.
                </p>
                <Image
                  src="/assets/images/document-automation-3.png"
                  alt="Our team"
                  width={500}
                  height={500}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
          <div
            className="flex-1 border-[1px] bg-grey p-4 h-full pb-0 flex-col
              overflow-hidden rounded-[20px]"
          >
            <div className="flex justify-between gap-5 mt-4 flex-col gap-y-8 sm:flex-row">
              <div className="flex items-start flex-1 flex-col gap-4">
                <span className="text-grey-500 body-small">
                  04
                </span>

                <p className="text-grey-600 body-normal w-full mt-1">
                  <span className="text-grey-800 font-semibold">
                    Our Values
                  </span>{' '}
                  We believe in integrity, excellence, and
                  continuous improvement in everything we
                  do.
                </p>
                <Image
                  src="/assets/images/document-automation-4.png"
                  alt="Our values"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-6 flex-col lg:flex-row">
          <div
            className="flex items-start flex-1 flex-col gap-4 bg-white
              rounded-[20px] p-4"
          >
            <span className="text-grey-500 body-small">
              05
            </span>

            <p className="text-grey-600 body-normal w-full mt-1">
              <span className="text-grey-800 font-semibold">
                Our Approach
              </span>{' '}
              Collaborative, client-focused, and driven by a
              passion for solving complex problems.
            </p>
            <Image
              src="/assets/images/document-automation-5.png"
              alt="Our approach"
              width={600}
              height={400}
              className="w-full h-[300px] sm:h-full max-sm:object-left object-top
                object-contain"
            />
          </div>

          <div
            className="flex-1 lg:flex-none lg:w-[488px] h-auto border-[1px] flex
              flex-col sm:flex-row lg:flex-col bg-grey p-4 rounded-[20px]"
          >
            <div className="flex justify-between gap-5 mt-4 flex-col gap-y-8 sm:flex-row">
              <div className="flex items-start flex-1 flex-col gap-4">
                <span className="text-grey-500 body-small">
                  06
                </span>

                <p className="text-grey-600 body-normal w-full mt-1">
                  <span className="text-grey-800 font-semibold">
                    Our Promise
                  </span>{' '}
                  To always put our clients first and
                  deliver exceptional service and support.
                </p>
                <Image
                  src="/assets/images/automation-2.png"
                  alt="Our promise"
                  width={600}
                  height={400}
                  className="w-full !h-[312px] sm:h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1120px] py-10 px-4 mx-auto mt-4">
        <div className="flex-1 p-4 rounded-[20px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hero_items.map((item, idx) => (
              <div key={idx}>
                <h3 className="flex items-center gap-2">
                  {item.image}
                  <span className=" header-normal">
                    {item.title}
                  </span>
                </h3>
                <p className="text-grey-300 body-normal w-full mt-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 bg-quantflow-500 rounded-[20px] shadow-lg">
        <div className="max-w-[1120px] mx-auto py-16 lg:py-24">
          <h2 className="hero-medium text-white">
            Our Journey
          </h2>
          <p className="body-large text-white max-w-[544px] mt-5">
            Explore our milestones and achievements over the
            years.
          </p>

          <div
            className="mt-10 flex-col sm:flex-row pr-0 pb-0 grid w-full
              md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {cards.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-2 bg-white p-4 rounded-[20px]"
              >
                <Image
                  src={item.image}
                  alt="Hero"
                  width={400}
                  height={400}
                  className="w-full h-[200px] rounded-[20px] object-cover flex-1"
                />
                <p className="text-grey-600 body-small w-full mt-1">
                  {item.title}
                </p>
                <h3 className=" flex items-center gap-2 bg-white">
                  <span className="text-grey-800 header-normal">
                    {item.description}
                  </span>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" max-w-[1120px] py-10 px-4 mx-auto">
        <div className="py-10">
          <h2 className="hero-medium text-center">
            The future of automation
          </h2>
          <p className=" max-w-[544px] mx-auto text-center p-4 mt-3 body-large">
            Using advanced AI algorithms Quantflow
            transforms the document automation industry.
          </p>
        </div>
        <div className="flex h-full gap-4 flex-col md:flex-row">
          <div
            className="flex-1 bg-grey flex flex-col p-5 justify-center w-full
              rounded-[20px]"
          >
            <h3 className="text-grey-800 header-large w-full">
              Traditional Document Automation
            </h3>
            <div className="flex-1 mt-8 justify-center space-y-3 w-full">
              <hr className="border-grey-300 w-full " />
              <p className="heder-normal p-2 text-grey-800 flex w-full justify-between">
                <span>Rule-Based Systems</span>
                <ChevronDown
                  size={20}
                  className="text-grey-800"
                />
              </p>
              <hr className="border-grey-300" />
              <p className="heder-normal p-2 text-grey-800 flex w-full justify-between">
                <span>Limited Document Populating</span>
                <ChevronDown
                  size={20}
                  className="text-grey-800"
                />
              </p>
              <hr className="border-grey-300" />
              <hr className="!text-gray-800 " />
              <p className="heder-normal p-2 text-grey-800 flex w-full justify-between">
                <span>Fixed Workflow Automation</span>
                <ChevronDown
                  size={20}
                  className="text-grey-800"
                />
              </p>
              <hr className="border-grey-300" />
              <p className="heder-normal p-2 text-grey-800 flex w-full justify-between">
                <span>Limited Scalability</span>
                <ChevronDown
                  size={20}
                  className="text-grey-800"
                />
              </p>
              <hr className="border-grey-300" />
            </div>
          </div>
          <div
            className="flex-1 bg-[url(/assets/images/bg/background_black.png)] p-5
              bg-cover bg-no-repeat flex flex-col justify-center w-full
              rounded-[20px]"
          >
            <h3 className="text-white header-large w-full">
              Quantflow AI-powered Automation
            </h3>
            <div
              className="flex-1 flex items-center mt-8 justify-center gap-3 flex-col
                w-full"
            >
              <hr className="text-white w-full " />
              <p className="heder-normal p-2 text-white flex w-full justify-between">
                <span>AI-Driven Flexibility</span>
                <ChevronDown
                  size={20}
                  className="text-white"
                />
              </p>
              <hr className="text-white flex w-full " />
              <p className="heder-normal p-2 text-white flex w-full justify-between">
                <span>Advanced Document Populating</span>
                <ChevronDown
                  size={20}
                  className="text-white"
                />
              </p>
              <hr className="text-white flex w-full " />
              <hr className="!text-white " />
              <p className="heder-normal p-2 text-white flex w-full justify-between">
                <span>Automated Learning</span>
                <ChevronDown
                  size={20}
                  className="text-white"
                />
              </p>
              <hr className="text-gray w-full" />
              <p className="heder-normal p-2 text-white flex w-full justify-between">
                <span>Scalable and Adaptive</span>
                <ChevronDown
                  size={20}
                  className="text-white"
                />
              </p>
              <hr className="text-white w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page

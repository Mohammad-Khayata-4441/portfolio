import ReadMore from '@/app/components/ReadMore'
import {  Button} from '@nextui-org/button'
import Image from 'next/image'
import React from 'react'
import { BsGithub, BsImage } from 'react-icons/bs'
import { CiExport, CiRead } from 'react-icons/ci'
import { PortfolioItem } from '@/types/PortfolioItem'
import { Link } from '@/i18n'
export default function PortfolioItem({ item }: { className: string, item: PortfolioItem }) {
  return (

    <div>
      <div className="grid grid-cols-12 project py-12 md:py-10" v-if="item">
        <div className="info col-span-12 lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center px-4">
          <h2 className="text-5xl text-primary dark:text-white text-center lg:text-left lg:text-6xl font-bold">
            {item.name}
          </h2>
          <span className="mt-4 dark:text-gray-300 hidden lg:block">
            {item.type}
          </span>
          <ReadMore className="dark:text-gray-300 text-center lg:text-left md:text-lg capitalize mt-8" text={item?.description}>
          </ReadMore>
          <p className="dark:text-gray-300 text-center lg:text-left md:text-lg capitalize mt-8" v-html="item?.workInformation">
          </p>
          <div className="tecnologies flex items-center my-6">
            <span className="dark:text-gray-300 hidden lg:block">Built With</span>
            <div className="flex mx-auto lg:mx-12 gap-8 items-center">
              {
                item.technologiesIcons?.map((t) => <Image key={t} alt={t} className="tech-icon max-w-[40px] md:max-w-[65px]" width={100} height={100} src={`/icons/${t}`} />
                )
              }
            </div>
          </div>
          <div className="flex items-center gap-4">
            {
              !!item.gitRepo &&
              <a href="item.gitRepo" className="w-full lg:w-auto" >

                <Button startContent={<BsGithub />} className='bg-black' size='lg' type="button">
                  Github
                </Button>
              </a>
            }
            <a href={item.url} >
              <Button variant='shadow' size='lg' startContent={<CiRead className='text-xl'></CiRead>} color='primary'>
                Live Preview
              </Button>
            </a>
            {/* <span  className="text-gray-400 text-sm">This Project is a Private Dashboard 😅</span> */}
          </div>
        </div>
        {
          item?.screenShots && item.screenShots.length &&
          <div className="image col-span-12 lg:col-span-6 order-1 lg:order-2 cursor-pointer">
            <Link href={`/portfolio?project=${item.key}`} scroll={false}>
            <Image height={1080} width={1920} className="work-cover h-auto md:h-[400px] w-full object-contain lg:object-cover rounded-3xl border-4 border-seconadry dark:border-text shadow-lg" quality="0.2" src={item.coverImage} alt={''}   >
            </Image>
            </Link>
            {/* <span className="bg-primary text-white p-2 rounded-xl relative left-4 bottom-12">{item?.screenShots.length}
              <BsImage />
              
            </span> */}
          </div>
        }





      </div >


    </div >




  )
}



{/* import type { PortfolioItem } from "@/types/PortfolioItem";
import { PropType } from "vue";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


const iconUrl = (icon: string) => `/icons/${icon}`



  defineEmits(['onDetails'])





const props = defineProps({
  item: Object as PropType<PortfolioItem>,
  index: Number
});




onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  if (process.client) {
    const selector = `.work-item-${props.index}`
    const element = document.querySelector(selector);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        toggleActions:"restart reverse restart reset"
      },
    })
    tl.from(`${selector}`, {
      opacity: 0,
      yPercent:15,
      duration: 0.5
    })
    
    tl.from(`${selector} .tech-icon`,{
      xPercent:100,
      opacity:0,
      stagger:0.15
    })


  }

})
</script>

<style lang="scss">
.project {
  min-height: calc(100vh - 112px);

  @media (max-width: 992px) {
    min-height: 100vh;
  }
} */}

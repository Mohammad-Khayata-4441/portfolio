import LightsGenerator from '@/app/components/LightsGenerator'
import React from 'react'
import projects from '@/data/projects'
import { NextPage } from 'next'
import { type PortfolioItem as PortfolioItemType } from '@/types/PortfolioItem'
import ProjectDetails from './ProjectDetails'
import PortfolioItem from './PortfolioItem'


const page: NextPage = (props: any) => {



    let projectDetails: PortfolioItemType | undefined = projects.find(p => p.key === props.searchParams.project);



    return (
        <>
            <div className="page portfolio-page  relative z-0 flex flex-col ">
                <LightsGenerator />
                <div className="page-overlay "></div>
                
                <div className="container px-12 mx-auto">

                    <div className=" px-4 mx-auto space-y-12">
                        {projects.map((item) => <PortfolioItem item={item} key={item.id} className="items-center" data-aos-duration={1000}  >
                        </PortfolioItem>
                        )}
                    </div>
                </div>
            </div >


            <ProjectDetails project={projectDetails}></ProjectDetails>
        </>

        // <Transition name="showGallery" @enter="onEnter" @leave="onLeave">
        //     <div v-if="showGallery" :class="{ 'bg-black bg-opacity-80': showGallery }"
        //         class="gallery flex items-center justify-center h-screen w-screen z-20 transition fixed top-0 left-0">
        //         <button class="absolute right-10 top-10 z-40" @click="closeGallery">
        //             <icon class="text-5xl text-gray-300" name="solar:close-circle-linear" />
        //         </button>




        //     </div>
        // </Transition>


    )

}
export default page
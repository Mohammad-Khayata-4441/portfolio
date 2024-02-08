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
                
                <div className="container lg:px-12 mx-auto">

                    <div className=" px-4 mx-auto space-y-12">
                        {projects.map((item) => <PortfolioItem item={item} key={item.id} className="items-center" data-aos-duration={1000}  >
                        </PortfolioItem>
                        )}
                    </div>
                </div>
            </div >


            <ProjectDetails project={projectDetails}></ProjectDetails>
        </>

    


    )

}
export default page
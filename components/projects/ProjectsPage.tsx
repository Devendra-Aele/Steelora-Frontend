"use client";

import { projectAssets } from "@/public/assets/projects";
import Image from "next/image";
import React, { useState } from "react";
import "./projects.css";
import ProjectHoverInfo from "./ProjectHoverInfo";

const ProjectsPage = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      {/* VISIBLE ONLY ON DESKTOP */}
      <section className="hidden lg:block section-y-padding section-x-padding mt-14">
        <h1 className="section-heading mb-8">Projects</h1>

        {/* INITIAL PROJECTS */}
        <div className="mb-8">
          <div className="flex gap-8 h-[544px] mb-8">
            <div>
              <div className="h-64 w-80 mb-8 relative group">
                <Image
                  src={projectAssets.project1}
                  alt="Project 1"
                  className="w-full h-full border border-white"
                />
                <ProjectHoverInfo
                  size="sm"
                  title="riverside business park"
                  features={["Indoor", "Fascia Mount", "Glass Railing"]}
                />
              </div>

              <div className="relative h-64 w-80 group">
                <Image
                  src={projectAssets.project3}
                  alt="Project 1"
                  className="w-full h-full border border-white"
                />
                <ProjectHoverInfo
                  size="sm"
                  title="innovation industrial park"
                  features={["Indoor", "Fascia Mount", "Glass Railing"]}
                />
              </div>
            </div>

            <div className="flex-grow relative group font-RidleyGrotesk ">
              <Image
                src={projectAssets.project2}
                alt="Project 2"
                className="w-full h-full object-cover border border-white "
              />
              <ProjectHoverInfo
                title="apartment block lewisham"
                features={["Indoor", "Fascia Mount", "Glass Railing"]}
                size="lg"
              />
            </div>
          </div>

          <div className="flex gap-10">
            <div className="h-96 w-[579px] flex-grow group relative">
              <Image
                src={projectAssets.project4}
                alt="project4"
                className="h-full w-full object-cover border border-white"
              />
              <ProjectHoverInfo
                size="md"
                title="innovation industrial park"
                features={["Indoor", "Fascia Mount", "Glass Railing"]}
              />
            </div>

            <div className="h-96 w-[579px] flex-grow group relative">
              <Image
                src={projectAssets.project5}
                alt="project4"
                className="h-full w-full object-cover border border-white"
              />
              <ProjectHoverInfo
                size="md"
                title="innovation industrial park"
                features={["Indoor", "Fascia Mount", "Glass Railing"]}
              />
            </div>
          </div>
        </div>

        {/* VISIBLE ON LOAD MORE */}
        {showMore && (
          <>
          <div className="mb-8">
            <div className="flex gap-8 h-[544px] mb-8">
              <div>
                <div className="h-64 w-80 mb-8 relative group">
                  <Image
                    src={projectAssets.project13}
                    alt="Project 1"
                    className="w-full h-full border border-white"
                  />
                  <ProjectHoverInfo
                    size="sm"
                    title="Bar Counter Lower ParelBKC Parinee Drishti Architects"
                    features={["Indoor", "Fascia Mount", "Glass Railing"]}
                  />
                </div>

                <div className="relative h-64 w-80 group">
                  <Image
                    src={projectAssets.project12}
                    alt="Project 1"
                    className="w-full h-full border border-white"
                  />
                  <ProjectHoverInfo
                    size="sm"
                    title="BKC C61 KRC Raheja"
                    features={["Indoor", "Fascia Mount", "Glass Railing"]}
                  />
                </div>
              </div>

              <div className="flex-grow relative group font-RidleyGrotesk ">
                <Image
                  src={projectAssets.project11}
                  alt="Project 2"
                  className="w-full h-full object-cover border border-white "
                />
                <ProjectHoverInfo
                  title="Bar Counter Lower Parel"
                  features={["Indoor", "Fascia Mount", "Glass Railing"]}
                  size="lg"
                />
              </div>
            </div>

            <div className="flex gap-10">
              <div className="h-96 w-[579px] flex-grow group relative">
                <Image
                  src={projectAssets.project14}
                  alt="project4"
                  className="h-full w-full object-cover border border-white"
                />
                <ProjectHoverInfo
                  size="md"
                  title="Kokal Interiors Tamil Nadu"
                  features={["Indoor", "Fascia Mount", "Glass Railing"]}
                />
              </div>

              <div className="h-96 w-[579px] flex-grow group relative">
                <Image
                  src={projectAssets.project15}
                  alt="project4"
                  className="h-full w-full object-cover border border-white"
                />
                <ProjectHoverInfo
                  size="md"
                  title="Kotak House Ahmedabad"
                  features={["Indoor", "Fascia Mount", "Glass Railing"]}
                />
              </div>
            </div>
          </div>
          <div className="mb-8">
            <div className="flex gap-8 h-[544px] mb-8">
              <div>
                <div className="h-64 w-80 mb-8 relative group">
                  <Image
                    src={projectAssets.project16}
                    alt="Project 1"
                    className="w-full h-full border border-white"
                  />
                  <ProjectHoverInfo
                    size="sm"
                    title="One Avighna Lower Parel"
                    features={["Indoor", "Fascia Mount", "Glass Railing"]}
                  />
                </div>

                <div className="relative h-64 w-80 group">
                  <Image
                    src={projectAssets.project18}
                    alt="Project 1"
                    className="w-full h-full border border-white"
                  />
                  <ProjectHoverInfo
                    size="sm"
                    title="Rustomjee"
                    features={["Indoor", "Fascia Mount", "Glass Railing"]}
                  />
                </div>
              </div>

              <div className="flex-grow relative group font-RidleyGrotesk ">
                <Image
                  src={projectAssets.project17}
                  alt="Project 2"
                  className="w-full h-full object-cover border border-white "
                />
                <ProjectHoverInfo
                  title="Pune Baner Lodha"
                  features={["Indoor", "Fascia Mount", "Glass Railing"]}
                  size="lg"
                />
              </div>
            </div>

            <div className="flex gap-10">
              <div className="h-96 w-[579px] flex-grow group relative">
                <Image
                  src={projectAssets.project19}
                  alt="project4"
                  className="h-full w-full object-cover border border-white"
                />
                <ProjectHoverInfo
                  size="md"
                  title="SNP"
                  features={["Indoor", "Fascia Mount", "Glass Railing"]}
                />
              </div>

              <div className="h-96 w-[579px] flex-grow group relative">
                <Image
                  src={projectAssets.project5}
                  alt="project4"
                  className="h-full w-full object-cover border border-white"
                />
                <ProjectHoverInfo
                  size="md"
                  title="innovation industrial park"
                  features={["Indoor", "Fascia Mount", "Glass Railing"]}
                />
              </div>
            </div>
          </div>
          </>
        )}

        {!showMore && (
          <div className="flex justify-center">
            <button
              type="button"
              className="primary-button"
              onClick={() => setShowMore(true)}
            >
              Load More
            </button>
          </div>
        )}
      </section>

      {/* MOBILE SECTION */}
      <section className="lg:hidden">
        <div className="h-[50vh] lg:h-[80vh] projects_mobile_hero"></div>
        <div className="pt-10  lg:py-0 lg:bg-transparent">
          <h1 className="section-heading">Projects</h1>
        </div>

        <div className="section-y-padding section-x-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="max-h-80 group relative">
              <Image
                src={projectAssets.project1}
                alt="Project1"
                className="h-full w-full border border-white"
              />
              <ProjectHoverInfo
                size="sm"
                title="riverside business park"
                features={["Indoor", "Fascia Mount", "Glass Railing"]}
              />
            </div>

            <div className="max-h-80 relative group">
              <Image
                src={projectAssets.project2}
                alt="Project2"
                className="h-full w-full border border-white"
              />
              <ProjectHoverInfo
                size="sm"
                title="riverside business park"
                features={["Indoor", "Fascia Mount", "Glass Railing"]}
              />
            </div>

            <div className="max-h-80 relative group">
              <Image
                src={projectAssets.project3}
                alt="Project3"
                className="h-full w-full border border-white"
              />
              <ProjectHoverInfo
                size="sm"
                title="riverside business park"
                features={["Indoor", "Fascia Mount", "Glass Railing"]}
              />
            </div>

            <div className="max-h-80 relative group">
              <Image
                src={projectAssets.project4}
                alt="Project4"
                className="h-full w-full border border-white"
              />
              <ProjectHoverInfo
                size="sm"
                title="riverside business park"
                features={["Indoor", "Fascia Mount", "Glass Railing"]}
              />
            </div>

            <div className="max-h-80 relative group">
              <Image
                src={projectAssets.project5}
                alt="Project5"
                className="h-full w-full border border-white"
              />
              <ProjectHoverInfo
                size="sm"
                title="riverside business park"
                features={["Indoor", "Fascia Mount", "Glass Railing"]}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;

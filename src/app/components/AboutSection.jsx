"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>MS Azure</li>
        <li>C#</li>
        <li>Reactjs</li>
        <li>Nextjs</li>
        <li>Visual Basic 6.0</li>
        <li>Leadership</li>
        <li>IntelliJ Idea</li>
        <li>Selenium</li>
        <li>Postman</li>
        <li>Jmeter</li>
        <li>Trouble shooting andMaintenance PC/Laptop</li>
      </ul>
    ),
  },
  { 
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>AMA Computer College Philippines, Lipa Campus</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Microsoft Certified Professional</li>
        <li>From Scratch to full Automation; Selenium/ Cucumber With Java</li>
        <li>Create Windows Forms Applications With C# and Visual Studio</li>
      </ul>
    ),
  },
];

export const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
              <Image 
              src={"/images/971.jpg"} 
              alt="laptop"
              className="rounded-full"
              width={500}
              height={500}/>
             <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
              <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
              <p className="text-base lg:text-lg">
                Greetings! I am a passionate and dedicated DevOps Engineer 
                with a solid foundation in DevOps principles and practices. 
                Having recently completed an intensive 4-month training 
                program and application, I am eager to apply my skills and 
                contribute to dynamic and collaborative teams.
              </p>
              
              <div className="flex flex-row justify-start mt-8">
                <TabButton
                  selectTab={() => handleTabChange("skills")}
                  active={tab === "skills"}
                >
                  {" "}
                  Skills{" "}
                </TabButton>
                <TabButton
                  selectTab={() => handleTabChange("education")}
                  active={tab === "education"}
                >
                  {" "}
                  Education{" "}
                </TabButton>
                <TabButton
                  selectTab={() => handleTabChange("certifications")}
                  active={tab === "certifications"}
                >
                  {" "}
                  Certifications{" "}
                </TabButton>
              </div>
              <div className="mt-8">
                {TAB_DATA.find((t) => t.id === tab).content}
              </div>
            </div>
        </div>
     
    </section>
  )
}

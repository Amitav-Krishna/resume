/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import type { PageMeta } from "@webstudio-is/sdk";
      import type { System, ResourceRequest } from "@webstudio-is/sdk";
export const getResources = (_props: { system: System }) => {
  const _data = new Map<string, ResourceRequest>([
  ])
  const _action = new Map<string, ResourceRequest>([
  ])
  return { data: _data, action: _action }
}


      export const getPageMeta = ({
  system,
  resources,
}: {
  system: System;
  resources: Record<string, any>;
}): PageMeta => {
  return {
    title: "Personal Portfolio Template",
    description: "Portoflio of my work and customer stories.",
    excludePageFromSearch: false,
    language: undefined,
    socialImageAssetName: "personal-template-cover_h7h_s-a7B9ewj-pjH2g4Q.png",
    socialImageUrl: undefined,
    status: undefined,
    redirect: undefined,
    custom: [
    ],
  };
};


      type Params = Record<string, string | undefined>;
export const getRemixParams = ({ ...params }: Params): Params => {
  return params
}


      export const projectId = "382cd40e-0b36-455f-b9ea-06077778985b";

      export const contactEmail = "redneck.bracketbot@gmail.com";
    

/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Body as Body, RichTextLink as RichTextLink, Link as Link, Form as Form } from "@webstudio-is/sdk-components-react-router";
import { Box as Box, Slot as Slot, Fragment as Fragment_1, Heading as Heading, Text as Text, Paragraph as Paragraph, CodeText as CodeText, List as List, ListItem as ListItem, Span as Span, Blockquote as Blockquote, Separator as Separator, HtmlEmbed as HtmlEmbed, Image as Image, Input as Input, Button as Button, Textarea as Textarea } from "@webstudio-is/sdk-components-react";
import { Label as Label, Collapsible as Collapsible, CollapsibleTrigger as CollapsibleTrigger, CollapsibleContent as CollapsibleContent } from "@webstudio-is/sdk-components-react-radix";


      export const siteName = undefined;

      export const breakpoints = [{"id":"jAWQK3_7D18H_5v0pK0z4"},{"id":"mONS0so-VrF1uS9rPlVcF","maxWidth":991},{"id":"zGIdqUzdPde7sHmF0aRQP","maxWidth":767},{"id":"wP-rcJFENR2yn86VzREAn","maxWidth":479}];

      export const favIconAsset: string | undefined =
        "logo_r1qaJQiri6sK3rPyq-Sar.svg";

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: string[] =
        []

      export const pageBackgroundImageAssets: string[] =
        []

      

      const Page = (_props: { system: any; }) => {
let [formState, set$formState] = useVariableState<any>("initial")
return <Body
id={"top"}
className={`w-body`}>
<Box
className={`w-box cna0hdz c1mzb2kd`}>
<Box
className={`w-box c1357293 c9jnjeu c5tmc3l c1ldum37 czr2pxy c155uc7w cry9bxc c1lfjoq7 c11ykhog c1kt5iwx`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
className={`w-heading c11nr3ex c11dowh9 c1dnnq07 c8ys3vy`}>
{"Style Guide"}
</Heading>
<Text
className={`w-text c1nkzcyu che9upb`}>
{"Craft Version 1.0"}
</Text>
<Paragraph
className={`w-paragraph cz5g8eb c1nkzcyu`}>
{"Here is the community style guide according to "}
<RichTextLink
href={"https://docs.webstudio.is/university/craft"}
target={"_blank"}
className={`w-rich-text-link cd07aq5 cld4m44 c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 cb06ied`}>
{"Craft"}
</RichTextLink>
{", the recommended starting point for Webstudio Projects. "}
<RichTextLink
href={"https://docs.webstudio.is/university/foundations/css-variables"}
target={"_blank"}
className={`w-rich-text-link cd07aq5 cld4m44 c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 cb06ied`}>
{"CSS variables"}
</RichTextLink>
{" containing colors, sizes, and more are on the Global Root. "}
</Paragraph>
</Box>
<Box
id={"layout"}
className={`w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c12y6bqh c8ys3vy`}>
{"Layout"}
</Heading>
</Box>
<Box
className={`w-box copqmak c9sypx0 c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h cna0hdz c1mzb2kd c1vaudkt cci8rp4 c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"section"}
</Text>
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c2keyc8 cnkorcr c1ldum37 c5tmc3l c1fhkm63 clv8gve c1lfjoq7 ca4qjwu c1cdc69r c1357293 c9jnjeu czr2pxy c155uc7w ck4tzbx`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"container"}
</Text>
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 copqmak c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 c10zkoym ct8c5y2 c1f64byh ck4tzbx c1g7fxd7 cx6c9kw c174sw29`}>
<Box
className={`w-box c7rvndl c2w8hv4`}>
<Text
className={`w-text c1yehcfp c1umavhe caipwxg cbvffy can94pj cuccfz7 cir85gx c1qom380 cr8yqfm c1ufwdzl c5blvcv cml0h3f c5m8ase clv8gve`}>
{"grid"}
</Text>
</Box>
<Box
className={`w-box`}>
<Paragraph
className={`w-paragraph`}>
{"Grid quickly provides the properties to create a grid. Once added, switch over to Local and type in your template columns."}
</Paragraph>
</Box>
<Box
className={`w-box`}>
<Paragraph
className={`w-paragraph`}>
{"Note, grid turns into flex on 767. This is because grid children may use start/end columns and would require us to reset each one manually on mobile. By setting the parent to flex, those values are ignored."}
</Paragraph>
</Box>
</Box>
</Box>
</Box>
<Box
id={"colors"}
className={`w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c12y6bqh c8ys3vy`}>
{"Colors"}
</Heading>
<Paragraph
className={`w-paragraph che9upb c1rco612`}>
{"Change these values on the Global Root. It's best practice to map semantic variables such as "}
<Span
className={`w-text-1 c2i0393 c19evryj cntnubm c16hrg7f c12vy3a5 cuwcd3w c1qakuu0 cz20ayj`}>
{"--foreground-primary"}
</Span>
{" to another variable such as "}
<Span
className={`w-text-1 c2i0393 c19evryj cntnubm c16hrg7f c12vy3a5 cuwcd3w c1qakuu0 cz20ayj`}>
{"--gray-10"}
</Span>
{"."}
</Paragraph>
</Box>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c12y6bqh c8ys3vy`}>
{"Foreground"}
</Heading>
<Box
className={`w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l`}>
{"--foreground-primary"}
</Text>
<Box
className={`w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 c12y6bqh c6pvryr`} />
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l`}>
{"--foreground-secondary"}
</Text>
<Box
className={`w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 c1bd9ep2 ck4tzbx`} />
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l`}>
{"--foreground-accent"}
</Text>
<Box
className={`w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 cpp0nin c6pvryr`} />
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l`}>
{"--foreground-muted"}
</Text>
<Box
className={`w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 czt9u4x c6pvryr`} />
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l`}>
{"--foreground-border"}
</Text>
<Box
className={`w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 cchda18 c6pvryr`} />
</Box>
</Box>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c12y6bqh c8ys3vy`}>
{"Background"}
</Heading>
<Box
className={`w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l`}>
{"--background-primary"}
</Text>
<Box
className={`w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 cvgv9nf ck4tzbx`} />
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l`}>
{"--background-secondary"}
</Text>
<Box
className={`w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 c1llqm3g c6pvryr`} />
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l`}>
{"--background-accent"}
</Text>
<Box
className={`w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 c1iv8y8b c6pvryr`} />
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l`}>
{"--background-card"}
</Text>
<Box
className={`w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 cow0ixc c6pvryr`} />
</Box>
</Box>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c12y6bqh c8ys3vy`}>
{"Other"}
</Heading>
<Box
className={`w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l`}>
{"--focus-color"}
</Text>
<Box
className={`w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 c17o0p2u c6pvryr`} />
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"invert-theme"}
</Text>
<Box
className={`w-box cagnu3j c130qyz3 c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 c82o5tr cqlgvkl cry9bxc c1qyy4dh ct02u4h c6pvryr`}>
<Text
className={`w-text`}>
{"Text"}
</Text>
</Box>
<Paragraph
className={`w-paragraph`}>
{"Sets the background to the opposite (dark) and makes "}
<Span
className={`w-text-1 c2i0393 c19evryj cntnubm c16hrg7f c12vy3a5 cuwcd3w c1qakuu0 cz20ayj`}>
{"--foreground-muted"}
</Span>
{" a proper contrast ratio."}
</Paragraph>
</Box>
</Box>
</Box>
<Box
id={"links-buttons"}
className={`w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c12y6bqh c8ys3vy`}>
{"Buttons and Links"}
</Heading>
</Box>
<Box
className={`w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c16xs6ny c1wt8a7g c1fhkm63 clv8gve c1lfjoq7 c133lpx4 c14u5o53 ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"button-group"}
</Text>
<Box
className={`w-box cry9bxc c1qyy4dh c1wt8a7g c17drxn3 cvj021w c15cml01`}>
<Link
className={`w-link c1b44psv cl8m66n cihfpxt cb4vmi8 c1j33arz c1r2vfc1 ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 ckm1y83 csru8nn c1md20bl c1e892th c1qyy4dh ct02u4h c1nouzdk c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p c1cb3y4c c1h3d6dm c10psuuk cl60rel c1ib9cr2 cb06ied`}>
<Text
tag={"span"}
className={`w-text`}>
{"button"}
</Text>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 6 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.63335 4.87364L1.51379 0.759206C1.16776 0.413598 0.605566 0.413598 0.259528 0.759206C-0.0865095 1.10481 -0.0865095 1.66631 0.259528 2.01191L3.75196 5.5L0.259528 8.9881C-0.0865095 9.3337 -0.0865095 9.8952 0.259528 10.2408C0.432545 10.4136 0.65957 10.5 0.886652 10.5C1.11373 10.5 1.34078 10.4136 1.51378 10.2408L5.63333 6.12637C5.97937 5.78076 5.97937 5.21927 5.63333 4.87366L5.63335 4.87364Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={`w-html-embed csru8nn cblpe2z c1y0z7zr`} />
</Link>
<Link
className={`w-link c1dnnq07 c1e7helk cihfpxt cb4vmi8 c1j33arz c1r2vfc1 ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 caafw5v csru8nn c1md20bl c1e892th c1qyy4dh ct02u4h c1nouzdk c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p c1cb3y4c c1h3d6dm ckz5c6u cl60rel c1ib9cr2 cb06ied`}>
{"is-button-secondary"}
</Link>
<Link
className={`w-link c1b44psv cl8m66n c1b2tb9q c1xm4ef6 c1j33arz c1r2vfc1 ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 ckm1y83 csru8nn c1md20bl c1e892th c1qyy4dh ct02u4h c1nouzdk c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p c1cb3y4c c1h3d6dm c10psuuk cl60rel c1ib9cr2 cb06ied`}>
<Text
tag={"span"}
className={`w-text`}>
{"is-button-small"}
</Text>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 6 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.63335 4.87364L1.51379 0.759206C1.16776 0.413598 0.605566 0.413598 0.259528 0.759206C-0.0865095 1.10481 -0.0865095 1.66631 0.259528 2.01191L3.75196 5.5L0.259528 8.9881C-0.0865095 9.3337 -0.0865095 9.8952 0.259528 10.2408C0.432545 10.4136 0.65957 10.5 0.886652 10.5C1.11373 10.5 1.34078 10.4136 1.51378 10.2408L5.63333 6.12637C5.97937 5.78076 5.97937 5.21927 5.63333 4.87366L5.63335 4.87364Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={`w-html-embed csru8nn cblpe2z c1y0z7zr`} />
</Link>
</Box>
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c16xs6ny c1wt8a7g c1fhkm63 clv8gve c1lfjoq7 c133lpx4 c14u5o53 ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"link"}
</Text>
<Link
className={`w-link cd07aq5 cld4m44 c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 cb06ied`}>
{"Link text you can edit"}
</Link>
<Link
className={`w-link c1b44psv csru8nn c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p c135vpv5 c1qyy4dh ct02u4h cl60rel c1ib9cr2 cb06ied`}>
{"is-link-nav"}
</Link>
</Box>
</Box>
</Box>
<Box
id={"elements"}
className={`w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c12y6bqh c8ys3vy`}>
{"Elements"}
</Heading>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"heading-1|2|3|4|5|6"}
</Text>
<Heading
className={`w-heading c11nr3ex c11dowh9 c1dnnq07 c8ys3vy`}>
{"Heading 1 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading c1dxq9cf c11dowh9 c12y6bqh c8ys3vy`}>
{"Heading 2 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading cuoke4w c11dowh9 c12y6bqh c8ys3vy`}>
{"Heading 3 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading c160atll c11dowh9 c12y6bqh c8ys3vy`}>
{"Heading 4 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading c1kol985 c11dowh9 c12y6bqh c8ys3vy`}>
{"Heading 5 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading c1kol985 c11dowh9 c12y6bqh c8ys3vy`}>
{"Heading 6 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Paragraph "}
<RichTextLink
className={`w-rich-text-link cd07aq5 cld4m44 c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 cb06ied`}>
{"text you"}
</RichTextLink>
{" can edit"}
{""}
<br />
{""}
{"that spans multiple lines"}
</Paragraph>
<Blockquote
className={`w-blockquote c1mwdnfw cm42med cptxs8s csdfh58`}>
<Span
className={`w-text-1 c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"blockquote"}
</Span>
{" text you can edit"}
</Blockquote>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"list"}
</Text>
<List
className={`w-list`}>
<ListItem
className={`w-list-item`}>
<Span
className={`w-text-1 c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"list-item"}
</Span>
{" text you can edit"}
</ListItem>
<ListItem
className={`w-list-item`}>
{"List Item text you can edit"}
</ListItem>
<ListItem
className={`w-list-item`}>
{"List Item text you can edit"}
</ListItem>
</List>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"separator"}
</Text>
<Separator
className={`w-separator c2uxojo czr2pxy`} />
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"code"}
</Text>
<CodeText
code={"console.log(\"Hello World\");"}
lang={""}
className={`w-code-text c2i0393 c19evryj cntnubm c16hrg7f c12vy3a5 cuwcd3w c1qakuu0 cz20ayj`} />
</Box>
</Box>
<Box
id={"forms"}
className={`w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c12y6bqh c8ys3vy`}>
{"Forms"}
</Heading>
</Box>
<Box
className={`w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"my-token"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"radix"}
className={`w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c12y6bqh c8ys3vy`}>
{"Radix"}
</Heading>
</Box>
<Box
className={`w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"my-token"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"utility"}
className={`w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c12y6bqh c8ys3vy`}>
{"Utility"}
</Heading>
</Box>
<Box
className={`w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"my-token"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"slots"}
className={`w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c12y6bqh c8ys3vy`}>
{"Slots"}
</Heading>
</Box>
<Box
className={`w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"my-slot"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"custom"}
className={`w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c12y6bqh c8ys3vy`}>
{"Custom"}
</Heading>
</Box>
<Box
className={`w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"badge"}
</Text>
<Text
className={`w-text c24qcja c9u18q3 c1911kcz cif7xwi crezeol cy9kb2v cu385pj cvghewe cfzf927 c1noknrj c11dowh9`}>
{"The text you can edit"}
</Text>
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"Card"}
</Text>
<Box
className={`w-box c1p8k1aa cry9bxc c1lfjoq7 c10zkoym ct8c5y2 c18v2pa2 c16xs6ny`}>
<Box
className={`w-box`}>
<Image
alt={"Laptop on desk"}
className={`w-image cr8yqfm c1ufwdzl c5blvcv cml0h3f crf3ls2 c1gxuxwl c57idyp`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c10zkoym ct8c5y2 ct02u4h c1mcu1jn c16xs6ny`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c16xs6ny c1wt8a7g`}>
<Text
className={`w-text c24qcja c9u18q3 c1911kcz cif7xwi crezeol cy9kb2v cu385pj cvghewe cfzf927 c1noknrj c11dowh9`}>
{"The text you can edit"}
</Text>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c12y6bqh c8ys3vy`}>
{"Heading text you can edit"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Paragraph text you can edit"}
</Paragraph>
</Box>
<Box
className={`w-box`}>
<Link
className={`w-link c1b44psv cl8m66n cihfpxt cb4vmi8 c1j33arz c1r2vfc1 ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 ckm1y83 csru8nn c1md20bl c1e892th c1qyy4dh ct02u4h c1nouzdk c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p c1cb3y4c c1h3d6dm c10psuuk cl60rel c1ib9cr2 cb06ied`}>
{"Link text you can edit"}
</Link>
</Box>
</Box>
</Box>
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet c7rvndl c2w8hv4 ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"is-card-horizontal"}
</Text>
<Box
className={`w-box c1p8k1aa copqmak c1lxiyww c10zkoym ct8c5y2 c18v2pa2 c1qyy4dh c1f64byh cx6c9kw c174sw29`}>
<Box
className={`w-box`}>
<Image
alt={"Laptop on desk"}
className={`w-image cr8yqfm c1ufwdzl c5blvcv cml0h3f crf3ls2 c1gxuxwl c57idyp`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c10zkoym ct8c5y2 ct02u4h c1mcu1jn c16xs6ny`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c16xs6ny c1wt8a7g`}>
<Text
className={`w-text c24qcja c9u18q3 c1911kcz cif7xwi crezeol cy9kb2v cu385pj cvghewe cfzf927 c1noknrj c11dowh9`}>
{"The text you can edit"}
</Text>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c12y6bqh c8ys3vy`}>
{"Heading text you can edit"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Paragraph text you can edit"}
</Paragraph>
</Box>
<Box
className={`w-box`}>
<Link
className={`w-link c1b44psv cl8m66n cihfpxt cb4vmi8 c1j33arz c1r2vfc1 ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 ckm1y83 csru8nn c1md20bl c1e892th c1qyy4dh ct02u4h c1nouzdk c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p c1cb3y4c c1h3d6dm c10psuuk cl60rel c1ib9cr2 cb06ied`}>
{"Link text you can edit"}
</Link>
</Box>
</Box>
</Box>
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet c130qyz3 cqlgvkl c82o5tr ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"Testimonial"}
</Text>
<Box
className={`w-box cr8yqfm c1ufwdzl c5blvcv cml0h3f cavd3zn c1nq45hp czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cnqbj7z cry9bxc c1lfjoq7 c16xs6ny c1wt8a7g c1z0l37u c1ml0hr7 cglkhmz c97dlol c1t5a35i`}>
<Paragraph
className={`w-paragraph`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}
</Paragraph>
<Box
className={`w-box cry9bxc c1qyy4dh c1wt8a7g c1z0l37u c1ml0hr7`}>
<Image
alt={"Picture of client"}
className={`w-image cx2gy9w c1y46zjw c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t cagnu3j c1gxuxwl c57idyp`} />
<Text
className={`w-text c8ys3vy c1b44psv c11dowh9 c5z69y4`}>
{"Client Name"}
</Text>
</Box>
<Text
className={`w-text cdwd3jx c7gavf2 c10wulwe cdceycu c1nk3tgl c1b44psv c1e4un1c c13dem6u`}>
{"“"}
</Text>
</Box>
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"Section Header"}
</Text>
<Box
className={`w-box cry9bxc c1qyy4dh ct02u4h c1z0l37u c1ml0hr7 c1lfjoq7 c1qom380 c1rco612 c9jnjeu c1357293`}>
<Heading
className={`w-heading c1dxq9cf c11dowh9 c12y6bqh c8ys3vy c1qom380`}>
{"Case Studies"}
</Heading>
<Paragraph
className={`w-paragraph c1qom380`}>
{"Solving user & business problems since last 15+ years. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"my-token"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"notes"}
className={`w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c12y6bqh c8ys3vy`}>
{"Notes"}
</Heading>
<Paragraph
className={`w-paragraph che9upb c1rco612`}>
{"Add notes for yourself or other creators that explain any nuances of the build."}
</Paragraph>
</Box>
<Box
className={`w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Paragraph
className={`w-paragraph`}>
{"The following CSS variables were the modifications or additions made to the default "}
<RichTextLink
href={"https://wstd.us/craft"}
target={"_blank"}
className={`w-rich-text-link cd07aq5 cld4m44 c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 cb06ied`}>
{"Craft"}
</RichTextLink>
{" variables, jyfi."}
</Paragraph>
<CodeText
code={"--foreground-primary: var(--gray-12);\n--foreground-muted: var(--gray-6);\n--foreground-accent: var(--green-8);\n--foreground-border: var(--gray-11);\n\n--background-primary: var(--gray-0);\n--background-secondary: var(--gray-12);\n--background-tertiary: var(--gray-11);\n--background-accent: var(--foreground-accent);\n--background-card: var(--background-primary);\n\n--shadow-accent: 0px 8px 30px rgba(63, 142, 0, 0.5);\n--font-family-primary: \"IBM Plex Mono\", Arial;\n--font-family-secondary: \"Raleway\", Arial;\n\n--gray-0: #FFFFFF;\n--gray-2: #F8F8F8;\n--gray-4: #D8D8D8;\n--gray-6: #9C9C9C;\n--gray-7: #757575;\n--gray-11: #1B1B1B;\n--gray-12: #080808;\n\n--green-0: #E0FFF8;\n--green-6: #62BA1B;\n--green-7: #3F8E00;\n--green-8: #398000;\n\n--blue-2: #D0E6FF;\n--blue-7: #000AFF;\n\n--teal-6: #2AB090;\n--teal-9: #1d7b65;\n\n--orange-9: #99610e;\n--orange-7: #FFA217;\n--orange-0: #FFF6E9;\n\n--gray-1: unset;\n--gray-3: unset;\n--gray-5: unset;\n--gray-8: unset;\n--gray-9: unset;\n--gray-10: unset;\n\n--green-1: unset;\n--green-2: unset;\n--green-3: unset;\n--green-4: unset;\n--green-5: unset;\n--green-9: unset;\n--green-10: unset;\n--green-11: unset;\n--green-12: unset;\n\n--blue-0: unset;\n--blue-1: unset;\n--blue-3: unset;\n--blue-4: unset;\n--blue-5: unset;\n--blue-6: unset;\n--blue-8: unset;\n--blue-9: unset;\n--blue-10: unset;\n--blue-11: unset;\n--blue-12: unset;\n\n--teal-0: #E0FFF8;\n--teal-1: unset;\n--teal-2: unset;\n--teal-3: unset;\n--teal-4: unset;\n--teal-5: unset;\n--teal-7: unset;\n--teal-8: unset;\n--teal-10: unset;\n--teal-11: unset;\n--teal-12: unset;\n\n--orange-1: unset;\n--orange-2: unset;\n--orange-3: unset;\n--orange-4: unset;\n--orange-5: unset;\n--orange-6: unset;\n--orange-8: unset;\n--orange-10: unset;\n--orange-11: unset;\n--orange-12: unset;\n\n--yellow-1: unset;\n--yellow-2: unset;\n--yellow-3: unset;\n--yellow-4: unset;\n--yellow-5: unset;\n--yellow-6: unset;\n--yellow-7: unset;\n--yellow-8: unset;\n--yellow-9: unset;\n--yellow-10: unset;\n--yellow-11: unset;\n--yellow-12: unset;\n\n--gap-m: var(--size-fluid-5);\n--gap-s: var(--size-fluid-3);\n\n--gradient-1: linear-gradient(to right, #484848 0%, rgba(27, 27, 27, 0) 100%);\n"}
lang={"css"}
className={`w-code-text c2i0393 c19evryj cntnubm c16hrg7f c1qakuu0 czr2pxy cz20ayj cf58xc1`} />
</Box>
</Box>
</Box>
</Box>
<Box
tag={"nav"}
className={`w-box c1sche0c c1l2989r cjqo3r0 c1cvcmzo c3xzas1 c1n6cdq4 c1sl0nnp c1qakuu0 c47o47j cw5izhw`}>
<Box
className={`w-box c1357293 c9jnjeu c5tmc3l c1ldum37 czr2pxy c155uc7w cry9bxc c1lxiyww c1z0l37u c1ml0hr7 c18v2pa2 co39b1z`}>
<Link
href={"/style-guide#layout"}
className={`w-link cd07aq5 cld4m44 c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 cb06ied`}>
{"Layout"}
</Link>
<Link
href={"/style-guide#colors"}
className={`w-link cd07aq5 cld4m44 c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 cb06ied`}>
{"Colors"}
</Link>
<Link
href={"/style-guide#links-buttons"}
className={`w-link cd07aq5 cld4m44 c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 cb06ied`}>
{"Links & Buttons"}
</Link>
<Link
href={"/style-guide#elements"}
className={`w-link cd07aq5 cld4m44 c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 cb06ied`}>
{"Elements"}
</Link>
<Link
href={"/style-guide#forms"}
className={`w-link cd07aq5 cld4m44 c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 cb06ied`}>
{"Forms"}
</Link>
<Link
href={"/style-guide#radix"}
className={`w-link cd07aq5 cld4m44 c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 cb06ied`}>
{"Radix"}
</Link>
<Link
href={"/style-guide#utility"}
className={`w-link cd07aq5 cld4m44 c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 cb06ied`}>
{"Utility"}
</Link>
<Link
href={"/style-guide"}
className={`w-link cd07aq5 cld4m44 c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 cb06ied`}>
{"Slots"}
</Link>
<Link
href={"/style-guide#custom"}
className={`w-link cd07aq5 cld4m44 c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 cb06ied`}>
{"Custom"}
</Link>
<Link
href={"/style-guide#notes"}
className={`w-link cd07aq5 cld4m44 c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 cb06ied`}>
{"Notes"}
</Link>
</Box>
</Box>
</Box>
<Box
className={`w-box c1357293 c9jnjeu c5tmc3l c1ldum37 czr2pxy c155uc7w cry9bxc c1lfjoq7 c1md20bl c1e892th cna0hdz c1mzb2kd c1qyy4dh ct02u4h`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c12y6bqh c8ys3vy`}>
{"👇Template for new pages👇"}
</Heading>
<Paragraph
className={`w-paragraph c1rco612 c1qom380 czt9u4x`}>
{"When creating a new page, you can copy the \"Page Wrapper\" instance below (see navigator) and paste it on the new page. It contains the skeleton of a page, including a nav, footer, and section."}
</Paragraph>
</Box>
<Box
className={`w-box`}>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<style>\n  * {\n    /* Remove preset margins on everything so they can be applied where we want. */\n    margin: 0;\n    /* Make links scroll to their sections smoothly. */\n    scroll-behavior: smooth;\n  }\n</style>"}
className={`w-html-embed`} />
<Box
className={`w-box c130qyz3`}>
<Box
tag={"nav"}
className={`w-box c1357293 c9jnjeu c5tmc3l c1ldum37 czr2pxy c155uc7w cry9bxc c1lxiyww ca4qjwu c1cdc69r c1e5l06w c1kujfpy c1vfv5ml c18v2pa2 c1gut7ra cvyaqlm c5dy17i c1hsfuam c12jt7do cc3dq2t`}>
<Slot>
<Fragment_1>
<Box
className={`w-box cry9bxc c1qyy4dh c18v2pa2 c10zkoym ct8c5y2 c15cml01 c10x096o c1rstvfo`}>
<Link
href={"/"}
className={`w-link c1b44psv csru8nn c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p c135vpv5 c1qyy4dh ct02u4h cl60rel c1ib9cr2 cb06ied`}>
{"Home"}
</Link>
<Link
href={"/#casestudies"}
className={`w-link c1b44psv csru8nn c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p c135vpv5 c1qyy4dh ct02u4h cl60rel c1ib9cr2 cb06ied`}>
{"Case Studies"}
</Link>
<Link
href={"/#testimonials"}
className={`w-link c1b44psv csru8nn c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p c135vpv5 c1qyy4dh ct02u4h cl60rel c1ib9cr2 cb06ied`}>
{"Testimonials"}
</Link>
<Link
href={"/#projects"}
className={`w-link c1b44psv csru8nn c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p c135vpv5 c1qyy4dh ct02u4h cl60rel c1ib9cr2 cb06ied`}>
{"Projects"}
</Link>
<Link
href={"/#contact"}
className={`w-link c1b44psv csru8nn c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p c135vpv5 c1qyy4dh ct02u4h cl60rel c1ib9cr2 cb06ied`}>
{"Contact"}
</Link>
</Box>
<Box
className={`w-box cry9bxc ce5h5qp csadq8m c1qyy4dh ct02u4h ck3ozxv c1rstvfo c10x096o`}>
<Link
aria-label={"LinkedIn"}
className={`w-link c1b44psv csru8nn c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p c135vpv5 c1qyy4dh ct02u4h cl60rel c1ib9cr2 cb06ied`}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 18 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M0 1.97499C0 1.40259 0.202708 0.930366 0.608108 0.558324C1.01351 0.186265 1.54055 0.000244141 2.18919 0.000244141C2.82626 0.000244141 3.34169 0.183397 3.73552 0.549738C4.14092 0.927515 4.34363 1.41976 4.34363 2.0265C4.34363 2.576 4.14672 3.0339 3.7529 3.40024C3.3475 3.77802 2.81467 3.9669 2.15444 3.9669H2.13707C1.49999 3.9669 0.984562 3.77802 0.590734 3.40024C0.196905 3.02246 0 2.54737 0 1.97499ZM0.225869 17.0002V5.52953H4.08301V17.0002H0.225869ZM6.22008 17.0002H10.0772V10.5952C10.0772 10.1945 10.1236 9.8854 10.2162 9.6679C10.3784 9.27867 10.6245 8.94954 10.9546 8.68053C11.2847 8.4115 11.6988 8.277 12.1969 8.277C13.4942 8.277 14.1429 9.1413 14.1429 10.8699V17.0002H18V10.4235C18 8.72918 17.5946 7.44417 16.7838 6.56842C15.973 5.69266 14.9016 5.25478 13.5695 5.25478C12.0753 5.25478 10.9112 5.89013 10.0772 7.16084V7.19518H10.0598L10.0772 7.16084V5.52953H6.22008C6.24324 5.89585 6.25483 7.0349 6.25483 8.94669C6.25483 10.8585 6.24324 13.543 6.22008 17.0002Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={`w-html-embed csru8nn cblpe2z c1y0z7zr`} />
</Link>
<Link
aria-label={"Behance"}
className={`w-link c1b44psv csru8nn c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p c135vpv5 c1qyy4dh ct02u4h cl60rel c1ib9cr2 cb06ied`}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 31 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M8.7045 0.424316C9.588 0.424316 10.383 0.500817 11.112 0.656817C11.8365 0.811317 12.4545 1.06632 12.9765 1.41882C13.491 1.77132 13.893 2.23932 14.1825 2.82732C14.463 3.40782 14.6025 4.13382 14.6025 4.99182C14.6025 5.92182 14.3925 6.69882 13.971 7.31832C13.5465 7.93932 12.921 8.44782 12.087 8.84082C13.2225 9.16932 14.064 9.74382 14.622 10.5598C15.183 11.3833 15.4575 12.3688 15.4575 13.5238C15.4575 14.4613 15.279 15.2668 14.9205 15.9433C14.575 16.6097 14.0738 17.183 13.4595 17.6143C12.8232 18.0574 12.1124 18.3826 11.361 18.5743C10.5732 18.7811 9.76197 18.885 8.9475 18.8833H0V0.424316H8.7045ZM8.178 7.88232C8.898 7.88232 9.495 7.71132 9.966 7.36482C10.434 7.02282 10.6605 6.45882 10.6605 5.68632C10.6605 5.25732 10.584 4.90332 10.434 4.62582C10.2879 4.35885 10.0716 4.13686 9.8085 3.98382C9.53315 3.82051 9.22925 3.71106 8.913 3.66132C8.56829 3.59703 8.21814 3.56638 7.8675 3.56982H4.065V7.88232H8.178ZM8.4045 15.7408C8.805 15.7408 9.186 15.7063 9.5445 15.6253C9.906 15.5473 10.227 15.4213 10.5 15.2338C10.773 15.0538 10.998 14.8093 11.16 14.4973C11.3235 14.1883 11.403 13.7848 11.403 13.3003C11.403 12.3493 11.1345 11.6728 10.6035 11.2633C10.071 10.8583 9.357 10.6573 8.4825 10.6573H4.065V15.7423H8.4045V15.7408ZM21.252 15.6793C21.8025 16.2163 22.596 16.4863 23.628 16.4863C24.3675 16.4863 25.0065 16.2988 25.545 15.9268C26.076 15.5533 26.4 15.1543 26.5245 14.7418H29.757C29.238 16.3498 28.4505 17.4988 27.3735 18.1903C26.31 18.8848 25.0155 19.2298 23.5035 19.2298C22.4505 19.2298 21.5025 19.0603 20.6535 18.7243C19.8386 18.407 19.1022 17.9167 18.495 17.2873C17.8978 16.6433 17.4362 15.8858 17.1375 15.0598C16.8092 14.1465 16.6466 13.1818 16.6575 12.2113C16.6575 11.2123 16.824 10.2778 17.151 9.41532C17.4614 8.58159 17.9381 7.81966 18.552 7.17582C19.1595 6.54582 19.8795 6.04932 20.718 5.68482C21.5997 5.31398 22.5485 5.12912 23.505 5.14182C24.636 5.14182 25.6245 5.36082 26.4735 5.80182C27.2968 6.22278 28.0107 6.82984 28.5585 7.57482C29.103 8.31432 29.4915 9.16182 29.733 10.1113C29.9745 11.0593 30.0585 12.0493 29.9895 13.0858H20.343C20.3445 14.1418 20.7 15.1423 21.252 15.6793ZM25.47 8.65782C25.0335 8.17482 24.2955 7.91382 23.3925 7.91382C22.806 7.91382 22.3215 8.01132 21.9315 8.21232C21.5749 8.39243 21.2585 8.64297 21.0015 8.94882C20.7758 9.22649 20.6084 9.5469 20.5095 9.89082C20.423 10.1776 20.3672 10.4727 20.343 10.7713H26.316C26.229 9.83532 25.908 9.14382 25.47 8.65782ZM19.593 1.66332H27.0765V3.48582H19.593V1.66332Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={`w-html-embed csru8nn cblpe2z c1y0z7zr`} />
</Link>
<Link
aria-label={"X/Twitter"}
className={`w-link c1b44psv csru8nn c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p c135vpv5 c1qyy4dh ct02u4h cl60rel c1ib9cr2 cb06ied`}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 18 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M17.5417 1.71084C16.8824 1.99685 16.1852 2.18592 15.4718 2.27217C16.2244 1.82251 16.7885 1.11511 17.0593 0.281193C16.352 0.702249 15.5777 0.998908 14.7701 1.15828C14.2303 0.572887 13.5114 0.18322 12.7263 0.05039C11.9412 -0.0824399 11.1342 0.0490805 10.4319 0.424324C9.72952 0.799568 9.17161 1.39731 8.8456 2.1238C8.5196 2.8503 8.44394 3.66445 8.63051 4.43857C7.20036 4.36623 5.80142 3.99385 4.52457 3.3456C3.24773 2.69736 2.12153 1.78775 1.21915 0.675881C0.90264 1.22859 0.736329 1.85453 0.73675 2.49144C0.735628 3.08293 0.880783 3.66552 1.15929 4.18734C1.4378 4.70916 1.84102 5.15402 2.33304 5.4823C1.76116 5.46674 1.2015 5.31329 0.701667 5.03499V5.07884C0.705953 5.90759 0.996362 6.70942 1.52377 7.34871C2.05118 7.98799 2.78321 8.42548 3.59604 8.58718C3.28315 8.6824 2.95829 8.73261 2.63125 8.73628C2.40487 8.73364 2.17905 8.71311 1.9559 8.67489C2.18737 9.38779 2.63531 10.0108 3.23738 10.4573C3.83946 10.9037 4.56573 11.1514 5.31513 11.1658C4.04967 12.1615 2.48731 12.705 0.877084 12.7095C0.583906 12.7104 0.29096 12.6929 0 12.6568C1.64403 13.7183 3.55992 14.2818 5.51686 14.2795C6.8673 14.2935 8.20699 14.0383 9.4577 13.5287C10.7084 13.0192 11.845 12.2656 12.8012 11.3118C13.7574 10.3581 14.514 9.22341 15.0267 7.97401C15.5394 6.72462 15.7981 5.38558 15.7875 4.03511C15.7875 3.88601 15.7875 3.72813 15.7875 3.57026C16.4758 3.057 17.0693 2.42779 17.5417 1.71084V1.71084Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={`w-html-embed csru8nn cblpe2z c1y0z7zr`} />
</Link>
</Box>
</Fragment_1>
</Slot>
</Box>
<Collapsible
className={`w-collapsible cwvpjlf cx6c9kw c174sw29 czqy8m4 c4etu7w c10x096o c1fvno8n c18rgifh cscsz6x coh89bn`}>
<CollapsibleTrigger>
<Button
type={"button"}
aria-label={"Open mobile menu"}
className={`w-button c1b44psv cl8m66n c1b2tb9q c1xm4ef6 c1j33arz c1r2vfc1 ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 ckm1y83 csru8nn c1md20bl c1e892th c1qyy4dh ct02u4h c1nouzdk c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p c1cb3y4c c1h3d6dm c10psuuk cl60rel c1ib9cr2 cb06ied cv7lanz c1q2ekan cngthtj ckqzz7r`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-menu\"><line x1=\"4\" x2=\"20\" y1=\"12\" y2=\"12\"></line><line x1=\"4\" x2=\"20\" y1=\"6\" y2=\"6\"></line><line x1=\"4\" x2=\"20\" y1=\"18\" y2=\"18\"></line></svg>"}
className={`w-html-embed`} />
</Button>
</CollapsibleTrigger>
<CollapsibleContent
data-ani={"expand"}
className={`w-collapsible-content`}>
<Box
tag={"nav"}
className={`w-box c1357293 c9jnjeu c5tmc3l c1ldum37 czr2pxy c155uc7w cry9bxc c1lfjoq7 ca4qjwu c1cdc69r c1mnel40 c1iylx1l c19z51lk cnntvf0`}>
<Slot>
<Fragment_1>
<Box
className={`w-box cry9bxc c1qyy4dh c18v2pa2 c10zkoym ct8c5y2 c15cml01 c10x096o c1rstvfo`}>
<Link
href={"/"}
className={`w-link c1b44psv csru8nn c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p c135vpv5 c1qyy4dh ct02u4h cl60rel c1ib9cr2 cb06ied`}>
{"Home"}
</Link>
<Link
href={"/#casestudies"}
className={`w-link c1b44psv csru8nn c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p c135vpv5 c1qyy4dh ct02u4h cl60rel c1ib9cr2 cb06ied`}>
{"Case Studies"}
</Link>
<Link
href={"/#testimonials"}
className={`w-link c1b44psv csru8nn c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p c135vpv5 c1qyy4dh ct02u4h cl60rel c1ib9cr2 cb06ied`}>
{"Testimonials"}
</Link>
<Link
href={"/#projects"}
className={`w-link c1b44psv csru8nn c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p c135vpv5 c1qyy4dh ct02u4h cl60rel c1ib9cr2 cb06ied`}>
{"Projects"}
</Link>
<Link
href={"/#contact"}
className={`w-link c1b44psv csru8nn c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p c135vpv5 c1qyy4dh ct02u4h cl60rel c1ib9cr2 cb06ied`}>
{"Contact"}
</Link>
</Box>
<Box
className={`w-box cry9bxc ce5h5qp csadq8m c1qyy4dh ct02u4h ck3ozxv c1rstvfo c10x096o`}>
<Link
aria-label={"LinkedIn"}
className={`w-link c1b44psv csru8nn c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p c135vpv5 c1qyy4dh ct02u4h cl60rel c1ib9cr2 cb06ied`}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 18 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M0 1.97499C0 1.40259 0.202708 0.930366 0.608108 0.558324C1.01351 0.186265 1.54055 0.000244141 2.18919 0.000244141C2.82626 0.000244141 3.34169 0.183397 3.73552 0.549738C4.14092 0.927515 4.34363 1.41976 4.34363 2.0265C4.34363 2.576 4.14672 3.0339 3.7529 3.40024C3.3475 3.77802 2.81467 3.9669 2.15444 3.9669H2.13707C1.49999 3.9669 0.984562 3.77802 0.590734 3.40024C0.196905 3.02246 0 2.54737 0 1.97499ZM0.225869 17.0002V5.52953H4.08301V17.0002H0.225869ZM6.22008 17.0002H10.0772V10.5952C10.0772 10.1945 10.1236 9.8854 10.2162 9.6679C10.3784 9.27867 10.6245 8.94954 10.9546 8.68053C11.2847 8.4115 11.6988 8.277 12.1969 8.277C13.4942 8.277 14.1429 9.1413 14.1429 10.8699V17.0002H18V10.4235C18 8.72918 17.5946 7.44417 16.7838 6.56842C15.973 5.69266 14.9016 5.25478 13.5695 5.25478C12.0753 5.25478 10.9112 5.89013 10.0772 7.16084V7.19518H10.0598L10.0772 7.16084V5.52953H6.22008C6.24324 5.89585 6.25483 7.0349 6.25483 8.94669C6.25483 10.8585 6.24324 13.543 6.22008 17.0002Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={`w-html-embed csru8nn cblpe2z c1y0z7zr`} />
</Link>
<Link
aria-label={"Behance"}
className={`w-link c1b44psv csru8nn c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p c135vpv5 c1qyy4dh ct02u4h cl60rel c1ib9cr2 cb06ied`}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 31 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M8.7045 0.424316C9.588 0.424316 10.383 0.500817 11.112 0.656817C11.8365 0.811317 12.4545 1.06632 12.9765 1.41882C13.491 1.77132 13.893 2.23932 14.1825 2.82732C14.463 3.40782 14.6025 4.13382 14.6025 4.99182C14.6025 5.92182 14.3925 6.69882 13.971 7.31832C13.5465 7.93932 12.921 8.44782 12.087 8.84082C13.2225 9.16932 14.064 9.74382 14.622 10.5598C15.183 11.3833 15.4575 12.3688 15.4575 13.5238C15.4575 14.4613 15.279 15.2668 14.9205 15.9433C14.575 16.6097 14.0738 17.183 13.4595 17.6143C12.8232 18.0574 12.1124 18.3826 11.361 18.5743C10.5732 18.7811 9.76197 18.885 8.9475 18.8833H0V0.424316H8.7045ZM8.178 7.88232C8.898 7.88232 9.495 7.71132 9.966 7.36482C10.434 7.02282 10.6605 6.45882 10.6605 5.68632C10.6605 5.25732 10.584 4.90332 10.434 4.62582C10.2879 4.35885 10.0716 4.13686 9.8085 3.98382C9.53315 3.82051 9.22925 3.71106 8.913 3.66132C8.56829 3.59703 8.21814 3.56638 7.8675 3.56982H4.065V7.88232H8.178ZM8.4045 15.7408C8.805 15.7408 9.186 15.7063 9.5445 15.6253C9.906 15.5473 10.227 15.4213 10.5 15.2338C10.773 15.0538 10.998 14.8093 11.16 14.4973C11.3235 14.1883 11.403 13.7848 11.403 13.3003C11.403 12.3493 11.1345 11.6728 10.6035 11.2633C10.071 10.8583 9.357 10.6573 8.4825 10.6573H4.065V15.7423H8.4045V15.7408ZM21.252 15.6793C21.8025 16.2163 22.596 16.4863 23.628 16.4863C24.3675 16.4863 25.0065 16.2988 25.545 15.9268C26.076 15.5533 26.4 15.1543 26.5245 14.7418H29.757C29.238 16.3498 28.4505 17.4988 27.3735 18.1903C26.31 18.8848 25.0155 19.2298 23.5035 19.2298C22.4505 19.2298 21.5025 19.0603 20.6535 18.7243C19.8386 18.407 19.1022 17.9167 18.495 17.2873C17.8978 16.6433 17.4362 15.8858 17.1375 15.0598C16.8092 14.1465 16.6466 13.1818 16.6575 12.2113C16.6575 11.2123 16.824 10.2778 17.151 9.41532C17.4614 8.58159 17.9381 7.81966 18.552 7.17582C19.1595 6.54582 19.8795 6.04932 20.718 5.68482C21.5997 5.31398 22.5485 5.12912 23.505 5.14182C24.636 5.14182 25.6245 5.36082 26.4735 5.80182C27.2968 6.22278 28.0107 6.82984 28.5585 7.57482C29.103 8.31432 29.4915 9.16182 29.733 10.1113C29.9745 11.0593 30.0585 12.0493 29.9895 13.0858H20.343C20.3445 14.1418 20.7 15.1423 21.252 15.6793ZM25.47 8.65782C25.0335 8.17482 24.2955 7.91382 23.3925 7.91382C22.806 7.91382 22.3215 8.01132 21.9315 8.21232C21.5749 8.39243 21.2585 8.64297 21.0015 8.94882C20.7758 9.22649 20.6084 9.5469 20.5095 9.89082C20.423 10.1776 20.3672 10.4727 20.343 10.7713H26.316C26.229 9.83532 25.908 9.14382 25.47 8.65782ZM19.593 1.66332H27.0765V3.48582H19.593V1.66332Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={`w-html-embed csru8nn cblpe2z c1y0z7zr`} />
</Link>
<Link
aria-label={"X/Twitter"}
className={`w-link c1b44psv csru8nn c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p c135vpv5 c1qyy4dh ct02u4h cl60rel c1ib9cr2 cb06ied`}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 18 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M17.5417 1.71084C16.8824 1.99685 16.1852 2.18592 15.4718 2.27217C16.2244 1.82251 16.7885 1.11511 17.0593 0.281193C16.352 0.702249 15.5777 0.998908 14.7701 1.15828C14.2303 0.572887 13.5114 0.18322 12.7263 0.05039C11.9412 -0.0824399 11.1342 0.0490805 10.4319 0.424324C9.72952 0.799568 9.17161 1.39731 8.8456 2.1238C8.5196 2.8503 8.44394 3.66445 8.63051 4.43857C7.20036 4.36623 5.80142 3.99385 4.52457 3.3456C3.24773 2.69736 2.12153 1.78775 1.21915 0.675881C0.90264 1.22859 0.736329 1.85453 0.73675 2.49144C0.735628 3.08293 0.880783 3.66552 1.15929 4.18734C1.4378 4.70916 1.84102 5.15402 2.33304 5.4823C1.76116 5.46674 1.2015 5.31329 0.701667 5.03499V5.07884C0.705953 5.90759 0.996362 6.70942 1.52377 7.34871C2.05118 7.98799 2.78321 8.42548 3.59604 8.58718C3.28315 8.6824 2.95829 8.73261 2.63125 8.73628C2.40487 8.73364 2.17905 8.71311 1.9559 8.67489C2.18737 9.38779 2.63531 10.0108 3.23738 10.4573C3.83946 10.9037 4.56573 11.1514 5.31513 11.1658C4.04967 12.1615 2.48731 12.705 0.877084 12.7095C0.583906 12.7104 0.29096 12.6929 0 12.6568C1.64403 13.7183 3.55992 14.2818 5.51686 14.2795C6.8673 14.2935 8.20699 14.0383 9.4577 13.5287C10.7084 13.0192 11.845 12.2656 12.8012 11.3118C13.7574 10.3581 14.514 9.22341 15.0267 7.97401C15.5394 6.72462 15.7981 5.38558 15.7875 4.03511C15.7875 3.88601 15.7875 3.72813 15.7875 3.57026C16.4758 3.057 17.0693 2.42779 17.5417 1.71084V1.71084Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={`w-html-embed csru8nn cblpe2z c1y0z7zr`} />
</Link>
</Box>
</Fragment_1>
</Slot>
</Box>
</CollapsibleContent>
</Collapsible>
</Box>
</Fragment_1>
</Slot>
<Box
tag={"main"}
className={`w-box`}>
<Box
tag={"section"}
className={`w-box cna0hdz c1mzb2kd`}>
<Box
className={`w-box c1357293 c9jnjeu c5tmc3l c1ldum37 czr2pxy c155uc7w cry9bxc c1lfjoq7 ca4qjwu c1cdc69r`} />
</Box>
</Box>
<Slot>
<Fragment_1>
<Box
tag={"footer"}
id={"contact"}
className={`w-box c130qyz3 cqlgvkl c82o5tr`}>
<Box
className={`w-box c1357293 c9jnjeu c5tmc3l c1ldum37 czr2pxy c155uc7w cry9bxc c1lfjoq7 ca4qjwu c1cdc69r cna0hdz c1mzb2kd`}>
<Box
className={`w-box cry9bxc c1qyy4dh ct02u4h c1z0l37u c1ml0hr7 c1lfjoq7 c1qom380 c1rco612 c9jnjeu c1357293`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c1b44psv c8ys3vy`}>
{"Get In Touch"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}
</Paragraph>
</Box>
<Box
className={`w-box`}>
<Form
state={formState}
onStateChange={(state: any) => {
formState = state
set$formState(formState)
}}
className={`w-webhook-form`}>
{(formState === 'initial' || formState === 'error') &&
<Box
className={`w-box cry9bxc c1lfjoq7 c10zkoym ct8c5y2 c3fmn7t c9jnjeu c1357293`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7`}>
<Box
className={`w-box cry9bxc c1778y6x c1wt8a7g c1lfjoq7 c1md20bl c1e892th c1482uel`}>
<Label
className={`w-label c1b44psv c1cb3y4c`}>
{"Phone"}
</Label>
<Input
placeholder={"Phone"}
required={true}
name={"phone"}
className={`w-text-input c1a8d7ts c1b2tb9q c122t6uk c1xm4ef6 c1932brm ccfzz03 cub2gss cgcvr98 c1xjllne c1e3v5m0 cl60rel c2zsigv c1qcsrcr cqgzh32`} />
</Box>
<Box
className={`w-box cry9bxc c1778y6x c1wt8a7g c1lfjoq7 c1md20bl c1e892th c1482uel`}>
<Label
className={`w-label c1b44psv c1cb3y4c`}>
{"Email"}
</Label>
<Input
placeholder={"Email"}
required={true}
type={"email"}
name={"email"}
className={`w-text-input c1a8d7ts c1b2tb9q c122t6uk c1xm4ef6 c1932brm ccfzz03 cub2gss cgcvr98 c1xjllne c1e3v5m0 cl60rel c2zsigv c1qcsrcr cqgzh32`} />
</Box>
<Box
className={`w-box cry9bxc c1778y6x c1wt8a7g c1lfjoq7 c1md20bl c1e892th c1482uel`}>
<Label
className={`w-label c1b44psv c1cb3y4c`}>
{"Message"}
</Label>
<Textarea
placeholder={"Message"}
name={"message"}
className={`w-text-area c1a8d7ts c1b2tb9q c122t6uk c1xm4ef6 c1932brm ccfzz03 cub2gss cgcvr98 c1xjllne c1e3v5m0 cl60rel c2zsigv c1qcsrcr cqgzh32`} />
</Box>
</Box>
<Button
className={`w-button c1b44psv cl8m66n cihfpxt cb4vmi8 c1j33arz c1r2vfc1 ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 ckm1y83 csru8nn c1md20bl c1e892th c1qyy4dh ct02u4h c1nouzdk c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p c1cb3y4c c1h3d6dm c10psuuk cl60rel c1ib9cr2 cb06ied`}>
{"Submit"}
</Button>
</Box>
}
{(formState === 'success') &&
<Box
className={`w-box`}>
{"Thank you for getting in touch!"}
</Box>
}
{(formState === 'error') &&
<Box
className={`w-box cle73z7`}>
{"Sorry, something went wrong."}
</Box>
}
</Form>
</Box>
</Box>
<Box
className={`w-box c1e5l06w cup9vyi c1n5d942`}>
<Box
className={`w-box c1357293 c9jnjeu c5tmc3l c1ldum37 czr2pxy c155uc7w cry9bxc c1lfjoq7 c1md20bl c1e892th c1qyy4dh c1wt8a7g`}>
<Text
className={`w-text c1qom380`}>
{"Made with ❤️"}
</Text>
<Link
href={"/credits"}
className={`w-link cd07aq5 cld4m44 c1hz2opz c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 cb06ied`}>
{"Credits"}
</Link>
</Box>
</Box>
</Box>
<Link
href={"https://webstudio.is/"}
target={"_blank"}
rel={"nofollow"}
className={`w-link cx7e777 cn12ej2 c1ngdwug c10yh23j c7f1npl c1sjzfnm c1trj0l7 cjqo3r0 cbuoy5w c393lej csxsvt6 c1oj4qw c183qt6d c1twgu0n c5r7m82 c1fhiulb cifio c1u7hg1c c1qqyhy5 c1mb8swa c1awhn4n c1qyy4dh ct02u4h csru8nn c135vpv5 c119suh8 cujxabw c17xbrdu c1lvufj2 c1oohece co9inq6 c18nx7en c13zjl4p ch9sscy c272dxa`}>
<Image
src={"/assets/logo_r1qaJQiri6sK3rPyq-Sar.svg"}
width={20}
height={20}
alt={"Webstudio Logo"}
optimize={false}
className={`w-image c13fq7lq c1ckxn0n`} />
<Text
tag={"span"}
className={`w-text`}>
{"Built with Webstudio"}
</Text>
</Link>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<script>(function(factory){if(typeof define===\"function\"&&define.amd){define(factory)}else if(typeof module!==\"undefined\"&&module.exports){module.exports=factory()}else{window.enterView=factory.call(this)}})((()=>{const lib=({selector:selector,enter:enter=(()=>{}),exit:exit=(()=>{}),progress:progress=(()=>{}),offset:offset=0,once:once=false})=>{let raf=null;let ticking=false;let elements=[];let height=0;function setupRaf(){raf=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){return setTimeout(callback,1e3/60)}}function getOffsetHeight(){if(offset&&typeof offset===\"number\"){const fraction=Math.min(Math.max(0,offset),1);return height-fraction*height}return height}function updateHeight(){const cH=document.documentElement.clientHeight;const wH=window.innerHeight||0;height=Math.max(cH,wH)}function updateScroll(){ticking=false;const targetFromTop=getOffsetHeight();elements=elements.filter((el=>{const{top:top,bottom:bottom,height:height}=el.getBoundingClientRect();const entered=top<targetFromTop;const exited=bottom<targetFromTop;if(entered&&!el.__ev_entered){enter(el);el.__ev_progress=0;progress(el,el.__ev_progress);if(once)return false}else if(!entered&&el.__ev_entered){el.__ev_progress=0;progress(el,el.__ev_progress);exit(el)}if(entered&&!exited){const delta=(targetFromTop-top)/height;el.__ev_progress=Math.min(1,Math.max(0,delta));progress(el,el.__ev_progress)}if(entered&&exited&&el.__ev_progress!==1){el.__ev_progress=1;progress(el,el.__ev_progress)}el.__ev_entered=entered;return true}));if(!elements.length){window.removeEventListener(\"scroll\",onScroll,true);window.removeEventListener(\"resize\",onResize,true);window.removeEventListener(\"load\",onLoad,true)}}function onScroll(){if(!ticking){ticking=true;raf(updateScroll)}}function onResize(){updateHeight();updateScroll()}function onLoad(){updateHeight();updateScroll()}function selectionToArray(selection){const len=selection.length;const result=[];for(let i=0;i<len;i+=1){result.push(selection[i])}return result}function selectAll(selector,parent=document){if(typeof selector===\"string\"){return selectionToArray(parent.querySelectorAll(selector))}else if(selector instanceof NodeList){return selectionToArray(selector)}else if(selector instanceof Array){return selector}}function setupElements(){elements=selectAll(selector)}function setupEvents(){window.addEventListener(\"resize\",onResize,true);window.addEventListener(\"scroll\",onScroll,true);window.addEventListener(\"load\",onLoad,true);onResize()}function init(){if(!selector){console.error(\"must pass selector\");return false}setupElements();if(!elements||!elements.length){console.error(\"no els found\");return false}setupRaf();setupEvents();updateScroll()}init()};return lib}));</script>"}
executeScriptOnCanvas={true}
clientOnly={true}
className={`w-html-embed`} />
<HtmlEmbed
code={"<style>\n:root {\n  --ani-duration: var(--duration-default, .2s);\n  --ani-delay: 0s;\n  --ani-slide-offset: 20%;\n  --ani-zoom-in-scale: 1;\n  --ani-zoom-out-scale: .85;\n  --ani-flip-rotate: 30deg;\n  --ani-easing: var(--easing-default, ease);\n  --ani-fill-mode: forwards;\n}\n[data-ani]:not([data-ani-children]),[data-ani-children]:not([data-ani-progress])>*{animation-duration:var(--ani-duration);animation-delay:var(--ani-delay);animation-timing-function:var(--ani-easing);animation-fill-mode:var(--ani-fill-mode);opacity:0}[data-ani-progress]:not([data-ani-children]),[data-ani-children]:not([data-ani])>*{transition-property:opacity,transform;transition-duration:var(--ani-duration);transition-timing-function:var(--ani-easing);opacity:0}\n@keyframes fadeIn{from{opacity:0}\nto{opacity:1}}\n@keyframes fadeOut{from{opacity:1}\nto{opacity:0}}[data-ani-children][data-ani='fade']>.in,[data-ani='fade']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:fadeIn}[data-ani-children][data-ani='fade']>.out,[data-ani='fade']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:fadeOut}\n@keyframes slideIn{from{opacity:0;translate:var(--ani-slide-transform)}\nto{opacity:1;translate:none}}\n@keyframes slideOut{from{opacity:1;translate:none}\nto{opacity:0;translate:var(--ani-slide-transform)}}[data-ani-children][data-ani|='slide']>.in,[data-ani|='slide']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:slideIn}[data-ani-children][data-ani|='slide']>.out,[data-ani|='slide']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:slideOut}[data-ani='slide-up']{--ani-slide-transform:0 var(--ani-slide-offset)}[data-ani='slide-down']{--ani-slide-transform:0 calc(-1*var(--ani-slide-offset))}[data-ani='slide-left']{--ani-slide-transform:var(--ani-slide-offset)}[data-ani='slide-right']{--ani-slide-transform:calc(-1*var(--ani-slide-offset))}\n@keyframes zoomIn{from{opacity:0;scale:var(--ani-zoom-out-scale)}\nto{opacity:1;scale:1}}\n@keyframes zoomOut{from{opacity:1;scale:1}\nto{opacity:0;scale:var(--ani-zoom-in-scale)}}[data-ani-children][data-ani='zoom']>.in,[data-ani|='zoom']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:zoomIn}[data-ani-children][data-ani='zoom']>.out,[data-ani|='zoom']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:zoomOut}[data-ani-children][data-ani-progress='zoom']>*,[data-ani-progress='zoom']:not([data-ani-children]){transform:scale(var(--ani-zoom-out-scale))}\n@keyframes flipInY{from{rotate:y var(--ani-flip-rotate);perspective:2000px;opacity:0}\nto{rotate:y 0;opacity:1}}\n@keyframes flipOutY{from{rotate:y 0;opacity:1}\nto{perspective:2000px;rotate:y var(--ani-flip-rotate);opacity:0}}\n@keyframes flipInX{from{perspective:2000px;rotate:x var(--ani-flip-rotate);opacity:0}\nto{rotate:x 0;opacity:1}}\n@keyframes flipOutX{from{rotate:x 0;opacity:1}\nto{perspective:2000px;rotate:x var(--ani-flip-rotate);opacity:0}}[data-ani-children][data-ani='flip-y']>.in,[data-ani='flip-y']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:flipInY}[data-ani-children][data-ani='flip-x']>.in,[data-ani='flip-x']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:flipInX}[data-ani-children][data-ani='flip-y']>.out,[data-ani='flip-y']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:flipOutY}[data-ani-children][data-ani='flip-x']>.out,[data-ani='flip-x']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:flipOutX}\n@keyframes expandDown{from{height:0}\nto{height:var(--newHeight)}}\n@keyframes expandUp{from{height:var(--newHeight)}\nto{height:0}}[data-ani='expand'],[data-ani='expand'][data-state='open'],[data-ani='expand'].in{--newHeight:var(--custom-height,var(--radix-accordion-content-height,var(--radix-collapsible-content-height,100%)));overflow:hidden;opacity:1}[data-ani-children][data-ani='expand']>.in,[data-ani='expand']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation:expandDown var(--ani-duration)var(--ani-easing)}[data-ani-children][data-ani='expand']>.out,[data-ani='expand']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation:expandUp var(--ani-duration)var(--ani-easing)}\n@media(prefers-reduced-motion:reduce){[data-ani]:not([data-ani-children]),[data-ani-progress]:not([data-ani-children]),[data-ani-children]>*{opacity:1;transform:none;animation:none;rotate:none;scale:none;translate:none}}\n</style>"}
className={`w-html-embed`} />
<HtmlEmbed
code={"<script type=\"module\">\nconst config = {\n\tintersectionOffset: 0.2,\n\tintersectionOnce: true,\n\tprogressOffset: 0,\n\tprogressOnce: false,\n};\nfunction e({trigger:e,selector:r,offset:n,once:s}){const a=\"progress\"===e;return enterView({selector:r,enter:e=>!a&&t(e,\"in\",\"out\"),exit:e=>!a&&t(e,\"out\",\"in\"),progress:(e,t)=>a&&function(e,t){e.style.opacity=t,e.style.transform=function(e,t){const r=e.parentElement,n=r&&r.hasAttribute(\"data-ani-progress\")?r.getAttribute(\"data-ani-progress\"):e.getAttribute(\"data-ani-progress\"),s=parseFloat(getComputedStyle(e).getPropertyValue(\"--ani-slide-offset\"))||0,a=parseFloat(getComputedStyle(e).getPropertyValue(\"--ani-flip-rotate\"))||0,o=1-(1-t)*(1-parseFloat(getComputedStyle(e).getPropertyValue(\"--ani-zoom-out-scale\"))||1);switch(n){case\"slide-up\":return`translateY(${(1-t)*s}px)`;case\"slide-down\":return`translateY(-${(1-t)*s}px)`;case\"slide-left\":return`translateX(${(1-t)*s}px)`;case\"slide-right\":return`translateX(-${(1-t)*s}px)`;case\"flip-x\":return`rotateX(${(1-t)*a}deg)`;case\"flip-y\":return`rotateY(${(1-t)*a}deg)`;case\"zoom\":return`scale(${o})`;default:return\"none\"}}(e,t)}(e,t),offset:n,once:s})}function t(e,t,r){e.classList.add(t),e.classList.remove(r)}function r(e,t){const r=`[${e}]${t?'[data-ani-children=\"true\"] > *':':not([data-ani-children=\"true\"])'}`;return Array.from(document.querySelectorAll(r))}const n=[...r(\"data-ani\"),...r(\"data-ani\",!0)],s=[...r(\"data-ani-progress\"),...r(\"data-ani-progress\",!0)];n.length&&e({trigger:\"intersection\",selector:n,offset:config.intersectionOffset,once:config.intersectionOnce}),s.length&&e({trigger:\"progress\",selector:s,offset:config.progressOffset,once:config.progressOnce});\n</script>"}
executeScriptOnCanvas={true}
clientOnly={true}
className={`w-html-embed`} />
</Fragment_1>
</Slot>
</Fragment_1>
</Slot>
</Box>
</Body>
}


      export { Page }
    
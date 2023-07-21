import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';


const Projects = () => (
  <Section nopadding id = "projects">
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id,image,title,description,tags,source,visit}) => (
        <BlogCard key = {id}>
          <Img src = {image}/>
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr/>
          </TitleContent>
          <CardInfo>{description} </CardInfo>
          <br></br>
          <div>
            <TitleContent>
              Stack
            </TitleContent>
            <TagList>
              {tags.map((tag,i) =>(
                <Tag key = {i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit}>
              View
            </ExternalLinks>
            {id !== 5 && id !== 6 && ( // Check if id is not equal to 5 or 6
              <ExternalLinks href={source}>
                Code
              </ExternalLinks>
            )}
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
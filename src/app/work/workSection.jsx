
import { Stack } from "@mui/material";
import '@/styles/work.module.css';
import ProjectsSection from "./projectsSection";
import ShaderSection from './shadersSection';
import PROJECT_DATA from '@/lib/data/projects';
import {SHADER_DATA} from '@/lib/data/shaders';

export default function WorkSection({ }) {

  return (
    <Stack className="section" id="work">
        <ProjectsSection projects={PROJECT_DATA}></ProjectsSection>
        <ShaderSection shaders={SHADER_DATA}></ShaderSection>
    </Stack>
  )
}
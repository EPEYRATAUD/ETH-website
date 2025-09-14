import { useState } from 'react';
import { Technology, ResourceConfig } from '../types';

export interface EnvironmentCreationState {
  step: number;
  name: string;
  selectedTechnologies: Technology[];
  resources: ResourceConfig;
  template?: string;
}

export const useEnvironmentCreator = () => {
  const [state, setState] = useState<EnvironmentCreationState>({
    step: 1,
    name: '',
    selectedTechnologies: [],
    resources: { cpu: 1, ram: 2, storage: 10 },
    template: undefined
  });

  const updateStep = (step: number) => {
    setState(prev => ({ ...prev, step }));
  };

  const updateName = (name: string) => {
    setState(prev => ({ ...prev, name }));
  };

  const toggleTechnology = (tech: Technology) => {
    setState(prev => {
      const existing = prev.selectedTechnologies.find(t => t.category === tech.category);
      let newTechnologies;
      
      if (existing) {
        // Replace existing technology in same category
        newTechnologies = prev.selectedTechnologies.map(t => 
          t.category === tech.category ? tech : t
        );
      } else {
        // Add new technology
        newTechnologies = [...prev.selectedTechnologies, tech];
      }
      
      return { ...prev, selectedTechnologies: newTechnologies };
    });
  };

  const updateResources = (resources: Partial<ResourceConfig>) => {
    setState(prev => ({
      ...prev,
      resources: { ...prev.resources, ...resources }
    }));
  };

  const resetState = () => {
    setState({
      step: 1,
      name: '',
      selectedTechnologies: [],
      resources: { cpu: 1, ram: 2, storage: 10 },
      template: undefined
    });
  };

  const nextStep = () => {
    setState(prev => ({ ...prev, step: prev.step + 1 }));
  };

  const prevStep = () => {
    setState(prev => ({ ...prev, step: Math.max(1, prev.step - 1) }));
  };

  return {
    state,
    updateStep,
    updateName,
    toggleTechnology,
    updateResources,
    resetState,
    nextStep,
    prevStep
  };
};
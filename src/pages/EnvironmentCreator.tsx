import React, { useState } from 'react';
import { useEnvironmentCreator } from '../hooks/useEnvironmentCreator';
import { getTechnologiesByCategory } from '../data/technologies';
import { environmentTemplates } from '../data/templates';
import TechnologyCard from '../components/TechnologyCard';
import ResourceSlider from '../components/ResourceSlider';
import SuccessModal from '../components/SuccessModal';
import { ChevronLeft, ChevronRight, Rocket, BookTemplate as Template, Cpu, HardDrive, MemoryStick } from 'lucide-react';

const EnvironmentCreator: React.FC = () => {
  const { state, toggleTechnology, updateResources, updateName, nextStep, prevStep, resetState } = useEnvironmentCreator();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const steps = [
    'Nom de l\'environnement',
    'Sélection de modèle', 
    'Pile technologique',
    'Configuration des ressources',
    'Révision et déploiement'
  ];

  const handleDeploy = () => {
    setShowSuccessModal(true);
  };

  const handleSuccessClose = () => {
    setShowSuccessModal(false);
    resetState();
  };

  const renderStep = () => {
    switch (state.step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2">Nommez votre environnement</h2>
              <p className="text-gray-400">Choisissez un nom unique pour votre environnement Kubernetes</p>
            </div>
            
            <div className="max-w-md mx-auto">
              <input
                type="text"
                value={state.name}
                onChange={(e) => updateName(e.target.value)}
                placeholder="mon-super-projet"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2">Choisissez un modèle</h2>
              <p className="text-gray-400">Commencez avec une pile préconfigurée ou créez sur mesure</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-xl p-6 border-2 border-dashed border-gray-700 hover:border-cyan-400 transition-colors cursor-pointer">
                <div className="text-center">
                  <Rocket className="h-12 w-12 text-cyan-400 mx-auto mb-3" />
                  <h3 className="font-semibold text-white mb-2">Pile personnalisée</h3>
                  <p className="text-sm text-gray-400">Construisez votre environnement à partir de zéro</p>
                </div>
              </div>

              {environmentTemplates.map(template => (
                <div key={template.id} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors cursor-pointer">
                  <div className="flex items-start space-x-3 mb-3">
                    <Template className="h-6 w-6 text-purple-400 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">{template.name}</h3>
                      <p className="text-sm text-gray-400 mt-1">{template.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {template.stack.slice(0, 3).map(tech => (
                      <span key={tech.id} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2">Sélectionnez votre pile technologique</h2>
              <p className="text-gray-400">Choisissez les technologies pour votre environnement</p>
            </div>

            {(['language', 'loadBalancer', 'webServer', 'database'] as const).map(category => {
              const techs = getTechnologiesByCategory(category);
              const categoryLabels = {
                language: 'Langage de développement',
                loadBalancer: 'Répartiteur de charge',
                webServer: 'Serveur web',
                database: 'Base de données'
              };

              return (
                <div key={category} className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">{categoryLabels[category]}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {techs.map(tech => (
                      <TechnologyCard
                        key={tech.id}
                        technology={tech}
                        isSelected={state.selectedTechnologies.some(t => t.id === tech.id)}
                        onToggle={() => toggleTechnology(tech)}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        );

      case 4:
        return (
          <div className="space-y-8">
            <div className="text-center">
             <h2 className="text-2xl font-bold text-white mb-2">Configurez les ressources</h2>
             <p className="text-gray-400">Allouez les ressources informatiques pour votre environnement</p>
            </div>

            <div className="max-w-2xl mx-auto space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center space-x-3 mb-4">
                    <Cpu className="h-6 w-6 text-cyan-400" />
                    <span className="font-semibold text-white">Cœurs CPU</span>
                  </div>
                  <ResourceSlider
                    label=""
                    value={state.resources.cpu}
                    min={1}
                    max={8}
                    step={1}
                    unit="cœurs"
                    color="cyan"
                    onChange={(value) => updateResources({ cpu: value })}
                  />
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center space-x-3 mb-4">
                    <MemoryStick className="h-6 w-6 text-purple-400" />
                    <span className="font-semibold text-white">Mémoire</span>
                  </div>
                  <ResourceSlider
                    label=""
                    value={state.resources.ram}
                    min={1}
                    max={16}
                    step={1}
                    unit="GB"
                    color="purple"
                    onChange={(value) => updateResources({ ram: value })}
                  />
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center space-x-3 mb-4">
                    <HardDrive className="h-6 w-6 text-green-400" />
                    <span className="font-semibold text-white">Stockage</span>
                  </div>
                  <ResourceSlider
                    label=""
                    value={state.resources.storage}
                    min={5}
                    max={100}
                    step={5}
                    unit="GB"
                    color="green"
                    onChange={(value) => updateResources({ storage: value })}
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2">Révision et déploiement</h2>
              <p className="text-gray-400">Confirmez la configuration de votre environnement</p>
            </div>

            <div className="max-w-2xl mx-auto space-y-6">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="font-semibold text-white mb-4">Détails de l'environnement</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Nom :</span>
                    <span className="text-white font-medium">{state.name}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="font-semibold text-white mb-4">Pile technologique</h3>
                <div className="grid grid-cols-2 gap-3">
                  {state.selectedTechnologies.map(tech => (
                    <div key={tech.id} className="flex items-center space-x-2">
                      <span className="text-xl">{tech.icon}</span>
                      <span className="text-gray-300">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="font-semibold text-white mb-4">Allocation des ressources</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">{state.resources.cpu}</div>
                    <div className="text-sm text-gray-400">Cœurs CPU</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">{state.resources.ram} GB</div>
                    <div className="text-sm text-gray-400">Mémoire</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{state.resources.storage} GB</div>
                    <div className="text-sm text-gray-400">Stockage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-white">Créer un environnement</h1>
            <div className="text-sm text-gray-400">
              Étape {state.step} sur {steps.length}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center space-x-2 mb-6">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className={`
                  flex-1 h-2 rounded-full transition-colors
                  ${index + 1 <= state.step ? 'bg-gradient-to-r from-cyan-400 to-blue-500' : 'bg-gray-700'}
                `} />
                {index < steps.length - 1 && (
                  <div className={`
                    w-3 h-3 rounded-full transition-colors
                    ${index + 1 < state.step ? 'bg-cyan-400' : 'bg-gray-700'}
                  `} />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-lg text-gray-300">{steps[state.step - 1]}</h2>
          </div>
        </div>

        {/* Step Content */}
        <div className="mb-8">
          {renderStep()}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={prevStep}
            disabled={state.step === 1}
            className="flex items-center space-x-2 px-4 py-2 text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Précédent</span>
          </button>

          {state.step < steps.length ? (
            <button
              onClick={nextStep}
              disabled={state.step === 1 && !state.name.trim()}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <span>Suivant</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              onClick={handleDeploy}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              <Rocket className="h-4 w-4" />
              <span>Déployer l'environnement</span>
            </button>
          )}
        </div>
      </div>

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={handleSuccessClose}
        environmentName={state.name}
      />
    </div>
  );
};

export default EnvironmentCreator;
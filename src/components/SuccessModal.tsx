import React from 'react';
import { X, CheckCircle, ExternalLink, Book, Settings } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  environmentName: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose, environmentName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-2xl border border-gray-700 max-w-md w-full overflow-hidden">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-cyan-500/10 to-green-500/10 p-6 border-b border-gray-700">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <CheckCircle className="h-12 w-12 text-green-400" />
              <div className="absolute inset-0 bg-green-400 blur-lg opacity-30 rounded-full"></div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-1">Environnement créé !</h2>
              <p className="text-gray-300 text-sm">Votre demande d'environnement Kubernetes a été soumise avec succès</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <div className="text-sm text-gray-400 mb-1">Nom de l'environnement</div>
            <div className="font-semibold text-white">{environmentName}</div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-4 border border-blue-500/30">
            <h3 className="text-sm font-semibold text-blue-400 mb-2">⏱️ Délai de provisionnement</h3>
            <p className="text-sm text-gray-300">
              Votre environnement sera prêt dans environ <strong>3-5 minutes</strong>. 
              Vous recevrez une notification une fois le déploiement terminé.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-300">Prochaines étapes</h3>
            
            <a 
              href="#"
              className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
            >
              <Settings className="h-5 w-5 text-cyan-400" />
              <div className="flex-1">
                <div className="text-sm font-medium text-white">Accéder au tableau de bord</div>
                <div className="text-xs text-gray-400">Surveillez et gérez votre environnement</div>
              </div>
              <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-white" />
            </a>

            <a 
              href="#"
              className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
            >
              <Book className="h-5 w-5 text-purple-400" />
              <div className="flex-1">
                <div className="text-sm font-medium text-white">Voir la documentation</div>
                <div className="text-xs text-gray-400">Apprenez à déployer vos applications</div>
              </div>
              <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-white" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-800 px-6 py-4 border-t border-gray-700">
          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            Continuer vers le tableau de bord
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
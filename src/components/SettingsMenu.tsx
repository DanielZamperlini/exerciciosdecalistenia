import React, { useState } from 'react';
import { Settings, X, UserPlus, Trash2, User, ChevronRight } from 'lucide-react';

type UserProfile = {
  name: string;
  gender: 'male' | 'female';
};

type SettingsMenuProps = {
  currentProfile: UserProfile | null;
  onSwitchProfile: (profile: UserProfile) => void;
  onDeleteProfile: (profile: UserProfile) => void;
  onResetAll: () => void;
};

export function SettingsMenu({ currentProfile, onSwitchProfile, onDeleteProfile, onResetAll }: SettingsMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showNewProfileForm, setShowNewProfileForm] = useState(false);
  const [profiles, setProfiles] = useState<UserProfile[]>(() => {
    const saved = localStorage.getItem('userProfiles');
    return saved ? JSON.parse(saved) : currentProfile ? [currentProfile] : [];
  });
  const [newProfile, setNewProfile] = useState({ name: '', gender: 'male' as 'male' | 'female' });

  const saveProfiles = (updatedProfiles: UserProfile[]) => {
    localStorage.setItem('userProfiles', JSON.stringify(updatedProfiles));
    setProfiles(updatedProfiles);
  };

  const handleAddProfile = () => {
    if (newProfile.name.trim()) {
      const updatedProfiles = [...profiles, newProfile];
      saveProfiles(updatedProfiles);
      setNewProfile({ name: '', gender: 'male' });
      setShowNewProfileForm(false);
      onSwitchProfile(newProfile);
    }
  };

  const handleDeleteProfile = (profile: UserProfile) => {
    const updatedProfiles = profiles.filter(p => p.name !== profile.name);
    saveProfiles(updatedProfiles);
    if (currentProfile?.name === profile.name && updatedProfiles.length > 0) {
      onSwitchProfile(updatedProfiles[0]);
    }
    onDeleteProfile(profile);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-white/10 rounded-full transition-colors"
      >
        <Settings className="w-6 h-6 text-white" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-12 w-80 bg-white rounded-xl shadow-lg overflow-hidden z-50">
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="text-lg font-semibold text-gray-800">Configurações</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <div className="p-4 space-y-4">
            {/* Profiles List */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-gray-500">Perfis</h4>
              <div className="space-y-2">
                {profiles.map((profile) => (
                  <div
                    key={profile.name}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-3">
                      <User className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="font-medium text-gray-700">{profile.name}</p>
                        <p className="text-sm text-gray-500">
                          {profile.gender === 'male' ? 'Masculino' : 'Feminino'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {profiles.length > 1 && (
                        <button
                          onClick={() => handleDeleteProfile(profile)}
                          className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                        >
                          <Trash2 className="w-4 h-4 text-gray-500" />
                        </button>
                      )}
                      {currentProfile?.name !== profile.name && (
                        <button
                          onClick={() => onSwitchProfile(profile)}
                          className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                        >
                          <ChevronRight className="w-4 h-4 text-gray-500" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* New Profile Form */}
            {showNewProfileForm ? (
              <div className="space-y-3 border-t pt-3">
                <h4 className="text-sm font-medium text-gray-500">Novo Perfil</h4>
                <input
                  type="text"
                  value={newProfile.name}
                  onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
                  placeholder="Nome"
                  className="w-full px-3 text-black py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setNewProfile({ ...newProfile, gender: 'male' })}
                    className={`px-3 py-2 rounded-lg border ${
                      newProfile.gender === 'male'
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    Masculino
                  </button>
                  <button
                    onClick={() => setNewProfile({ ...newProfile, gender: 'female' })}
                    className={`px-3 py-2 rounded-lg border ${
                      newProfile.gender === 'female'
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    Feminino
                  </button>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowNewProfileForm(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleAddProfile}
                    disabled={!newProfile.name.trim()}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700"
                  >
                    Adicionar
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setShowNewProfileForm(true)}
                className="flex items-center gap-2 w-full px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <UserPlus className="w-5 h-5" />
                <span>Adicionar Perfil</span>
              </button>
            )}

            {/* Reset All Data */}
            <div className="border-t pt-3">
              <button
                onClick={() => {
                  if (window.confirm('Tem certeza que deseja apagar todos os dados? Esta ação não pode ser desfeita.')) {
                    onResetAll();
                    setIsOpen(false);
                  }
                }}
                className="flex items-center gap-2 w-full px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 className="w-5 h-5" />
                <span>Limpar Todos os Dados</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}